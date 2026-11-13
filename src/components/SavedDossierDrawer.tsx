import React, { useEffect, useState } from 'react';
import { X, Trash2, Copy, Check, ArrowRight } from 'lucide-react';
import { ARTIFACTS, type ArtifactItem } from '../data/exhibitionData';

interface SavedDossierDrawerProps {
  isOpen: boolean;
  savedIds: string[];
  notes: Record<string, string>;
  onUpdateNote: (id: string, note: string) => void;
  onRemoveSaved: (id: string) => void;
  onSelectArtifact: (artifact: ArtifactItem) => void;
  onClose: () => void;
}

export const SavedDossierDrawer: React.FC<SavedDossierDrawerProps> = ({
  isOpen,
  savedIds,
  notes,
  onUpdateNote,
  onRemoveSaved,
  onSelectArtifact,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const savedArtifacts = ARTIFACTS.filter((a) => savedIds.includes(a.id)).sort(
    (a, b) => a.year - b.year
  );

  const handleCopyList = async () => {
    const text = savedArtifacts
      .map(
        (item) =>
          `${item.yearDisplay} | ${item.accessionNumber} — ${item.title}${
            notes[item.id] ? `\nGhi chú: ${notes[item.id]}` : ''
          }`
      )
      .join('\n\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback ignored if blocked by browser policy
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-drawer-title"
      className="fixed inset-0 z-50 bg-[#171614]/50 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF8F4] border-l border-[#D6CEBE] h-full flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-[#DFD8CA] flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
              Tài liệu cá nhân
            </p>
            <h2
              id="dossier-drawer-title"
              className="mt-1 font-serif text-xl font-semibold text-[#171614] tabular-nums"
            >
              Hồ Sơ Tham Quan ({savedArtifacts.length})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng hồ sơ tham quan"
            className="p-2 text-[#57534E] hover:text-[#171614] hover:bg-[#EFECE4] rounded-md transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {savedArtifacts.length === 0 ? (
            <div className="py-12 text-center border border-[#DFD8CA] bg-[#F3EFE6] p-6">
              <p className="font-serif text-lg text-[#171614]">Chưa có hiện vật nào được lưu</p>
              <p className="mt-2 text-xs text-[#57534E] leading-relaxed">
                Nhấn “Lưu vào hồ sơ” trên bất kỳ hiện vật nào dọc theo dòng thời gian để tổng hợp danh mục nghiên cứu riêng của bạn.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {savedArtifacts.map((item) => (
                <div key={item.id} className="pb-6 border-b border-[#DFD8CA] last:border-b-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-mono text-[#1E3A8A] tabular-nums">
                        {item.yearDisplay} · {item.accessionNumber}
                      </p>
                      <h3 className="mt-1 font-serif text-base font-semibold text-[#171614]">
                        {item.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveSaved(item.id)}
                      aria-label={`Xóa ${item.title} khỏi hồ sơ`}
                      className="p-1.5 text-[#78716C] hover:text-[#9A3412] transition-colors cursor-pointer shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <textarea
                    value={notes[item.id] || ''}
                    onChange={(e) => onUpdateNote(item.id, e.target.value)}
                    placeholder="Thêm ghi chú nghiên cứu cho hiện vật này..."
                    rows={2}
                    className="mt-3 w-full px-3 py-2 text-xs bg-white border border-[#DFD8CA] rounded-md text-[#171614] placeholder:text-[#78716C] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A]"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onSelectArtifact(item);
                    }}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#1E3A8A] hover:underline underline-offset-4 cursor-pointer"
                  >
                    <span>Mở hồ sơ chi tiết</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {savedArtifacts.length > 0 && (
          <div className="px-6 py-4 border-t border-[#DFD8CA] bg-[#F3EFE6]">
            <button
              type="button"
              onClick={handleCopyList}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-medium bg-[#171614] text-[#FAF8F4] rounded-md hover:bg-[#292524] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Đã sao chép danh mục &amp; ghi chú</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép danh mục hồ sơ</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
