document.getElementById('button1').addEventListener('click', myFunction);

function myFunction() {
    console.clear();

    // Select or find nodes
    console.log("querySelector: ", document.querySelector('div'));

    console.log("getElementsByTagName: ", document.getElementsByTagName('h1'));

    // Traversal up and down
    console.log("parentNode: ", document.getElementById('p1').parentNode);

    console.log("childNodes: ", document.getElementById('div1').childNodes);

    console.log("firstChild: ", document.getElementById('div1').firstChild);

    console.log("lastChild: ", document.getElementById('div1').lastChild);

    // Traversal left and right
    console.log("previousSibling: ", document.getElementById('h1_1').previousSibling.innerText);

    console.log("nextSibling: ", document.getElementById('h1_1').nextSibling.innerHTML);

}