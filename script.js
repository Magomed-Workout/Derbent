function onscroll(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('active');
        }
    });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onscroll, options);
let elements = document.querySelectorAll('.header, .title, .subtitle, .description-subtitle, .description-main, .video, .footer');

for (let elm of elements) {
    observer.observe(elm);
}