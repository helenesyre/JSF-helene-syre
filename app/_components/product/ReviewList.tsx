import type { ProductReview } from "@/app/_lib/types";
import ReviewCard from "./ReviewCard";

// Review list component
export default function ReviewList({ reviews }: { reviews: ProductReview[] }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Render the list of reviews */}
      {reviews.length > 0
        ? reviews.map((review) => {
            return <ReviewCard review={review} key={review.id} />;
          })
        : "No reviews"}
    </div>
  );
}
