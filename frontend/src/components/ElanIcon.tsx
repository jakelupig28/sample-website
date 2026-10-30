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
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f5efe6" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#1e1c1b" />
              <stop offset="50%" stopColor="#121110" />
              <stop offset="100%" stopColor="#0a0a09" />
            </>
          )}
        </linearGradient>
        <linearGradient id={`elanGold_${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faeed9" />
          <stop offset="25%" stopColor="#dfbd7c" />
          <stop offset="65%" stopColor="#b69049" />
          <stop offset="100%" stopColor="#8a6927" />
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
        strokeWidth="4.5"
      />

      {/* Inner Filigree Hairline */}
      <rect
        x="38"
        y="38"
        width="436"
        height="436"
        rx="98"
        fill="none"
        stroke={`url(#elanGold_${variant})`}
        strokeWidth="1.5"
        strokeOpacity={isLight ? "0.55" : "0.38"}
      />

      {/* Halo Astrolabe Ring */}
      <circle
        cx="256"
        cy="256"
        r="190"
        fill="none"
        stroke={`url(#elanGold_${variant})`}
        strokeWidth="1.2"
        strokeDasharray="4 8"
        strokeOpacity={isLight ? "0.38" : "0.28"}
      />

      {/* Perfectly Unified Continuous Classical Serif É */}
      <path
        d="M 180 166 H 334 V 208 H 322 C 320 196 312 186 294 186 H 254 V 252 H 304 C 316 252 320 248 322 240 H 330 V 284 H 322 C 320 276 316 272 304 272 H 254 V 338 H 302 C 324 338 332 328 334 316 H 344 V 358 H 180 V 338 C 196 338 204 336 216 326 V 198 C 204 188 196 186 180 186 Z"
        fill={`url(#elanGold_${variant})`}
      />

      {/* Classical French Acute Accent */}
      <path
        d="M 264 136 C 262 130 264 124 270 118 L 308 82 C 314 76 322 78 326 84 C 330 90 328 98 320 104 L 282 140 C 276 144 268 142 264 136 Z"
        fill={`url(#elanGold_${variant})`}
      />

      {/* Subtle Diamond Accents */}
      <circle cx="256" cy="62" r="3.5" fill={`url(#elanGold_${variant})`} opacity="0.6" />
      <circle cx="256" cy="450" r="3.5" fill={`url(#elanGold_${variant})`} opacity="0.6" />
      <circle cx="62" cy="256" r="3.5" fill={`url(#elanGold_${variant})`} opacity="0.6" />
      <circle cx="450" cy="256" r="3.5" fill={`url(#elanGold_${variant})`} opacity="0.6" />
    </svg>
  );
}
