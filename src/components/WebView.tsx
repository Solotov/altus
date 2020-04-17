import React, { ReactElement, useEffect, useRef } from "react";
declare const WHATSAPP_PRELOAD_WEBPACK_ENTRY: any;

const WebView = ({
  id,
  active,
}: {
  id: string;
  active: boolean;
}): ReactElement => {
  const wvRef = useRef();

  useEffect(() => {
    if (wvRef.current) {
      if ((wvRef as any).current.getAttribute("partition").length > 0) {
        (wvRef as any).current.src = "https://web.whatsapp.com";
      }

      if (active) {
        (wvRef as any).current.focus();
      }
    }
  }, []);

  return (
    <webview
      className={active ? "wv-active" : ""}
      ref={wvRef}
      preload={WHATSAPP_PRELOAD_WEBPACK_ENTRY}
      useragent={window.navigator.userAgent.replace(
        /(Altus|Electron)([^\s]+\s)/g,
        ""
      )}
      {...(id.length > 0
        ? {
            id: `webview-${id}`,
            partition: `persist:${id}`,
          }
        : {})}
    ></webview>
  );
};

export default WebView;
