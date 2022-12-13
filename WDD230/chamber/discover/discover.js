let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
};

let callback = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting
            && entry.target.className === 'image') {
                let imageFile = entry.target.getAttribute('src');
                if(imageFile){
                    entry.target.src = imageFile;
                    observer.unobserver(entry.target);
                }
            }
    });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#img-temple'));
observer.observe(document.querySelector('#img-map'));
observer.observe(document.querySelector('#img-tetons'));
observer.observe(document.querySelector('#img-watertower'));
observer.observe(document.querySelector('#img-byui'));