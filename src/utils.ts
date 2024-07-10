import { sendMessageFromPlugin } from "./plugin/utils";
import { sendMessageFromWebApp } from "./app/utils";

// **
// Shared utility functions that are used in both the plugin and the App.
// ---

export const sendMessageToIFrame = (
  message: PluginMessage | WebAppMessage,
  iFrame: React.RefObject<HTMLIFrameElement>
) => {
  iFrame.current?.contentWindow?.postMessage(message, "*");
};

const isMessageFromFigma = (event: MessageEvent) => {
  return Object.keys(event.data).includes("pluginMessage");
};

const isMessageFromWebApp = (event: MessageEvent) => {
  return event.origin == process.env.URL;
};

export const handleIframeMessage = (e: MessageEvent) => {
  if (typeof e.data === "string") {
    return;
  }
  if (isMessageFromFigma(e as MessageEvent<FigmaIFrameMessageEvent>)) {
    sendMessageFromPlugin(e.data.pluginMessage);
  }
  if (isMessageFromWebApp(e as MessageEvent<WebAppMessage>)) {
    sendMessageFromWebApp(e.data);
  }
};
