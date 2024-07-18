fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    let rows = '';
    data.forEach(post => {
      rows += `
      <div class="mb-4 p-3 bg-info bg-opacity-10 border border-info border rounded">
         <h2 class="mb-4 display-5 text-center fs-2">${post.title}</h2>
         <p class="text-secondary fst-italic mb-4 text-center lead fs-4">${post.body}</p>
         </div>

    `});
    document.getElementById("posts").innerHTML = rows;
    console.log(rows);
  })
  .catch(error => console.log(error));