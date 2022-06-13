function RamPicture(){
    let ramDiv = document.getElementById("divRammstein");
    let pictureRam = document.getElementById("pictureRam");
    pictureRam.addEventListener('mouseover', () => {
        ramDiv.innerText = "Picture of Rammstein";   
    });
    pictureRam.addEventListener('mouseout', () =>{
        ramDiv.innerText = '';
    });
}