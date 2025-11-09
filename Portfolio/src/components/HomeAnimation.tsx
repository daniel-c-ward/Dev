import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HomeAnimation() {
  const words = ["simple", "modern", "creative"];
  const [index, setIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // track screen width

  const isSmallScreen = screenWidth < 768;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 2000); // 2s per word
      return () => clearTimeout(timer);
    }
  }, [index, words.length]);

  return (
    <div className="relative w-[7.8ch] text-center flex justify-center items-center h-20 xl:text-8xl lg:text-6xl md:text-5xl text-5xl font-bold">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className=" inset-0"
          initial={{ opacity: 0, transform: isSmallScreen ? 'translateX(-5em)' : 'translateY(4em)' }}
          animate={{ opacity: 1, transform: isSmallScreen ? 'translateX(0em)' : 'translateY(0em)' }}
          exit={{ opacity: 0, transform: isSmallScreen ? 'translateX(5em)' : 'translateY(-4em)' }}
          transition={{ duration: 0.3 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
