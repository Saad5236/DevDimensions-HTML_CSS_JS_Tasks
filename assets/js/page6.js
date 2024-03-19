// Header tabs toggle

const headerTabs = document.querySelectorAll(".header-tab")
const headerContents = document.querySelectorAll(".header-content")

function tabSwitch(tabNumber) {
  if (headerTabs[tabNumber].id === "active-tab") {
    for (let index = 0; index < 2; index++) {
      headerTabs[index].id = ""
      headerContents[index].id = ""
    }
    return
  }

  for (let index = 0; index < 2; index++) {
    headerTabs[index].id = ""
    headerContents[index].id = ""
  }

  headerTabs[tabNumber].id = "active-tab"
  headerContents[tabNumber].id = "active-content"

  document.querySelector("#active-tab")
}

// Mobile mode menu popup

document.querySelector(".mobile-nav button").addEventListener("click", (e) => {
  document.querySelector("header").classList.toggle("inactive-header")
  if (document.querySelector("header").classList.contains("inactive-header")) {
    document.querySelector("main").style.padding = "0 0 0 0"
    // document.querySelector("header").style.transform = "translateX(0)"
  } else {
    document.querySelector("main").style.padding = "0 0 0 250px"
    // document.querySelector("header").style.transform = "translateX(-250px)"
  }
})
