import * as React from "react";
import { handleIframeMessage } from "../../utils";

const IFrame = () => {
  const iframeRef = React.createRef<HTMLIFrameElement>();

  // Message router:
  // Determines if message is from Figma or Web App.
  const handleIncomingMessage = React.useCallback(
    (e: MessageEvent) => handleIframeMessage(e),
    []
  );

  // Listen for messages
  React.useEffect(() => {
    window.addEventListener("message", handleIncomingMessage, false);
    return () => {
      window.removeEventListener("message", handleIncomingMessage, false);
    };
  }, [handleIncomingMessage]);

  return (
    <>
      {console.log(process.env.URL)}
      <iframe
        className="app-iframe"
        ref={iframeRef}
        style={{ width: "100%", height: "100%", border: 0, padding: 0 }}
        src={process.env.URL}
      />
    </>
  );
};

export default IFrame;
