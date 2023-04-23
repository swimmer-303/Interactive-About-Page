const tablinks = document.querySelectorAll(".tab-link");
const tabcontents = document.querySelectorAll(".tab-contents");

tablinks.forEach(function(tablink, index){
    tablink.addEventListener('click', function(){
        tablinks.forEach(function(link){
            link.classList.remove('active-link');
        })
        tabcontents.forEach(content =>{
            content.classList.remove("active-tab")
        })
        tablink.classList.add('active-link');
        tabcontents[index].classList.add('active-tab');
    })
    
})
