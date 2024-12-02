'use client'
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { useState } from "react";

// doc => https://github.com/smastrom/react-rating et https://reactrating.netlify.app/#disabled


interface RatinProps{
    star:number
  }
  
  export const RatingBlog = ({star}:RatinProps) => {
    const [rating, setRating] = useState(star);
  
    return (
      <Rating
        style={{ maxWidth: 100 }}
        value={rating}
        onChange={setRating}
      />
    )
  }