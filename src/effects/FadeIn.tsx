import React from 'react'
import { useInView } from 'react-intersection-observer'

const FadeIn = ({ threshold = 0.15, triggerOnce = false, distance = 100, ...remainingProps }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  return (
    <div
      style={{
        transition: "opacity 1000ms, transform 300ms",
        opacity: inView ? 1 : 0,
        // transform: `translateY(${inView ? 0 : distance}px)`,
      }}
      {...remainingProps}
      ref={ref}
    />
  )
}

export default FadeIn