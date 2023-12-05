import {
    AnimatePresence,
    MotionConfig,
    motion,
    useAnimationControls,
} from "framer-motion";
import { useRef, useState } from "react";

const Test = () => {
    const [isShown, setIsShown] = useState(true);
    const controls = useAnimationControls();

    const ref = useRef(null);
    // const isInView = useInView(ref);

    return (
        <div className="p- h=[100vh] grid  content-center justify-center">
            <div>
                <motion.button
                    className="mb-10 bg-slate-400"
                    onClick={() => setIsShown(!isShown)}
                    layout
                >
                    Show/hide
                </motion.button>
                <AnimatePresence mode="popLayout">
                    {isShown && (
                        <motion.div
                            initial={{
                                rotate: "0deg",
                                scale: 0,
                                y: 0,
                            }}
                            animate={{
                                rotate: "360deg",
                                scale: 1,
                                y: [0, 150, -150, -150, -150, 0],
                            }}
                            transition={{
                                duration: 1,
                                ease: "backInOut",
                                times: [0, 0.25, 0.5, 0.95, 0.85, 1],
                            }}
                            exit={{
                                rotate: "0deg",
                                scale: 0,
                                y: 0,
                            }}
                            style={{
                                width: "150px",
                                height: "150px",
                                backgroundColor: "black",
                            }}
                        />
                    )}
                </AnimatePresence>
            </div>
            <div className="grid">
                <MotionConfig
                    transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                    }}
                >
                    <motion.button
                        className="mb-10 bg-slate-400 p-4"
                        whileHover={{
                            scale: 1.1,
                        }}
                        whileTap={{
                            scale: 0.9,
                            rotate: "2.5deg",
                        }}
                    >
                        Click me
                    </motion.button>
                    <motion.button
                        className="mb-10 bg-red-400 p-4"
                        whileHover={{
                            scale: 1.1,
                        }}
                        whileTap={{
                            scale: 0.9,
                            rotate: "2.5deg",
                        }}
                    >
                        Click me
                    </motion.button>
                </MotionConfig>
            </div>
            <div>
                <motion.button
                    className="mb-10 bg-slate-400"
                    onClick={() => {
                        controls.start("flip");
                    }}
                    layout
                >
                    Flip it!
                </motion.button>

                <motion.div
                    style={{
                        width: "150px",
                        height: "150px",
                        backgroundColor: "black",
                    }}
                    variants={{
                        initial: {
                            rotate: 0,
                        },
                        flip: {
                            rotate: 180,
                        },
                    }}
                    initial="initial"
                    animate={controls}
                />
            </div>
            <div>
                <motion.div
                    className="h-screen bg-black"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                ></motion.div>
                <div ref={ref} className="h-[100vh] bg-red-500"></div>
            </div>
        </div>
    );
};

export default Test;
