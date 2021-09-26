const createNewPost = async (event) => {
  event.preventDefault();

  //pull new post data from input fields
  const post_title = document.querySelector("#post_title_input").value.trim();
  const post_text = document.querySelector("#post_text_input").value.trim();

  //Need to update to pull req.session.user_id
  const post_author = 7;

  if (post_title && post_text) {
    const response = await fetch("api/posts/new", {
      method: "POST",
      body: JSON.stringify({ post_title, post_author, post_text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("reponse ok ");
      document.location.replace("/");
    } else {
      alert("failed");
    }
  }
};

document
  .querySelector(".submitPostBtn")
  .addEventListener("click", createNewPost);
