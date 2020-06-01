let subbut = document.querySelector(".submit-button");
subbut.addEventListener('click', getInfo);
function getInfo(){
    let cont = document.querySelectorAll('.form-field');
    for (var i = 0; i < cont.length; i++) {
        if (!cont[i].value) {
          alert('Error, try again');
          break;
        }
    }
}
let lbl = document.querySelector(".events-label");
lbl.addEventListener('mouseover', function(){lbl.classList.add('lbl')});
lbl.addEventListener('mouseout', function(){lbl.classList.remove('lbl')});
