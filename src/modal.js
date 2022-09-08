import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class Modalform extends React.Component {

render(){
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A New Book </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.addBook}>
            <Form.Group className="mb-4">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter a book name"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter a description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select  onChange={this.props.handleOnChange}>
              <option>Choose a Status</option>
                <option value="Life Changing">noval</option>
                <option value="Favorite Five">story</option>
                <option value="Reccomended To Me">short story</option>
              </Form.Select>
            </Form.Group>
            <Button variant="secondary" type="submit" >
              Add Book
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

}
export default Modalform;