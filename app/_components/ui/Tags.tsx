import { ReactNode } from "react";

export enum TagVariant {
  Small = "px-2 py-1.5 text-sm",
  Medium = "px-2.5 py-1.5 text-base",
  Large = "px-3 py-1.5 text-lg",
}

export enum TagIconVariant {
  Small = "p-2.5 text-sm",
  Medium = "p-3 text-sm",
  Large = "p-4 text-md",
}

export type TagVariantType = keyof typeof TagVariant;

export enum TagColorVariant {
  Primary = "bg-red-900 text-stone-50",
  Secondary = "bg-stone-200 text-stone-900",
  Tertiary = "bg-stone-950 text-stone-50",
}
export type TagColorVariantType = keyof typeof TagColorVariant;

export type TagProps = {
  variant: TagVariantType;
  color: TagColorVariantType;
  icon?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export default function Tag(props: TagProps) {
  const {
    variant = "Medium",
    color = "Primary",
    icon = false,
    prefix,
    suffix,
    children,
  } = props;

  const variantClass = icon ? TagIconVariant[variant] : TagVariant[variant];
  const colorClass = TagColorVariant[color];

  if (!children) {
    return null;
  }

  return (
    <span
      className={`${variantClass} ${colorClass} font-medium rounded-lg flex items-center gap-2 w-fit ${props.className ?? ""}`}
    >
      {prefix && <span className="prefix">{prefix}</span>}
      {children}
      {suffix && <span className="suffix">{suffix}</span>}
    </span>
  );
}
