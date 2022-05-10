import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Listcard({ data }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
      />
      <Card.Body>
        <Card.Title>{data.id}</Card.Title>
        <Card.Text>Name: {data.name} </Card.Text>
        <Card.Text>Email: {data.email}</Card.Text>
      </Card.Body>

      <Card.Text>Address</Card.Text>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Street: {data.address.street}</ListGroupItem>
        <ListGroupItem>Suite: {data.address.suite}</ListGroupItem>
        <ListGroupItem>City: {data.address.city}</ListGroupItem>
        <ListGroupItem>Phone: {data.address.zipcode}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Text>CompanyName: {data.company.name}</Card.Text>

        <Card.Link href={data.website}>WWW.{data.company.name}.com</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Listcard;
