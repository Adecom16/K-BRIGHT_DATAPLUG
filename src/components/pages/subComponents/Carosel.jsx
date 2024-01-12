import React from "react";
// import "./CustomerReviewCarousel.css"; // Import your custom styles if needed

function CustomerReviewCard({ text, author, image }) {
  return (
    <div className="col-md-4">
      <div className="review-card">
        <div className="card-body">
          <p className="card-text">{text}</p>
          <p className="card-author">- {author}</p>
        </div>
      </div>
    </div>
  );
}

function CustomerReviewCarousel() {
  const reviews = [
    {
      id: 1,
      text: "Great product! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
    },
    {
      id: 2,
      text: "Excellent service! Sed posuere consectetur est at lobortis.  ",
      author: "Jane Smith",
    },
    {
      id: 3,
      text: "Highly recommended! Maecenas sed diam eget risus varius blandit ",
      author: "Bob Johnson",
    },
    {
      id: 4,
      text: "Amazing experience! Maecenas sed diam eget risus varius blandit ",
      author: "Alice Johnson",
    },
    {
      id: 5,
      text: "Top-notch quality! Maecenas sed diam eget risus varius blandit.",
      author: "Charlie Johnson",
    },
    {
      id: 6,
      text: "Top-notch quality! Maecenas sed diam eget risus varius blandit.",
      author: "Charlie Johnson",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {reviews.map((review) => (
          <CustomerReviewCard
            key={review.id}
            text={review.text}
            author={review.author}
            image={review.image}
          />
        ))}
      </div>
      <br/>
    </div>
  );
}

export default CustomerReviewCarousel;
