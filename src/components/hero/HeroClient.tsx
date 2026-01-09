"use client"

import { motion } from "framer-motion"

export default function HeroClient({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={className}
      >
        {children}
      </motion.div>
    </>
  )
}
