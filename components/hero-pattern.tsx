'use client'

import { useEffect, useRef } from 'react'

export function HeroPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Pattern settings
    const lines: { x: number; y: number; angle: number }[] = []
    const lineCount = 50
    const speed = 0.0005

    // Initialize lines
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2
      })
    }

    // Animation
    let animationFrameId: number
    const animate = () => {
      ctx.fillStyle = 'rgba(250, 250, 250, 0.03)' // Using our primary orange with low opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      lines.forEach(line => {
        // Update position
        line.x += Math.cos(line.angle) * 0.5
        line.y += Math.sin(line.angle) * 0.5

        // Wrap around screen
        if (line.x < 0) line.x = canvas.width
        if (line.x > canvas.width) line.x = 0
        if (line.y < 0) line.y = canvas.height
        if (line.y > canvas.height) line.y = 0

        // Draw line
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(
          line.x + Math.cos(line.angle) * 50,
          line.y + Math.sin(line.angle) * 50
        )
        ctx.strokeStyle = 'rgba(255, 107, 53, 0.1)' // Primary orange with low opacity
        ctx.lineWidth = 1
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'linear-gradient(to right, #FFF5EC, #FFE4D4)' }}
    />
  )
}

