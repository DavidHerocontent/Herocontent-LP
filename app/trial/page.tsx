"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"
import Link from "next/link"

// Suggested SEO title: "Vyzkoušejte HeroContent zdarma - Správa sociálních sítí pro restaurace"
// Suggested SEO description: "Zaregistrujte svou restauraci a začněte využívat profesionální správu Instagramu a reklamy. První konzultace zdarma."

export default function TrialPage() {
  const [step, setStep] = useState<"details" | "phone">("details")
  const [codeSent, setCodeSent] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")
  const [formData, setFormData] = useState({
    restaurantName: "",
    website: "",
    facebook: "",
    instagram: "",
    phone: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showError, setShowError] = useState(false)

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
    setShowError(false)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.restaurantName.trim()) {
      newErrors.restaurantName = "Název restaurace je povinný"
    }

    if (!formData.website.trim() && !formData.facebook.trim() && !formData.instagram.trim()) {
      newErrors.social = "Alespoň jeden odkaz (web nebo sociální síť) je povinný"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const isFormValid =
    formData.restaurantName.trim() && (formData.website.trim() || formData.facebook.trim() || formData.instagram.trim())

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) {
      setShowError(true)
      return
    }
    if (validateForm()) {
      setStep("phone")
    }
  }

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.phone.trim()) {
      setShowError(true)
      return
    }
    console.log("Sending verification code to:", formData.phone)
    setCodeSent(true)
    setShowError(false)
  }

  const handleCodeVerification = (e: React.FormEvent) => {
    e.preventDefault()
    if (!verificationCode.trim()) {
      setShowError(true)
      return
    }
    console.log("Complete form submitted:", formData, "Code:", verificationCode)
    // Handle code verification and final registration
  }

  if (step === "phone") {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center">
              ← Zpět na hlavní stránku
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 min-h-[calc(100vh-60px)]">
          {/* Left side - Benefits */}
          <section className="bg-white p-8 md:p-16 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-balance">
              Ověření přes
              <br />
              <span className="text-yellow-400">WhatsApp</span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-pretty">
              Pro dokončení registrace potřebujeme ověřit vaše telefonní číslo.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <p className="text-gray-700 leading-relaxed">Zadejte své telefonní číslo.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <p className="text-gray-700 leading-relaxed">Pošleme vám přihlašovací kód přes WhatsApp.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <p className="text-gray-700 leading-relaxed">Zadáte kód a můžete začít používat HeroContent.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Toto číslo budeme používat pro komunikaci ohledně vašeho účtu.
                </p>
              </div>
            </div>
          </section>

          {/* Right side - Phone Form */}
          <section className="bg-white p-8 md:p-16 flex flex-col justify-center border-l border-gray-200">
            {!codeSent ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-6 max-w-md mx-auto w-full">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold text-gray-900">
                    Telefonní číslo <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+420 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="h-12 bg-gray-50 border-gray-200"
                    autoFocus
                    required
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Na toto číslo vám pošleme přihlašovací kód přes WhatsApp, kterým dokončíte registraci.
                  </p>
                </div>

                <div className="relative">
                  <Button
                    type="submit"
                    className="w-full h-12 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-base"
                  >
                    Odeslat přihlašovací kód
                  </Button>
                  {showError && (
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
                      Vyplňte prosím své telefonní číslo
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-red-500 rotate-45" />
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setStep("details")}
                  className="text-sm text-gray-600 hover:text-gray-900 underline w-full text-center"
                >
                  ← Vrátit se zpět
                </button>
              </form>
            ) : (
              <form onSubmit={handleCodeVerification} className="space-y-6 max-w-md mx-auto w-full">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold text-gray-900">
                    Telefonní číslo
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
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
                    Kód byl odeslán na WhatsApp číslo {formData.phone}
                  </p>
                </div>

                <div className="relative">
                  <Button
                    type="submit"
                    className="w-full h-12 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-base"
                  >
                    Ověřit a dokončit registraci
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
          </section>
        </div>
      </main>
    )
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

      <div className="grid md:grid-cols-2 min-h-[calc(100vh-60px)]">
        {/* Left side - Benefits */}
        <section className="bg-white p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-balance">
            Vyzkoušejte
            <br />
            <span className="text-yellow-400">HeroContent!</span>
          </h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed text-pretty">
            Nejdřív poznáme váš podnik a pak vám ukážeme, jak jej můžete využít naplno.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-black" />
              </div>
              <p className="text-gray-700 leading-relaxed">Domluvíme si krátký hovor, ať víme, jak to u vás chodí.</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-black" />
              </div>
              <p className="text-gray-700 leading-relaxed">Krok za krokem vám ukážeme, co všechno HeroContent umí.</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-black" />
              </div>
              <p className="text-gray-700 leading-relaxed">Odpovíme na otázky k cenám, nastavení i používání.</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-black" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Společně zjistíme, jak může HeroContent zapadnout právě k vám.
              </p>
            </div>
          </div>
        </section>

        {/* Right side - Form */}
        <section className="bg-white p-8 md:p-16 flex flex-col justify-center border-l border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto w-full">
            <div className="space-y-2">
              <Label htmlFor="restaurantName" className="text-base font-semibold text-gray-900">
                Název restaurace <span className="text-red-500">*</span>
              </Label>
              <Input
                id="restaurantName"
                placeholder="např. Restaurace U zlatého lva"
                value={formData.restaurantName}
                onChange={(e) => updateField("restaurantName", e.target.value)}
                className={`h-12 bg-gray-50 border-gray-200 ${errors.restaurantName ? "border-red-500" : ""}`}
                autoFocus
                required
              />
              {errors.restaurantName && <p className="text-sm text-red-500">{errors.restaurantName}</p>}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                Potřebujeme alespoň jeden z odkazů níže, ale pro nejlepší výsledky prosím vyplňte všechny odkazy.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-base font-semibold text-gray-900">
                Odkaz na web
              </Label>
              <Input
                id="website"
                type="text"
                placeholder="https://www.vase-restaurace.cz"
                value={formData.website}
                onChange={(e) => updateField("website", e.target.value)}
                className="h-12 bg-gray-50 border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="facebook" className="text-base font-semibold text-gray-900">
                Odkaz na Facebook
              </Label>
              <Input
                id="facebook"
                type="text"
                placeholder="https://www.facebook.com/vase-restaurace"
                value={formData.facebook}
                onChange={(e) => updateField("facebook", e.target.value)}
                className="h-12 bg-gray-50 border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagram" className="text-base font-semibold text-gray-900">
                Odkaz na Instagram
              </Label>
              <Input
                id="instagram"
                type="text"
                placeholder="https://www.instagram.com/vase_restaurace"
                value={formData.instagram}
                onChange={(e) => updateField("instagram", e.target.value)}
                className="h-12 bg-gray-50 border-gray-200"
              />
              {errors.social && <p className="text-sm text-red-500">{errors.social}</p>}
            </div>

            <div className="relative">
              <Button
                type="submit"
                className="w-full h-12 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-base"
              >
                Vyzkoušet HeroContent
              </Button>
              {showError && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
                  Vyplňte název restaurace a alespoň jeden odkaz (web nebo sociální síť)
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-red-500 rotate-45" />
                </div>
              )}
            </div>

            <p className="text-xs text-center text-gray-500 leading-relaxed">
              Souhlasím s podmínkami licenční smlouvy a se zásadami ochrany osobních údajů.
            </p>
          </form>
        </section>
      </div>
    </main>
  )
}
