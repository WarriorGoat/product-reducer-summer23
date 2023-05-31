import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  const [editBtn, setEditBtn] = useState(false);
  const [editProduct, setEditProduct] = useState({
    id: props.id,
    title: props.title,
    publisher: props.publisher,
    genre: props.genre,
    price: (props.price)
  });

  const onChangeHandler = (e) => {
    setEditProduct({
      ...editProduct,
      [e.target.name]: e.target.value,
    });
  };

  const saveProduct = () => {
    props.editProduct(editProduct);
    setEditBtn(false);
  };

  return (
    <div className="product-card">
      <h2>
        <u>{props.title}</u>
      </h2>
      {editBtn ? (
        <>
          <p>
            Publisher:{" "}
            <input
              type="text"
              name="publisher"
              value={editProduct.publisher}
              onChange={onChangeHandler}
            />{" "}
          </p>
          <p>
            Genre:{" "}
            <input
              type="text"
              name="genre"
              value={editProduct.genre}
              onChange={onChangeHandler}
            />
          </p>
          <p>
            Price:{" $"}
            <input
              type="number"
              name="price"
              min="0"
              step = "0.01"
              value={editProduct.price}
              onChange={onChangeHandler}
            />
          </p>
          <button onClick={saveProduct}>Save Changes</button>
          <button onClick={() => setEditBtn(!editBtn)}>Cancel</button>
        </>
      ) : (
        <>
          <p>Publisher: {props.publisher}</p>
          <p>Genre: {props.genre}</p>
          <p>Price: ${props.price}</p>
          <button onClick={() => setEditBtn(!editBtn)}>Edit</button>
        </>
      )}
      <button onClick={() => props.deleteProduct(props.id)}>Delete</button>
    </div>
  );
};
export default ProductCard;
