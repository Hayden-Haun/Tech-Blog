//FUNCTION TO FETCH /api/posts/:post_id
const renderCommentsPage = (event) => {
  event.preventDefault();

  //pull new post data from input fields
  const post_id = document.querySelector("#post_title_input").value.trim();

  if (post_id) {
    const response = await fetch("api/posts/new", {
      method: "POST",
      body: JSON.stringify({ post_title, post_author, post_text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //   alert("reponse ok ");
      document.location.replace("/");
    } else {
      alert("failed");
    }
  }
};

//EVENT LISTENER FOR BUTTONS

document
  .querySelector(".viewCommentsButton")
  .addEventListener("click", renderCommentsPage);
