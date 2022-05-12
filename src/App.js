import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./components/voting";
import teamsJson from "./Json File/teams.json";
import "./design/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(teamsJson);
  }, []);

  function incrementVoteCount(teamId) {
    teams = teams.map((team) => {
      if (team._id === teamId) {
        team.votes = team.votes + 1;
      }
      return team;
    });
    setTeams(teams);
  }
  function decrementVoteCount(teamId) {
    teams = teams.map((team) => {
      if (team._id === teamId) {
        team.votes = team.votes - 1;
      }
      return team;
    });
      setTeams(teams);

    
  }

  return (
    <Container className="app">
      <h1 className="text-center mb-5 mx-auto">CHOOSE YOUR TEAM!!!</h1>
      <Row>
        {teams.map((team) => {
          return (
            <Col md={4}>
              <VotingCard
                team={team}
                incrementVoteCount={(teamId) => incrementVoteCount(teamId)}
                decrementVoteCount={(teamId) => decrementVoteCount(teamId)}
              />
            </Col>
          );
        })}
      </Row>
    </Container>

  );
  
  
}
export default App;
