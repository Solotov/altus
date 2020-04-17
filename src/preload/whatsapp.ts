import { remote } from "electron";

const ses = remote.session.defaultSession;

ses.flushStorageData();
ses.clearStorageData({
  storages: ["appcache", "serviceworkers", "cachestorage", "websql", "indexdb"],
});

window.navigator.serviceWorker.getRegistrations().then((registrations) => {
  for (const registration of registrations) {
    registration.unregister();
  }
});

window.onload = (): void => {
  const titleEl = document.querySelector(".landing-title");
  if (titleEl && titleEl.innerHTML.includes("Google Chrome")) {
    window.location.reload();
  }
};
