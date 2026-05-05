import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "normal",
  className = "",
  ...props
}) {
  const baseClasses = "text-white rounded-full font-normal flex items-center transition-all";

  const sizeClasses = {
    normal: "pl-5 pr-1.5 py-1.5 text-[15px] gap-2",
    small: "pl-5 pr-1.5 py-1.5 text-[14px] gap-2",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-[#F85300] to-[#FF8700] hover:bg-[#e06c00] border border-transparent",
    secondary: "bg-[#111111]/70 border border-[#333333] hover:border-[#555555]",
  };

  const iconSizeClasses = {
    normal: "w-[34px] h-[34px]",
    small: "w-[28px] h-[28px]",
  };

  const iconColors = {
    primary: "bg-[#111111] text-[#ff7a00]",
    secondary: "bg-gradient-to-r from-[#F85300] to-[#FF8700] text-[#111111]",
  };

  const Component = props.href ? "a" : "button";

  const handleClick = (e) => {
    // Se for um link de âncora (ex: #websites), usa o Lenis para rolar suavemente
    if (props.href && props.href.startsWith("#")) {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(props.href);
      } else {
        // Fallback nativo caso o lenis ainda não esteja carregado
        document.querySelector(props.href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    // Executa a função onClick original se ela existir
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
  <Component
    {...props}
    onClick={handleClick}
    className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
  >
    {children}

    <span
      className={`${iconColors[variant]} ${iconSizeClasses[size]} rounded-full flex items-center justify-center shrink-0`}
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
