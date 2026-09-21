import { ProductReview } from "@/app/_lib/types";
import Avatar from "../ui/Avatar";

export default function ReviewCard({ review }: { review: ProductReview }) {
  //First letter of first and last name
  const avatarInitials = review.username
    .split(" ")
    .map((namePart) => namePart.charAt(0).toUpperCase())
    .join("");
  return (
    <div className="p-4 bg-stone-50 shadow-md rounded-lg mb-4">
      <div className="flex flex-row gap-4">
        {/* User Avatar */}
        <Avatar initials={avatarInitials} />
        {/* User Information */}
        <div className="mt-2">
          <h2 className="text-xl font-bold">{review.username}</h2>
          <p>{review.rating} stars</p>
        </div>
      </div>
      {/* Review Description */}
      <p>{review.description}</p>
    </div>
  );
}
