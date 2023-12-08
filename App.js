const heading = React.createElement("h1", { id: "myh1Tag" }, "Hello From ReactJs"); // any Html element

const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(heading);