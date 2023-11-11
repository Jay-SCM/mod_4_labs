////////////////////////////////////////////////////////////////////////
////////////////////////  NEWS  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

let news = [
    { id: 1, title: 'Election Results', content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success', content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning', content: "Residents should prepare..." }
];
function updateNewsContainer() {
    const newsContainer = document.getElementById('NewsCont');
    newsContainer.innerHTML = '';
    news.forEach(item => {
        const newsItem = document.createElement('div'); // Create div
        newsItem.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p>`;  // Add title and content
        newsContainer.appendChild(newsItem);});
}
function addNewsItem() { // Add news item
    const newsTitleInput = document.getElementById('news-title');  // Get title and content
    const newsContentInput = document.getElementById('news-content');
    const title = newsTitleInput.value; // Check if both fields are filled
    const content = newsContentInput.value;
    if (title && content) {
        const newItem = { id: news.length + 1, title, content };
        news.unshift(newItem); // Add new item to the beginning of the array
        updateNewsContainer();
        newsTitleInput.value = '';
        newsContentInput.value = '';
    } else {
        alert('Please fill in both title and content fields.');}
}
updateNewsContainer();
// Set interval update - 5 seconds
setInterval(function() {
    news.reverse();
    updateNewsContainer();
}, 5000);



































