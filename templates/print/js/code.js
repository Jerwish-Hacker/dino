function getmodal(picName) {
    $('#exampleModal').modal('show');    
    const picElement = document.getElementById('modal-pic');    
    picElement.src = './img/' + picName;
}
