# LeFlore County Live Stream Overlay

This project is a streaming overlay system designed for a local news and information livestream, similar in concept to the old "Channel 10" style of local programming. It was used to display a variety of information segments, or "slides," during a live broadcast, including a webcam feed.

## Project Structure

The core of the project resides in the `stream/` directory. This directory contains all the assets for the stream overlay, including HTML, CSS, JavaScript, images, and fonts.

### Slides

The overlay is composed of a series of HTML files that act as individual slides. Each slide is designed to display a specific type of information:

-   `Slide1-obits.htm`: Displays obituaries from an RSS feed.
-   `Slide2-WeatherScan.htm`: Shows local weather information, powered by the Dark Sky API. It includes current conditions, forecasts, and weather maps.
-   `Slide3-EventScan.htm`: (Placeholder for) local events.
-   `Slide4-NewsScan.htm`: (Placeholder for) news headlines.
-   `Slide5-LocalNews.htm`: (Placeholder for) detailed local news stories.
-   `Slide6-Shoutboard.htm`: (Placeholder for) viewer shout-outs or messages.
-   `Slide7-grow.htm`: (Placeholder for) other content.
-   `Slide8-LiveCam.htm`: Embeds a live webcam feed.

### Key Files and Technologies

-   **`stream/css/LL.css`**: The primary stylesheet that defines the look and feel of the stream overlay.
-   **`stream/js/LL.js`**: Contains the `includeHTML` function, which is used to dynamically load and embed HTML content from other files. This is used for reusable components like the news ticker and sponsor logos.
-   **jQuery**: Used extensively for DOM manipulation, animations, and AJAX requests to fetch data from external sources.
-   **Bootstrap**: Provides the foundational grid system and some styling for the slides.
-   **Dark Sky API**: Used to fetch weather data for `Slide2-WeatherScan.htm`.
-   **RSS Feeds**: Used to pull in data for slides like `Slide1-obits.htm`.

## How It Works

The system is designed to be run locally and captured by streaming software (like OBS or XSplit). The slides are cycled through, either manually or via meta refresh tags in the HTML, to create a dynamic and informative overlay for the livestream. The `index.html` file in the root of the repository is a simple redirect to the YouTube channel where the stream was broadcast.

The `Fenix` directory appears to contain a packaged version of the application, possibly using a framework like NW.js or Electron, to run the web-based overlay as a desktop application.

## Potential Improvements

This project has a solid foundation as a local information display system. Here are some ways it could be improved and evolved into a full-fledged website:

### 1. Transition to a Single-Page Application (SPA)

Instead of relying on individual HTML files and meta refreshes, the project could be re-architected as a Single-Page Application using a modern JavaScript framework like React, Vue, or Svelte.

-   **Benefits**:
    -   Smoother transitions between "slides" (now components).
    -   Centralized state management for data (weather, news, etc.).
    -   Easier to manage and scale the codebase.
    -   Improved performance and user experience.

### 2. Create a Centralized Backend/API

Currently, the data is fetched client-side from various sources. A dedicated backend service could be created to act as a proxy and aggregator.

-   **Benefits**:
    -   **API Key Protection**: Hide API keys (like the one for Dark Sky) on the server instead of exposing them in the client-side code.
    -   **Data Caching**: Cache data from external APIs to reduce redundant requests and improve performance.
    -   **Data Aggregation**: Combine data from multiple sources into a single, unified API for the frontend.
    -   **Content Management**: Build a simple CMS to manage content for events, news, and shout-outs directly, rather than relying solely on external feeds.

### 3. Develop a User-Facing Website

Transform the project from a local overlay system into a public-facing website.

-   **Features**:
    -   **Homepage**: A dashboard-style homepage that displays the most important information at a glance (current weather, top news, upcoming events).
    -   **Dedicated Pages**: Separate, navigable pages for obituaries, weather, news, events, etc.
    -   **Interactive Elements**: Allow users to interact with the content, such as searching for specific obituaries or viewing detailed weather forecasts for different locations.
    -   **Responsive Design**: Ensure the website is fully responsive and works well on all devices, from desktops to mobile phones.

### 4. Implement a Modern Build Process

Introduce a modern build tool like Vite or Webpack.

-   **Benefits**:
    -   **Code Bundling and Minification**: Optimize the code for faster loading times.
    -   **Dependency Management**: Use a package manager like npm or yarn to manage project dependencies.
    -   **Development Server**: A hot-reloading development server for a better developer experience.
    -   **Automation**: Automate tasks like transpiling modern JavaScript and CSS.

### 5. Enhance the "Shoutboard"

The `Slide6-Shoutboard.htm` concept could be expanded into a real-time, interactive feature.

-   **Implementation**:
    -   Use WebSockets to create a real-time chat or message board.
    -   Allow users to submit messages through the website.
    -   Implement a moderation system to approve messages before they are displayed.