import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React, { Component } from "react";
// import { render } from "react-dom";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

// const a = "//placekitten.com/1500/500",
//   b = "//placekitten.com/4000/3000",
//   c = "//placekitten.com/800/1200",
//   d = "//placekitten.com/1500/1500";

// const images = [a, b, c, d];

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       photoIndex: 0,
//       isOpen: false,
//     };
//   }

//   render() {
//     const { photoIndex, isOpen } = this.state;

//     return (
//       <div>
//         <button type="button" onClick={() => this.setState({ isOpen: true })}>
//           Open Lightbox
//         </button>

//         {isOpen && (
//           <Lightbox
//             mainSrc={images[photoIndex]}
//             nextSrc={images[(photoIndex + 1) % images.length]}
//             prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//             onCloseRequest={() => this.setState({ isOpen: false })}
//             onMovePrevRequest={() =>
//               this.setState({
//                 photoIndex: (photoIndex + images.length - 1) % images.length,
//               })
//             }
//             onMoveNextRequest={() =>
//               this.setState({
//                 photoIndex: (photoIndex + 1) % images.length,
//               })
//             }
//           />
//         )}
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById("root"));
