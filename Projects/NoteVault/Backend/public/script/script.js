console.log("Public script file")
function openUpdateModal(noteId) {
    // Find the modal element by its ID
    const modal = document.getElementById(`updateModal${noteId}`);
    // Open the modal
    modal.style.display = "block";
  }
  
function closeUpdateModal(noteId) {
    // Find the modal element by its ID
    const modal = document.getElementById(`updateModal${noteId}`);
    // Close the modal
    modal.style.display = "none";
}
  