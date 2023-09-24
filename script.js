// Navbar Hamburger 
const Hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-manu");
Hamburger.addEventListener("click",()=>{
    Hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// counter Up number 
const counts = document.querySelectorAll('.count-num')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})
