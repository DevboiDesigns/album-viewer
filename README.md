# Album Viewer Web Component

The `album-viewer` web component fetches and displays albums from a specified Bandcamp artist

![BETA](https://img.shields.io/badge/v0.0.6-BETA-8A2BE2)

---

## Overview

The `album-viewer` web component fetches and displays albums from a specified Bandcamp artist. When you pass an artist name to the component, it will display all the musician's albums in a horizontal scrolling view.

## Installation

Include the `album-viewer` component in your HTML file:

```html
<script type="module" src="https://cdn.skypack.dev/album-viewer"></script>
```

## Usage

Add the `album-viewer` component to your HTML and pass the Bandcamp URL as a property:

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

- `artistName`: artist to fetch albums for

**Example with Name**

```html
<album-viewer name="artistName"></album-viewer>
```

## Styling

The component includes default styles for the horizontal scrolling view. You can customize the styles by targeting the `album-viewer` component and its internal elements.

## Conclusion

The `album-viewer` web component is a simple and effective way to display albums from a Bandcamp artist in a horizontal scrolling view. By passing the artist name as a property, you can easily integrate this component into your web projects.

## Beta Version

This is a beta version of the `album-viewer` web component. We are actively working on adding new features and improvements. Here are some of the upcoming features you can expect:

- **Vertical Scrolling View**: Option to display albums in a vertical scrolling view.
- **Customizable Colors**: Ability to customize the background and text colors for better integration with your website's theme.
- **Pagination**: Support for paginating through a large number of albums.
- **Loading Indicators**: Visual indicators to show loading progress while fetching album data.
- **Error Handling**: Improved error handling and user-friendly error messages.
- **Accessibility Improvements**: Enhancements to make the component more accessible to users with disabilities.

We welcome your feedback and suggestions to help us improve this component. Stay tuned for updates!
