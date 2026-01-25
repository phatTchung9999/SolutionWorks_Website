// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // 1. Get all radio buttons in the amount group
  const radios = document.querySelectorAll('input[name="amount"]');

  // 2. Get the "Other" radio button
  const otherRadio = document.getElementById("other");

  // 3. Get the wrapper that contains the input box
  const otherWrapper = document.getElementById("otherAmountWrapper");

  // 4. Get the input field itself
  const otherInput = document.getElementById("other_amount");

  // Safety check (prevents JS errors if element is missing)
  if (!otherRadio || !otherWrapper || !otherInput) return;

  // Function to show/hide the input
  function updateOtherVisibility() {
    const isOtherSelected = otherRadio.checked;

    // Show or hide using Bootstrap class
    otherWrapper.classList.toggle("d-none", !isOtherSelected);

    // Optional UX improvements
    if (isOtherSelected) {
      otherInput.required = true;  // only required if "Other"
      otherInput.focus();          // move cursor into box
    } else {
      otherInput.required = false;
      otherInput.value = "";       // clear when not used
    }
  }

  // Run once when page loads (important)
  updateOtherVisibility();

  // Listen for changes on any amount button
  radios.forEach(radio => {
    radio.addEventListener("change", updateOtherVisibility);
  });
});
