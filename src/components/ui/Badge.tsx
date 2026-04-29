interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "green" | "navy";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "gold", className = "" }) => {
  const variantClasses = {
    gold: "text-bg bg-gradient-to-r from-gold to-gold-light",
    green: "bg-success/10 text-success",
    navy: "bg-navy/50 text-gold-light border border-gold/30",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;