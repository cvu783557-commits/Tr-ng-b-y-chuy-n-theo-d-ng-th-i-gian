import React, { useEffect, useState } from 'react';
import { X, Check } from 'lucide-react';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = ['09:30', '11:00', '14:00', '15:30'];

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [visitDate, setVisitDate] = useState('2026-11-18');
  const [timeSlot, setTimeSlot] = useState('09:30');
  const [guests, setGuests] = useState('2');
  const [withGuide, setWithGuide] = useState(true);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    setSubmittedCode(`BTDS-2026-${randomSuffix}`);
  };

  const handleResetAndClose = () => {
    setSubmittedCode(null);
    setFullName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="visit-modal-title"
      className="fixed inset-0 z-50 bg-[#171614]/65 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#FAF8F4] border border-[#D6CEBE] p-6 md:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#DFD8CA]">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
              Nhà Trưng Bày Trung Tâm
            </p>
            <h2
              id="visit-modal-title"
              className="mt-1.5 font-serif text-2xl font-semibold text-[#171614]"
            >
              Đặt Lịch Tham Quan Chuyên Đề
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ đặt lịch"
            className="p-2 text-[#57534E] hover:text-[#171614] hover:bg-[#EFECE4] rounded-md transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submittedCode ? (
          <div className="py-8">
            <div className="w-10 h-10 bg-[#EEF2FF] text-[#1E3A8A] flex items-center justify-center rounded-md">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="mt-4 font-serif text-xl font-semibold text-[#171614]">
              Đã ghi nhận lịch tham quan
            </h3>
            <p className="mt-2 text-sm text-[#44403C] leading-relaxed">
              Vui lòng xuất trình mã xác nhận bên dưới tại quầy đón tiếp sảnh chính trước giờ tham quan 10 phút.
            </p>

            <dl className="mt-6 border-t border-b border-[#DFD8CA] divide-y divide-[#DFD8CA] text-sm">
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#78716C]">Mã đặt lịch</dt>
                <dd className="font-mono font-medium text-[#1E3A8A] tabular-nums">
                  {submittedCode}
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#78716C]">Khách tham quan</dt>
                <dd className="text-[#171614]">{fullName || 'Khách cá nhân'}</dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#78716C]">Ngày &amp; Giờ</dt>
                <dd className="text-[#171614] tabular-nums">
                  {visitDate} · {timeSlot}
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#78716C]">Số lượng &amp; Thuyết minh</dt>
                <dd className="text-[#171614] tabular-nums">
                  {guests} người · {withGuide ? 'Có thuyết minh chuyên đề' : 'Tự tham quan'}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="mt-6 w-full py-2.5 text-sm font-medium bg-[#171614] text-[#FAF8F4] rounded-md hover:bg-[#292524] transition-colors cursor-pointer"
            >
              Hoàn tất
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="visitor-name" className="block text-xs font-medium text-[#292524]">
                Họ và tên khách tham quan
              </label>
              <input
                id="visitor-name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nguyễn Minh Anh"
                className="mt-1.5 w-full px-3.5 py-2 text-sm bg-white border border-[#D6CEBE] rounded-md text-[#171614] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              />
            </div>

            <div>
              <label htmlFor="visitor-email" className="block text-xs font-medium text-[#292524]">
                Email nhận thẻ vào cửa
              </label>
              <input
                id="visitor-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="minhanh@example.com"
                className="mt-1.5 w-full px-3.5 py-2 text-sm bg-white border border-[#D6CEBE] rounded-md text-[#171614] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="visit-date" className="block text-xs font-medium text-[#292524]">
                  Ngày dự kiến
                </label>
                <input
                  id="visit-date"
                  type="date"
                  required
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="mt-1.5 w-full px-3.5 py-2 text-sm bg-white border border-[#D6CEBE] rounded-md text-[#171614] tabular-nums focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                />
              </div>

              <div>
                <label htmlFor="visit-guests" className="block text-xs font-medium text-[#292524]">
                  Số khách
                </label>
                <select
                  id="visit-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="mt-1.5 w-full px-3.5 py-2 text-sm bg-white border border-[#D6CEBE] rounded-md text-[#171614] tabular-nums focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                >
                  <option value="1">1 khách</option>
                  <option value="2">2 khách</option>
                  <option value="4">Nhóm 3–4 khách</option>
                  <option value="8">Đoàn nghiên cứu (8 khách)</option>
                </select>
              </div>
            </div>

            <div>
              <span className="block text-xs font-medium text-[#292524]">Khung giờ đón tiếp</span>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTimeSlot(slot)}
                    className={`py-2 text-xs font-mono rounded-md border transition-colors tabular-nums cursor-pointer ${
                      timeSlot === slot
                        ? 'bg-[#1E3A8A] border-[#1E3A8A] text-white'
                        : 'bg-white border-[#D6CEBE] text-[#292524] hover:bg-[#F3EFE6]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-start gap-3 pt-1 cursor-pointer">
              <input
                type="checkbox"
                checked={withGuide}
                onChange={(e) => setWithGuide(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-[#1E3A8A]"
              />
              <span className="text-xs text-[#44403C] leading-relaxed">
                Đăng ký nghe thuyết minh chuyên đề cùng nghiên cứu viên (miễn phí, thời lượng 45 phút)
              </span>
            </label>

            <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#DFD8CA]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#57534E] hover:text-[#171614] cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-medium bg-[#1E3A8A] text-white rounded-md hover:bg-[#172D6B] transition-colors cursor-pointer"
              >
                Xác nhận đặt lịch
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
