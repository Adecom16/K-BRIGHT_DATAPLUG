import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomerReviewCard({ text, author, image }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 border " style={{ border: "blue" }}>
        <div className="card-body">
          <p className="card-text " style={{ color: "black" }}>
            {text}
          </p>
        </div>
        <div className="card-footer " style={{ backgroundColor: "blue" }}>
          <small className="text-white">- {author}</small>
        </div>
      </div>
    </div>
  );
}

function CustomerReviewCarousel() {
  const reviews = [
    {
      id: 1,
      text: "We recently purchased a product, and it has exceeded our expectations! The quality is fantastic, and it truly enhances our daily lives. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Happy Customer",
    },
    {
      id: 2,
      text: "The service provided by this company is outstanding! From the initial contact to the final delivery, everything was smooth and hassle-free. Sed posuere consectetur est at lobortis.  ",
      author: "Satisfied Customer",
    },
    {
      id: 3,
      text: "I highly recommend this company! The team is professional, and their attention to detail is impressive. Maecenas sed diam eget risus varius blandit ",
      author: "Impressed Client",
    },
    {
      id: 4,
      text: "Our experience with this company was amazing! The support and assistance we received were exceptional. Maecenas sed diam eget risus varius blandit ",
      author: "Delighted Customer",
    },
    {
      id: 5,
      text: "The quality of their products is top-notch! We are extremely satisfied with our purchase. Maecenas sed diam eget risus varius blandit.",
      author: "Satisfied Customer",
    },
    {
      id: 6,
      text: "Exceptional service and product quality! Maecenas sed diam eget risus varius blandit.",
      author: "Happy Client",
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
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerReviewCarousel;
