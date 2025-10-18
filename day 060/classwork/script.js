container.innerHTML = `
    <h2>New title</h2>
    <p>paragraph</p>
    <button>Click Here</button>
`;

  const boxes = document.getElementsByClassName("box");
  console.log(boxes);

  boxes[0].style.color = "blue";

  const paragraphs = document.getElementsByTagName("p");
  console.log(paragraphs);

  paragraphs[1].textContent = "Changed p";

  container.innerHTML = "<b>Bold Text</b>";
  container.textContent = "<b>Bold Text</b>";