"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

// User app URL - update this to match your user app URL
const USER_APP_URL = process.env.NEXT_PUBLIC_USER_APP_URL || "http://localhost:3001"

export default function LoginPage() {
  const [phone, setPhone] = useState("")
  const [codeSent, setCodeSent] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")
  const [showError, setShowError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone.trim()) {
      setShowError(true)
      return
    }
    setIsLoading(true)
    setShowError(false)
    
    // TODO: Call your authentication API to send verification code
    console.log("Sending verification code to:", phone)
    
    // Simulate API call
    setTimeout(() => {
      setCodeSent(true)
      setIsLoading(false)
    }, 1000)
  }

  const handleCodeVerification = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!verificationCode.trim()) {
      setShowError(true)
      return
    }
    setIsLoading(true)
    setShowError(false)
    
    // TODO: Call your authentication API to verify code and login
    console.log("Verifying code:", verificationCode, "for phone:", phone)
    
    // Simulate API call
    setTimeout(() => {
      // After successful login, redirect to user app
      // You can pass auth token or session info via query params or localStorage
      window.location.href = `${USER_APP_URL}?token=verified&phone=${encodeURIComponent(phone)}`
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center">
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-60px)] p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-2">Přihlášení</h1>
            <p className="text-gray-600 mb-8">Přihlaste se do svého účtu HeroContent</p>

            {!codeSent ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold text-gray-900">
                    Telefonní číslo <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+420 XXX XXX XXX"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value)
                      setShowError(false)
                    }}
                    className="h-12 bg-gray-50 border-gray-200"
                    autoFocus
                    required
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Na toto číslo vám pošleme přihlašovací kód přes WhatsApp.
                  </p>
                </div>

                <div className="relative">
                  <Button
                    type="submit"
                    className="w-full h-12 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? "Odesílám..." : "Odeslat přihlašovací kód"}
                  </Button>
                  {showError && (
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
                      Vyplňte prosím své telefonní číslo
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-red-500 rotate-45" />
                    </div>
                  )}
                </div>

                <p className="text-sm text-center text-gray-600">
                  Nemáte ještě účet?{" "}
                  <Link href="/registration" className="text-yellow-400 hover:text-yellow-500 font-semibold underline">
                    Zaregistrujte se
                  </Link>
                </p>
              </form>
            ) : (
              <form onSubmit={handleCodeVerification} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold text-gray-900">
                    Telefonní číslo
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    className="h-12 bg-gray-100 border-gray-200"
                    disabled
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="code" className="text-base font-semibold text-gray-900">
                    Ověřovací kód <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="Zadejte 6-místný kód"
                    value={verificationCode}
                    onChange={(e) => {
                      setVerificationCode(e.target.value)
                      setShowError(false)
                    }}
                    className="h-12 bg-gray-50 border-gray-200 text-center text-2xl tracking-widest font-mono"
                    maxLength={6}
                    autoFocus
                    required
                  />
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Kód byl odeslán na WhatsApp číslo {phone}
                  </p>
                </div>

                <div className="relative">
                  <Button
                    type="submit"
                    className="w-full h-12 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? "Ověřuji..." : "Přihlásit se"}
                  </Button>
                  {showError && (
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
                      Vyplňte prosím ověřovací kód
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-red-500 rotate-45" />
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setCodeSent(false)
                    setVerificationCode("")
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 underline w-full text-center"
                >
                  ← Změnit telefonní číslo
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

