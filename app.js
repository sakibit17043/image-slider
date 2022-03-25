const images =[
    
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
];
let indexOfImage =0;
const image =document.getElementById('image');

setInterval(() => {
    if(indexOfImage>=images.length){
        indexOfImage =0;
    }
    const url = images[indexOfImage];
    console.log(url);
    image.setAttribute('src',url);
    indexOfImage++
    
}, 1000);