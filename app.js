import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h1 className="head">This is Title of the page</h1>
}
const Heading = () => {
    return (
        <div id="container">
            <Title />
            <h1>Namaste React from Functional Component 🚀</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />)
