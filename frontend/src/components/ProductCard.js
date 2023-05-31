import React, {useState} from "react";
import "./ProductCard.css";

const ProductCard = (props) => {

    const [editProduct, setEditProduct]=useState({
        title: props.title,
        publisher: props.publisher,
        genre: props.genre,
        price: props.price
    })

  return (
    <div className="product-card">
      <h2>
        <u>{props.title}</u>
      </h2>
      <p>Publisher: {props.publisher}</p>
      <p>Genre: {props.genre}</p>
      <p>Price: {props.price}</p>

      <button onClick={() => props.deleteProduct(props.id)}>Delete</button>
      <button onClick={() => props.editProduct(editProduct)}>Edit</button>
    </div>
  );
};
export default ProductCard;
