// javascript
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const gallery = document.querySelector(".gallery");
const numOfImg = gallery.childElementCount;
const maxTranslateXValue = ((numOfImg) * -220);

let translateXValue = 0;

next.addEventListener('click', () => {
    translateXValue = translateXValue - 220;
    let i = translateXValue;

    if (i > maxTranslateXValue) {
        let translateX = 'translateX(' + i + "px)";
        let nextTransform = gallery.style.transform = translateX;
        prev.style.opacity = '1';

        console.log(nextTransform)

    } else if (i === maxTranslateXValue) {
        next.style.opacity = "0.3";
        next.style.cursor = 'default';
        // next.style.display = "none"
        translateXValue === maxTranslateXValue;
        
    }
    
    console.log(translateXValue)
    
})

console.log(translateXValue)
prev.addEventListener('click', () => {
    translateXValue = translateXValue + 220;
    let i = translateXValue;

    // if (i < maxTranslateXValue) {
        let translateX = 'translateX(' + i + "px)";
        let prevTransform = gallery.style.transform = translateX;
    
        prev.style.opacity = '1';
        next.style.opacity = "1";
        next.style.display = "visible";
        console.log(prevTransform)

    // } 
    // else if (i === 0) {
    //     prev.style.opacity = "0.3";
    //     prev.style.cursor = 'default';
    //     // prev.style.display = "none"

    // }


})


