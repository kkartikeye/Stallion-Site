"use client";

import { useEffect, useRef, useState } from "react";

type KeyedImageProps = {
  alt: string;
  className?: string;
  src: string;
};

function isCheckerboardPixel(r: number, g: number, b: number) {
  const bg1 = [238, 238, 238];
  const bg2 = [204, 204, 204];

  function distance(target: number[]) {
    const dr = r - target[0];
    const dg = g - target[1];
    const db = b - target[2];
    return dr * dr + dg * dg + db * db;
  }

  return distance(bg1) < 1800 || distance(bg2) < 1800;
}

export function KeyedImage({ alt, className, src }: KeyedImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = src;
    let isActive = true;

    image.onload = () => {
      if (!isActive) {
        return;
      }

      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }

      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const { data, width, height } = imageData;

      let minX = width;
      let minY = height;
      let maxX = 0;
      let maxY = 0;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (isCheckerboardPixel(r, g, b)) {
          data[i + 3] = 0;
          continue;
        }

        const pixelIndex = i / 4;
        const x = pixelIndex % width;
        const y = Math.floor(pixelIndex / width);
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }

      context.putImageData(imageData, 0, 0);

      const cropWidth = Math.max(1, maxX - minX + 1);
      const cropHeight = Math.max(1, maxY - minY + 1);
      const cropped = context.getImageData(minX, minY, cropWidth, cropHeight);

      canvas.width = cropWidth;
      canvas.height = cropHeight;
      const croppedContext = canvas.getContext("2d");
      if (!croppedContext) {
        return;
      }

      croppedContext.putImageData(cropped, 0, 0);
      setReady(true);
    };

    return () => {
      isActive = false;
    };
  }, [src]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden={!ready}
        aria-label={alt}
        role="img"
        className={`${className ?? ""} ${ready ? "block" : "hidden"}`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        aria-hidden={ready}
        className={`${className ?? ""} ${ready ? "hidden" : "block"}`}
      />
    </>
  );
}
