import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Success from "../assests/Success";
import routes from "../constants/routes";

const ThankYouCard = () => {
  return (
    <div className="card-review">
      <div className="d-block">
        <div className="d-flex justify-content-center mb-4">
          <div style={{ width: "100px" }}>
            <Success color="#34a853" width="50px" />
          </div>
        </div>
        <div className="h1 text-center fw-bold">Thank you for providing the feedback</div>
        <div className="h2 fw-normal text-center">We will work towards improving your experience</div>
        <div className="d-flex mt-5 justify-content-center ">
          <Link className="w-25" to={routes.allReviews}>
            <Button variant="success" className="w-100 bg-btn-color" size="lg">
              Close
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouCard;
