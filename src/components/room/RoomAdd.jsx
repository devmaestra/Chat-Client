import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter,
  ListGroup, 
  ListGroupItem,
} from "reactstrap";

function RoomAdd(props) {

    const navigate = useNavigate();
    
  return (
    <>
      <Card
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardHeader>Rooms</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Rooms Available</CardTitle>
          <CardText>
            <div>
              <ListGroup>
                <ListGroupItem action active href="#" tag="a">
                  Introductions
                </ListGroupItem>
                <ListGroupItem action href="#" tag="a">
                  Music Room
                </ListGroupItem>
                <ListGroupItem action href="#" tag="a">
                  Coding Room
                </ListGroupItem>
                <ListGroupItem action href="#" tag="a">
                  Job Room
                </ListGroupItem>
                <ListGroupItem action href="#" tag="a">
                  Cat Room
                </ListGroupItem>
              </ListGroup>
            </div>
          </CardText>
        </CardBody>
        <CardFooter>
        <Button type='submit' onClick={() => navigate('/')}>Add</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default RoomAdd;
