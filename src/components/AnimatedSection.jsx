import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

const AnimatedSection = ({ children }) => {
    return (
        <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"

            exit="hidden"
            viewport={{ once: false, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;