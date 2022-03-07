// let tr = document.createElement('tr');
// tr.setAttribute('id', 'message');

// REACT element -> like a DOM node
const hr = React.createElement("hr");

const div = React.createElement(
    "div", // type of element
    {
        // props fancy word for attribrutes
        id: "message",
        className: "alert",
    },
    // children
    "Hello React",
    hr
);

// 1st -> React element
ReactDOM.render(div, document.getElementById("root"));