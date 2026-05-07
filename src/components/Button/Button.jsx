export default function Button({
  children,

  variant = "primary",

  size = "normal",

  className = "",

  onClick,

  href,

  ...props
}) {
  // =========================
  // COMPONENT TYPE
  // =========================

  const isLink = Boolean(href);

  const Component = isLink ? "a" : "button";

  // =========================
  // STYLES
  // =========================

  const baseClasses = `
    inline-flex
    items-center
    rounded-full
    font-normal
    text-white

    transition-transform
    transition-colors
    duration-300

    hover:scale-[1.02]
    active:scale-[0.98]

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#ff7a00]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#090909]
  `;

  const sizeClasses = {
    normal:
      "pl-5 pr-1.5 py-1.5 text-[15px] gap-2",

    small:
      "pl-5 pr-1.5 py-1.5 text-[14px] gap-2",
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r
      from-[#F85300]
      to-[#FF8700]

      hover:brightness-110
    `,

    secondary: `
      border
      border-[#333333]

      bg-[#111111]/70

      hover:border-[#555555]
      hover:bg-[#1a1a1a]
    `,
  };

  const iconSizeClasses = {
    normal: "w-[34px] h-[34px]",

    small: "w-[28px] h-[28px]",
  };

  const iconColors = {
    primary: `
      bg-[#111111]
      text-[#ff7a00]
    `,

    secondary: `
      bg-gradient-to-r
      from-[#F85300]
      to-[#FF8700]

      text-[#111111]
    `,
  };

  // =========================
  // CLICK HANDLER
  // =========================

  const handleClick = (e) => {
    // Anchor scroll with Lenis

    if (href && href.startsWith("#")) {
      e.preventDefault();

      if (window.lenis) {
        window.lenis.scrollTo(href, {
          duration: 1.2,
        });
      } else {
        document
          .querySelector(href)
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }
    }

    // External onClick

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Component
      {...props}
      href={href}
      onClick={handleClick}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      type={!isLink ? "button" : undefined}
    >
      {/* TEXT */}

      <span>{children}</span>

      {/* ICON */}

      <span
        className={`
          ${iconColors[variant]}
          ${iconSizeClasses[size]}

          flex
          shrink-0
          items-center
          justify-center

          rounded-full

          transition-transform
          duration-300

          group-hover:translate-x-[2px]
        `}
      >
        <svg
          width={size === "small" ? "14" : "15"}
          height={size === "small" ? "14" : "15"}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />

          <path d="M7 7h10v10" />
        </svg>
      </span>
    </Component>
  );
}