"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { withBasePath } from "../../lib/basePath";

interface EarthLottieProps {
  className?: string;
  speed?: number;
}

export default function EarthLottie({ className, speed = 0.55 }: EarthLottieProps) {
  return (
    <div className={className}>
      <div className="mx-auto aspect-square h-full max-h-[180px] w-full max-w-[180px]">
        <DotLottieReact
          src={withBasePath("/lottie/earth.lottie")}
          loop
          autoplay
          speed={speed}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}

