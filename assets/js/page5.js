const imageContainers = document.querySelectorAll(".hero-img-container")
const imageNavNumbers = document.querySelectorAll(
  ".hero-img-nav .hero-img-nav-numbers div"
)
const imageNavLine = document.querySelector(".hero-img-nav .hero-img-nav-line")
let currentIndex = 0

function switchImage() {
  const currentContainer = imageContainers[currentIndex]
  const currentNavNumber = imageNavNumbers[currentIndex]
  currentContainer.classList.remove("active-hero-img-contatiner")
  currentContainer
    .querySelector(".hero-img-detail")
    .classList.remove("popup" + (currentIndex + 1))
  currentNavNumber.classList.remove("hero-img-nav-number-animate")
  imageNavLine.classList.remove(
    "hero-img-nav-line-animate-" + (currentIndex + 1)
  )

  currentIndex = (currentIndex + 1) % imageContainers.length

  const nextContainer = imageContainers[currentIndex]
  const nextNavNumber = imageNavNumbers[currentIndex]
  nextContainer.classList.add("active-hero-img-contatiner")
  nextNavNumber.classList.add("hero-img-nav-number-animate")
  imageNavLine.classList.add("hero-img-nav-line-animate-" + (currentIndex + 1))

  setTimeout(() => {
    nextContainer
      .querySelector(".hero-img-detail")
      .classList.add("popup" + (currentIndex + 1))
  }, 10) // Delay to ensure the animation starts after the image transition
}

setInterval(switchImage, 2000)
