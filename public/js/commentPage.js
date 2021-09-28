const createNewComment = async (event) => {
  event.preventDefault();
  //   alert(event.target.id);
  const comment_parent_post = event.target.id;
  const comment_author = 20;
  const comment_text = document.querySelector("#newComment").value.trim();

  if (comment_text) {
    const response = await fetch("/api/comments/new", {
      method: "POST",
      body: JSON.stringify({
        comment_parent_post,
        comment_author,
        comment_text,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //   alert("working");
      document.location.replace(`/api/posts/${event.target.id}`);
    } else {
      alert("FAILED");
    }
  }
};

document
  .querySelector(".newCommentBtn")
  .addEventListener("click", createNewComment);
