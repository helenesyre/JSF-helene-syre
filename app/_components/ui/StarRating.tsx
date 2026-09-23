// Source: https://lucide.dev/guide/react/advanced/filled-icons - 23.sep
import { Star, StarHalf } from "lucide-react";

type StarRatingProps = {
  rating: number;
  maxRating?: number;
  size?: number;
  filledColor?: string;
  emptyColor?: string;
};

export default function StarRating({
  rating,
  maxRating = 5,
  size = 24,
  filledColor = "fill-amber-400",
  emptyColor = "fill-stone-300",
  ...iconProps
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const halfStars = rating - fullStars >= 0.5;

  return (
    <div
      className="relative inline-block"
      aria-label={`${rating} out of ${maxRating} stars`}
    >
      <div className="flex gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={0}
            className={emptyColor}
            {...iconProps}
          />
        ))}
      </div>
      <div className="flex gap-1 absolute top-0 left-0">
        {Array.from({ length: fullStars }, (_, i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={0}
            className={filledColor}
            {...iconProps}
          />
        ))}
        {halfStars && (
          <StarHalf
            size={size}
            className={filledColor}
            strokeWidth={0}
            {...iconProps}
          />
        )}
      </div>
    </div>
  );
}
