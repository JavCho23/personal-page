import React from "react"
import ReactDOM from "react-dom"
import "./assets/css/index.css"
import Header from "./components/Header"
import Home from "./views/Home"
import Work from "./views/Work"
import About from "./views/About"
import Skills from "./views/Skills"
import Footer from "./components/Footer"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Home />
        <Work />
        <About />
        <Skills />
        <Footer />
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
