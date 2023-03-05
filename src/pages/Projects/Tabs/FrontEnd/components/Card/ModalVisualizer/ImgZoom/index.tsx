import React, { useRef, useEffect } from "react";
import { Container } from "./styles";

interface ImageZoomProps {
  src: string;
  alt: string;
}

function ImageZoom(props: ImageZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let zoomLevel = 1;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const delta = Math.max(-1, Math.min(1, event.deltaY));
      const zoomStep = 0.1;

      if (delta < 0) {
        zoomLevel += zoomStep;
      } else {
        zoomLevel -= zoomStep;
      }

      if (zoomLevel < 1) {
        zoomLevel = 1;
      }

      if (container)
        container.querySelector("img")!.style.transform = `scale(${zoomLevel})`;
    };

    container?.addEventListener("wheel", handleWheel);

    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <img src={props.src} alt={props.alt} />
    </Container>
  );
}

export default ImageZoom;
