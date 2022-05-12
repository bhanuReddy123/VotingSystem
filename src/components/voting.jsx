import React from "react";
import { Card, Button } from "react-bootstrap";


function VotingCard(props) {
  let {team,incrementVoteCount,decrementVoteCount}=props;

  return (
   <Card className="m-2"style={{ margin:"auto" }}>
      <Card.Img variant="top" className="bg-white" src={`assets/images/${team.logo}`} />
      <Card.Body>
        <Card.Title className="p-2"><h3>{team.name}</h3></Card.Title>
        <Button className="mb-2"variant="secondary" onClick={() => incrementVoteCount(team._id)}>
          Vote Here!
        </Button>
        <Button color= "#f194ff" className="second "  variant="secondary"  onClick={() => decrementVoteCount(team._id)}>
          Revoke!
        </Button>
      </Card.Body>
      <Card.Footer className="bg-light"><h5>Vote count: {team.votes}</h5></Card.Footer>
    </Card>
  );
}
export default VotingCard;
