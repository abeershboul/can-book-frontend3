import React from "react";
import axios from "axios";
import UpdateForm from "./UpdateForm";
import Button from "react-bootstrap/Button";
import { withAuth0 } from '@auth0/auth0-react';


import Modalform from "./modal";
// import Carousel from 'react-bootstrap/Carousel';




class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      show: false,
      status: "",
      books: [],
      showFlag: false,
      currentBook: {},
      email : this.props.auth0.user.email
    };
  }

  componentDidMount = () => {
    axios

      .get(`https://serveralth.herokuapp.com/books`)

      .then((result) => {
        console.log(result);
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleOnChange = (event) => {
    this.setState({
      status: event.target.value,
    });
  };

  addBook = (event) => {
    event.preventDefault();
    //const { user } = this.props.auth0;
    const obj = {
      bookTitle: event.target.title.value,
      bookDescription: event.target.description.value,
      bookStatus:this.state.status,
      email: this.state.email
    };
    console.log(obj);
    axios
      .post(`https://serveralth.herokuapp.com/addBook`, obj)
      .then((result) => {
        return this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.handleClose();
  };

  deleteBook = (id) => {
    axios

      .delete(`https://serveralth.herokuapp.com/deleteBook/${id}email=${this.state.email}`) //http://localhost:3010/deleteCat?id=${id}
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  openForm = (item) => {
    this.setState({
      showFlag: true,
      currentBook: item,
    });
  };

  handleOnChangeUpdate = (event) => {
    this.setState({
      status: event.target.value,
    });
  };

  handleCloseUpdate = () => {
    this.setState({
      showFlag: false,
    });
  };

  updateBook = (event) => {

    event.preventDefault();
    //const { user } = this.props.auth0;

    let obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status : event.target.status.value,
      email: this.state.email
    };
    const id = this.state.currentBook._id;
    axios

 .put(`https://serveralth.herokuapp.com/updateBook/${id}`, obj)
 .then((result) => {
    this.setState({
      books: result.data,
    });
    this.handleCloseUpdate();
  })
  .catch((err) => {
    console.log(err);
  });
};

render() {
return (
  <div>
    <h1>Book store</h1>
    <div id="form">
      <>
        <Button
          style={{ color: "red" }}
          size="lg"
          onClick={this.handleShow}
        >
          Add a Book!
        </Button>

        <Modalform
          show={this.state.show}
          handleClose={this.handleClose}
          addBook={this.addBook}
          handleOnChange={this.handleOnChange}
        />
      </>
    </div>
    <div>
      {this.state.books.length ? (
        <div>
          {this.state.books.map((item) => {
            return (
              <div style={{ color: "red" }}>
                <h3 style={{ color: "#F65A83" }}>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.status}</p>
                <p>added by : {this.state.email}</p>
                <Button
                  style={{ color: "#B9005B" }}
        
                  onClick={() => this.deleteBook(item._id)}
                >
                  Delete Book!
                </Button  >
                <button onClick={() => this.openForm(item)}>update</button>
                <UpdateForm
                  showFlag={this.state.showFlag}
                  handleCloseUpdate={this.handleCloseUpdate}
                  updateBook={this.updateBook}
                  currentBook={this.state.currentBook}
                  handleOnChangeUpdate={this.state.handleOnChangeUpdate}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <h3>No Books Found :(</h3>
      )}
    </div>
  </div>
);
}
}

export default withAuth0(BestBooks);  