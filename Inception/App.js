/*<div id="parent">
    <div id="child">
        <h1>Im H1 Tag</h1>
        <h2>Im H2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I H1 Tag</h1>
        <h1>Im H2 Tag</h1>
    </div>
</div>*/

//Writing above code in React:
const parent = React.createElement("div",{id:"parent"}, [
    React.createElement("div", {id:"child"},[
        React.createElement("h1",{},"Im H1 Tag"),
        React.createElement("h2",{},"Im H2 Tag")
    ]),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1",{},"Im H1 Tag"),
        React.createElement("h2",{},"Im H2 Tag")
])
])
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)