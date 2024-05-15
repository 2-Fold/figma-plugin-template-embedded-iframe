# Figma Plugin Template - Embedded Iframe.

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

### Sending messages from App

Use the following function to send a message from your Web App to the parent iframe. The message type should be a value that correlates with an action inside your plugin.

```
window.parent?.postMessage(
  { type: 'HELLO_FROM_APP', payload: 'hello world' },
  '*'
)
```

#### Testing

Run a quick test by spinning up an app hosted on a web server. Add the function above to a button or on load event. You should see a toast notifaction inside Figma that says "hello world".
