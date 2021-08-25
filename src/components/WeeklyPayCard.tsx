import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const WeeklyPayCard = () => {
  return (
    <Container id="wpCard">
      <Card>
        <Card.Header>Not Final Pay</Card.Header>
        <Card.Body id="wpBody">
          <Card.Title>Driver Week Pay Breakdown</Card.Title>
          
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WeeklyPayCard;
