const menuButton = document.querySelector(".menu-button")
function showMenu(){
    const nav = document.querySelector(".menu nav")
    nav.classList.toggle("hide")
}
menuButton.addEventListener("click", showMenu)

function handleResize(){
        const nav = document.querySelector(".menu nav")
        if(window.innerWidth>1000){
            nav.classList.remove("hide")
        }
        else{
            nav.classList.add("hide")
        }
}
handleResize()
window.addEventListener("resize", handleResize)
function viewerTemplate(imgpath, alttext){
    return `<div class="viewer">
    <button class="close-view">X</button>
    <img src="${imgpath}" alt="${alttext}">
    </div>`;
}
function closeViewer(){
    document.querySelector(".viewer").remove();
}

function viewHandler(event){
    const img = event.target;
    let src=img.src;
    let newSrc= src.replace("-sm", "-full");
    document.body.insertAdjacentHTML("afterbegin",viewerTemplate(newSrc, "Bigger picture") );
    document.querySelector(".close-view").addEventListener("click", closeViewer);
    
}
document.querySelector(".gallery").addEventListener("click", viewHandler)