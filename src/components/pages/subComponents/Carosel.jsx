import React from "react";
// import "./CustomerReviewCarousel.css"; // Import your custom styles if needed

function CustomerReviewCard({ text, author, image }) {
  return (
    <div className="review-card">
      <div className="card-body">
        {/* <img className="card-image" style={{ width: "100%", height: "auto", objectFit: "cover", }} src={image} alt="Review" /> */}
        <p className="card-text">{text}</p>
        <p className="card-author">- {author}</p>
      </div>
    </div>
  );
}

function CustomerReviewCarousel() {
  const reviews = [
    {
      id: 1,
      text: "Great product! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.",
      author: "John Doe",
    },
    {
      id: 2,
      text: "Excellent service! Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
      author: "Jane Smith",
   
    },
    {
      id: 3,
      text: "Highly recommended! Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.",
      author: "Bob Johnson",
    },
    {
      id: 4,
      text: "Amazing experience! Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.",
      author: "Alice Johnson",
    },
    {
      id: 5,
      text: "Top-notch quality! Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.",
      author: "Charlie Johnson",
    },
  ];

  return (
    <div className="review-carousel">
      {reviews.map((review) => (
        <CustomerReviewCard
          key={review.id}
          text={review.text}
          author={review.author}
          image={review.image}
        />
      ))}
    </div>
  );
}

export default CustomerReviewCarousel;
