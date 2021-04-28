/**========================================================================
 * ANCHOR-All those properties and methods will being checked by console.  
 *========================================================================**/

/**========================================================================
 *                       SECTION DOM manipulation 1/3
 *========================================================================**/

// innerText

// textContent

// innerHTML

// style

// value

/**========================================================================
 *                       SECTION DOM manipulation 2/3
 *========================================================================**/

// getAttribute()

//setAttribute

// href, src

// children

// nextSibling or previousElementSibling

// previousSibling or previousElementSibling

// getComputedStyle

// classList

/**========================================================================
 *                       SECTION DOM manipulation 3/3
 *========================================================================**/

// createElement() /* in the ()-use only tag name

// appendChild() /*add on last element and add only one element

// insertBefore()

// system
    //    const li = document.createElement('li');
    //    li.innerText = 'I m new li';
    //    const ul = document.querySelector('ul');
    //    const lis = document.querySelectorAll('li');
    //    lis;
    //    ul.insertBefore(li, lis[1]);



// insertAdjacentElement()

// append() /* add multiple elements

// prepend() /*add element in first element

// removeChild()

// remove()

const myImg = document.createElement('img');
myImg.src = 'https://images.unsplash.com/photo-1514364978092-88ff32485504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80';
myImg.style.height = "40px";
myImg.style.width = "40px";
myImg.style.marginLeft = '10px';

const head = document.querySelector('h2');
head.append(myImg);