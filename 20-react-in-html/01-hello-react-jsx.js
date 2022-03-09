// let tr = document.createElement('tr');
// tr.setAttribute('id', 'message');

// REACT element -> like a DOM node
const hr = React.createElement("hr");

// JSX -> JavascriptXML
const div = (
    <div id="message" className="alert">
        Hello React
        <hr />
    </div>
);

// React elements are JS objects - they have type, props
// Props includes the attribrutes, props.children has all the children in an array
console.log(hr);
console.log(div);

// React elements are immutable -> the value of their properties cannot be changed
// try it - this gives an error
// console.log(hr);  // no change in type

// EXCERSISE: try to push a string to div.props.children -> not possible

// 1st -> React element
ReactDOM.render(div, document.getElementById("root"));