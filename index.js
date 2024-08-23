
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const postsContainer = document.getElementById('posts-container');
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post','col-md-6','mb-4','border', 'border-danger', 'rounded');
      postElement.innerHTML = `
       <div class=" text-center">
         <h2 class="fs-3 mb-4">${post.title}</h2>
         <p class="text-secondary fst-italic mb-4 lead fs-5">${post.body}</p>
       </div>

    `;
    postsContainer.appendChild(postElement);
  });
});
