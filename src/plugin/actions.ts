// **
// Actions (functions) that are used in the plugin.
// ---

export const displayToastMessage = async (
  message: string,
  options?: NotificationOptions
) => {
  if (message && options?.error) {
    figma.notify(message, { error: true });
  } else if (message && !options?.error) {
    figma.notify(message);
  } else {
    console.error('Error in displayToastMessage: missing value from message');
  }
};
