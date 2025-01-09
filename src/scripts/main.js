async function fetchAlbumData() {
  const IS_LOCAL = false
  const URL = IS_LOCAL
    ? "http://localhost:3000/albums"
    : "https://devboi-music-api-3aba476986fd.herokuapp.com/albums"
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    // console.log("response", response)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const albums = await response.json()
    displayAlbums(albums)
  } catch (error) {
    console.error("Failed to fetch album data:", error)
  }
}

function displayAlbums(albums) {
  const container = document.querySelector(".horizontal-scroll")
  albums.forEach((album) => {
    const type = album.type
    const iframe = document.createElement("iframe")
    iframe.style.border = "0"
    iframe.style.width = "350px"
    iframe.style.height = "442px"
    iframe.src = `https://bandcamp.com/EmbeddedPlayer/${type}=${album.id}/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/`
    iframe.seamless = true
    container.appendChild(iframe)
  })
}

document.addEventListener("DOMContentLoaded", fetchAlbumData)
