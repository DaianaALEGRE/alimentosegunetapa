const apiUrl = 'https://api.thecatapi.com/v1/images/search';
function fetchCatImage() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const catImageElement = document.getElementById('catImage');
        catImageElement.src = data[0].url;
      })
      .catch((error) => {
        console.error('Error al obtener la imagen del gato:', error);
      });
  }
  fetchCatImage();
