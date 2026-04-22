"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { withBasePath } from "../../lib/basePath";

interface EarthLottieProps {
  className?: string;
  speed?: number;
}

export default function EarthLottie({ className, speed = 0.55 }: EarthLottieProps) {
  return (
    <div className={`h-full w-full ${className ?? ""}`}>
      <DotLottieReact
        src={withBasePath("/lottie/earth.lottie")}
        loop
        autoplay
        speed={speed}
        className="h-full w-full"
      />
    </div>
  );
}

