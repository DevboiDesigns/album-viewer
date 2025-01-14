import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { BASE_URL } from "./utils/base.url"
import { BANDCAMP_URL } from "./utils/bandcamp.url"

@customElement("album-viewer")
export class AlbumViewer extends LitElement {
  /**
   * @property url - The name of the artist to fetch the albums for
   */
  @property({ type: String }) name = ""
  @property({ type: String }) iframeWidth = "350px"
  @property({ type: String }) iframeHeight = "442px"
  @property({ type: String }) iframeBorder = "0"

  firstUpdated() {
    this.fetchAlbumData()
  }

  async fetchAlbumData() {
    const requestUrl = `${BASE_URL()}?name=${this.name}`
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
      iframe.style.border = this.iframeBorder
      iframe.style.width = this.iframeWidth
      iframe.style.height = this.iframeHeight
      iframe.src = BANDCAMP_URL(type, album.id)
      // iframe.seamless = true
      container?.appendChild(iframe)
    })
  }

  render() {
    return html`
      <pre class="album-viewer">
        <!-- Album Data will be injected here -->
      </pre>
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
