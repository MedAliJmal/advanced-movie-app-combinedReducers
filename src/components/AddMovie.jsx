import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../redux/actions";
import { Navigate } from "react-router-dom";

const AddMovie = () => {
  const { isAuth, LoggedUser } = useSelector((state) => state.userReducer);

  const [show, setShow] = useState(false);

  //
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(1);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const changeRating = (number) => {
    if (number < 6 && number > 0) {
      setRating(number);
    } else alert("rating should be between 1 & 5");
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      name: name,
      date: date,
      image: image,
      category: category,
      rating: rating,
    };

    // action dispatch(addMovie(newMovie))
    if (name && date && image && rating && category) {
      dispatch(addMovie(newMovie));
      handleClose();
    } else {
      alert("not acceptable");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {isAuth && LoggedUser.userRole === "Admin" ? (
        <div>
          {" "}
          <Button variant="primary" onClick={handleShow}>
            Add Movie
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form action="" onSubmit={handleAdd}>
                <div>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">Image</label>
                  <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">Rating</label>
                  <input
                    type="number"
                    value={rating}
                    onChange={(e) => changeRating(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">Category</label>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option value="Drama">drama</option>
                    <option value="For kids">kids</option>
                    <option value="Science Fiction">sience fiction</option>
                    <option value="Comedy">comedy</option>
                    <option value="Romance">romance</option>
                  </select>
                </div>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default AddMovie;
