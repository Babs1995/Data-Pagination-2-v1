/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const itemsPerPage = 9;
function showPage(list, page) {
  // create two variables which will represent the index for the first and last student on the page
  //   Now create two variables, startIndex and endIndex, which will calculate the index for the first and last student to display on the page. Use the page parameter and some basic math to calculate the value of these variables like so:
  const startIndex = page * itemsPerPage - itemsPerPage;
  const endIndex = page * itemsPerPage;
  // select the element with a class of `student-list` and assign it to a variable
  const studentList = document.querySelector(".student-list");
  // set the innerHTML property of the variable you just created to an empty string
  studentList.innerHTML = "";
  // loop over the length of the `list` parameter
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      let studentItem = `<li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
          
          <h3>${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${list[i].registered.date}</span>
        </div>
      </li>`;
      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  }
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  // create a variable to calculate the number of pages needed
  var numOfPages = Math.ceil(list.length / itemsPerPage);
  // select the element with a class of `link-list` and assign it to a variable
  const linkList = document.querySelector(".link-list");
  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = "";
  // loop over the number of pages needed
  for (let i = 1; i <= numOfPages; i++) {
    let button = `<li>
   <button type="button">${i}</button>
 </li>`;
    // create the elements needed to display the pagination button
    // insert the above elements
    linkList.insertAdjacentHTML("beforeend", button);
    let activeButton = document.querySelector("li button");
    activeButton.className = "active";
  }
  // give the first pagination button a class of "active"
  linkList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let activeClass = document.querySelector(".active");
      activeClass.className = "";
      e.target.className = "active";
      showPage(list, e.target.textContent);
    }
  });
}
// if the click target is a button:
// remove the "active" class from the previous button
// add the active class to the clicked button
// call the showPage function passing the `list` parameter and page to display as arguments
// Call functions
showPage(data, 1);
addPagination(data);