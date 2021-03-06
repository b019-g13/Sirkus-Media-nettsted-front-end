import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Router from "./components/Router";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Router />, document.getElementById("root"));

(function() {
  function locationHashChanged() {
    if (window.location.hash === "#livechat") {
      let attempts = 0;

      function openLiveChat() {
        setTimeout(function() {
          let hubspotCheck =
            window.hubspot_live_messages_running &&
            window.hubspot &&
            window.hubspot.messages;

          attempts++;
          if (!hubspotCheck && attempts < 10) {
            openLiveChat();
          } else if (hubspotCheck) {
            window.hubspot.messages.EXPERIMENTAL_API.requestWidgetOpen();
          }
        }, 1000);
      }

      openLiveChat();

      window.location.hash = "";
    } else if (
      window.location.hash === "#var-prosess" ||
      window.location.hash === "#kontakt"
    ) {
      let attempts = 0;
      let processElement = document.querySelector(window.location.hash);

      function findProcessElement() {
        setTimeout(function() {
          processElement = document.querySelector(window.location.hash);

          attempts++;
          if (processElement === null && attempts < 10) {
            findProcessElement();
          } else {
            if (processElement === null) {
              return;
            }

            processElement.scrollIntoView();
          }
        }, 500);
      }

      findProcessElement();
    }
  }

  window.onhashchange = locationHashChanged;
  window.onload = locationHashChanged;
})();

function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

window.uuid = uuid;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
