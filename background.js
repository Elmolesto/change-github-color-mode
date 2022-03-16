const changeToDarkMode = (activeInfo) => {
  let tabId;
  if (activeInfo.tabId) {
    tabId = activeInfo.tabId;
  } else {
    tabId = activeInfo
  }

  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ["./foreground.js"]
  })
  .then(() => {
    // console.log("INJECTED THE FOREGROUND SCRIPT.");
  })
  .catch(err => console.log(err));
}

// Events
// https://developer.chrome.com/docs/extensions/reference/tabs/#event-onUpdated
chrome.tabs.onActivated.addListener(changeToDarkMode)
chrome.tabs.onUpdated.addListener(changeToDarkMode)
