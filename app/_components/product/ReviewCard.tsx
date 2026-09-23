import { ProductReview } from "@/app/_lib/types";
import Avatar from "../ui/Avatar";
import StarRating from "@/app/_components/ui/StarRating";

export default function ReviewCard({ review }: { review: ProductReview }) {
  //First letter of first and last name
  const avatarInitials = review.username
    .split(" ")
    .map((namePart) => namePart.charAt(0).toUpperCase())
    .join("");
  return (
    <div className="p-4 bg-stone-50 shadow-md rounded-lg mb-4">
      <div className="flex flex-row items-center gap-4">
        {/* User Avatar */}
        <Avatar initials={avatarInitials} />
        {/* User Information */}
        <div>
          <h2 className="text-xl font-bold">{review.username}</h2>
          <div className="flex items-center gap-2">
            <StarRating rating={review.rating} size={20} />
            <p className="text-sm font-semibold text-stone-500">
              {review.rating.toFixed(1)}
            </p>
          </div>
        </div>
      </div>
      {/* Review Description */}
      <p className="mt-4 text-stone-500">{review.description}</p>
    </div>
  );
}
