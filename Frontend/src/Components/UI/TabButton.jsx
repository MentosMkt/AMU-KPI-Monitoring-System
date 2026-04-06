const TabButton = ({ label, value, activeValue, onChange, className = '' }) => {
  const isActive = activeValue === value;

  return (
    <button
      onClick={() => onChange(value)}
      className={`px-5 py-2 rounded-lg text-sm font-medium border transition-colors ${
        isActive ? 'border-primary text-primary bg-primary/5' : 'border-border text-muted-foreground hover:bg-muted'
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default TabButton;
