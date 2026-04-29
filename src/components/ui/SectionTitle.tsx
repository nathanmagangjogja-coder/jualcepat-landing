interface SectionTitleProps {
  title: string;
  subtitle?: string;
  highlight?: string; // kata yang diberi gradient
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  highlight = "",
  className = "",
}) => {
  // mengganti highlight dengan span gradient
  const formattedTitle = title.replace(
    highlight,
    (match) => `<span class="gradient-text">${match}</span>`
  );

  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: formattedTitle }}
      />
      {subtitle && <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;