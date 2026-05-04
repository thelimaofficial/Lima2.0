import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full px-4 sm:px-6 md:px-8 mx-auto ${className}`}>
      {children}
    </div>
  );
}
