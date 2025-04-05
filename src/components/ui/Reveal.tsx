"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation, MotionProps } from "framer-motion";

//Uso: <Reveal direction="down" offset={75}>

interface RevealProps extends MotionProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  offset?: number; // cantidad de desplazamiento (por defecto 75)
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  direction = "down",
  offset = 75,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Dirección dinámica con offset
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -offset };
      case "right":
        return { opacity: 0, x: offset };
      case "down":
        return { opacity: 0, y: offset };
      case "up":
      default:
        return { opacity: 0, y: -offset };
    }
  };

  return (
    <div ref={ref}>
      <motion.div
        className={className}
        {...props}
        variants={{
          hidden: getInitialPosition(),
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
