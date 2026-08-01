const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imgView = document.getElementById('img-view');

inputFile.addEventListener('change', uploadimg);

function uploadimg() {
    
    let imglink = URL.createObjectURL(inputFile.files[0]);  //user koi bhi img choose krta hai, browser us  img ko array me store krta hai , browser uska link create kr deta hai , usko imglink variable me store kr liya
    imgView.style.backgroundImage = `url(${imglink})`;

    imgView.textContent = "";
    imgView.style.border = 0;

}


dropArea.addEventListener('dragover', (e) => {  //dragover event is used to allow the drop event to occur
    e.preventDefault(); //preventDefault() method is used to prevent the default behavior of the browser, which is to open the file in a new tab
});

dropArea.addEventListener('drop', (e) => { //drop event is used to handle the dropped file
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;//dataTransfer.files is a property of the DataTransfer object, which is used to hold the data that is being dragged during a drag and drop operation. It contains a list of all the files that were dropped onto the drop area.
    uploadimg();
});