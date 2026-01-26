// Handle showing/hiding the custom donation amount field

document.addEventListener("DOMContentLoaded", () => {
  function setupOtherToggle(radioId, wrapperId, inputId) {
    const otherRadio = document.getElementById(radioId);
    const otherWrapper = document.getElementById(wrapperId);
    const otherInput = document.getElementById(inputId);
    if (!otherRadio || !otherWrapper || !otherInput) return;

    const form = otherRadio.closest("form");
    const radios = form.querySelectorAll('input[name="amount"]');

    function update() {
      const isOther = otherRadio.checked;
      otherWrapper.classList.toggle("d-none", !isOther);

      if (isOther) {
        otherInput.required = true;
      } else {
        otherInput.required = false;
        otherInput.value = "";
      }
    }

    update();
    radios.forEach(r => r.addEventListener("change", update));
  }

  // Desktop
  setupOtherToggle("other", "otherAmountWrapper", "other_amount");

  // Mobile
  setupOtherToggle("other_sm", "otherAmountWrapper_sm", "other_amount_sm");
});
