const sea=document.querySelector('#search');
const index=document.querySelector('.searchindex');
const clo=document.querySelector('#close');
const men=document.querySelector('.menuicon');
const menuss=document.querySelector('.menus');
const start=document.querySelector('#dikhamenu');
const end=document.querySelector('#closemenu');
const menurep=()=>{
    menuss.classList.toggle('activemen');
    start.classList.toggle('activeicon');
    end.classList.toggle('activeicons');
}
const show=()=>{
    index.classList.add('active');
};
const band=()=>{
    index.classList.remove('active');
}
sea.addEventListener('click',()=>{show()});
clo.addEventListener('click',()=>{band()});
men.addEventListener('click',()=>{menurep()});