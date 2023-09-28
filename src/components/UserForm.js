import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Form from "react-bootstrap/Form";
function CreateForm() {
  const [inputValue, setInputValue] = useState();
  const [totalAmount, setTotalAmount] = useState();

  const onChangeAmount = (e) => {
    var data = e.target.value;
    if (data > 0) {
      setInputValue(data);
      setTimeout(() => {
        setTotalAmount(data);
      }, [1500]);
    
    } else {
      setInputValue("");
      
    }
  };

  return (
    <div>
      <Container
        style={{
          backgroundColor: "#202020",
          height: "750px",
        }}
      >
        <Navbar
          collapseOnSelect
          bg="dark"
          data-bs-theme="dark"
          className="bg-body-tertiary justify-content-between"
          style={{ top: "35px" }}
        >
          <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Open</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Close</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled">Boost</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>

        <Row style={{ top: "80px" }}>
          <Col md={8}>
            <Card
              className="mb-12"
              style={{
                backgroundColor: "#202020",
                borderColor: "#606060",
                top: "60px",
              }}
            >
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "white" }}>
                    Select Asset
                  </Form.Label>
                </Form.Group>
                <Form.Select
                  style={{ backgroundColor: "#202020", color: "white" }}
                  className="mb-3"
                >
                  <option style={{ color: "#white" }}>ETH</option>
                </Form.Select>
                <Form.Control
                  style={{ backgroundColor: "#202020", color: "white" }}
                  className="mb-3"
                  type="number"
                
                  placeholder="Enter Supply Amount"
                  value={inputValue}
                  onChange={onChangeAmount}
                />

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    style={{ backgroundColor: "#202020" }}
                    as="textarea"
                    rows={3}
                    disabled
                  />
                </Form.Group>
                <div>
                  <Button variant="light">Excute</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="mb-3"
              style={{
                height: "200px",
                backgroundColor: "#202020",
                borderColor: "#606060",
                top: "60px",
              }}
            >
              <Card.Body>
                <Card.Text style={{ color: "white" }}>{totalAmount}</Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="mb-3"
              style={{
                height: "200px",
                backgroundColor: "#202020",
                borderColor: "#606060",
                top: "70px",
              }}
            ></Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateForm;
