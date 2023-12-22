document.addEventListener('DOMContentLoaded', function() {
  const response = chrome.runtime.sendMessage({success: "connection acquired"});
});
