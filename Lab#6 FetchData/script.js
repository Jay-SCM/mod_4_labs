////////////////////////////////////////////////////////////////////////
////////////////////////  FETCH DATA  //////////////////////////////////
////////////////////////////////////////////////////////////////////////

    function fetchPosts() { // Fetch posts from API
    const postLimit = document.getElementById('post-limit').value;  // Get post limit from input
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_limit=${postLimit}`  // Create API URL
    fetch(apiUrl) // Fetch data
    .then(response => {
    if (!response.ok) {  // Check if response is OK
    throw new Error(`HTTP error! Status: ${response.status}`);} // Throw error
    return response.json();}) // Parse response to JSON
    .then(posts => { // Return JSON data
    displayPosts(posts);}) // Display posts
    .catch(error => {
    console.error('Error fetching posts:', error.message);});}
    function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container'); // Get posts container
    postsContainer.innerHTML = ''; // Clear container
    posts.forEach(post => { // Loop through posts
    const postCard = document.createElement('div'); // Create post card
    postCard.classList.add('col-md-4', 'mb-4');  // Add classes to card element (bootstrao class)
        // html for card element
    postCard.innerHTML = ` 
          <div class="card"> 
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
            </div>
          </div>
        `;
    postsContainer.appendChild(postCard);});}
    // fetch on page load with  limit
    document.addEventListener('DOMContentLoaded', fetchPosts);
