import { PointEstimate } from "@/__generated__/types";
import EstimateIcon from "@/assets/svgs/estimate.svg?react";

export const estimateOptions = [
  { label: "0 Points", value: PointEstimate.Zero, icon: <EstimateIcon /> },
  { label: "1 Points", value: PointEstimate.One, icon: <EstimateIcon /> },
  { label: "2 Points", value: PointEstimate.Two, icon: <EstimateIcon /> },
  { label: "4 Points", value: PointEstimate.Four, icon: <EstimateIcon /> },
  { label: "8 Points", value: PointEstimate.Eight, icon: <EstimateIcon /> },
];
