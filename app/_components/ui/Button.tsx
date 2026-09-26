import { ReactNode } from "react";

// Button variant enum
export enum ButtonVariant {
  Small = "px-3 py-2 text-sm",
  Medium = "px-4 py-2.5 text-base",
  Large = "px-5 py-4 text-lg",
}

// Button icon variant enum
export enum ButtonIconVariant {
  Small = "p-2.5 text-sm",
  Medium = "p-3 text-base",
  Large = "p-4 text-lg",
}

// Button variant type based on the keys of the ButtonVariant enum
export type ButtonVariantType = keyof typeof ButtonVariant;

// Button color variant enum
export enum ButtonColorVariant {
  Primary = "bg-red-900 text-stone-50 hover:bg-red-800",
  Secondary = "bg-stone-200 text-stone-900 hover:bg-stone-300",
  Tertiary = "bg-stone-950 text-stone-50 hover:bg-stone-800",
}
// Button color variant type based on the keys of the ButtonColorVariant enum
export type ButtonColorVariantType = keyof typeof ButtonColorVariant;

// Button width variant enum
export enum ButtonWidthVariant {
  Full = "w-full",
  Auto = "w-auto",
  Fit = "w-fit",
}

// Button width variant type based on the keys of the ButtonWidthVariant enum
export type ButtonWidthVariantType = keyof typeof ButtonWidthVariant;

// Button props type definition
export type ButtonProps = {
  variant: ButtonVariantType;
  color: ButtonColorVariantType;
  width?: ButtonWidthVariantType;
  icon?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";
  prefix?: ReactNode;
  suffix?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

// Button component
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
    type = "button",
    onClick,
  } = props;

  // Determine the CSS classes for the button
  const variantClass = icon
    ? ButtonIconVariant[variant]
    : ButtonVariant[variant];
  const colorClass = ButtonColorVariant[color];
  const widthClass = ButtonWidthVariant[width];

  // If there are no children, do not render the button
  if (!children) {
    return null;
  }

  // Combine all the CSS classes for the button
  const buttonClasses = `${variantClass} ${colorClass} ${widthClass} font-semibold rounded flex items-center justify-center gap-2 cursor-pointer transition-colors ${props.className ?? ""}`;
  // Define the content of the button, including optional prefix and suffix
  const content = (
    <>
      {prefix && <span className="prefix">{prefix}</span>}
      {children}
      {suffix && <span className="suffix">{suffix}</span>}
    </>
  );

  // Render the button as an anchor tag if an href is provided
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }
  // Render the button as a regular button if no href is provided
  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  );
}
