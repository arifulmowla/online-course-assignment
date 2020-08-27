import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./couses.css";
import fakeData from "../../fakeData/fakeData";
import { useState } from "react";

const Courses = (props) => {
  const [data, setData] = useState(fakeData);
  const addCart = props.addCart;
  return (
    <div className="couses">
      <Container>
        <h1 className="text-center">Our Courses</h1>
        <br />

        <div className="row">
          {data.map((item) => (
            <div className="col-md-4 course" key={item.id}>
              <Card>
                <Card.Img className="course-img" src={item.image}></Card.Img>
                <div className="card-info">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>By {item.author}</Card.Text>
                  <Card.Text className="price">Price: ${item.price}</Card.Text>
                  <Button
                    className="btn-couse"
                    varient="primary"
                    onClick={(e) => {
                      addCart(item);
                      e.target.innerHTML = "Added";
                      e.target.disabled = true;
                    }}
                  >
                    Enroll Now
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
