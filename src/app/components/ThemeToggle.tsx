'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed top-6 right-6 z-50 w-10 h-10" />;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all duration-500 group/toggle outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <svg
          className="w-4 h-4 text-zinc-900/40 dark:text-white/60 group-hover/toggle:text-black dark:group-hover/toggle:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        <svg
          className="w-4 h-4 text-zinc-900/40 dark:text-white/60 group-hover/toggle:text-black dark:group-hover/toggle:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
    </button>
  );
}
