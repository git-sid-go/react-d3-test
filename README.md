<p align="center" style="color: #343a40">
  <h1 align="center">React D3</h1>
</p>
<p align="center" style="font-size: 1.2rem;">Leveraging the power of React's dom management with the versatility of the amazing visualization library - D3</p>

# [👀 Live Demo](https://sid-react-d3.netlify.com/)

### Frontend Stack

- [React](https://reactjs.org/)
- [Parcel](https://parceljs.org/) - Blazing fast, zero configuration web application bundler

### Quick Start

Get the project running in your local machine with these commands.

```bash
yarn
```

```bash
yarn start
```

### Build and Deployment

Pushing to the `master` branch automatically triggers the build and deploy process in Netlify.

If you want to build the project locally for some reason, run

```bash
yarn build
```

### Project Structure

#### components

All of the components used in the app can be found under the `src/components` folder. `App` is the root component.

#### assets

The `src/assets` folder holds the icons, colors and other variables used in the app.

#### config

The `config.js` file under the `src/config` folder contains the config defining the min and max ranges based on chart type. This is used in the random generation of data.

#### helpers

The `helper_functions.js` file under `src/helpers` folder is used for generating mock data and for formatting text.

#### mock

The `MockData.js` file under `src/mock` folder contains mock data used in the page stats component.

#### properties

The `properties.js` file under `src/properties` folder contains the array of objects for populating the side nav menu items.

#### router

The `AppRouter.js` file under `src/router` folder contains the router logic. This app only has a single route `/` which points to the `Home` component.

#### styled_components

All of the files under `src/styled_components` folder contains the styles for the various parts of the app.

### Third-party resources used

- [Styled Components](https://www.styled-components.com/) - Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!
- [Material UI](https://material-ui.com/) - React components for faster and easier web development. Build your own design system, or start with Material Design.
- [Reach Router](https://github.com/reach/router) - Next Generation Routing for React.
