import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: "",
    comment: "",
  });

  useEffect(() => {
    // Fetch existing reviews from the backend
    fetch("/api/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit new review to the backend
    fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((data) => {
        setReviews((prevReviews) => [...prevReviews, data]);
        setNewReview({ rating: "", comment: "" });
        toast.success("Review submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        toast.error("Failed to submit review.");
      });
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center mb-4">Reviews</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <Label htmlFor="rating">Rating</Label>
          <Input
            type="number"
            id="rating"
            name="rating"
            value={newReview.rating}
            onChange={handleChange}
            required
            min="1"
            max="5"
          />
        </div>
        <div>
          <Label htmlFor="comment">Comment</Label>
          <Textarea
            id="comment"
            name="comment"
            value={newReview.comment}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Submit Review</Button>
      </form>
      <div className="w-full max-w-2xl">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <p className="font-bold">Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;