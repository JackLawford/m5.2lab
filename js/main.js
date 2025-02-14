// Functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none'; // Initially hide comments

function toggleComments() {
  if (commentWrapper.style.display === 'none' || commentWrapper.style.display === '') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
}

showHideBtn.onclick = toggleComments;

// Make button accessible via keyboard
showHideBtn.addEventListener("keydown", function(event) {
  if (event.key === "Enter" || event.key === " ") {
    toggleComments();
    event.preventDefault(); // Prevent scrolling on space key
  }
});

// Functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  if (nameValue === "" || commentValue === "") {
    alert("Both fields must be filled out!");
    return;
  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
}