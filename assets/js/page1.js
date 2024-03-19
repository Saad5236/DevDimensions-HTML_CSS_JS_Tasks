const switchFeaturedPropertiesTab = (e, tabId) => {
  const featuredPropertiesTabs = document.querySelectorAll(
    ".featured-properties-tabs li"
  )

  for (let i = 0; i < featuredPropertiesTabs.length; i++) {
    featuredPropertiesTabs[i].id = ""
  }

  e.target.id = "active-featured-properties-tab"

  const featuredPropertiesTabsContent = document.querySelectorAll(
    ".featured-properties-tab-content"
  )
  featuredPropertiesTabsContent.forEach((tabContent) => {
    // tabContent.style.display = "none"
    tabContent.classList.remove("active-featured-properties-tab-content")
  })
  //   document.getElementById(tabId).style.display = "grid"
  document
    .getElementById(tabId)
    .classList.add("active-featured-properties-tab-content")
}
