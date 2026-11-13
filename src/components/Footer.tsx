import React from 'react';

interface FooterProps {
  onOpenVisitModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVisitModal }) => {
  return (
    <footer id="thong-tin" className="bg-[#F3EFE6] text-[#292524]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#D6CEBE]">
          <div className="md:col-span-5">
            <p className="font-serif text-xl font-semibold text-[#171614]">Bảo Tàng Di Sản</p>
            <p className="mt-3 text-sm text-[#57534E] leading-relaxed max-w-sm">
              Không gian lưu trữ và trưng bày chuyên đề về lịch sử kiến trúc, mỹ thuật tạo hình và thủ công truyền thống Việt Nam.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2 text-sm">
            <p className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
              Thông tin đón tiếp
            </p>
            <p className="pt-1 text-[#171614]">Số 14 Phố Tràng Tiền, Hoàn Kiếm, Hà Nội</p>
            <p className="text-[#57534E] tabular-nums">Thứ Ba – Chủ Nhật: 09:00 – 17:30</p>
            <p className="text-[#57534E]">Đóng cửa thứ Hai hàng tuần để bảo trì hiện vật</p>
          </div>

          <div className="md:col-span-3 space-y-2.5 text-sm">
            <p className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
              Liên kết chuyên đề
            </p>
            <ul className="space-y-2 pt-1">
              <li>
                <a href="#dong-thoi-gian" className="hover:text-[#1E3A8A] transition-colors">
                  Dòng thời gian hiện vật
                </a>
              </li>
              <li>
                <a href="#tieu-luan" className="hover:text-[#1E3A8A] transition-colors">
                  Tiểu luận giám tuyển
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenVisitModal}
                  className="text-[#1E3A8A] font-medium hover:underline underline-offset-4 cursor-pointer"
                >
                  Đặt lịch tham quan →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#78716C]">
          <p>© 2026 Bảo Tàng Di Sản. Lưu trữ chuyên đề Dòng Chảy Di Sản (1802–2026).</p>
          <p>Ban Giám Tuyển &amp; Nghiên Cứu Lưu Trữ</p>
        </div>
      </div>
    </footer>
  );
};
