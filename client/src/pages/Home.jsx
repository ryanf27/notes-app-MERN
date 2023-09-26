import Navigation from "../components/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgHero from "../assets/img1.svg";

const Home = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Col>
            <img src={imgHero} alt="" />
          </Col>
          <Col>
            <h1>
              Take notes and stay organized with our easy-to-use note-taking
              app.
            </h1>
            <p>
              Our app is simple to use, yet powerful enough to handle all of
              your note-taking needs. You can create text notes, to-do lists,
              images, and even audio recordings. You can also organize your
              notes into notebooks and folders for easy access
            </p>
            <button>Sign up for a free trial today!</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
