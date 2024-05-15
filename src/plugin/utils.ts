// **
// Utility functions that are used in the plugin.
// ---

export const sendMessageFromPlugin = (message: PluginMessage) => {
  figma.ui.postMessage(message);
};
