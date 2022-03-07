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

// 1st -> React element
ReactDOM.render(div, document.getElementById("root"));