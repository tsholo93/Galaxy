import { motion, useMotionValue, useSpring } from "framer-motion";
import PageNav from "./PageNav";
import "./styles/PageHeader.css"

function PageHeader() {
  return (
    <motion.header
      layout
      layoutRoot
      className="galaxy-page-header"
    >
        <motion.div
          layout
          className="galaxy-page-brand"
        >
          <a href="#0">Galaxy</a>
        </motion.div>
        <div
          className="galaxy-container m-0 p-0"
        >
          <PageNav />
        </div>
    </motion.header>
  )
}

export default PageHeader
