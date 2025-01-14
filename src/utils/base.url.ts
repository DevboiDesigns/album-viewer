const BASE_URL = (isLocal: boolean = false) => {
  return isLocal
    ? "http://localhost:3000/albums"
    : "https://devboi-music-api-3aba476986fd.herokuapp.com/albums"
}

export { BASE_URL }
