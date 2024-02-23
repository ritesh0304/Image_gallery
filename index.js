const imageJson = [
    { "image": "./Images/1.jpg" },
    { "image": "./Images/2.jpg" },
    { "image": "./Images/3.jpg" },
    { "image": "./Images/4.jpg" },
    { "image": "./Images/2.jpg" },
    { "image": "./Images/6.jpg" },
    { "image": "./Images/1.jpg" },
    { "image": "./Images/2.jpg" },
    { "image": "./Images/3.jpg" },
    { "image": "./Images/4.jpg" },
    { "image": "./Images/2.jpg" },
    { "image": "./Images/6.jpg" },
    { "image": "./Images/1.jpg" },
    { "image": "./Images/2.jpg" },
    { "image": "./Images/3.jpg" },
    { "image": "./Images/4.jpg" },
    { "image": "./Images/2.jpg" },
    { "image": "./Images/6.jpg" },
    { "image": "./Images/1.jpg" },
    { "image": "./Images/2.jpg" },
    { "image": "./Images/3.jpg" },
    { "image": "./Images/4.jpg" },
    { "image": "./Images/2.jpg" },
    { "image": "./Images/6.jpg" },
    { "image": "./Images/2.jpg" },
    
  ];

  // Function to load images from JSON
  function loadImages() {
    const imageGrid = document.getElementById('imageGrid');
    
    // Looping through JSON and create image elements
    imageJson.forEach(item => {
      const imageItem = document.createElement('div');
      imageItem.classList.add('image-item');

      const image = document.createElement('img');
      image.src = item.image;
      image.alt = 'Image';
      
      imageItem.appendChild(image);
      imageGrid.appendChild(imageItem);
    });
  }

  // Calling the function to load images when the page is loaded
  window.addEventListener('load', loadImages);