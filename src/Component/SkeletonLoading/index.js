import React, { memo } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoading = () => {
  return (
    <Skeleton
      highlightColor="#2b1b2e"
      baseColor="#573b5c"
      height={350}
      width={250}
      direction="ltr"
      enableAnimation
      duration={1}
    />
  );
};

export const MemoizedSkeletonLoading = memo(SkeletonLoading);
