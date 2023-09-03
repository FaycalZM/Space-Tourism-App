import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const AnimatedPage = ({ children, variants = {}, transition = {} }) => {

    return (
        <AnimatePresence>
            <motion.div
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={transition}
            >
                {children}
            </motion.div>
        </AnimatePresence>

    )
}

export default AnimatedPage