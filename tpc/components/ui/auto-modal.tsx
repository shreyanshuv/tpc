"use client"

import { useEffect, useState } from "react"

export default function EventModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const shown = localStorage.getItem("eventModalShown")

    if (!shown) {
      setTimeout(() => {
        setIsOpen(true)
        // localStorage.setItem("eventModalShown", "true")
      }, 1000) // 1 sec delay
    }
  }, [])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={() => setIsOpen(false)}
    >
      {/* Modal Box */}
      <div
        className="relative max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-10 rounded-full bg-black px-3 py-1 text-lg font-bold shadow"
        >
          ✕
        </button>

        {/* Poster Image */}
        <img
          src="/images/avsar_banner.jpeg"   // 👉 put image in public folder
          alt="AVSAR Job Fair"
          width={"300px"}
          className="h-auto"
        />

        {/* CTA */}
        <div className="p-4 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfoNnf4edOXBPOp9Krzn9ngyLZEok8wYkH4YckcCKs2MtjebQ/viewform"
            target="_blank"
            className="inline-block rounded-lg bg-primary px-6 py-2 text-white font-semibold hover:opacity-90"
          >
            Register Now 🚀
          </a>
        </div>
      </div>
    </div>
  )
}