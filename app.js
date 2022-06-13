
function myFunction() {
    document.getElementById("storie").innerHTML = "Hello World";
  }

function RamPicture(){
    let ramDiv = document.getElementById("divRammstein");
    let pictureRam = document.getElementById("pictureRam");
    pictureRam.addEventListener('mouseover', () => {
        ramDiv.innerText = "Nice picture";   
    });
    pictureRam.addEventListener('mouseout', () =>{
        ramDiv.innerText = '';
    });
}

