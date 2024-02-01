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
let elements = document.querySelectorAll('.wrap, .header, .title, .subtitle, .description, .description-subtitle, .description-main, .description-monument, .monument, .video, .footer, .container, .container1, .show1, .show2, .show3, .show4, .show5, .show6, .show7, .map');

for (let elm of elements) {
    observer.observe(elm);
}
