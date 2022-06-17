 //1
 const container = document.querySelector('.cta_container');
      container.addEventListener('click', () => {
        console.log(container.nodeName);
       
      });


//2
container.addEventListener('click',() => {
    console.log(container.childNodes[1].nodeName);
})

