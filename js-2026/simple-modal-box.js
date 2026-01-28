document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const closeModalBtn2 = document.querySelector(".modal .btn");
  
  const openModal = function (title, text) {
    const modalTitle = document.getElementById('modal_title');
    const modalText = document.getElementById('modal_text');
    
    if (modalTitle && modalText) {
      modalTitle.innerHTML = title;
      modalText.innerHTML = text;
    }
    
    if (modal) modal.classList.remove("hidden");
    if (overlay) overlay.classList.remove("hidden");
  };
  
  const closeModal = function () {
    if (modal) modal.classList.add("hidden");
    if (overlay) overlay.classList.add("hidden");
  };
  
  if (closeModalBtn2) {
    closeModalBtn2.addEventListener("click", closeModal);
  }
  
  if (overlay) {
    overlay.addEventListener("click", closeModal);
  }
  
  document.querySelectorAll('[data-popup-title]').forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const popupTitle = this.getAttribute('data-popup-title');
      const popupText = this.getAttribute('data-popup-text');
      
      if (popupTitle && popupText) {
        openModal(popupTitle, popupText);
      }
    });
  });
});
