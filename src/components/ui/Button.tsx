import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  as?: "a" | "button" | "Link";
  // tambahan lain
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  target,
  rel,
  as = "a",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-full transition-all duration-300 text-sm md:text-base";

  const variantClasses = {
    primary: "bg-gradient-to-r from-gold to-gold-light text-bg hover:shadow-lg hover:shadow-gold/30 transform hover:-translate-y-0.5",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-bg",
    ghost: "border border-border-gold text-gold hover:bg-gold/10",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (as === "Link" && href) {
    return (
      <Link to={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href && !href.startsWith("/")) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;