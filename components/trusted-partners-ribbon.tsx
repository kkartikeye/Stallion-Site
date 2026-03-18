"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type TrustedPartner = {
  name: string;
  logoSrc: string;
  logoClassName?: string;
};

type TrustedPartnersRibbonProps = {
  partners: TrustedPartner[];
};

export function TrustedPartnersRibbon({
  partners,
}: TrustedPartnersRibbonProps) {
  const duplicatedPartners = [...partners, ...partners];
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
  });
  const pauseUntilRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number | null>(null);
  const prefersReducedMotionRef = useRef(false);
  const isInViewRef = useRef(true);

  function pauseAutoScroll(durationMs: number) {
    pauseUntilRef.current = Date.now() + durationMs;
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotionPreference = () => {
      prefersReducedMotionRef.current = mediaQuery.matches;
    };

    updateReducedMotionPreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateReducedMotionPreference);
    } else {
      mediaQuery.addListener(updateReducedMotionPreference);
    }

    const observer =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(
            ([entry]) => {
              isInViewRef.current = entry?.isIntersecting ?? true;
            },
            { threshold: 0.15 },
          );

    if (observer && trackRef.current) {
      observer.observe(trackRef.current);
    }

    function step(timestamp: number) {
      const track = trackRef.current;

      if (track) {
        const shouldPause =
          dragState.current.isDragging ||
          Date.now() < pauseUntilRef.current ||
          prefersReducedMotionRef.current ||
          !isInViewRef.current;

        if (!shouldPause) {
          const lastFrameTime = lastFrameTimeRef.current ?? timestamp;
          const delta = timestamp - lastFrameTime;
          const loopWidth = track.scrollWidth / 2;
          const nextScrollLeft = track.scrollLeft + delta * 0.095;

          track.scrollLeft =
            nextScrollLeft >= loopWidth ? nextScrollLeft - loopWidth : nextScrollLeft;
        }
      }

      lastFrameTimeRef.current = timestamp;

      animationFrameRef.current = window.requestAnimationFrame(step);
    }

    animationFrameRef.current = window.requestAnimationFrame(step);

    return () => {
      if (observer) {
        observer.disconnect();
      }

      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updateReducedMotionPreference);
      } else {
        mediaQuery.removeListener(updateReducedMotionPreference);
      }

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      lastFrameTimeRef.current = null;
    };
  }, []);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const track = trackRef.current;
    if (!track) {
      return;
    }

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
    };
    pauseAutoScroll(2500);
    track.style.cursor = "grabbing";

    track.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !dragState.current.isDragging) {
      return;
    }

    const delta = event.clientX - dragState.current.startX;
    track.scrollLeft = dragState.current.startScrollLeft - delta;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    dragState.current.isDragging = false;
    pauseAutoScroll(2500);
    track.style.cursor = "grab";

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <div className="mt-10">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onDragStart={(event) => {
            event.preventDefault();
          }}
          className="no-scrollbar flex cursor-grab select-none gap-4 overflow-x-auto overflow-y-hidden px-1 pb-1 [touch-action:pan-y] [will-change:scroll-position]"
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex w-[184px] shrink-0 items-center justify-center rounded-[1.5rem] border border-slate-200 bg-white px-4 py-5 shadow-sm sm:w-[220px] sm:rounded-[1.75rem] sm:px-6 sm:py-6"
            >
              <div className="relative h-14 w-[132px] sm:h-16 sm:w-[170px]">
                <Image
                  src={partner.logoSrc}
                  alt={`${partner.name} logo`}
                  fill
                  draggable={false}
                  className={`pointer-events-none object-contain transition-transform ${partner.logoClassName ?? ""}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
