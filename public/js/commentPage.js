const createNewComment = (event) => {
  event.preventDefault();
  alert(event.target.id);
};

document
  .querySelector(".newCommentBtn")
  .addEventListener("click", createNewComment);
