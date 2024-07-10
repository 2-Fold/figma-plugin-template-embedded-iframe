# Figma Plugin Template - Embedded Iframe.
Courtesy of [2fold](https://2fold.io)

## How it works

This template works by embedding an iframe inside the Figma UI. Messages are passed from Figma and the embedded web application to a parent iframe.

## Advantages

### Separation of concerns

Separate your Figma actions from your UI. This is especially helpful if you wish to repurpose your web UI for services other than Figma.

### Easy app development

Use the frameworks and development environments you are already familiar with. Build your application as you normally would using NextJS, Vite, React, etc. No need to reconfigure bundlers.

### Easy deployment

Simply deploy your web application and updates will be visible right away inside your Figma plugin. No need to republish your plugin unless you wish to update any Figma related functionality.

## Included tooling

This repo is using:

- TypeScript
- React
- Webpack
- Tailwind CSS

## Getting Started

### Install & Run

- Run `npm install` to install dependencies.
- Run `npm build:watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `New Plugin...` and choose `manifest.json` file from this repo.

### Sending Messages from App

Use the following js function to send a message from your Web App to the parent iframe. The message `type` should be a value that correlates with an action inside your plugin.

```js
window.parent?.postMessage(
  { type: 'HELLO_FROM_APP', payload: 'hello world' },
  '*'
);
```

### Rendering Your Web App in the Iframe

Open `src/plugin/constants.ts` and update the `PROD_URL` and `DEV_URL` values

### Build and Publish

When you're ready to publish your plugin, run `npm run build`. This will build your application and tell Webpack to use your `PROD_URL` inside the iframe. Publish your plugin through the Figma store. Don't forget to update your `manifest.json` file with your `PROD_URL`.

#### Testing

Run a quick test by spinning up an app hosted on a web server. Add the function above to a button or on load event. You should see a toast notifaction inside Figma that says "hello world".
