const title = document.getElementById("title");
console.log(title);
let lastScrollPosition = 0;
window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;
    if(currentScrollPosition > lastScrollPosition){
        title.hidden = true;
    }else{
        title.hidden = false;
    }

    lastScrollPosition = currentScrollPosition;
});