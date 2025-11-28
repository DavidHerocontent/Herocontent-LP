"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Calendar, TrendingUp, Users, MessageCircle, Instagram, Facebook, Star } from "lucide-react"
import Link from "next/link"
import { TypewriterText } from "@/components/typewriter-text"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg" aria-hidden="true" />
            <span className="text-xl font-semibold">HeroContent</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#sluzby" className="text-sm hover:text-yellow-400 transition-colors">
              Služby
            </Link>
            <Link href="#proc-my" className="text-sm hover:text-yellow-400 transition-colors">
              Proč my
            </Link>
            <Link href="#klienti" className="text-sm hover:text-yellow-400 transition-colors">
              Klienti
            </Link>
            <Link href="#cenik" className="text-sm hover:text-yellow-400 transition-colors">
              Ceník
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="font-semibold" asChild>
              <Link href="/login">Přihlásit se</Link>
            </Button>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold" asChild>
              <Link href="/trial">Vyzkoušet zdarma</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-6 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Spravujeme Instagram a reklamu pro v
              <TypewriterText
                phrases={[
                  { prefix: "aši ", suffix: "Restauraci" },
                  { prefix: "aši ", suffix: "Kavárnu" },
                  { prefix: "áš ", suffix: "Pub" },
                  { prefix: "áš ", suffix: "Hotel" },
                  { prefix: "áš ", suffix: "Bar" },
                ]}
                typingSpeed={100}
                deletingSpeed={80}
                pauseDuration={1500}
              />
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Využijte sílu umělené inteligence a udělejte z vašich sociálních sítí mašinu na oslovení nových zákazníků!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/trial"
                className="inline-flex items-center justify-center bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-lg px-8 h-12 rounded-lg transition-colors"
              >
                Vyzkoušet zdarma
              </Link>
              <Link
                href="#kontakt"
                className="inline-flex items-center justify-center border border-input bg-transparent hover:bg-accent hover:text-accent-foreground font-semibold text-lg px-8 h-12 rounded-lg transition-colors"
              >
                Bezplatná 30min konzultace
              </Link>
              {/* </CHANGE> */}
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium">400+ restaurací nám důvěřuje</p>
                <div className="flex items-center gap-1" role="img" aria-label="5 z 5 hvězdiček">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative max-w-4xl mx-auto lg:ml-auto lg:mr-0">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
              {/* Original Photo */}
              <div className="flex-shrink-0">
                <img
                  src="/images/image.png"
                  alt="Původní fotka klienta"
                  className="w-48 h-48 lg:w-60 lg:h-60 object-cover rounded-lg shadow-lg border-2 border-gray-200"
                />
              </div>

              {/* Plus Sign */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-yellow-400/20 border-2 border-yellow-400 flex items-center justify-center">
                  <span className="text-2xl lg:text-3xl font-bold text-yellow-400">+</span>
                </div>
              </div>

              {/* HeroContent AI Box */}
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg p-4 lg:p-6 border-2 border-yellow-400/50 shadow-lg">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto bg-yellow-400 rounded-lg flex items-center justify-center mb-2">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black rounded flex items-center justify-center">
                        <span className="text-yellow-400 font-bold text-xl lg:text-2xl">AI</span>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base font-semibold text-foreground">HeroContent</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">AI</p>
                  </div>
                </div>
              </div>

              {/* Equals Sign */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-yellow-400/20 border-2 border-yellow-400 flex items-center justify-center">
                  <span className="text-2xl lg:text-3xl font-bold text-yellow-400">=</span>
                </div>
              </div>

              {/* Video/Reel */}
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl p-4 border border-yellow-400/30 shadow-2xl">
                  <video
                    className="rounded-lg w-full h-auto max-w-[200px] lg:max-w-[240px]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label="Výsledné video vytvořené pomocí HeroContent AI"
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2810%29-6yCMygZ2zRGG95sljQZJUfNX1e1VIE.mp4" type="video/mp4" />
                    Váš prohlížeč nepodporuje video element.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border" aria-labelledby="stats-heading">
        <div className="container mx-auto px-4">
          <h2 id="stats-heading" className="sr-only">
            Klíčová čísla a výsledky
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-yellow-400">10x</div>
              <p className="text-lg font-semibold">Levnější</p>
              <p className="text-sm text-muted-foreground">než marketingová agentura</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-yellow-400">8+</div>
              <p className="text-lg font-semibold">Hodin týdně ušetříte</p>
              <p className="text-sm text-muted-foreground">Na správě sociálních sítí</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-yellow-400">100+</div>
              <p className="text-lg font-semibold">Restaurací používá</p>
              <p className="text-sm text-muted-foreground">Naše řešení</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funkce" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Co pro vás děláme?</h2>
            <p className="text-xl text-muted-foreground">Kompletní správa sociálních sítí pod jednou střechou</p>
          </div>

          <div className="max-w-7xl mx-auto space-y-24">
            {/* Feature 1: Photo Editing - Image on right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="inline-block p-3 bg-yellow-400/10 rounded-xl" aria-hidden="true">
                    <svg
                      className="w-8 h-8 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold">Vyšperkujeme vaše fotky</h3>
                </div>
                {/* </CHANGE> */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Možná si říkáte, že vlastní fotky si můžete zveřejnit sami, s námi je rozdíl v tom, že my z
                  jednoduchých fotek z telefonu vytvoříme prémiový obsah pomocí AI technologie.
                </p>
                <div className="pt-2">
                  <Link
                    href="/trial"
                    className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold transition-colors"
                  >
                    Vyzkoušet zdarma
                  </Link>
                </div>
                {/* </CHANGE> */}
              </div>
              <div className="relative">
                <div className="h-[280px] lg:h-[350px] rounded-2xl overflow-hidden border-2 border-border bg-muted flex items-center justify-center">
                  <img
                    src="/images/feature-1-photos.png"
                    alt="Ukázka vylepšení fotek pomocí AI - před a po"
                    className="w-full h-full object-cover"
                  />
                  {/* </CHANGE> */}
                </div>
              </div>
            </div>

            {/* Feature 2: Advertising - Image on left */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="h-[280px] lg:h-[350px] rounded-2xl overflow-hidden border-2 border-border bg-muted flex items-center justify-center">
                  <img
                    src="/images/feature-2-posts.png"
                    alt="Příklady příspěvků, stories a reels vytvořených pro restaurace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="inline-block p-3 bg-yellow-400/10 rounded-xl" aria-hidden="true">
                    <svg
                      className="w-8 h-8 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold">Vytvoříme příspěvky včetně textů</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Umíme posty včetně textů, storíčka i reels, jejich počty pak záleží na vašem předplatném. Pokud během
                  měsíce potřebujete aktuální příspěvky připravíme je také.
                </p>
                <div className="pt-2">
                  <Link
                    href="/trial"
                    className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold transition-colors"
                  >
                    Vyzkoušet zdarma
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 3: Professional Posts - Image on right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="inline-block p-3 bg-yellow-400/10 rounded-xl" aria-hidden="true">
                    <svg
                      className="w-8 h-8 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold">Zašleme vám kalendář příspěvků na měsíc dopředu</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pokud by se vám nějaký příspěvek nelíbil, obratem ho předěláme.
                </p>
                <div className="pt-2">
                  <Link
                    href="/trial"
                    className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold transition-colors"
                  >
                    Vyzkoušet zdarma
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="h-[280px] lg:h-[350px] rounded-2xl overflow-hidden border-2 border-border bg-muted flex items-center justify-center">
                  <img
                    src="/images/feature-3-calendar.png"
                    alt="Měsíční kalendář příspěvků s naplánovaným obsahem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Feature 4: Nastavíme reklamu - Image on left */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="h-[280px] lg:h-[350px] rounded-2xl overflow-hidden border-2 border-border bg-muted flex items-center justify-center">
                  <img
                    src="/images/feature-4-advertising.png"
                    alt="Příklady reklamních kampaní cílených na lokální zákazníky"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="inline-block p-3 bg-yellow-400/10 rounded-xl" aria-hidden="true">
                    <svg
                      className="w-8 h-8 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold">Nastavíme reklamu</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Postaráme se o kompletní nastavení a správu reklam, aby oslovily lidi ve vašem okolí (do 1 km) nebo
                  podle zájmů.
                </p>
                <div className="pt-2">
                  <Link
                    href="/trial"
                    className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold transition-colors"
                  >
                    Vyzkoušet zdarma
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 5: Automaticky zveřejníme vaše menu - Image on right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="inline-block p-3 bg-yellow-400/10 rounded-xl" aria-hidden="true">
                    <svg
                      className="w-8 h-8 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold">Automaticky zveřejníme vaše menu v designu na míru</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Už žádné nudné fotografování menu. Vytvoříme pro vás profesionální design, který automaticky
                  zveřejníme podle vašeho harmonogramu.
                </p>
                <div className="pt-2">
                  <Link
                    href="/trial"
                    className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold transition-colors"
                  >
                    Vyzkoušet zdarma
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="h-[280px] lg:h-[350px] rounded-2xl overflow-hidden border-2 border-border bg-muted flex items-center justify-center">
                  <img
                    src="/images/feature-5-menu.png"
                    alt="Ukázka automaticky zveřejněného menu v profesionálním designu"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markéta Section */}
      <section id="marketa" className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Seznamte se s Markétou</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Vaše osobní manažerka sociálních sítí pro restaurace
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Ahoj! Jsem Markéta, a jsem tu, abych vám pomohla zvýšit zisk vaší restaurace. Svěřte mi správu vaší online
              prezentace a postarám se o vše od tvorby nápadů po publikování atraktivních příspěvků na Facebooku a
              Instagramu.
            </p>
            <p className="text-lg leading-relaxed">Díky mé odbornosti oslovíte více zákazníků a naplníte stoly.</p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: Calendar, text: "Detailně poznává vaši restauraci" },
                { icon: TrendingUp, text: "Vytváří měsíční plán příspěvků" },
                { icon: Users, text: "Nastavuje reklamní kampaně" },
                { icon: MessageCircle, text: "Komunikuje s vámi přes WhatsApp" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 bg-yellow-400/10 rounded-lg mt-1" aria-hidden="true">
                    <item.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-base leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
              Napiš Markétě
            </Button>
          </div>
          <div className="relative">
            <Card className="border-yellow-400/30">
              <CardContent className="p-8">
                <div className="aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-32 h-32 text-yellow-400" aria-hidden="true" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="proc-my" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Jak sociální sítě zvýší váš zisk?</h2>
            <p className="text-xl text-muted-foreground">Efektivní cílená lokální reklama</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Přilákejte zákazníky na denní menu",
                description:
                  "Zobrazujeme vaše denní menu lidem ve vašem okolí ve chvíli, kdy rozhodují, kde poobědvat.",
                stat: "20% více prodaných obědů",
                client: "Cube Eatery",
              },
              {
                title: "Oslovte místní zákazníky akcemi",
                description: "Zviditelňujeme vaše speciální akce, živou hudbu a speciality ve vašem okolí.",
                stat: "Naplnění pobočky hned první den",
                client: "Dhaba Beas",
              },
              {
                title: "Přitáhněte turisty",
                description:
                  "Cílíme reklamu i na turisty ve vašem okolí, kteří touží poznat místní kuchyni a atmosféru.",
                stat: "Větší návštěvnost od turistů",
                client: "Pivní Přístav",
              },
            ].map((benefit, i) => (
              <Card key={i} className="border-border hover:border-yellow-400 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-yellow-400">{benefit.stat}</p>
                    <p className="text-sm text-muted-foreground">{benefit.client}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-semibold mb-6">
              100 Kč denně vám pomůže oslovit více než <span className="text-yellow-400">1 000 lidí</span> ve vašem
              okolí!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cenik" className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Vyberte si plán pro vaši restauraci</h2>
          <p className="text-xl text-muted-foreground">Flexibilní řešení pro každou velikost týmu</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Start Tier */}
          <Card className="border-border">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Start</h3>
                <div className="text-4xl font-bold mb-2">
                  950 Kč<span className="text-lg font-normal text-muted-foreground">/měsíčně</span>
                </div>
                <p className="text-muted-foreground">Pro začátečníky a malé restaurace</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Výstupy</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">4 příspěvky měsíčně</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">1 reklamní kampaň měsíčně</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">Podpora pomocí AI agenta</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" variant="outline" className="w-full font-semibold bg-transparent" asChild>
                <Link href="/trial">Vyzkoušet zdarma</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Standard Tier */}
          <Card className="border-yellow-400/50 shadow-xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">Nejoblíbenější</span>
            </div>
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Standard</h3>
                <div className="text-4xl font-bold mb-2">
                  2 950 Kč<span className="text-lg font-normal text-muted-foreground">/měsíčně</span>
                </div>
                <p className="text-muted-foreground">Pro aktivní restaurace a kavárny</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Výstupy</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">15 příběhů měsíčně</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">8 příspěvků měsíčně</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">4 extra kreativy na přání měsíčně</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">1 reklamní kampaň měsíčně</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Funkce</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">Osobní zákaznická podpora přes WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">Automatické denní/týdenní menu</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
                Mám zájem
              </Button>
            </CardContent>
          </Card>

          {/* Premium Tier */}
          <Card className="border-border">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold mb-2">
                  4 450 Kč<span className="text-lg font-normal text-muted-foreground">/měsíčně</span>
                </div>
                <p className="text-muted-foreground">Pro velké restaurace a hotely</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Výstupy</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">15 příběhů měsíčně</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">8 příspěvků měsíčně</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">2 AI reels</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">2 reklamní kampaně měsíčně</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Funkce</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">Osobní zákaznická podpora přes WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                      <span className="text-sm">Automatické denní/týdenní menu</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
                Mám zájem
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Začněte jednoduše</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Základní informace", description: "Pošlete odkazy na váš web a sociální sítě." },
              { step: "2", title: "Přístup k účtům", description: "Poskytněte přístup ke správě sociálních sítí." },
              {
                step: "3",
                title: "Schválení příspěvků",
                description: "Volitelné – schvalte příspěvky před zveřejněním.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-yellow-400 text-black text-2xl font-bold flex items-center justify-center mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-yellow-400 mb-6">A je to!</p>
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
              Začít nyní
            </Button>
          </div>
        </div>
      </section>

      {/* Client Showcase Section */}
      <section id="klienti" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">Naši spokojení klienti</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Přidejte se k restauracím, které již využívají HeroContent
          </p>

          <div className="space-y-12">
            {/* Pizzerie - 3x3 Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Pizzerie</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none">
                <div className="flex-shrink-0 w-full snap-center">
                  <img
                    src="/images/pizzeria-1.png"
                    alt="Příspěvky pro pizzerii - pizza s přílohami"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                </div>
                <div className="flex-shrink-0 w-full snap-center">
                  <img
                    src="/images/pizzeria-2.png"
                    alt="Příspěvky pro pizzerii - burgery a hlavní chody"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                </div>
                <div className="flex-shrink-0 w-full snap-center">
                  <img
                    src="/images/pizzeria-3.png"
                    alt="Příspěvky pro pizzerii - zákaznická zkušenost"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                </div>
                {/* </CHANGE> */}
              </div>
            </div>

            {/* Asian Restaurant - 3 Photos */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Asijská kuchyně</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none">
                <div className="flex-shrink-0 w-full snap-center">
                  <img
                    src="/images/asian-1.png"
                    alt="Příspěvky pro asijskou restauraci - první set"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                </div>
                <div className="flex-shrink-0 w-full snap-center">
                  <img
                    src="/images/asian-2.png"
                    alt="Příspěvky pro asijskou restauraci - druhý set"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                </div>
                <div className="flex-shrink-0 w-full snap-center">
                  <img
                    src="/images/asian-3.png"
                    alt="Příspěvky pro asijskou restauraci - třetí set"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                </div>
                {/* </CHANGE> */}
              </div>
            </div>

            {/* Modern Restaurant/Bar - 3 Photos */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Moderní restaurace & Bar</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none">
                <div className="flex-shrink-0 w-full snap-center">
                  <img
                    src="/images/restaurant-1.png"
                    alt="Příspěvky pro moderní restauraci - první set"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                </div>
                <div className="flex-shrink-0 w-full snap-center">
                  <img
                    src="/images/restaurant-2.png"
                    alt="Příspěvky pro moderní restauraci - druhý set"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                </div>
                <div className="flex-shrink-0 w-full snap-center">
                  <img
                    src="/images/restaurant-3.png"
                    alt="Příspěvky pro moderní restauraci - třetí set"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                </div>
                {/* </CHANGE> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Připraveni zvýšit zisk své restaurace o 20 % za pouhých 2 500 Kč měsíčně?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nechte Markétu pracovat za vás a ušetřete náklady – naše služba je 3× levnější než agentura a 2× levnější
            než SMM manažer.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-black text-white hover:bg-black/90 font-semibold text-lg px-8"
          >
            Získejte více hostů hned
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg" aria-hidden="true" />
              <span className="text-xl font-semibold">HeroContent</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} HeroContent. Všechna práva vyhrazena.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-yellow-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-yellow-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
