import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009688] focus-visible:ring-offset-2 cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm sm:text-base px-6 py-3 gap-2",
    lg: "text-base sm:text-lg px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#009688] text-white hover:bg-[#00796B] shadow-sm hover:shadow active:scale-[0.98]",
    ghost:
      "border border-[#172121]/15 text-[#172121] hover:border-[#172121] hover:bg-[#172121]/5 active:scale-[0.98]",
    outline:
      "border border-[#009688] text-[#009688] hover:bg-[#009688]/10 active:scale-[0.98]",
    dark:
      "bg-[#172121] text-white hover:bg-[#253333] shadow-sm active:scale-[0.98]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
