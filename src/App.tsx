import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroExhibition } from './components/HeroExhibition';
import { TimelineExhibition } from './components/TimelineExhibition';
import { CuratorialEssaySection } from './components/CuratorialEssaySection';
import { Footer } from './components/Footer';
import { ArtifactDetailModal } from './components/ArtifactDetailModal';
import { VisitModal } from './components/VisitModal';
import { SavedDossierDrawer } from './components/SavedDossierDrawer';
import type { ArtifactItem } from './data/exhibitionData';

const SAVED_IDS_KEY = 'btds_saved_artifact_ids';
const NOTES_KEY = 'btds_artifact_notes';

export default function App() {
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactItem | null>(null);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(SAVED_IDS_KEY);
      return raw ? JSON.parse(raw) : ['art-1842-hue', 'art-1934-lacquer'];
    } catch {
      return ['art-1842-hue', 'art-1934-lacquer'];
    }
  });

  const [notes, setNotes] = useState<Record<string, string>>(() => {
    try {
      const raw = localStorage.getItem(NOTES_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(SAVED_IDS_KEY, JSON.stringify(savedIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [savedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    } catch {
      // Ignore storage quota errors
    }
  }, [notes]);

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleUpdateNote = (id: string, note: string) => {
    setNotes((prev) => ({ ...prev, [id]: note }));
  };

  const handleExploreTimeline = () => {
    const el = document.getElementById('dong-thoi-gian');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#171614]">
      <Header onOpenVisitModal={() => setIsVisitModalOpen(true)} />

      <main className="flex-1">
        <HeroExhibition onExploreTimeline={handleExploreTimeline} />

        <TimelineExhibition
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onSelectArtifact={setSelectedArtifact}
          onOpenDossier={() => setIsDossierOpen(true)}
        />

        <CuratorialEssaySection />
      </main>

      <Footer onOpenVisitModal={() => setIsVisitModalOpen(true)} />

      <ArtifactDetailModal
        artifact={selectedArtifact}
        isSaved={selectedArtifact ? savedIds.includes(selectedArtifact.id) : false}
        onToggleSave={handleToggleSave}
        onSelectArtifact={setSelectedArtifact}
        onClose={() => setSelectedArtifact(null)}
      />

      <VisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />

      <SavedDossierDrawer
        isOpen={isDossierOpen}
        savedIds={savedIds}
        notes={notes}
        onUpdateNote={handleUpdateNote}
        onRemoveSaved={(id) => handleToggleSave(id)}
        onSelectArtifact={setSelectedArtifact}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
