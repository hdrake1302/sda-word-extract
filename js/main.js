window.onload = () => {
  const copyBtn = document.getElementById("copy-btn");
  const copyCodeBtn = document.getElementById("copy-code-btn");
  const textField = document.querySelector("textarea");

  copyBtn.onclick = (e) => {
    const textValue = textField.value;
    // copied to clipboard
    navigator.clipboard.writeText(textValue);

    showToolTip("myTooltip");
  };

  copyCodeBtn.onclick = (e) => {
    const keyCode = textField.dataset.value;
    // copied to clipboard
    navigator.clipboard.writeText(keyCode);

    showToolTip("myTooltip2");
  };
};

function showToolTip(id) {
  // Show message to tooltip
  const tooltip = document.getElementById(id);
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
}
