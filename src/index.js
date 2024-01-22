import React, { useEffect } from "react"
import ReactDom from "react-dom"
import App from "./App"

// const App = () => {
//     const [data, setData] = React.useState(true);

//     // DidMount
//     useEffect(() => {
//         console.log("DidMount");
//     }, []);

//     // DidUpdate
//     useEffect(() => {
//         if (!data) {
//             console.log("DidUpdate");
//             return setData(!data);
//         }
//     }, [data]);

//     const updateData = () => {
//         return setData(!data);
//     }
//     return (
//         <>
//             <button onClick={updateData}>Action</button>
//         </>
//     )
// }

ReactDom.render(<App />, document.getElementById("root"));