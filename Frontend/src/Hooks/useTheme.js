import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';

  const persisted = localStorage.getItem('theme');
  if (persisted === 'dark' || persisted === 'light') return persisted;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyThemeClass = (theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.classList.toggle('light', theme === 'light');
};

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyThemeClass(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, isDark: theme === 'dark', toggleTheme };
};

export default useTheme;
