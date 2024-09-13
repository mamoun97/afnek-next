import React, { useState } from "react";

interface RatingProps {
  totalStars?: number;
  initialRating?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
}

const sizeMap = {
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32
};

const Rating: React.FC<RatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  size = 'md',  // default to 'md' size
  readonly = false,
  onRatingChange
}) => {
  const [rating, setRating] = useState(initialRating);
  const starSize = sizeMap[size];

  const handleRating = (rate: number) => {
    if (!readonly) {
      setRating(rate);
      if (onRatingChange) {
        onRatingChange(rate);
      }
    }
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={starValue}
            onClick={() => handleRating(starValue)}
            className={`ms-1 ${readonly ? "cursor-default" : "cursor-pointer"} ${
              starValue <= rating ? "text-yellow-300" : "text-gray-300"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
            width={starSize}
            height={starSize}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
