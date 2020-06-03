function randomImage() {
    let img = document.querySelectorAll('.card-img-top')
    console.log(img)
    for (let i=0; i<img.length; i++) {
        picSrc = 'https://source.unsplash.com/random/800x450/?woman,profile,picture'
        img[i].src = picSrc
    }
    
}

// randomImage()