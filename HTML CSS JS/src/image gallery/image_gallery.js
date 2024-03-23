const imageContainer = document.getElementById("container");

const createElement = (image) => {
  const imageElement = document.createElement("div");
  imageElement.classList.add("figure");
  imageElement.innerHTML = `
    <img src="${image.url}" alt="${image.alt}" />
    <div class="name">${image.alt}</div>
    <div class="figure_content">
      <div class="shareBtn">Share</div
    </div>
    `;
  return imageElement;
};

const fetchImages = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data);
    return data.users.map((user) => {
      return {
        url: user.image,
        alt: user.firstName,
      };
    });
  } catch (error) {
    console.error(error);
  }
};

const createImageGallery = async () => {
  const images = await fetchImages();
  images.forEach((image, index) => {
    const imageElement = createElement(image, index + 1);
    imageContainer.appendChild(imageElement);
  });
};

createImageGallery();
