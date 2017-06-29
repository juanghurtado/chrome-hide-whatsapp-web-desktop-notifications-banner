chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    var t = setInterval(function() {
  		var el = document.getElementsByClassName("butterbar-container");
      
      if (el[0]) {
        el[0].style = "display: none;"
        clearInterval(t);
      }
    }, 250);
	}
	}, 10);
});