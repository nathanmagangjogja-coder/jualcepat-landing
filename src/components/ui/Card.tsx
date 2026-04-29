interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = "", hover = false }) => {
  return (
    <div
      className={`glass-card rounded-2xl p-8 ${
        hover ? "hover:border-gold/40 transition-all duration-500 gold-glow-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;