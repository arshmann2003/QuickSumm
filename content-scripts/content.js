chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type == "GETPAGEDATA") {
    sendResponse({type:"PAGEDATA", data: getWebPageContent()})
  }
});

function getWebPageContent() {
  const allText = document.body.innerText || document.body.textContent;
  const formattedSentence = allText.replace(/\s+/g, ' ').trim();
  const wordsArray = formattedSentence.split(' ');
  const truncatedWordsArray = wordsArray.slice(0, 4000);
  const truncatedText = truncatedWordsArray.join(' ');
  return truncatedText;
}

