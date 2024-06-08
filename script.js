var menuButton = document.getElementById('menuButton');
var menuColapseDown = document.getElementById('menuColapseDown');

 menuButton.addEventListener('click',() =>{
    if(menuColapseDown.classList.contains('hidden')){
        menuColapseDown.classList.remove('hidden')
    } else {
        menuColapseDown.classList.add('hidden')
    }

})




var botaoLeft = document.getElementById('botaoLeft')
var botaoRight = document.getElementById('botaoRight')
var banner = document.getElementById("banner");
var left = 200;


botaoLeft.addEventListener('click', ()=>{
  banner.scrollBy({
    left: -left,
    behavior: 'smooth'
  })
})


botaoRight.addEventListener('click', ()=>{
  banner.scrollBy({
    left: left,
    behavior: 'smooth'
  })
})
banner.addEventListener('scroll',() => {
  console.log(banner.scrollLeft)

})






var imgTeste = document.getElementById('img-teste1');
var imgContainer = document.getElementById('imgContainer');

imgTeste.addEventListener('mouseenter', ()=>{
  imgTeste.src = "https://i.pinimg.com/564x/15/98/c5/1598c5cbbb511fdcc74209bfc8c40bcf.jpg"
})

imgTeste.addEventListener('mouseout', ()=>{
  imgTeste.src = "images/tenis3.jpg"
})

var imgTeste2 = document.getElementById('img-teste2');
var imgContainer2 = document.getElementById('imgContainer2');

imgTeste2.addEventListener('mouseenter', ()=>{
  imgTeste2.src = "https://i.pinimg.com/564x/0f/4d/43/0f4d43862c713e53f7fccccc6721592c.jpg"
})

imgTeste2.addEventListener('mouseout', ()=>{
  imgTeste2.src = "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
})
  

var imgTeste3 = document.getElementById('img-teste3');
var imgContainer3 = document.getElementById('imgContainer3');

imgTeste3.addEventListener('mouseenter', ()=>{
  imgTeste3.src = "https://images.unsplash.com/photo-1576232823021-f3770a34df63?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
})

imgTeste3.addEventListener('mouseout', ()=>{
  imgTeste3.src = "https://images.unsplash.com/photo-1576229086948-cfba99afcca5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
})

var imgTeste4 = document.getElementById('img-teste4');
var imgContainer4 = document.getElementById('imgContainer4');

imgTeste4.addEventListener('mouseenter', ()=>{
  imgTeste4.src = "https://i.pinimg.com/564x/d1/5b/a0/d15ba04567a9de1e972f28241c861b13.jpg"
})

imgTeste4.addEventListener('mouseout', ()=>{
  imgTeste4.src = "https://images.unsplash.com/photo-1593081891731-fda0877988da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
})



