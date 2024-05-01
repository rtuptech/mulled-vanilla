const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");
canvas.width = 1778;
canvas.height = 1080;
const frameCount = 44;
const currentFrame = index => (`https://cdn.shopify.com/s/files/1/0659/6080/4509/files/${(index + 1).toString().padStart(4, '0')}.png`);
const images = []
const airpods = {
  frame: 0
};
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}
gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
		scrub: 0.5
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});
images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0);
}