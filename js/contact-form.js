(function () {
  const biaodan = document.getElementById("lianxi-biaodan");
  if (!biaodan) return;

  biaodan.addEventListener(
    "submit",
    function (shijian) {
      if (!biaodan.checkValidity()) {
        shijian.preventDefault();
        shijian.stopPropagation();
      } else {
        shijian.preventDefault();
        let tishi = document.getElementById("lianxi-tishi");
        if (!tishi) {
          tishi = document.createElement("div");
          tishi.id = "lianxi-tishi";
          tishi.className = "alert alert-success mt-3";
          tishi.setAttribute("role", "status");
          biaodan.appendChild(tishi);
        }
        tishi.textContent = "Thanks — in a real deployment this message would be sent to our inbox.";
        biaodan.reset();
        biaodan.classList.remove("was-validated");
        return;
      }
      biaodan.classList.add("was-validated");
    },
    false
  );
})();
