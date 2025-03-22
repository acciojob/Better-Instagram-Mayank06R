//your code here
// Select all the draggable elements
const images = document.querySelectorAll('.image');

let draggedElement = null;

// Event listener for drag start
images.forEach(image => {
  image.addEventListener('dragstart', (e) => {
    draggedElement = e.target; // Save the currently dragged element
  });
});

// Event listener for drag over
images.forEach(image => {
  image.addEventListener('dragover', (e) => {
    e.preventDefault(); // Prevent the default behavior to allow dropping
  });
});

// Event listener for drop
images.forEach(image => {
  image.addEventListener('drop', (e) => {
    e.preventDefault();
    // Swap contents of draggedElement and the drop target
    const draggedContent = draggedElement.innerHTML;
    const targetContent = e.target.innerHTML;

    draggedElement.innerHTML = targetContent;
    e.target.innerHTML = draggedContent;
  });
});