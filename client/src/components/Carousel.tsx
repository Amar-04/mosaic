import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative group rounded-3xl overflow-hidden border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative aspect-[16/9] md:aspect-[21/9]" key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-foreground rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-40%] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[-50%] active:shadow-none transition-all duration-200 z-10 opacity-0 group-hover:opacity-100 md:opacity-100"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" strokeWidth={3} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-foreground rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-40%] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[-50%] active:shadow-none transition-all duration-200 z-10 opacity-0 group-hover:opacity-100 md:opacity-100"
      >
        <ChevronRight className="w-6 h-6 text-foreground" strokeWidth={3} />
      </button>
    </div>
  );
}
