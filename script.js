const img = document.querySelector('img');
fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=zuD3fEZOY5mI9S52DPYcyuU44zXuV4LW&s=skating'
).then(response => {
  console.log(response.json());
});
