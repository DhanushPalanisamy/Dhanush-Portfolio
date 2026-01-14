import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div aria-hidden className="fixed top-0 left-0 right-0 h-1 z-50">
      <div className="h-1 bg-white/10" style={{ width: '100%' }} />
      <div className="h-1 bg-cyan-400 origin-left" style={{ width: `${progress}%`, transition: 'width 120ms linear' }} />
    </div>
  );
}
