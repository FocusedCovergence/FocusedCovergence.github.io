function toggle(element){
    const courseList = element.nextElementSibling;
    courseList.style.display = courseList.style.display === "block" ? "none" : "block";
}

function loadContent(url){
    fetch(url)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById('content').innerHTML = html;
    })
    .catch((error) => {
        document.getElementById('content').innerHTML = "<p>Error loading content.</p>";
        console.error(error);
    });
}