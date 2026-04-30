import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
