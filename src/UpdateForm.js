import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
//import "./style.css"

class UpdateForm extends React.Component {
  render() {
    return (
      <Modal show={this.props.showFlag} onHide={this.props.handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.updateBook}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="BookTitle"
                name="title"
                defaultValue={this.props.currentBook.title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book description"
                name="description"
                defaultValue={this.props.currentBook.description}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select id="status" defaultValue={this.props.currentBook.status}>
              <option>Choose a Status</option>
                <option value="story">Life Changing</option>
                <option value="noval">Favorite Five</option>
                <option value="short story">Reccomended To Me</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit"   >
              update data
            </Button>
            <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleCloseUpdate}>
            Close
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateForm;