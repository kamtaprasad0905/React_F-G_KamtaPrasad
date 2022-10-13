import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import routes from "../constants/routes";

const getReviews = () => {
  const data = localStorage.getItem("reviews");
  if (!!data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem("reviews", JSON.stringify([]));
  }
};

const CustomerReviewFrom = () => {
  const review = ["Excellent", "Good", "Bad", "Fair"];
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>();
  const [customerName, setCustomerName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [qualityOfService, setQualityOfService] = useState<string>("");
  const [qualityOfBeverage, setQualityOfBeverage] = useState<string>("");
  const [restaurantClean, setRestaurantClean] = useState<string>("");
  const [overAllDiningExperience, setOverAllDiningExperience] = useState<string>("");
  const [reviewCategories, setReviewCategories] = useState<any>(review);
  const [reviews, setReviews] = useState<any>(getReviews());
  const [error, setError] = useState<any>("");
  const navigate = useNavigate();
  const resetFields = () => {
    setCustomerName("");
    setEmail("");
  };
  const phoneValidation = phone ? (isValidPhoneNumber(phone) ? "valid" : "notValid") : "required";
  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void }) => {
    const form = event.currentTarget;
    setLoading(false);
    if (form.checkValidity() === true && phoneValidation === "valid") {
      event.preventDefault();
      event.stopPropagation();
      const review = {
        customer_name: customerName,
        email,
        phone,
        quality_of_beverage: qualityOfBeverage,
        quality_of_service: qualityOfService,
        over_all_dining_experience: overAllDiningExperience,
        restaurant_clean: restaurantClean,
      };

      setError(phone ? (isValidPhoneNumber(phone) ? "valid" : "notValid") : "required");
      setReviews([...reviews, review]);
      resetFields();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate(routes.thanks);
      }, 1000);
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setLoading(true);
    event.preventDefault();
    setError(phone ? (isValidPhoneNumber(phone) ? "valid" : "notValid") : "required");
    setValidated(true);
  };

  useEffect(() => {
    if (reviews) {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  return (
    <Form noValidate validated={validated} className="mt-4 mx-3" onSubmit={handleSubmit}>
      <div className="row ">
        <div className="col-sm-6">
          <Form.Group className="mb-3">
            <Form.Label className="h5 fw-bold">Customer Name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => {
                setCustomerName(e.target.value);
              }}
              placeholder="E.g. Jon show"
            />
            <Form.Control.Feedback type="invalid">Please enter a customer name.</Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="col-sm-6">
          <Form.Group className="mb-3">
            <Form.Label className="h5 fw-bold">Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              required
              placeholder="E.g. abc@gmail.com"
            />
            <Form.Control.Feedback type="invalid">Please enter valid email address</Form.Control.Feedback>
          </Form.Group>
        </div>
      </div>
      <div className="col-sm-6">
        <span className="fw-bold h5">Phone</span>
        <span className="text-danger fw-bold h5">*</span>
        <Form.Group className="me-2">
          <PhoneInput
            className="form-control d-flex"
            placeholder="Enter phone number"
            value={phone}
            defaultCountry="IN"
            countryCallingCodeEditable={false}
            onChange={setPhone}
          />
          {error && phoneValidation === "valid" ? (
            <div className="text-success">Valid</div>
          ) : error && phoneValidation === "notValid" ? (
            <div className="text-danger">Please enter valid phone number</div>
          ) : error && phoneValidation === "required" ? (
            <div className="text-danger">Phone number is required</div>
          ) : null}
        </Form.Group>
      </div>

      <div className="row mt-4">
        <div className="col-lg-6">
          <span className="fw-bold h5">Please rate the quality of the service you received from your host.</span>
          <span className="text-danger fw-bold h5">*</span>
          <Form.Group className="row">
            {reviewCategories.map((item: any) => (
              <div className="d-flex mb-3 mt-2 col-sm-3">
                <Form.Check
                  name={item}
                  required={!(qualityOfService.length > 0)}
                  feedbackType="invalid"
                  checked={item === qualityOfService ? true : false}
                  onChange={(e) => setQualityOfService(e.target.name)}
                />
                <div className="m-2 me-5 fw-bold">{item}</div>
              </div>
            ))}
          </Form.Group>
        </div>

        <div className="col-lg-6">
          <span className="fw-bold h5">Please rate the quality of your beverage.</span>
          <span className="text-danger fw-bold h5">*</span>
          <Form.Group className="row">
            {reviewCategories.map((item: any) => (
              <div className="d-flex mb-3 mt-2 col-sm-3">
                <Form.Check
                  name={item}
                  required={!(qualityOfBeverage.length > 0)}
                  checked={item === qualityOfBeverage ? true : false}
                  onChange={(e) => setQualityOfBeverage(e.target.name)}
                />
                <div className="m-2 ms-3 fw-bold">{item}</div>
              </div>
            ))}
          </Form.Group>
        </div>
      </div>
      <div className="row mt-4 mb-5">
        <div className="col-lg-6">
          <span className="fw-bold h5">Was our restaurant clean?</span>
          <span className="text-danger fw-bold h5">*</span>
          <Form.Group className="row">
            {reviewCategories.map((item: any) => (
              <div className="d-flex mb-3 mt-2 col-sm-3">
                <Form.Check
                  required={!(restaurantClean.length > 0)}
                  name={item}
                  checked={item === restaurantClean ? true : false}
                  onChange={(e) => setRestaurantClean(e.target.name)}
                />
                <div className="m-2 ms-3 fw-bold">{item}</div>
              </div>
            ))}
          </Form.Group>
        </div>
        <div className="col-lg-6 mb-5">
          <span className="fw-bold h5">Please rate your overall dining experience.</span>
          <span className="text-danger fw-bold h5">*</span>
          <Form.Group className="row">
            {reviewCategories.map((item: any) => (
              <div className="d-flex mb-3 mt-2 col-sm-3">
                <Form.Check
                  required={!(overAllDiningExperience.length > 0)}
                  name={item}
                  checked={item === overAllDiningExperience ? true : false}
                  onChange={(e) => setOverAllDiningExperience(e.target.name)}
                />
                <div className="m-2 ms-3 fw-bold">{item}</div>
              </div>
            ))}
          </Form.Group>
        </div>
      </div>
      <Button variant="success" disabled={loading} className="submit-btn" type="submit">
        {!loading ? "Submit Review" : "Submitting"}
      </Button>
      {!loading ? (
        <Link to={routes.allReviews}>
          <Button variant="danger" className="cancel-btn">
            Cancel
          </Button>
        </Link>
      ) : null}
    </Form>
  );
};

export default CustomerReviewFrom;
