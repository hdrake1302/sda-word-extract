window.onload = () => {
  var copyBtn = document.getElementById("copy-btn");
  var textField = document.querySelector("textarea");

  copyBtn.onclick = (e) => {
    let copyText = textField.value;
    // copied to clipboard
    navigator.clipboard.writeText(copyText);

    // Show message to tooltip
    var tooltip = document.getElementById("myTooltip");
    tooltip.classList.add("active");
    setTimeout(() => {
      tooltip.classList.remove("active");
    }, 2000);

    // tooltip animation
    const fadeIn = [{ opacity: "0" }, { opacity: "1", visibility: "visible" }];

    const fadeTiming = {
      duration: 500,
      iterations: 1,
    };

    tooltip.animate(fadeIn, fadeTiming);
  };
};
