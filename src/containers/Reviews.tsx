import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { CustomerReviewParams } from "../Interfaces/CustomerReviewParams";
import HeaderReview from "../shared/HeaderReview";
const getReviews = () => {
  const data = localStorage.getItem("reviews");
  if (!!data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem("reviews", JSON.stringify([]));
  }
};

const Reviews = () => {
  const [reviews, setReviews] = useState<CustomerReviewParams>(getReviews());

  return (
    <div className="card-review">
      <div className="m-4 bg-color-review p-4">
        <HeaderReview reviews={reviews} />
        <div className="table-responsive" style={{ height: "50%" }}>
          <Table bordered>
            <thead>
              <tr className="text-center bg-color-table white-space">
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="">Quality of services Rating</th>
                <th>Quality of beverage Rating</th>
                <th>Over all dining experience Rating</th>
                <th>Restaurant Clean experience Rating</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length < 1 ? (
                <div className="d-flex justify-content-center p-2 mt-2">No Reviews Found</div>
              ) : (
                reviews.map((review: CustomerReviewParams) => {
                  return (
                    <tr className="text-center" key={review.email}>
                      <td>{review.customer_name}</td>
                      <td>{review.email}</td>
                      <td>{review.phone}</td>
                      <td>{review.quality_of_service}</td>
                      <td>{review.quality_of_beverage}</td>
                      <td>{review.over_all_dining_experience}</td>
                      <td>{review.restaurant_clean}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
