import { LitElement } from "lit";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class AlbumViewer extends LitElement {
    /**
     *
     * @property url - The URL to fetch the album from
     */
    url: string;
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
