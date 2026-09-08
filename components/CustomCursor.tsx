'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    document.body.style.cursor = 'none';

    const dot = dotRef.current;
    const follower = followerRef.current;
    if (!dot || !follower) return;

    const move = (e: MouseEvent) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', move);

    const grow = () => {
      dot.style.transform = 'translate(-50%,-50%) scale(2)';
      follower.style.width = '50px';
      follower.style.height = '50px';
      follower.style.borderColor = 'rgba(0,73,255,0.8)';
    };
    const shrink = () => {
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.width = '32px';
      follower.style.height = '32px';
      follower.style.borderColor = 'rgba(0,73,255,0.5)';
    };

    const attach = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
    };
    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-blue pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      />
      <div
        ref={followerRef}
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border-[1.5px] border-brand-blue/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[left,top,width,height,border-color] duration-150 ease-out"
      />
    </>
  );
}
