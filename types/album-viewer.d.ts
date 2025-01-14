import { LitElement } from "lit";
export declare class AlbumViewer extends LitElement {
    /**
     * @property url - The name of the artist to fetch the albums for
     */
    name: string;
    iframeWidth: string;
    iframeHeight: string;
    iframeBorder: string;
    firstUpdated(): void;
    fetchAlbumData(): Promise<void>;
    displayAlbums(albums: any[]): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "album-viewer": AlbumViewer;
    }
}
