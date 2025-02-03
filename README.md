# Album Viewer Web Component

The `album-viewer` web component fetches and displays albums from a specified [Bandcamp](https://bandcamp.com) artist

![version](https://img.shields.io/badge/v2.0.3-RELEASE-8A2BE2)

---

## Overview

The `album-viewer` web component fetches and displays albums from a specified Bandcamp artist. When you pass an artist name to the component, it will display all the musician's albums in a horizontal scrolling view. Please check the demo site below for an example.

- [Demo Website](https://devboidesigns.github.io/album-viewer/)

## Installation

Include the `album-viewer` component in your HTML file:

```html
<script type="module" src="https://cdn.skypack.dev/album-viewer"></script>
```

## Specifying Versions

You can specify the version of the `album-viewer` component using the `@v^1.0.0` format. This allows you to control which version of the component you are using in your project. No version will default to latest.

**Example with Version Specification**

```html
<script
  type="module"
  src="https://cdn.skypack.dev/album-viewer@v^1.0.0"
></script>
```

Replace `^1.0.0` with the desired version number to use a specific version of the component.

## Usage

Add the `album-viewer` component to your HTML and pass the Bandcamp artist name as a property:

```html
 <album-viewer name="artist name"></album-viewer>
```

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Album Viewer</title>
  </head>
  <body>
    <album-viewer name="artistName"></album-viewer>

    <script type="module" src="https://cdn.skypack.dev/album-viewer"></script>
  </body>
</html>
```

## Properties

- `name`: artist to fetch albums for
- `iframeWidth`: The width of the iframes displaying the albums. Default is `350px`.
- `iframeHeight`: The height of the iframes displaying the albums. Default is `442px`.
- `iframeBorder`: The border style of the iframes displaying the albums. Default is `0`.

**Example with Name**

```html
<album-viewer
  name="onhell"
  iframeWidth="400px"
  iframeHeight="500px"
  iframeBorder="1px solid black"
></album-viewer>
```

## Styling

The component includes default styles for the horizontal scrolling view. You can customize the styles by targeting the `album-viewer` component and its internal elements.

### Default Styles

```css
album-viewer .album-viewer {
  display: flex;
  justify-content: top;
  overflow-x: auto;
}
```

### Customizing Styles

You can override the default styles by adding custom CSS to your project. For example, to change the background color and add padding:

```css
album-viewer .album-viewer {
  background-color: #f0f0f0;
  padding: 10px;
}
```

### Example with Custom Styles

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Album Viewer</title>
    <style>
      album-viewer {
        background-color: #f0f0f0;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <album-viewer
      name="omboi"
      iframeWidth="400px"
      iframeHeight="500px"
      iframeBorder="1px solid black"
    ></album-viewer>

    <script type="module" src="./src/album-viewer.js"></script>
  </body>
</html>
```

## Conclusion

The `album-viewer` web component is a simple and effective way to display albums from a Bandcamp artist in a horizontal scrolling view. By passing the artist name as a property, you can easily integrate this component into your web projects.

## Coming Soon

We are actively working on adding new features and improvements. Here are some of the upcoming features you can expect:

- **Vertical Scrolling View**: Option to display albums in a vertical scrolling view.
- **Customizable Colors**: Ability to customize the background and text colors for better integration with your website's theme.
- **Pagination**: Support for paginating through a large number of albums.
- **Loading Indicators**: Visual indicators to show loading progress while fetching album data.
- **Accessibility Improvements**: Enhancements to make the component more accessible to users with disabilities.

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/devboidesigns/album-viewer)

We welcome your feedback and suggestions to help us improve this component. Stay tuned for updates!

## Star on GitHub 🤩

If you like this web component please take a moment to
[star this project on GitHub](https://github.com/devboidesigns/album-viewer#start-of-content).

[![GitHub stars](https://img.shields.io/github/stars/devboidesigns/album-viewer?style=social)](https://github.com/devboidesigns/album-viewer#start-of-content)
