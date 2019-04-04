console.clear();

// Creating and placing new nodesSection
var divElement = document.querySelector('div');

var newElement = document.createElement('p');

newElement.textContent = 'Hello ';

var textNode = document.createTextNode('World');

newElement.appendChild(textNode);

divElement.appendChild(newElement);

// Moving and removing elements

console.log('Before removing', divElement);

setTimeout(() => {

    divElement.removeChild(newElement);

    // remove itself
    // newElement.parentNode.removeChild(newElement);
    
    console.log('After removing', divElement);
}, 5000);

// Manipulating styles
newElement.style.color = 'red';

newElement.setAttribute('class', 'highlight');

