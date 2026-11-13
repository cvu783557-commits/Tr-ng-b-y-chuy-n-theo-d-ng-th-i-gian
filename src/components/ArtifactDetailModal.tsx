import React, { useEffect, useState } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { ARTIFACTS, EXHIBITION_CHAPTERS, type ArtifactItem } from '../data/exhibitionData';
import { SafeExhibitImage } from './ArchivalPlate';

interface ArtifactDetailModalProps {
  artifact: ArtifactItem | null;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelectArtifact: (artifact: ArtifactItem) => void;
  onClose: () => void;
}

export const ArtifactDetailModal: React.FC<ArtifactDetailModalProps> = ({
  artifact,
  isSaved,
  onToggleSave,
  onSelectArtifact,
  onClose,
}) => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setZoomed(false);
  }, [artifact?.id]);

  useEffect(() => {
    if (!artifact) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artifact, onClose]);

  if (!artifact) return null;

  const currentIndex = ARTIFACTS.findIndex((a) => a.id === artifact.id);
  const prevArtifact = currentIndex > 0 ? ARTIFACTS[currentIndex - 1] : null;
  const nextArtifact = currentIndex < ARTIFACTS.length - 1 ? ARTIFACTS[currentIndex + 1] : null;
  const chapter = EXHIBITION_CHAPTERS.find((c) => c.id === artifact.eraId);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="artifact-modal-title"
      className="fixed inset-0 z-50 bg-[#171614]/70 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl bg-[#FAF8F4] border border-[#D6CEBE] max-h-[92vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="sticky top-0 z-10 bg-[#FAF8F4] border-b border-[#DFD8CA] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-mono text-[#57534E] tabular-nums">
            <span className="text-[#1E3A8A] font-medium">{artifact.accessionNumber}</span>
            <span aria-hidden="true">/</span>
            <span>{chapter?.indexLabel}</span>
            <span aria-hidden="true">/</span>
            <span>{artifact.galleryRoom}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleSave(artifact.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border rounded-md transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-[#EEF2FF] border-[#1E3A8A] text-[#1E3A8A]'
                  : 'bg-white border-[#D6CEBE] text-[#171614] hover:bg-[#F3EFE6]'
              }`}
            >
              {isSaved ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  <span>Đã lưu</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Lưu hồ sơ</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng hồ sơ hiện vật"
              className="p-2 text-[#57534E] hover:text-[#171614] hover:bg-[#EFECE4] rounded-md transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Gallery Backdrop & Artwork Viewer */}
        <div className="bg-[#EFECE4] border-b border-[#DFD8CA] p-6 md:p-10">
          <div className="max-w-3xl mx-auto">
            <div
              className={`relative border border-[#D6CEBE] bg-[#FAF8F4] overflow-hidden transition-transform duration-300 ${
                zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setZoomed((z) => !z)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <SafeExhibitImage
                  src={artifact.imageUrl}
                  alt={artifact.title}
                  title={artifact.title}
                  plateType={artifact.plateType}
                  plateCode={artifact.plateCode}
                  imgClassName={`transition-transform duration-300 ${
                    zoomed ? 'scale-125' : 'scale-100'
                  }`}
                />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="text-xs font-serif italic text-[#57534E]">
                {artifact.figureCaption}
              </p>
              <button
                type="button"
                onClick={() => setZoomed((z) => !z)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1E3A8A] hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
              >
                {zoomed ? (
                  <>
                    <ZoomOut className="w-3.5 h-3.5" />
                    <span>Thu gọn khung hình</span>
                  </>
                ) : (
                  <>
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Phóng đại chi tiết</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Accession Metadata & Curatorial Reading */}
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Accession Metadata Grid (dl) */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-widest text-[#78716C]">
              Thông tin kiểm kê hiện vật
            </p>
            <dl className="mt-4 divide-y divide-[#DFD8CA] border-t border-b border-[#DFD8CA] text-sm">
              <div className="py-3 grid grid-cols-3 gap-2">
                <dt className="text-xs uppercase tracking-wider text-[#78716C]">Mã lưu trữ</dt>
                <dd className="col-span-2 font-mono text-xs text-[#171614] tabular-nums">
                  {artifact.accessionNumber}
                </dd>
              </div>
              <div className="py-3 grid grid-cols-3 gap-2">
                <dt className="text-xs uppercase tracking-wider text-[#78716C]">Tác giả</dt>
                <dd className="col-span-2 text-[#171614]">{artifact.maker}</dd>
              </div>
              <div className="py-3 grid grid-cols-3 gap-2">
                <dt className="text-xs uppercase tracking-wider text-[#78716C]">Niên đại</dt>
                <dd className="col-span-2 text-[#171614] tabular-nums">{artifact.yearDisplay}</dd>
              </div>
              <div className="py-3 grid grid-cols-3 gap-2">
                <dt className="text-xs uppercase tracking-wider text-[#78716C]">Chất liệu</dt>
                <dd className="col-span-2 text-[#171614]">{artifact.medium}</dd>
              </div>
              <div className="py-3 grid grid-cols-3 gap-2">
                <dt className="text-xs uppercase tracking-wider text-[#78716C]">Kích thước</dt>
                <dd className="col-span-2 text-[#171614] tabular-nums">{artifact.dimensions}</dd>
              </div>
              <div className="py-3 grid grid-cols-3 gap-2">
                <dt className="text-xs uppercase tracking-wider text-[#78716C]">Xuất xứ</dt>
                <dd className="col-span-2 text-[#171614]">{artifact.origin}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-widest text-[#78716C]">
                Lịch sử sở hữu &amp; Bảo quản (Provenance)
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-[#44403C] leading-relaxed">
                {artifact.provenance.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#1E3A8A] font-mono">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Curatorial Essay with Drop Cap & Margin Callout */}
          <div className="lg:col-span-7">
            <p className="text-xs text-[#57534E]">
              {artifact.discipline} · {chapter?.title}
            </p>
            <h2
              id="artifact-modal-title"
              className="mt-2 font-serif text-3xl font-semibold text-[#171614] leading-tight [text-wrap:balance]"
            >
              {artifact.title}
            </h2>

            <div className="mt-6 space-y-4 text-base text-[#292524] leading-[1.75] max-w-prose">
              {artifact.curatorialEssay.map((para, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#171614]'
                      : ''
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Subtle top/bottom hairline note (no thick left border) */}
            <aside className="mt-8 py-4 border-t border-b border-[#DFD8CA]">
              <p className="text-xs font-mono uppercase tracking-wider text-[#1E3A8A]">
                {artifact.marginNote.reference}
              </p>
              <p className="mt-1.5 text-sm text-[#44403C] leading-relaxed">
                {artifact.marginNote.text}
              </p>
            </aside>
          </div>
        </div>

        {/* Sequential Exhibition Tour Footer */}
        <div className="border-t border-[#DFD8CA] bg-[#F3EFE6] px-6 py-4 flex items-center justify-between gap-4">
          {prevArtifact ? (
            <button
              type="button"
              onClick={() => onSelectArtifact(prevArtifact)}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#171614] hover:text-[#1E3A8A] transition-colors cursor-pointer max-w-[45%]"
            >
              <ChevronLeft className="w-4 h-4 shrink-0" />
              <span className="truncate">Trước: {prevArtifact.title}</span>
            </button>
          ) : (
            <span className="text-xs text-[#78716C]">Đầu dòng thời gian</span>
          )}

          {nextArtifact ? (
            <button
              type="button"
              onClick={() => onSelectArtifact(nextArtifact)}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#171614] hover:text-[#1E3A8A] transition-colors cursor-pointer max-w-[45%]"
            >
              <span className="truncate">Tiếp: {nextArtifact.title}</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
          ) : (
            <span className="text-xs text-[#78716C]">Cuối dòng thời gian</span>
          )}
        </div>
      </div>
    </div>
  );
};
