import { ReactNode } from "react";

export enum ButtonVariant {
  Small = "px-3 py-2 text-sm",
  Medium = "px-4 py-2.5 text-base",
  Large = "px-5 py-4 text-lg",
}

export enum ButtonIconVariant {
  Small = "p-2.5 text-sm",
  Medium = "p-3 text-base",
  Large = "p-4 text-lg",
}

export type ButtonVariantType = keyof typeof ButtonVariant;

export enum ButtonColorVariant {
  Primary = "bg-red-900 text-stone-50 hover:bg-red-800",
  Secondary = "bg-stone-200 text-stone-900 hover:bg-stone-300",
  Tertiary = "bg-stone-950 text-stone-50 hover:bg-stone-700",
}
export type ButtonColorVariantType = keyof typeof ButtonColorVariant;

export enum ButtonWidthVariant {
  Full = "w-full",
  Auto = "w-auto",
}

export type ButtonWidthVariantType = keyof typeof ButtonWidthVariant;

export type ButtonProps = {
  variant: ButtonVariantType;
  color: ButtonColorVariantType;
  width?: ButtonWidthVariantType;
  icon?: boolean;
  href?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export default function Button(props: ButtonProps) {
  const {
    variant = "Medium",
    color = "Primary",
    width = "Auto",
    icon = false,
    prefix,
    suffix,
    children,
    href,
  } = props;

  const variantClass = icon
    ? ButtonIconVariant[variant]
    : ButtonVariant[variant];
  const colorClass = ButtonColorVariant[color];
  const widthClass = ButtonWidthVariant[width];

  if (!children) {
    return null;
  }

  const buttonClasses = `${variantClass} ${colorClass} ${widthClass} font-semibold rounded flex items-center justify-center gap-2 cursor-pointer transition-colors ${props.className ?? ""}`;
  const content = (
    <>
      {prefix && <span className="prefix">{prefix}</span>}
      {children}
      {suffix && <span className="suffix">{suffix}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }
  return <button className={buttonClasses}>{content}</button>;
}
