import { useEffect, useState } from "react";

export function useResponsiveParallax(defaultSpeed: number) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable parallax on mobile for better performance, reduce on tablet
  if (isMobile) return 0;
  if (isTablet) return Math.abs(defaultSpeed) > 5 ? defaultSpeed * 0.6 : defaultSpeed * 0.8;
  return defaultSpeed;
}
