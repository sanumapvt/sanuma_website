export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  as = "h2",
  className = "",
}) {
  const alignClass =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  const HeadingTag = as;

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {label && (
        <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
          <span className="w-2 h-2 rounded-full bg-[#009688]" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#009688]">
            {label}
          </span>
        </div>
      )}
      {title && (
        <HeadingTag className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#172121] leading-[1.15]">
          {title}
        </HeadingTag>
      )}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#5F6868] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
