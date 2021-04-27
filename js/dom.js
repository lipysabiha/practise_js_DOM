// Single Element Selector
/*
    // *.getElementById()
console.log(document.getElementById('ul-title')); //without making variable;

const ul_heading = document.getElementById('ul-title'); //use with variable;
ul_heading.textContent = "OrderedList"; //to change id/class/tag text on page;
ul_heading.style.color = "green"; //to change text color on page;

console.log(ul_heading);

    // *.querySelector()
const para = document.querySelector('.paragraph'); //select first element of id/class/tag;

console.log(para);

// Multiple Element Selector

    // *.getElementByTagName() --only HTML  collection

const paragraphs = document.getElementsByTagName('p');

console.log(paragraphs); //to select single-> follow this method => console.log(paragraphs[any index no like 0,1,2,3]);

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
    
} //change tex/color or any thing by for loop; can also change those by while  loop/forEach loop any other loops;


    // *.getElementsByClassName() --only HTML collection

const listName = document.getElementsByClassName('single-item');

console.log(listName);

    // *.querySelectorAll() --only NodeList;

const paragraph = document.querySelectorAll('p');

paragraph.forEach(p => {
    p.style.color = "lime"
});  //node listed element would be manipulated by forEach loop;
console.log(paragraph);

// Get Child Nodes Property --property;
    // *.childNodes

const list = document.querySelector('ul#list');

console.log(list.childNodes);


// Get Children Element Nodes
    // *.children  --only Element Nodes;
    
const lists = document.querySelector('ul#list');

console.log(lists.children);


*/