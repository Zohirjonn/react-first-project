import React from "react";
import "./Backend.css";
import Fade from "react-reveal/Fade";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Container,
  Row,
  Table,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

class Backend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      photos: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => {
        this.setState({ users: res });
      });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        this.setState({ posts: res });
      });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((res) => {
        this.setState({ photos: res });
        console.log(res);
      });
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>N:</th>
                  <th>First Name</th>
                  <th>Phone number</th>
                  <th>Website</th>
                </tr>
              </thead>
              {this.state.users.map((user) => (
                <tbody>
                  <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Row>
          <Row>
            <Col>
              <Table bordered hover responsive>
                <thead>
                  <tr>
                    <th>N:</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>UserId</th>
                  </tr>
                </thead>
                {this.state.posts.map((post) => (
                  <tbody>
                    <tr>
                      <th scope="row">{post.id}</th>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                      <td>{post.userId}</td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </Col>
          </Row>
          <Row>
            <Row>
              {this.state.photos.map((photo) => (
                <Col md="3">
                  <Fade bottom>
                    <Card id="img" key={photo.id}>
                      <CardHeader className="photo">
                        <LazyLoadImage
                          src={photo.url}
                          // width={600}
                          // height={400}
                          alt={photo.title}
                        />{" "}
                        {/* <img src={photo.url} alt={photo.title} /> */}
                      </CardHeader>
                      <CardBody className="cardbody">
                        <p>{photo.title}</p>
                      </CardBody>
                    </Card>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </>
    );
  }
}

export default Backend;
