
document.addEventListener('DOMContentLoaded', function(){ 
  const open = document.querySelector("#terms")
  const popupBg = document.querySelector('.popup')
  const close = document.querySelector('#close')
  const content =document.body


  const navClose = document.querySelector('#nav-close')
  const menuBtn = document.querySelector('.menu__btn')
  const menuList =document.querySelector('.menu__list')
  const menuBg= document.querySelector('.bg-invisible')
 
  function toogle() {
    menuList.classList.toggle('active')
    menuBg.classList.toggle('active')
    if(menuList.classList.contains('active')){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "inherit";
    }

  }

  menuBtn.addEventListener('click', toogle)
  navClose.addEventListener('click',toogle)
  menuBg.addEventListener('click', toogle)



  function testWebP(callback) {
    var webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
  }
  
  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp")
    } else {
      document.querySelector("body").classList.add("no-webp")
    }
  })
  


  
  function closed(){
    popupBg.classList.remove("visible")
    document.body.style.overflow = "inherit";
  }
  open.addEventListener('click', function(){
    popupBg.classList.add("visible")
    document.body.style.overflow = "hidden";
    
   
  })
  close.addEventListener('click', closed)
  popupBg.addEventListener('click', (e)=>{
    if(e.target===popupBg || e.keyCode === 27 ){
      closed()
    }
  
  })
  
  document.addEventListener('keydown',(e)=>{
    if(e.code ==="Escape"){
      closed()
    }
  })


 
  

  let x, y, raf;
  const card = document.querySelector('.layer');
  
  document.addEventListener('mousemove', e => {
    x = (e.clientX / window.innerWidth - 0.5) * 2;
    y = (e.clientY / window.innerHeight - 0.5) * 2;
  
    raf = raf || requestAnimationFrame(update);
  });
  
  function update() {
    card.style.setProperty('--x', x);
    card.style.setProperty('--y', y);
    raf = null;
  }
  


  const text = document.querySelector('#bonus')
  const elm =document.querySelectorAll('.divClipboard')
  const clipboardMessage = document.querySelector('.clipboardMessage')

  
  function copyClipboard() {
   
    // for Internet Explorer
  
    if(document.body.createTextRange) {
      let range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
      document.execCommand("Copy");
      
    }
    else if(window.getSelection) {
      // other browsers
  
      let selection = window.getSelection();
      let range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
    }
  }
  elm.forEach(elem=>{
    elem.addEventListener('click', function(){
    copyClipboard()
    clipboardMessage.classList.add('visible')
    
    setTimeout(()=>{
      clipboardMessage.classList.remove('visible')

    }, 1000)
  } )})

})


