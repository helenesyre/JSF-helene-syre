import { ReactNode } from "react";

// Tag variant enum definition
export enum TagVariant {
  Small = "px-2 py-1 text-sm",
  Medium = "px-2.5 py-1 text-base",
  Large = "px-3 py-1 text-lg",
}

// Tag icon variant enum definition
export enum TagIconVariant {
  Small = "p-2.5 text-sm",
  Medium = "p-3 text-sm",
  Large = "p-4 text-md",
}
// Tag variant type definition
export type TagVariantType = keyof typeof TagVariant;

// Tag color variant enum definition
export enum TagColorVariant {
  Primary = "bg-red-900 text-stone-50",
  Secondary = "bg-stone-200 text-stone-900",
  Tertiary = "bg-stone-950 text-stone-50",
}
// Tag color variant type definition
export type TagColorVariantType = keyof typeof TagColorVariant;

// Tag props type definition
export type TagProps = {
  variant: TagVariantType;
  color: TagColorVariantType;
  icon?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  children?: ReactNode;
  className?: string;
};

// Tag component
export default function Tag(props: TagProps) {
  const {
    variant = "Medium",
    color = "Primary",
    icon = false,
    prefix,
    suffix,
    children,
  } = props;

  // Determine the CSS classes for the tag
  const variantClass = icon ? TagIconVariant[variant] : TagVariant[variant];
  const colorClass = TagColorVariant[color];

  // If there are no children, do not render the tag
  if (!children) {
    return null;
  }

  return (
    <span
      className={`${variantClass} ${colorClass} font-medium rounded-lg flex items-center gap-2 w-fit ${props.className ?? ""}`}
    >
      {/* Render the prefix, children, and suffix within the tag */}
      {prefix && <span className="prefix">{prefix}</span>}
      {children}
      {suffix && <span className="suffix">{suffix}</span>}
    </span>
  );
}
