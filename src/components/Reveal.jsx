"use client";

/**
 * Usage:
 *
 * <Reveal direction="up" delay={0.1}>
 *   <h2>Section title</h2>
 * </Reveal>
 *
 * <StaggerGroup gap={0.15} className="grid grid-cols-3 gap-6">
 *   <Card />
 *   <Card />
 *   <Card />
 * </StaggerGroup>
 */

import { Children, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const OFFSETS = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

export function Reveal({ children, direction = "up", delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const reduceMotion = useReducedMotion();
  const { x, y } = OFFSETS[direction] || OFFSETS.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x, y }}
      animate={reduceMotion || isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const groupVariants = (gap) => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap } },
});

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerGroup({ children, gap = 0.1, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={groupVariants(gap)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
