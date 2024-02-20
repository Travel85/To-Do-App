let textInput = document.querySelector(".todo-input");
let addButton = document.querySelector(".todo-button");
let listGroup = document.querySelector(".list-group");
let deleteButton = document.querySelector(".button-delete");

//Get input from inputfield and create element of type list-group-item
addButton.addEventListener("click", function () {
  console.log(`Add Button clicked!`);

  if (textInput.value != "") {
    let newLi = document.createElement("li");
    let listGroupItems = document.querySelectorAll(".list-group-item");
    if (!isDuplicate(listGroupItems, textInput.value)) {
      newLi.setAttribute("class", "list-group-item");
      listGroup.appendChild(newLi);
      newLi.innerText = textInput.value;
      console.log(`${textInput.value} added to list!`);
    }
  } else {
    console.log(`Input field is empty!`);
  }
});

//create popOver Element
let popOver = new bootstrap.Popover(
  document.querySelector("[data-bs-toggle=popover]")
);

deleteButton.addEventListener("keydown", function (e) {
  console.log(e.code);

  if (e.code === "Enter") {
    console.log("ENTER key pressed!");
    // console.log(listItems);
    let listGroupItems = document.querySelectorAll(".list-group-item");
    removeElement(listGroupItems, textInput.value);
  }
});

//check each element of an array with a searchString and return true if duplicate, else false
function isDuplicate(array, searchString) {
  let duplicate = false;
  array.forEach((element) => {
    if (element.innerText.toUpperCase() === searchString.toUpperCase()) {
      console.log(
        `Search string ${searchString} matches array element ${element.innerText}`
      );
      duplicate = true;
    } else {
      console.log(
        `Search string ${searchString} does not match array element ${element.innerText}`
      );
    }
  });
  return duplicate;
}

//check each element of an array with a searchString and removes the element, if found;
function removeElement(array, searchString) {
  array.forEach((element) => {
    if (element.innerText.toUpperCase() === searchString.toUpperCase()) {
      console.log(`${searchString} removed!`);
      element.remove();
    } else {
      console.log(`${searchString} not found!`);
    }
  });
}
