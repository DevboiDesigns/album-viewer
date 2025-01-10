import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("album-viewer")
export class AlbumViewer extends LitElement {
  /**
   *
   * @property url - The URL to fetch the album from
   */
  @property({ type: String }) name = ""

  firstUpdated() {
    this.fetchAlbumData()
  }

  async fetchAlbumData() {
    const IS_LOCAL = false //* Set to true if running locally
    const BASE_URL = IS_LOCAL
      ? "http://localhost:3000/albums"
      : "https://devboi-music-api-3aba476986fd.herokuapp.com/albums"
    const requestUrl = `${BASE_URL}?name=${this.name}`
    try {
      const response = await fetch(requestUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const albums = await response.json()
      this.displayAlbums(albums)
    } catch (error) {
      console.error("Failed to fetch album data:", error)
    }
  }

  displayAlbums(albums: any[]) {
    const container = this.shadowRoot?.querySelector(".album-viewer")
    albums.forEach((album) => {
      const type = album.type
      const iframe = document.createElement("iframe")
      iframe.style.border = "0"
      iframe.style.width = "350px"
      iframe.style.height = "442px"
      iframe.src = `https://bandcamp.com/EmbeddedPlayer/${type}=${album.id}/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/`
      // iframe.seamless = true
      container?.appendChild(iframe)
    })
  }

  render() {
    return html`
      <div class="album-viewer">
        <!-- Album Data will be injected here -->
      </div>
    `
  }

  static styles = css`
    .album-viewer {
      display: flex;
      justify-content: top;
      overflow-x: auto;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    "album-viewer": AlbumViewer
  }
}
