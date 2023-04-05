import { motion } from 'framer-motion'
import React from 'react'

const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

const Animationpage = ({children}) => {
    return (
        <>
            {/* <motion.span variants={animations} initial="initial"
                animate="animate" transition={{duration: 1}}>
                {children}
            </motion.span> */}
        </>
    )
}

export default Animationpage