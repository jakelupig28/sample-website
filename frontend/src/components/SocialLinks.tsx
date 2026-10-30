import React from "react";

interface SocialLinksProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function SocialLinks({
  color = "#181615",
  size = 17,
  className = "",
  style = {},
}: SocialLinksProps) {
  const iconStroke = color || "#181615";

  const socials = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com",
      icon: (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="9" x2="12" y2="21"></line>
          <path d="M8 12a4 4 0 1 1 8 0c0 2.2-1.8 4-4 4"></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      icon: (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
          <polygon points="10 15 15 12 10 9 10 15"></polygon>
        </svg>
      ),
    },
  ];

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        ...style,
      }}
    >
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          title={`Follow ÉLAN on ${item.name}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(140, 109, 55, 0.22)",
            background: "#ffffff",
            color: iconStroke,
            transition: "all var(--transition-fast)",
            boxShadow: "0 2px 8px rgba(25, 24, 23, 0.05)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent-gold, #9e7938)";
            e.currentTarget.style.background = "var(--color-accent-gold, #9e7938)";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(158, 121, 56, 0.28)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(140, 109, 55, 0.22)";
            e.currentTarget.style.background = "#ffffff";
            e.currentTarget.style.color = iconStroke;
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(25, 24, 23, 0.05)";
          }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
