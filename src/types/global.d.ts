// **
// Web App related types:
// These types should also exist inside the web app project.
type WebAppMessageType = 'HELLO_FROM_APP';

interface WebAppMessage {
  type: WebAppMessageType;
  payload?: Record<string, any>;
}

// **
// Plugin related types:
type PluginMessageType = 'HELLO_FROM_FIGMA';

interface PluginMessage {
  type: PluginMessageType;
  payload?: Record<string, any>;
}

interface FigmaPluginMessage {
  pluginId: string;
  pluginMessage: PluginMessage;
}

// **
// Event sent when using figma.ui.postMessage();
interface FigmaIFrameMessageEvent {
  data: FigmaPluginMessage;
}
