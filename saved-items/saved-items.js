// Get a reference to the unordered list element where we will display the saved items.
const savedItemsList = document.querySelector("#saved-items-list");

// Get the saved items from local storage, or an empty object if there are none.

const savedItems = JSON.parse(localStorage.getItem("savedItems")) || {};
console.log(savedItems);

// Create a function that creates a new list item for each saved item.
function savedItemFunc(savedItemsParam) {
  const listItem = document.createElement("li");
  savedItemsList.appendChild(listItem);

  const image = document.createElement("img");
  image.src = "../" + savedItemsParam;
  listItem.appendChild(image);
}

console.log(
  savedItems.forEach((savedItemsParam) => savedItemFunc(savedItemsParam))
);
