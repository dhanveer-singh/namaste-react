{/* <div id="parent">
    <div id="child">
        <h1>Hello I am h1 Tag</h1>
    </div>
</div> */}


const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Hello I am h1 Tag")))

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)