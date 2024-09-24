import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editMovie } from "../redux/actions";

const EditMovie = ({ el }) => {
  const [show, setShow] = useState(false);
  //   edited movie states
  const [name, setName] = useState(el.name);
  const [image, setImage] = useState(el.image);
  const [date, setDate] = useState(el.date);
  const [rating, setRating] = useState(el.rating);
  const [category, setCategory] = useState(el.category);
  // redux related
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const modifiedMovie = {
      id: el.id,
      name: name,
      date: date,
      image: image,
      rating: rating,
      category: category,
    };

    if (name && date && image && rating && category) {
      dispatch(editMovie(modifiedMovie));
      handleClose();
    } else {
      alert("not acceptable");
    }
    // dispatch action editMovie(editedMovie)
  };

  const changeRating = (number) => {
    if (number < 6 && number > 0) {
      setRating(number);
    } else alert("rating should be between 1 & 5");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={handleSubmit}>
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
  );
};

export default EditMovie;
