import React, { useState } from "react";
import { Col, Container, Form, Input, Label, Row, Button } from "reactstrap";
import toast, { Toaster } from "react-hot-toast";

const CarRequestForm = () => {
  const notify = (message) => toast(message);
  const [carModel, setCarModel] = useState("");
  const [price, setPrice] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [maxPictures, setMaxPictures] = useState(10);
  const [pictures, setPictures] = useState([]);

  const handlePictureUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length <= maxPictures) {
      setPictures(files);
    } else {
      notify("Please select up to 10 images.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="car-request-page">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="w-100 m-0">
            <h3 className="text-white">Car Selling Request Form</h3>
            <p className="text-white">
              Welcome to the Car Selling Request Form. This form allows you to
              submit your vehicle's information along with your personal
              details. You can provide details such as the car model, price,
              phone number, and city. Additionally, you can upload pictures of
              your vehicle. Please note that you can upload a maximum of 10
              pictures. Before submitting, you will be able to preview all
              uploaded pictures. Upon submission, the data will be sent to our
              backend to create an entry, with each image assigned a live URL
              for future reference. Thank you for choosing our platform for your
              car selling needs.
            </p>
            <Col xl={4} lg={6} md={6} className="my-2">
              <Label className="text-white">Car Model:</Label>

              <Input
                className="car-selling-input"
                type="text"
                placeholder="Example: Honda Civic 2019"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                minLength={3}
                required
              />
            </Col>
            <Col xl={4} lg={6} md={6} className="my-2">
              <Label className="text-white">Price:</Label>

              <Input
                className="car-selling-input"
                type="number"
                placeholder="Example: 200000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Col>
            <Col xl={4} lg={6} md={6} className="my-2">
              <Label className="text-white">Phone Number:</Label>

              <Input
                className="car-selling-input"
                type="tel"
                placeholder="Example: 03410491218"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                pattern="[0-9]{11}"
                required
              />
            </Col>
            <Col xl={4} lg={6} md={6} className="my-2">
              <Label className="text-white">Max Number of Pictures:</Label>

              <Input
                className="car-selling-input"
                type="number"
                value={maxPictures}
                onChange={(e) => setMaxPictures(e.target.value)}
                min={1}
                max={10}
                required
              />
            </Col>
            <Col xl={4} lg={6} md={6} className="my-2">
              <Label className="text-white">Pictures:</Label>
              <Input
                className="car-selling-input"
                type="file"
                accept="image/*"
                multiple
                onChange={handlePictureUpload}
              />
            </Col>
            <Col xl={12} lg={12} md={12}>
              <div className=" d-flex flex-wrap gap-2 my-2">
                {pictures.map((picture, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(picture)}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
              <Button className="login-btn my-2" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Toaster />
    </div>
  );
};

export default CarRequestForm;
