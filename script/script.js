let subbut = document.querySelector(".submit-button");
subbut.addEventListener('click', getName);
function getName(){
    let form = document.forms.reg;
    let fname = document.forms.name;
    let fage = document.forms.age;
    alert(fname); 
}
