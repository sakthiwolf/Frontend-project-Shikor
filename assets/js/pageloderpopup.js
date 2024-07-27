




$(document).ready(function () {
  // Function to open modal and set focus to txtname input field
  function openModal() {
      $('#modal-content').modal({
          show: true
      });

      // Set focus to txtname input field when modal is shown
      $('#modal-content').on('shown.bs.modal', function () {
          $("#txtname").focus();
      });
  }

  // Open modal after 5 seconds of page load
  setTimeout(openModal, 3000);

  // Function to run other operations after 3 seconds of page load
  function otherOperation() {
      // Your other operations here
  }

  // Run other operations after page load
  window.addEventListener("load", function () {
      otherOperation();
  }, false);
});

