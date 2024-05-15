// **
// Utility functions that are used in the web app.
// ---

export const sendMessageFromWebApp = (message: WebAppMessage) => {
  parent?.postMessage(
    {
      pluginMessage: message,
    },
    '*'
  );
};
