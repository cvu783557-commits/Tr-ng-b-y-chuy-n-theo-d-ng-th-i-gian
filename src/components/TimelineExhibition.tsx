import React, { useMemo, useState } from 'react';
import {
  Bookmark,
  BookmarkCheck,
  Search,
  X,
  ArrowUpDown,
  LayoutGrid,
  GitCommitHorizontal,
  ArrowRight,
  FolderOpen,
} from 'lucide-react';
import {
  ARTIFACTS,
  DISCIPLINES,
  EXHIBITION_CHAPTERS,
  type ArtifactItem,
  type Discipline,
  type EraId,
} from '../data/exhibitionData';
import { SafeExhibitImage } from './ArchivalPlate';

interface TimelineExhibitionProps {
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectArtifact: (artifact: ArtifactItem) => void;
  onOpenDossier: () => void;
}

type ViewMode = 'timeline' | 'catalogue';
type SortOrder = 'asc' | 'desc';

export const TimelineExhibition: React.FC<TimelineExhibitionProps> = ({
  savedIds,
  onToggleSave,
  onSelectArtifact,
  onOpenDossier,
}) => {
  const [selectedEra, setSelectedEra] = useState<EraId | 'all'>('all');
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline>('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [viewMode, setViewMode] = useState<ViewMode>('timeline');

  const filteredArtifacts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ARTIFACTS.filter((item) => {
      if (selectedEra !== 'all' && item.eraId !== selectedEra) return false;
      if (selectedDiscipline !== 'Tất cả' && item.discipline !== selectedDiscipline) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.maker.toLowerCase().includes(q) ||
        item.medium.toLowerCase().includes(q) ||
        item.accessionNumber.toLowerCase().includes(q) ||
        item.yearDisplay.toLowerCase().includes(q)
      );
    }).sort((a, b) => (sortOrder === 'asc' ? a.year - b.year : b.year - a.year));
  }, [selectedEra, selectedDiscipline, searchQuery, sortOrder]);

  const orderedChapters = useMemo(() => {
    const base =
      selectedEra === 'all'
        ? EXHIBITION_CHAPTERS
        : EXHIBITION_CHAPTERS.filter((c) => c.id === selectedEra);
    return sortOrder === 'asc' ? base : [...base].reverse();
  }, [selectedEra, sortOrder]);

  const handleResetFilters = () => {
    setSelectedEra('all');
    setSelectedDiscipline('Tất cả');
    setSearchQuery('');
  };

  const handleJumpToChapter = (eraId: EraId | 'all') => {
    setSelectedEra(eraId);
    if (eraId !== 'all' && viewMode === 'timeline') {
      const el = document.getElementById(`chapter-${eraId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const activeEraIndex =
    selectedEra === 'all'
      ? 0
      : EXHIBITION_CHAPTERS.findIndex((c) => c.id === selectedEra) + 1;
  const progressPercent =
    selectedEra === 'all' ? 100 : Math.round((activeEraIndex / EXHIBITION_CHAPTERS.length) * 100);

  return (
    <section id="dong-thoi-gian" className="bg-[#FAF8F4] border-b border-[#DFD8CA]">
      {/* Sticky Minimal Chapter Rail & Progress Bar (compact height for <=15% mobile sticky cap) */}
      <div className="sticky top-0 z-20 bg-[#FAF8F4]/95 backdrop-blur-sm border-b border-[#DFD8CA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between gap-4 py-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => handleJumpToChapter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedEra === 'all'
                    ? 'bg-[#171614] text-[#FAF8F4]'
                    : 'text-[#57534E] hover:text-[#171614] hover:bg-[#EFECE4]'
                }`}
              >
                Toàn bộ dòng thời gian
              </button>
              {EXHIBITION_CHAPTERS.map((chapter) => {
                const isActive = selectedEra === chapter.id;
                return (
                  <button
                    key={chapter.id}
                    type="button"
                    onClick={() => handleJumpToChapter(chapter.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                      isActive
                        ? 'bg-[#1E3A8A] text-white'
                        : 'text-[#57534E] hover:text-[#171614] hover:bg-[#EFECE4]'
                    }`}
                  >
                    {chapter.indexLabel.replace('Phần ', '')}. {chapter.shortPeriod}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={onOpenDossier}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium border border-[#D6CEBE] bg-[#F3EFE6] text-[#171614] rounded-md hover:bg-[#EBE5D8] transition-colors whitespace-nowrap shrink-0 cursor-pointer tabular-nums"
            >
              <FolderOpen className="w-3.5 h-3.5 text-[#1E3A8A]" strokeWidth={1.75} />
              <span>Hồ sơ đã lưu ({savedIds.length})</span>
            </button>
          </div>
        </div>
        {/* Thin chronological progress bar */}
        <div className="w-full h-[2px] bg-[#EBE5D8]">
          <div
            className="h-full bg-[#1E3A8A] transition-transform duration-300 origin-left"
            style={{ transform: `scaleX(${progressPercent / 100})` }}
          />
        </div>
      </div>

      {/* Exhibition Workspace Controls */}
      <div id="hien-vat" className="max-w-[1280px] mx-auto px-6 md:px-10 pt-12 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#DFD8CA]">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#78716C]">
              Trình tự trưng bày chuyên đề
            </p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl font-semibold text-[#171614] [text-wrap:balance]">
              Hành Trình Hiện Vật Theo Dòng Thời Gian
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search input */}
            <div className="relative flex-1 sm:flex-initial min-w-[220px]">
              <Search
                className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                strokeWidth={1.75}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm tên, niên đại, mã ACC..."
                aria-label="Tìm kiếm hiện vật"
                className="w-full pl-9 pr-8 py-2 text-sm bg-white border border-[#D6CEBE] rounded-md text-[#171614] placeholder:text-[#78716C] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Xóa từ khóa tìm kiếm"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#78716C] hover:text-[#171614] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Chronological sort toggle */}
            <button
              type="button"
              onClick={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium bg-[#F3EFE6] border border-[#D6CEBE] text-[#171614] rounded-md hover:bg-[#EBE5D8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-[#57534E]" strokeWidth={1.75} />
              <span>{sortOrder === 'asc' ? 'Niên đại: Cũ → Mới' : 'Niên đại: Mới → Cũ'}</span>
            </button>

            {/* View mode segmented control */}
            <div className="inline-flex items-center p-1 bg-[#EFECE4] border border-[#DFD8CA] rounded-md">
              <button
                type="button"
                onClick={() => setViewMode('timeline')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === 'timeline'
                    ? 'bg-white text-[#171614] shadow-xs'
                    : 'text-[#57534E] hover:text-[#171614]'
                }`}
              >
                <GitCommitHorizontal className="w-3.5 h-3.5" strokeWidth={1.75} />
                <span>Dòng thời gian</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('catalogue')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === 'catalogue'
                    ? 'bg-white text-[#171614] shadow-xs'
                    : 'text-[#57534E] hover:text-[#171614]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" strokeWidth={1.75} />
                <span>Danh mục lưới</span>
              </button>
            </div>
          </div>
        </div>

        {/* Discipline Filter Tabs & Result Count */}
        <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DFD8CA]">
          <div className="flex flex-wrap items-center gap-1.5">
            {DISCIPLINES.map((discipline) => {
              const active = selectedDiscipline === discipline;
              return (
                <button
                  key={discipline}
                  type="button"
                  onClick={() => setSelectedDiscipline(discipline)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#1E3A8A] text-white'
                      : 'bg-transparent text-[#57534E] hover:bg-[#EFECE4] hover:text-[#171614]'
                  }`}
                >
                  {discipline}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-xs text-[#57534E] tabular-nums">
            <span>
              Hiển thị <strong className="text-[#171614]">{filteredArtifacts.length}</strong> /{' '}
              {ARTIFACTS.length} hiện vật
            </span>
            <button
              type="button"
              onClick={onOpenDossier}
              className="sm:hidden text-[#1E3A8A] font-medium underline underline-offset-4 cursor-pointer"
            >
              Hồ sơ ({savedIds.length})
            </button>
          </div>
        </div>
      </div>

      {/* Exhibition Body */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pb-20">
        {filteredArtifacts.length === 0 ? (
          <div className="my-12 py-16 px-6 border border-[#DFD8CA] bg-[#F3EFE6] text-center max-w-xl mx-auto">
            <p className="font-serif text-xl text-[#171614]">
              Không tìm thấy hiện vật phù hợp
            </p>
            <p className="mt-2 text-sm text-[#57534E]">
              Thử thay đổi từ khóa hoặc chọn lại thời kỳ và lĩnh vực trưng bày để xem toàn bộ danh mục.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 px-5 py-2.5 text-xs font-medium bg-[#171614] text-[#FAF8F4] rounded-md hover:bg-[#292524] transition-colors cursor-pointer"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : viewMode === 'timeline' ? (
          <div className="space-y-16 pt-6">
            {orderedChapters.map((chapter) => {
              const chapterItems = filteredArtifacts.filter((a) => a.eraId === chapter.id);
              if (chapterItems.length === 0) return null;

              return (
                <div
                  key={chapter.id}
                  id={`chapter-${chapter.id}`}
                  className="scroll-mt-20 pt-8 first:pt-2"
                >
                  {/* Chapter Editorial Header */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-[#DFD8CA]">
                    <div className="lg:col-span-4">
                      <p className="text-xs font-mono tracking-widest uppercase text-[#1E3A8A] tabular-nums">
                        {chapter.indexLabel} · {chapter.period}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl md:text-3xl font-semibold text-[#171614] [text-wrap:balance]">
                        {chapter.title}
                      </h3>
                      <p className="mt-1.5 text-xs uppercase tracking-wider text-[#78716C]">
                        {chapter.galleryRoom}
                      </p>
                    </div>
                    <div className="lg:col-span-8 flex flex-col justify-end">
                      <p className="text-sm font-medium text-[#292524]">{chapter.subtitle}</p>
                      <p className="mt-2 text-sm text-[#57534E] leading-relaxed max-w-2xl">
                        {chapter.thesis}
                      </p>
                    </div>
                  </div>

                  {/* Chronological Timeline Spine & Exhibit Entries */}
                  <div className="relative mt-10 pl-0 md:pl-8">
                    {/* Vertical archival hairline */}
                    <div
                      aria-hidden="true"
                      className="hidden md:block absolute left-3 top-2 bottom-2 w-px bg-[#D6CEBE]"
                    />

                    <div className="space-y-12">
                      {chapterItems.map((artifact) => {
                        const isSaved = savedIds.includes(artifact.id);
                        return (
                          <article
                            key={artifact.id}
                            className="relative md:pl-10 pb-12 border-b border-[#EBE5D8] last:border-b-0 last:pb-0"
                          >
                            {/* Timeline node marker */}
                            <div
                              aria-hidden="true"
                              className="hidden md:flex items-center justify-center absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-[#FAF8F4] border-2 border-[#1E3A8A]"
                            />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                              {/* Exhibit Visual Plate / Museum Photography */}
                              <div className="lg:col-span-5">
                                <button
                                  type="button"
                                  onClick={() => onSelectArtifact(artifact)}
                                  className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] cursor-pointer"
                                >
                                  <div className="aspect-[4/3] w-full bg-[#EFECE4] border border-[#DFD8CA] overflow-hidden">
                                    <SafeExhibitImage
                                      src={artifact.imageUrl}
                                      alt={artifact.title}
                                      title={artifact.title}
                                      plateType={artifact.plateType}
                                      plateCode={artifact.plateCode}
                                      imgClassName="transition-transform duration-300 group-hover:scale-[1.02]"
                                    />
                                  </div>
                                </button>
                                <p className="mt-2.5 text-xs font-serif italic text-[#57534E]">
                                  {artifact.figureCaption}
                                </p>
                              </div>

                              {/* Exhibit Curatorial Details */}
                              <div className="lg:col-span-7 flex flex-col justify-between">
                                <div>
                                  {/* Unboxed quiet metadata with typographic separators */}
                                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                                    <span className="font-mono font-medium text-[#1E3A8A] tabular-nums">
                                      {artifact.yearDisplay}
                                    </span>
                                    <span aria-hidden="true">·</span>
                                    <span>{artifact.discipline}</span>
                                    <span aria-hidden="true">·</span>
                                    <span className="font-mono tabular-nums">
                                      {artifact.accessionNumber}
                                    </span>
                                  </div>

                                  <h4 className="mt-2.5 font-serif text-2xl font-semibold text-[#171614] leading-snug [text-wrap:balance]">
                                    <button
                                      type="button"
                                      onClick={() => onSelectArtifact(artifact)}
                                      className="text-left hover:text-[#1E3A8A] transition-colors cursor-pointer"
                                    >
                                      {artifact.title}
                                    </button>
                                  </h4>

                                  <p className="mt-1.5 text-xs text-[#78716C]">
                                    {artifact.maker} · {artifact.origin}
                                  </p>

                                  <p className="mt-4 text-sm md:text-base text-[#292524] leading-relaxed max-w-prose">
                                    {artifact.summary}
                                  </p>

                                  <dl className="mt-5 pt-4 border-t border-[#EBE5D8] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                    <div>
                                      <dt className="uppercase tracking-wider text-[#78716C]">
                                        Chất liệu
                                      </dt>
                                      <dd className="mt-1 text-[#292524]">{artifact.medium}</dd>
                                    </div>
                                    <div>
                                      <dt className="uppercase tracking-wider text-[#78716C]">
                                        Kích thước
                                      </dt>
                                      <dd className="mt-1 text-[#292524] tabular-nums">
                                        {artifact.dimensions}
                                      </dd>
                                    </div>
                                  </dl>
                                </div>

                                <div className="mt-6 flex flex-wrap items-center gap-4">
                                  <button
                                    type="button"
                                    onClick={() => onSelectArtifact(artifact)}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-[#171614] text-[#FAF8F4] rounded-md hover:bg-[#292524] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                                  >
                                    <span>Xem hồ sơ hiện vật</span>
                                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() => onToggleSave(artifact.id)}
                                    className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium border rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                                      isSaved
                                        ? 'bg-[#EEF2FF] border-[#1E3A8A] text-[#1E3A8A]'
                                        : 'bg-white border-[#D6CEBE] text-[#292524] hover:bg-[#F3EFE6]'
                                    }`}
                                  >
                                    {isSaved ? (
                                      <>
                                        <BookmarkCheck className="w-3.5 h-3.5" strokeWidth={1.75} />
                                        <span>Đã lưu vào hồ sơ</span>
                                      </>
                                    ) : (
                                      <>
                                        <Bookmark className="w-3.5 h-3.5" strokeWidth={1.75} />
                                        <span>Lưu vào hồ sơ</span>
                                      </>
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Catalogue Grid Mode */
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtifacts.map((artifact) => {
              const isSaved = savedIds.includes(artifact.id);
              return (
                <article
                  key={artifact.id}
                  className="flex flex-col justify-between bg-white border border-[#DFD8CA] p-5"
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => onSelectArtifact(artifact)}
                      className="group block w-full text-left cursor-pointer"
                    >
                      <div className="aspect-[4/3] w-full bg-[#EFECE4] border border-[#EBE5D8] overflow-hidden">
                        <SafeExhibitImage
                          src={artifact.imageUrl}
                          alt={artifact.title}
                          title={artifact.title}
                          plateType={artifact.plateType}
                          plateCode={artifact.plateCode}
                          imgClassName="transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    </button>

                    <div className="mt-4 flex items-center gap-2 text-xs text-[#57534E]">
                      <span className="font-mono text-[#1E3A8A] font-medium tabular-nums">
                        {artifact.yearDisplay}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{artifact.discipline}</span>
                    </div>

                    <h4 className="mt-2 font-serif text-xl font-semibold text-[#171614] leading-snug">
                      <button
                        type="button"
                        onClick={() => onSelectArtifact(artifact)}
                        className="text-left hover:text-[#1E3A8A] transition-colors cursor-pointer"
                      >
                        {artifact.title}
                      </button>
                    </h4>

                    <p className="mt-2 text-xs font-mono text-[#78716C] tabular-nums">
                      {artifact.accessionNumber} · {artifact.galleryRoom}
                    </p>

                    <p className="mt-3 text-sm text-[#44403C] leading-relaxed line-clamp-3">
                      {artifact.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#EBE5D8] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectArtifact(artifact)}
                      className="text-xs font-medium text-[#1E3A8A] hover:underline underline-offset-4 cursor-pointer"
                    >
                      Chi tiết hồ sơ →
                    </button>

                    <button
                      type="button"
                      onClick={() => onToggleSave(artifact.id)}
                      aria-label={isSaved ? 'Bỏ lưu hiện vật' : 'Lưu hiện vật'}
                      className={`p-2 rounded-md border transition-colors cursor-pointer ${
                        isSaved
                          ? 'bg-[#EEF2FF] border-[#1E3A8A] text-[#1E3A8A]'
                          : 'bg-[#FAF8F4] border-[#DFD8CA] text-[#57534E] hover:text-[#171614]'
                      }`}
                    >
                      {isSaved ? (
                        <BookmarkCheck className="w-4 h-4" strokeWidth={1.75} />
                      ) : (
                        <Bookmark className="w-4 h-4" strokeWidth={1.75} />
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
