import { APP_MESSAGE_TYPE } from '../app/messages';
import { FIGMA } from './constants';
import { displayToastMessage } from './actions';

// **
// Display the UI
figma.showUI(__html__, {
  width: FIGMA.UI.VIEWPORT.WIDTH,
  height: FIGMA.UI.VIEWPORT.HEIGHT,
});

// **
// Handle messages coming from the Web App
figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case APP_MESSAGE_TYPE.HELLO_FROM_APP:
      await displayToastMessage(msg.payload);
      break;
    default: {
      console.error('Unknown event type', msg.type);
      break;
    }
  }
};
