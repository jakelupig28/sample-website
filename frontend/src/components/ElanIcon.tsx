import React from "react";

interface ElanIconProps {
  size?: number;
  className?: string;
  variant?: "dark" | "light" | "gold";
}

export default function ElanIcon({
  size = 40,
  className = "",
  variant = "dark",
}: ElanIconProps) {
  const isDark = variant === "dark";
  const isLight = variant === "light";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`elanBg_${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          {isLight ? (
            <>
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#f6f2ec" />
            </>
          ) : (
            <>
              <stop offset="0%" stop-color="#1e1c1b" />
              <stop offset="50%" stop-color="#141312" />
              <stop offset="100%" stop-color="#0a0a09" />
            </>
          )}
        </linearGradient>
        <linearGradient id={`elanGold_${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#faedd8" />
          <stop offset="30%" stop-color="#dfbd7c" />
          <stop offset="70%" stop-color="#b69049" />
          <stop offset="100%" stop-color="#8a6927" />
        </linearGradient>
        <linearGradient id={`elanTerracotta_${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59c70" />
          <stop offset="100%" stop-color="#c45d2e" />
        </linearGradient>
      </defs>

      {/* Frame */}
      <rect
        x="20"
        y="20"
        width="472"
        height="472"
        rx="116"
        fill={`url(#elanBg_${variant})`}
        stroke={`url(#elanGold_${variant})`}
        strokeWidth="5"
      />

      {/* Inner Filigree hairline */}
      <rect
        x="38"
        y="38"
        width="436"
        height="436"
        rx="98"
        fill="none"
        stroke={`url(#elanGold_${variant})`}
        strokeWidth="1.5"
        strokeOpacity={isLight ? "0.6" : "0.4"}
      />

      {/* Halo Astrolabe Ring */}
      <circle
        cx="256"
        cy="256"
        r="188"
        fill="none"
        stroke={`url(#elanGold_${variant})`}
        strokeWidth="1.2"
        strokeDasharray="4 8"
        strokeOpacity={isLight ? "0.4" : "0.32"}
      />

      {/* Dynamic Shears Arc */}
      <path
        d="M 180 370 C 150 280 200 170 330 130"
        fill="none"
        stroke={`url(#elanTerracotta_${variant})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />

      {/* Top Accent Acute Slash */}
      <path
        d="M 268 126 L 312 82 C 316 78 322 78 326 82 C 330 86 330 92 326 96 L 284 136 C 280 140 273 139 269 135 C 265 131 265 129 268 126 Z"
        fill={`url(#elanGold_${variant})`}
      />

      {/* Vertical Stem */}
      <rect x="204" y="162" width="42" height="198" fill={`url(#elanGold_${variant})`} />
      <polygon points="172,162 210,162 210,172 188,172 172,184" fill={`url(#elanGold_${variant})`} />
      <polygon points="168,360 214,360 214,350 188,350 168,338" fill={`url(#elanGold_${variant})`} />

      {/* Top Horizontal Arm */}
      <path
        d="M 204 162 L 332 162 C 344 162 352 170 354 182 L 354 206 L 342 206 C 340 192 334 176 318 176 L 246 176 L 246 162 Z"
        fill={`url(#elanGold_${variant})`}
      />

      {/* Center Horizontal Arm */}
      <path
        d="M 246 248 L 314 248 C 324 248 328 252 330 262 L 340 262 L 340 240 L 330 240 C 328 245 324 248 314 248 L 246 248 Z"
        fill={`url(#elanGold_${variant})`}
      />

      {/* Bottom Horizontal Arm */}
      <path
        d="M 204 360 L 340 360 C 356 360 364 350 368 334 L 378 334 L 376 376 L 204 376 Z"
        fill={`url(#elanGold_${variant})`}
      />

      {/* Jewel Accents */}
      <circle cx="340" cy="308" r="4.5" fill={`url(#elanTerracotta_${variant})`} />
      <circle cx="170" cy="208" r="3.5" fill={`url(#elanGold_${variant})`} opacity="0.8" />
      <circle cx="256" cy="62" r="3" fill={`url(#elanGold_${variant})`} opacity="0.6" />
      <circle cx="256" cy="450" r="3" fill={`url(#elanGold_${variant})`} opacity="0.6" />
    </svg>
  );
}

