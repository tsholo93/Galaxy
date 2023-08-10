import React from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import App from './app.js'

const rootComponent = <App/>

const root = createRoot(document.getElementById('root'))
root.render(rootComponent)
