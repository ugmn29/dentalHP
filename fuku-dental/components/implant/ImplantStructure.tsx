import React from 'react';

export const ImplantStructure = () => {
    return (
        <div className="w-full relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-8 flex justify-center items-center">
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
                <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-lg">
                    {/* Defs for gradients */}
                    <defs>
                        {/* Gum Gradient */}
                        <linearGradient id="gumGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FF9B9B" />
                            <stop offset="100%" stopColor="#EA8685" />
                        </linearGradient>

                        {/* Bone Gradient */}
                        <linearGradient id="boneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FDF5E6" />
                            <stop offset="100%" stopColor="#FAEBD7" />
                        </linearGradient>

                        {/* Implant Titanium Gradient */}
                        <linearGradient id="titaniumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#BDC3C7" />
                            <stop offset="50%" stopColor="#ECF0F1" />
                            <stop offset="100%" stopColor="#95A5A6" />
                        </linearGradient>

                        {/* Abutment Gold/Titanium Gradient */}
                        <linearGradient id="abutmentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F1C40F" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#F39C12" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#D4AC0D" stopOpacity="0.8" />
                        </linearGradient>

                        {/* Crown Ceramic Gradient */}
                        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="50%" stopColor="#F7F9F9" />
                            <stop offset="100%" stopColor="#E5E7E9" />
                        </linearGradient>
                    </defs>

                    {/* BACKGROUND: Bone & Gum */}
                    {/* Bone */}
                    <path d="M20,180 L280,180 L280,400 L20,400 Z" fill="url(#boneGradient)" stroke="#E0D0B8" strokeWidth="2" />
                    {/* Bone Texture (Spongy) */}
                    <circle cx="50" cy="220" r="3" fill="#E6DCC3" opacity="0.6" />
                    <circle cx="250" cy="350" r="4" fill="#E6DCC3" opacity="0.6" />
                    <circle cx="80" cy="300" r="2" fill="#E6DCC3" opacity="0.6" />
                    <circle cx="220" cy="250" r="3" fill="#E6DCC3" opacity="0.6" />

                    {/* Gum */}
                    <path d="M20,140 Q150,140 280,140 L280,180 L20,180 Z" fill="url(#gumGradient)" stroke="#E57373" strokeWidth="0" />
                    <path d="M20,140 Q80,120 100,140 L200,140 Q220,120 280,140" fill="none" stroke="#E57373" strokeWidth="2" strokeOpacity="0.3" />

                    {/* 1. IMPLANT FIXTURE (Screw) */}
                    <g transform="translate(110, 180)">
                        {/* Threads */}
                        {[...Array(8)].map((_, i) => (
                            <path key={i} d={`M10,${20 + i * 20} L0,${30 + i * 20} L10,${35 + i * 20} L70,${35 + i * 20} L80,${30 + i * 20} L70,${20 + i * 20} Z`} fill="url(#titaniumGradient)" stroke="#7F8C8D" strokeWidth="1" />
                        ))}
                        {/* Core Body */}
                        <path d="M10,10 L70,10 L70,190 Q40,210 10,190 Z" fill="url(#titaniumGradient)" stroke="#7F8C8D" strokeWidth="1" />
                    </g>

                    {/* 2. ABUTMENT (Connector) */}
                    <g transform="translate(120, 140)">
                        <path d="M10,40 L50,40 L45,0 L15,0 Z" fill="url(#abutmentGradient)" stroke="#B7950B" strokeWidth="1" />
                    </g>

                    {/* 3. CROWN (Artificial Tooth) */}
                    <g transform="translate(100, 20)">
                        <path d="M10,120 Q0,80 5,40 Q15,0 50,0 Q85,0 95,40 Q100,80 90,120 L10,120 Z" fill="url(#crownGradient)" stroke="#BDC3C7" strokeWidth="1" />
                        {/* Shine/Gloss */}
                        <path d="M30,20 Q40,10 60,30" fill="none" stroke="white" strokeWidth="3" opacity="0.7" strokeLinecap="round" />
                    </g>

                    {/* LABELS & LINES */}
                    {/* Line for Crown */}
                    <line x1="190" y1="60" x2="250" y2="60" stroke="#395b45" strokeWidth="1.5" />
                    <circle cx="250" cy="60" r="3" fill="#395b45" />

                    {/* Line for Abutment */}
                    <line x1="170" y1="160" x2="250" y2="160" stroke="#395b45" strokeWidth="1.5" />
                    <circle cx="250" cy="160" r="3" fill="#395b45" />

                    {/* Line for Fixture */}
                    <line x1="185" y1="280" x2="250" y2="280" stroke="#395b45" strokeWidth="1.5" />
                    <circle cx="250" cy="280" r="3" fill="#395b45" />

                </svg>

                {/* Text Labels Overlay (Absolute positioning matches SVG coordinates approximately) */}
                <div className="absolute top-[12%] -right-4 md:right-0 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow border border-[#c8ddd0]">
                    <span className="text-xs md:text-sm font-bold text-[#395b45]">上部構造</span>
                </div>
                <div className="absolute top-[38%] -right-4 md:right-0 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow border border-[#c8ddd0]">
                    <span className="text-xs md:text-sm font-bold text-[#395b45]">アバットメント</span>
                </div>
                <div className="absolute top-[68%] -right-4 md:right-0 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow border border-[#c8ddd0]">
                    <span className="text-xs md:text-sm font-bold text-[#395b45]">インプラント体</span>
                </div>

            </div>
        </div>
    );
};
