export default function productReducer(product, action) {
  switch (action.type) {
    case "delete-product":
      //remove an object from the array - filter the array looking for the id
      let filteredArray = product.filter((element) => element.id !== action.id);
      return filteredArray;

    case "edit-product":
      //take in the edited object and replace the original in the DOM - map through the product id, if element.id matches the editedElement.id, replace it, else return the original
      let editedArray = product.map((element) =>
        element.id === action.editedObj.id ? action.editedObj : element
      );
      return editedArray;
    default:
      alert("No matching types");
      return product;
  }
}
