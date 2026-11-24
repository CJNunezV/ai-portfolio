"use client";

import Image from "next/image";
import { useState } from "react";
import { ZoomIn } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

/**
 * Thumbnail grid (first image large) that opens a zoomable full-screen lightbox.
 * `cover` crops thumbnails to fill (good for photos); the default keeps
 * screenshots fully visible.
 */
export default function Gallery({
  images,
  alt,
  cover = false,
  sizes = "(max-width: 860px) 100vw, 480px",
}: {
  images: string[];
  alt: string;
  cover?: boolean;
  sizes?: string;
}) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="gallery">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className={`galleryItem${cover ? " cover" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Enlarge image ${i + 1} of ${images.length}: ${alt}`}
          >
            <Image src={src} alt={`${alt} — image ${i + 1}`} fill sizes={i === 0 ? sizes : "240px"} />
            <span className="galleryZoom" aria-hidden>
              <ZoomIn size={16} />
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((src, i) => ({ src, alt: `${alt} — image ${i + 1}` }))}
        plugins={[Zoom, Counter]}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
