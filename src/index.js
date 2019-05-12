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
    } else if (window.location.hash === "#var-prosess") {
      let attempts = 0;
      let processElement = document.querySelector("#var-prosess");

      function findProcessElement() {
        setTimeout(function() {
          processElement = document.querySelector("#var-prosess");

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
