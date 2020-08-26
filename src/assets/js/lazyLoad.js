const nodes = document.querySelectorAll("img");

let nodeOptions = {};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    image.src = image.src.replace("10", "800");
    observer.unobserve(image);
  });
}, nodeOptions);

nodes.forEach((node) => {
  observer.observe(node);
});
