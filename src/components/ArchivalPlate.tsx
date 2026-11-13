import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import type { ArchivalPlateType } from '../data/exhibitionData';

interface SafeExhibitImageProps {
  src?: string;
  alt: string;
  title: string;
  plateType?: ArchivalPlateType;
  plateCode?: string;
  className?: string;
  imgClassName?: string;
}

export const ArchivalSvgPlate: React.FC<{
  type: ArchivalPlateType;
  code?: string;
  className?: string;
}> = ({ type, code, className = '' }) => {
  return (
    <div
      className={`relative w-full h-full bg-[#F3EFE6] border border-[#DFD8CA] flex flex-col justify-between p-5 select-none overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#57534E] uppercase border-b border-[#DFD8CA] pb-2">
        <span>{code || 'BẢN VẼ LƯU TRỮ'}</span>
        <span>BẢO TÀNG DI SẢN</span>
      </div>

      <div className="flex-1 flex items-center justify-center py-3">
        {type === 'truss-hue' && (
          <svg viewBox="0 0 360 220" className="w-full h-full max-h-48 text-[#292524]" fill="none">
            <line x1="20" y1="190" x2="340" y2="190" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            {/* Main columns */}
            <line x1="90" y1="190" x2="90" y2="75" stroke="currentColor" strokeWidth="3" />
            <line x1="270" y1="190" x2="270" y2="75" stroke="currentColor" strokeWidth="3" />
            <line x1="45" y1="190" x2="45" y2="115" stroke="currentColor" strokeWidth="2.2" />
            <line x1="315" y1="190" x2="315" y2="115" stroke="currentColor" strokeWidth="2.2" />
            {/* Tie beams */}
            <line x1="82" y1="95" x2="278" y2="95" stroke="currentColor" strokeWidth="2.8" />
            <line x1="115" y1="70" x2="245" y2="70" stroke="currentColor" strokeWidth="2.4" />
            <line x1="145" y1="48" x2="215" y2="48" stroke="currentColor" strokeWidth="2" />
            {/* King posts & struts */}
            <line x1="180" y1="25" x2="180" y2="95" stroke="#1E3A8A" strokeWidth="2" />
            <line x1="130" y1="70" x2="130" y2="95" stroke="currentColor" strokeWidth="2" />
            <line x1="230" y1="70" x2="230" y2="95" stroke="currentColor" strokeWidth="2" />
            {/* Roof rafters */}
            <path d="M22 125 L180 24 L338 125" stroke="currentColor" strokeWidth="2.5" />
            <path d="M22 125 Q35 128 45 115" stroke="currentColor" strokeWidth="1.5" />
            <path d="M338 125 Q325 128 315 115" stroke="currentColor" strokeWidth="1.5" />
            {/* Dimension annotations */}
            <line x1="90" y1="205" x2="270" y2="205" stroke="#1E3A8A" strokeWidth="1" />
            <circle cx="90" cy="205" r="2" fill="#1E3A8A" />
            <circle cx="270" cy="205" r="2" fill="#1E3A8A" />
            <text x="180" y="216" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontFamily="monospace">
              NHỊP GIAN CHÍNH · 3,60M
            </text>
          </svg>
        )}

        {type === 'facade-hanoi' && (
          <svg viewBox="0 0 360 220" className="w-full h-full max-h-48 text-[#292524]" fill="none">
            <rect x="75" y="45" width="210" height="150" stroke="currentColor" strokeWidth="2" />
            {/* Roof slope */}
            <path d="M62 45 L180 18 L298 45" stroke="currentColor" strokeWidth="2.2" />
            {/* Floor divider */}
            <line x1="75" y1="120" x2="285" y2="120" stroke="currentColor" strokeWidth="1.8" />
            {/* Second floor louvered windows */}
            {[95, 160, 225].map((x) => (
              <g key={x}>
                <rect x={x} y="62" width="38" height="48" stroke="currentColor" strokeWidth="1.5" />
                <line x1={x + 19} y1="62" x2={x + 19} y2="110" stroke="currentColor" strokeWidth="1" />
                {[70, 78, 86, 94, 102].map((y) => (
                  <line key={y} x1={x + 3} y1={y} x2={x + 35} y2={y} stroke="currentColor" strokeWidth="0.7" opacity="0.55" />
                ))}
              </g>
            ))}
            {/* Balcony railing */}
            <rect x="70" y="112" width="220" height="12" stroke="#1E3A8A" strokeWidth="1.2" />
            {/* Ground floor arched shopfront */}
            <path d="M95 195 V148 A19 19 0 0 1 133 148 V195" stroke="currentColor" strokeWidth="1.5" />
            <path d="M161 195 V148 A19 19 0 0 1 199 148 V195" stroke="currentColor" strokeWidth="1.5" />
            <path d="M227 195 V148 A19 19 0 0 1 265 148 V195" stroke="currentColor" strokeWidth="1.5" />
            <text x="180" y="213" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontFamily="monospace">
              MẶT TIỀN 4,20M · 3 NHỊP CỬA VÒM
            </text>
          </svg>
        )}

        {type === 'lacquer-grid' && (
          <svg viewBox="0 0 360 220" className="w-full h-full max-h-48 text-[#292524]" fill="none">
            {/* 6-panel folding screen */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={i}
                x={30 + i * 50}
                y="28"
                width="46"
                height="155"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            ))}
            {/* Golden ratio horizon & diagonal */}
            <line x1="25" y1="84" x2="335" y2="84" stroke="#1E3A8A" strokeWidth="1" strokeDasharray="4 3" />
            <path d="M35 160 C110 130, 210 145, 325 75" stroke="#1E3A8A" strokeWidth="1.6" />
            <path d="M80 175 C95 110, 115 70, 145 40" stroke="currentColor" strokeWidth="1.3" opacity="0.65" />
            <circle cx="245" cy="84" r="22" stroke="#1E3A8A" strokeWidth="1" strokeDasharray="2 2" />
            <text x="180" y="205" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontFamily="monospace">
              6 TẤM LIÊN HOÀN · ĐƯỜNG CHÂN TRỜI 2/3
            </text>
          </svg>
        )}

        {type === 'brise-soleil' && (
          <svg viewBox="0 0 360 220" className="w-full h-full max-h-48 text-[#292524]" fill="none">
            {/* 3x2 geometric concrete breeze blocks */}
            {[0, 1, 2].map((col) =>
              [0, 1].map((row) => {
                const cx = 85 + col * 68;
                const cy = 42 + row * 68;
                return (
                  <g key={`${col}-${row}`}>
                    <rect x={cx} y={cy} width="60" height="60" stroke="currentColor" strokeWidth="1.8" />
                    <path
                      d={`M${cx} ${cy} Q${cx + 30} ${cy + 30} ${cx + 60} ${cy} M${cx} ${cy + 60} Q${cx + 30} ${cy + 30} ${cx + 60} ${cy + 60}`}
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                    <circle cx={cx + 30} cy={cy + 30} r="9" stroke="#1E3A8A" strokeWidth="1.3" />
                  </g>
                );
              })
            )}
            {/* Airflow arrow */}
            <path d="M35 106 H75" stroke="#1E3A8A" strokeWidth="1.4" />
            <path d="M295 106 H330" stroke="#1E3A8A" strokeWidth="1.4" strokeDasharray="3 2" />
            <text x="180" y="198" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontFamily="monospace">
              MODULE 300×300MM · GIẢM NHIỆT BỨC XẠ 4–6°C
            </text>
          </svg>
        )}

        {type === 'bamboo-vault' && (
          <svg viewBox="0 0 360 220" className="w-full h-full max-h-48 text-[#292524]" fill="none">
            <line x1="24" y1="168" x2="336" y2="168" stroke="currentColor" strokeWidth="1.4" />
            {/* Curved bamboo parabolic arches */}
            <path d="M48 168 Q114 35 180 168" stroke="currentColor" strokeWidth="2.4" />
            <path d="M180 168 Q246 35 312 168" stroke="currentColor" strokeWidth="2.4" />
            <path d="M85 168 Q180 18 275 168" stroke="#1E3A8A" strokeWidth="1.6" strokeDasharray="4 3" />
            {/* Reflection lines */}
            <path d="M48 175 Q114 210 180 175" stroke="currentColor" strokeWidth="1" opacity="0.35" />
            <path d="M180 175 Q246 210 312 175" stroke="currentColor" strokeWidth="1" opacity="0.35" />
            {/* Thermal stack arrows */}
            <path d="M180 120 V68" stroke="#1E3A8A" strokeWidth="1.3" />
            <polyline points="175,75 180,68 185,75" stroke="#1E3A8A" strokeWidth="1.3" />
            <text x="180" y="210" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontFamily="monospace">
              NHỊP VÒM TRE 14,5M · ĐỐI LƯU KHÍ NÓNG TỰ NHIÊN
            </text>
          </svg>
        )}
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C] border-t border-[#DFD8CA] pt-2">
        <span>TƯ LIỆU KỸ THUẬT</span>
        <span>HỆ LƯU TRỮ SỐ</span>
      </div>
    </div>
  );
};

export const SafeExhibitImage: React.FC<SafeExhibitImageProps> = ({
  src,
  alt,
  title,
  plateType,
  plateCode,
  className = '',
  imgClassName = '',
}) => {
  const [failed, setFailed] = useState(false);

  if (plateType && !src) {
    return <ArchivalSvgPlate type={plateType} code={plateCode} className={className} />;
  }

  if (!src || failed) {
    return (
      <div
        className={`w-full h-full bg-[#EFECE4] border border-[#DFD8CA] flex flex-col items-center justify-center p-6 text-center ${className}`}
      >
        <ImageOff className="w-6 h-6 text-[#78716C] mb-2" strokeWidth={1.5} />
        <p className="font-serif text-sm text-[#292524]">{title}</p>
        <p className="text-xs text-[#78716C] mt-1">Tư liệu ảnh đang được hiệu đính</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover ${imgClassName}`}
    />
  );
};
