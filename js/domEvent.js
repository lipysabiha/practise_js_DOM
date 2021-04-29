// const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert('Hello');
// }  //-- not a good way;

// btn.addEventListener('click', function() {
//     alert('✔Hello!')
//     console.log('I can also see it on console✌')
// })


const colors = ['Red', 'Blue', 'Orange', 'Green', 'Yellow', 'Purple', 'Violet', 'Indigo', 'Gray', 'Teal', 'Lime', 'SkyBlue', 'SeaGreen'];


const section = document.querySelector('#container');
const h1 = document.querySelector('h1');
const selectedColor = document.querySelector('#selectedColor');

for (let color of colors) {
    const box = document.createElement('div');
    box.classList.add('box');

    section.appendChild(box);

    box.style.backgroundColor = color;

    box.addEventListener('click', function() {
        h1.innerText = 'You have selected color: ';
        selectedColor.innerText = box.style.backgroundColor;
        selectedColor.style.backgroundColor = box.style.backgroundColor;
    });
}