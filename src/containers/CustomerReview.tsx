import React from "react";
import { Card } from "react-bootstrap";
import CustomerReviewFrom from "../components/CustomerReviewFrom";
import Header from "../shared/Header";

const CustomerReview = () => {
  return (
    <div className="card-review">
      <div className="m-4 bg-color p-4">
        <Header />
        <Card className="mt-4">
          <Card.Body>
            <CustomerReviewFrom />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CustomerReview;
