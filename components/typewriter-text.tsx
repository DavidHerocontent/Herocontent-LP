"use client"

import { useEffect, useState } from "react"

interface TypewriterTextProps {
  phrases: { prefix: string; suffix: string }[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypewriterText({
  phrases,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    const fullText = currentPhrase.prefix + currentPhrase.suffix

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.slice(0, currentText.length + 1))
          } else {
            // Finished typing, pause then start deleting
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            // Finished deleting, move to next phrase
            setIsDeleting(false)
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

  // Split the current text to identify prefix and suffix for styling
  const currentPhrase = phrases[currentPhraseIndex]
  const prefixLength = currentPhrase.prefix.length
  const displayPrefix = currentText.slice(0, prefixLength)
  const displaySuffix = currentText.slice(prefixLength)

  return (
    <span className="inline-block min-w-[250px] text-left">
      {displayPrefix}
      <span className="text-yellow-400">{displaySuffix}</span>
      <span className="animate-pulse">|</span>
    </span>
  )
}
