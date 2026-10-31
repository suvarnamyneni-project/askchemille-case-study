(function () {
  var dialog = document.getElementById("lightbox");
  var lbImg = document.getElementById("lb-img");
  var lbCap = document.getElementById("lb-cap");
  var lbCount = document.getElementById("lb-count");
  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
  var index = 0;

  if (!dialog || !lbImg || !triggers.length) return;

  function show(next) {
    index = (next + triggers.length) % triggers.length;
    var trigger = triggers[index];
    var img = trigger.querySelector("img");
    var figure = trigger.closest("figure");
    var caption = figure ? figure.querySelector("figcaption") : null;
    lbImg.src = trigger.getAttribute("href");
    lbImg.alt = img ? img.alt : "";
    lbCap.textContent = caption ? caption.textContent : lbImg.alt;
    lbCount.textContent = index + 1 + " of " + triggers.length;
    if (!dialog.open) dialog.showModal();
  }

  triggers.forEach(function (trigger, i) {
    trigger.addEventListener("click", function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      show(i);
    });
  });

  document.getElementById("lb-close").addEventListener("click", function () {
    dialog.close();
  });
  document.getElementById("lb-prev").addEventListener("click", function () {
    show(index - 1);
  });
  document.getElementById("lb-next").addEventListener("click", function () {
    show(index + 1);
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog || event.target.classList.contains("lb-panel")) dialog.close();
  });

  function onLightboxKey(event) {
    if (!dialog.open) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      show(index + 1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    }
  }
  dialog.addEventListener("keydown", onLightboxKey);
  document.addEventListener("keydown", onLightboxKey);

  dialog.addEventListener("close", function () {
    lbImg.removeAttribute("src");
  });
})();
