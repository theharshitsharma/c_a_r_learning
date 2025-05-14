// function customRender(reactElement,container){
//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)
//     container.appendChild(domElement)}

  function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    // Set attributes and innerHTML
    for (const prop in reactElement.props) {
        if (prop === 'children') {
            domElement.innerHTML = reactElement.props[prop];
        } else {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }

    // Append the element to the container
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: '_blank',
        children: 'click me to visit google'
    }
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
