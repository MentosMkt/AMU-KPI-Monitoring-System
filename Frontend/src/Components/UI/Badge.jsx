const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyle = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none';

  const variants = {
    default: 'bg-blue-600 text-white border-transparent hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 border-transparent hover:bg-gray-300',
    destructive: 'bg-red-600 text-white border-transparent hover:bg-red-700',
    outline: 'border-gray-400 text-gray-800',
  };

  return (
    <div className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Badge;
