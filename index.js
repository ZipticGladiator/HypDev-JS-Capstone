const saveButtons = document.querySelectorAll(".save-btn");
const savedItems = JSON.parse(localStorage.getItem("savedItems")) || {};

saveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const illustrationContainer = button.parentNode;
    const illustration = illustrationContainer.querySelector(".illustration");
    const illustrationSrc = illustration.getAttribute("src");
    const itemKey = `item-${Object.keys(savedItems).length + 1}`; // Generate a unique key for the new item
    savedItems[itemKey] = illustrationSrc; // Add the new item to the savedItems object with its key
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    alert(
      `Item added! You have ${
        Object.keys(savedItems).length
      } item(s) in your Save for Later folder.`
    );
  });
});

console.log(JSON.parse(localStorage.getItem("savedItems")));

// Turn the like button red onclick

// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the id "likeBtn"
  var likeBtns = document.querySelectorAll("#likeBtn");

  // Loop through each like button
  likeBtns.forEach(function (btn) {
    // Add a click event listener to the button
    btn.addEventListener("click", function () {
      // Change the background color of the button to red
      btn.style.backgroundColor = "red";

      // Store the liked state in local storage
      localStorage.setItem("liked_" + btn.id, "true");
    });

    // Check if the button has been previously liked
    var isLiked = localStorage.getItem("liked_" + btn.id);
    if (isLiked === "true") {
      // Set the background color to red if previously liked
      btn.style.backgroundColor = "red";
    }
  });
});
