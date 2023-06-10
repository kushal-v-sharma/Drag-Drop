document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const dropzone = document.getElementById('dropzone');
    const resetBtn = document.getElementById('resetBtn');
    
    // Add event listeners to draggable items
    items.forEach(function(item) {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });
    
    // Add event listeners to dropzone
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('dragenter', dragEnter);
    dropzone.addEventListener('dragleave', dragLeave);
    dropzone.addEventListener('drop', dragDrop);
    
    // Reset button event listener
    resetBtn.addEventListener('click', resetContainers);
    
    // Drag functions
    function dragStart() {
      this.classList.add('dragging');
    }
    
    function dragEnd() {
      this.classList.remove('dragging');
    }
    
    function dragOver(e) {
      e.preventDefault();
    }
    
    function dragEnter(e) {
      e.preventDefault();
      this.classList.add('dragover');
    }
    
    function dragLeave() {
      this.classList.remove('dragover');
    }
    
    function dragDrop() {
      const draggedItem = document.querySelector('.dragging');
      this.appendChild(draggedItem);
      this.classList.remove('dragover');
      showMessage('Item dropped!');
    }
    
    // Reset containers function
    function resetContainers() {
      dropzone.innerHTML = '';
      items.forEach(function(item) {
        document.querySelector('.container:first-child').appendChild(item);
      });
    }
    
    // Show message function
    function showMessage(message) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      messageDiv.textContent = message;
      dropzone.appendChild(messageDiv);
      setTimeout(function() {
        messageDiv.remove();
      }, 2000);
    }
  });
  