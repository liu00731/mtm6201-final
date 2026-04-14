(function () {
  const tanchuang = document.getElementById("denglu-tanchuang");
  const anniu = document.getElementById("denglu-anniu");

  if (tanchuang && anniu && window.bootstrap) {
    tanchuang.addEventListener("hidden.bs.modal", function () {
      anniu.focus();
    });
  }
})();
