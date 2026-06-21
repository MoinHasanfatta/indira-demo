let webPage = document.querySelector('body')

let btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    webPage.classList.toggle('night')
    if(btn.textContent == "🌚")
        btn.textContent = "🌞"
    else 
        btn.textContent = "🌚"
})