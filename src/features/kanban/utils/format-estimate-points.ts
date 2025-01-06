import { PointEstimate } from "@/__generated__/types";

const estimatePointsMap: Record<PointEstimate, number> = {
  [PointEstimate.Eight]: 8,
  [PointEstimate.Four]: 4,
  [PointEstimate.One]: 1,
  [PointEstimate.Two]: 2,
  [PointEstimate.Zero]: 0,
};

export const formatEstimatePoints = (point: PointEstimate): number => {
  return estimatePointsMap[point];
};
