"use client";

import { useState } from "react";
import Link from "next/link";

export default function Comparison() {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  const t = {
    fr: {
      langToggle: "EN",
      heroTag: "Comparatif",
      heroTitle: "Pourquoi les chiropraticiens choisissent NeoCliniq",
      heroSubtitle:
        "On a analysé les deux plus grands logiciels de gestion de clinique. Voici ce que vous payez vraiment — et ce que vous obtenez.",
      heroCta: "Rejoindre la liste d'attente",

      // Pricing section
      pricingTitle: "Le vrai coût pour votre clinique",
      pricingSubtitle: "Comparaison pour une clinique avec 5 praticiens",
      perMonth: "/mois",
      perPractitioner: "/praticien/mois",
      starting: "à partir de",
      included: "Inclus",
      addOn: "Supplément",
      notAvailable: "Non disponible",
      quoteBased: "Sur devis",
      forLife: "verrouillé à vie",
      extraPractitioner: "par praticien supp.",
      adminAccounts: "Comptes admin/réception",
      unlimited: "Illimités et gratuits",
      unclear: "Pas clair",
      basePrice: "Prix de base",
      fivePractitioners: "5 praticiens",
      aiFeatures: "Fonctionnalités IA",
      insuranceBilling: "Facturation assurances",
      totalEstimate: "Estimation totale",
      savingsLabel: "Vous économisez",
      savingsVs: "vs les alternatives",

      // Feature comparison
      featureTitle: "Fonctionnalité par fonctionnalité",
      features: [
        {
          category: "Documentation clinique",
          items: [
            { name: "Notes SOAP spécifiques chiro", neo: true as boolean | string, chiro: true as boolean | string, jane: false as boolean | string },
            { name: "Notes SALT", neo: true, chiro: true, jane: false },
            { name: "Comparaison de notes", neo: true, chiro: true, jane: false },
            { name: "Modèles personnalisables", neo: true, chiro: true, jane: true },
          ],
        },
        {
          category: "Prise de rendez-vous",
          items: [
            { name: "Réservation en ligne intégrée", neo: true, chiro: true, jane: true },
            { name: "Reste sur votre site web", neo: true, chiro: false, jane: false },
            { name: "Rappels SMS + courriel", neo: true, chiro: true, jane: true },
            { name: "Reprogrammation automatique", neo: true, chiro: false, jane: false },
          ],
        },
        {
          category: "Intelligence artificielle",
          items: [
            { name: "IA incluse dans le prix de base", neo: true, chiro: true, jane: false },
            { name: "Notes SOAP assistées par IA", neo: true, chiro: true, jane: "addon" },
            { name: "Agent vocal IA 24/7", neo: true, chiro: false, jane: false },
            { name: "Architecture IA-native", neo: true, chiro: false, jane: false },
          ],
        },
        {
          category: "Facturation & paiements",
          items: [
            { name: "Facturation assurances intégrée", neo: true, chiro: true, jane: "addon" },
            { name: "Facturation assurances canadiennes", neo: true, chiro: false, jane: "addon" },
            { name: "Suivi des dépenses", neo: true, chiro: false, jane: false },
            { name: "Tarification transparente", neo: true, chiro: false, jane: false },
          ],
        },
        {
          category: "Conformité & langue",
          items: [
            { name: "Conforme PIPEDA", neo: true, chiro: false, jane: true },
            { name: "Interface en français", neo: true, chiro: false, jane: false },
            { name: "Conçu pour le Québec", neo: true, chiro: false, jane: false },
            { name: "Bilingue FR/EN", neo: true, chiro: false, jane: false },
          ],
        },
      ],
      checkMark: "✓",
      crossMark: "✗",
      addonMark: "+$",

      // Highlights
      highlightTitle: "Ce qui fait la différence",
      highlights: [
        {
          icon: "💰",
          title: "10 à 30x moins cher",
          desc: "59,99$/mois pour tout. Pas de devis. Pas de surprises. Pas de « contactez-nous pour les prix ».",
        },
        {
          icon: "🧠",
          title: "IA native, pas un extra",
          desc: "ChiroTouch inclut l'IA à 159$/mois. Jane App la vend à 15$/praticien/mois en supplément. Chez NeoCliniq, l'IA est incluse dans le prix de base.",
        },
        {
          icon: "🇨🇦",
          title: "Fait au Québec, en français",
          desc: "Le seul logiciel de gestion de clinique conçu ici, en français d'abord, avec conformité PIPEDA native.",
        },
        {
          icon: "👥",
          title: "Comptes admin illimités et gratuits",
          desc: "Vos réceptionnistes et administrateurs ne devraient pas coûter un supplément. Chez les compétiteurs, ce n'est pas clair ou ça coûte extra.",
        },
      ],

      // Real complaints
      complaintsTitle: "Ce que les utilisateurs disent vraiment",
      complaints: [
        {
          quote: "Ridiculement cher avec du nickel-and-diming constant.",
          source: "Utilisateur ChiroTouch — Capterra",
          product: "ChiroTouch",
        },
        {
          quote: "L'interface a l'air de 2010. On a besoin de 3 moniteurs pour l'utiliser efficacement.",
          source: "Utilisateur ChiroTouch — TrustRadius",
          product: "ChiroTouch",
        },
        {
          quote: "Pas de fonctionnalités spécifiques aux chiropraticiens — les modèles sont trop génériques.",
          source: "Utilisateur Jane App — GetApp",
          product: "Jane App",
        },
        {
          quote: "Impossible de personnaliser les rapports financiers. Pas de suivi des dépenses.",
          source: "Utilisateur Jane App — Capterra",
          product: "Jane App",
        },
      ],

      // CTA
      ctaTitle: "Prêt à simplifier votre clinique?",
      ctaDesc: "Rejoignez les membres fondateurs et verrouillez votre tarif à 59$/mois pour toujours.",
      ctaCta: "Rejoindre la liste d'attente",
      ctaSub: "Accès anticipé · Aucune carte requise · 30 places seulement",
      backHome: "← Retour à l'accueil",

      footerText: "© 2026 NeoCliniq · Quebec, Canada",
      footerSub: "Construit pour les chiropraticiens. Conçu au Québec.",
    },
    en: {
      langToggle: "FR",
      heroTag: "Comparison",
      heroTitle: "Why chiropractors are choosing NeoCliniq",
      heroSubtitle:
        "We analyzed the two biggest clinic management platforms. Here's what you're really paying — and what you're actually getting.",
      heroCta: "Join the waitlist",

      pricingTitle: "The real cost for your clinic",
      pricingSubtitle: "Comparison for a clinic with 5 practitioners",
      perMonth: "/mo",
      perPractitioner: "/practitioner/mo",
      starting: "starting at",
      included: "Included",
      addOn: "Add-on",
      notAvailable: "Not available",
      quoteBased: "Quote-based",
      forLife: "locked for life",
      extraPractitioner: "per extra practitioner",
      adminAccounts: "Admin/reception accounts",
      unlimited: "Unlimited & free",
      unclear: "Unclear",
      basePrice: "Base price",
      fivePractitioners: "5 practitioners",
      aiFeatures: "AI features",
      insuranceBilling: "Insurance billing",
      totalEstimate: "Total estimate",
      savingsLabel: "You save",
      savingsVs: "vs alternatives",

      featureTitle: "Feature by feature",
      features: [
        {
          category: "Clinical documentation",
          items: [
            { name: "Chiro-specific SOAP notes", neo: true as boolean | string, chiro: true as boolean | string, jane: false as boolean | string },
            { name: "SALT notes", neo: true, chiro: true, jane: false },
            { name: "Note comparison", neo: true, chiro: true, jane: false },
            { name: "Customizable templates", neo: true, chiro: true, jane: true },
          ],
        },
        {
          category: "Scheduling & booking",
          items: [
            { name: "Online booking", neo: true, chiro: true, jane: true },
            { name: "Stays on your website", neo: true, chiro: false, jane: false },
            { name: "SMS + email reminders", neo: true, chiro: true, jane: true },
            { name: "Automatic rescheduling", neo: true, chiro: false, jane: false },
          ],
        },
        {
          category: "Artificial intelligence",
          items: [
            { name: "AI included in base price", neo: true, chiro: true, jane: false },
            { name: "AI-assisted SOAP notes", neo: true, chiro: true, jane: "addon" },
            { name: "24/7 voice AI agent", neo: true, chiro: false, jane: false },
            { name: "AI-native architecture", neo: true, chiro: false, jane: false },
          ],
        },
        {
          category: "Billing & payments",
          items: [
            { name: "Integrated insurance billing", neo: true, chiro: true, jane: "addon" },
            { name: "Canadian insurance billing", neo: true, chiro: false, jane: "addon" },
            { name: "Expense tracking", neo: true, chiro: false, jane: false },
            { name: "Transparent pricing", neo: true, chiro: false, jane: false },
          ],
        },
        {
          category: "Compliance & language",
          items: [
            { name: "PIPEDA compliant", neo: true, chiro: false, jane: true },
            { name: "French interface", neo: true, chiro: false, jane: false },
            { name: "Built for Quebec", neo: true, chiro: false, jane: false },
            { name: "Bilingual FR/EN", neo: true, chiro: false, jane: false },
          ],
        },
      ],
      checkMark: "✓",
      crossMark: "✗",
      addonMark: "+$",

      highlightTitle: "What makes the difference",
      highlights: [
        {
          icon: "💰",
          title: "10-30x cheaper",
          desc: "$59.99/mo for everything. No quotes. No surprises. No \"contact us for pricing\".",
        },
        {
          icon: "🧠",
          title: "AI-native, not an add-on",
          desc: "ChiroTouch includes AI at $159/mo. Jane App sells it at $15/practitioner/mo as an add-on. NeoCliniq includes AI in the base price.",
        },
        {
          icon: "🇨🇦",
          title: "Made in Quebec, in French",
          desc: "The only clinic management software built here, French-first, with native PIPEDA compliance.",
        },
        {
          icon: "👥",
          title: "Unlimited free admin accounts",
          desc: "Your receptionists and admins shouldn't cost extra. With competitors, it's unclear or costs more.",
        },
      ],

      complaintsTitle: "What users actually say",
      complaints: [
        {
          quote: "Ridiculously expensive with constant nickel-and-diming.",
          source: "ChiroTouch user — Capterra",
          product: "ChiroTouch",
        },
        {
          quote: "The interface looks like 2010. You need 3 monitors to use it effectively.",
          source: "ChiroTouch user — TrustRadius",
          product: "ChiroTouch",
        },
        {
          quote: "No chiro-specific features — the templates are too generic.",
          source: "Jane App user — GetApp",
          product: "Jane App",
        },
        {
          quote: "Can't customize financial reports. No expense tracking at all.",
          source: "Jane App user — Capterra",
          product: "Jane App",
        },
      ],

      ctaTitle: "Ready to simplify your clinic?",
      ctaDesc: "Join founding members and lock in $59/mo forever.",
      ctaCta: "Join the waitlist",
      ctaSub: "Early access · No card required · 30 spots only",
      backHome: "← Back to home",

      footerText: "© 2026 NeoCliniq · Quebec, Canada",
      footerSub: "Built for chiropractors. Made in Quebec.",
    },
  };

  const copy = t[lang];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Pricing data
  const pricing = {
    neo: {
      name: "NeoCliniq",
      base: "$59.99",
      perPractitioner: "$15",
      fiveTotal: "~$120",
      ai: lang === "fr" ? "Inclus" : "Included",
      insurance: lang === "fr" ? "Inclus" : "Included",
      admin: lang === "fr" ? "Illimités, gratuits" : "Unlimited, free",
      transparency: lang === "fr" ? "100% public" : "100% public",
      highlight: true,
    },
    chiroTouch: {
      name: "ChiroTouch",
      base: "$159",
      perPractitioner: "~$100+",
      fiveTotal: "$800+",
      ai: lang === "fr" ? "Inclus (Rheo AI)" : "Included (Rheo AI)",
      insurance: lang === "fr" ? "Inclus (É.-U. seulement)" : "Included (US only)",
      admin: lang === "fr" ? "Pas clair" : "Unclear",
      transparency: lang === "fr" ? "Suppléments cachés" : "Hidden add-ons",
      highlight: false,
    },
    jane: {
      name: "Jane App",
      base: lang === "fr" ? "Sur devis" : "Quote-based",
      perPractitioner: "$70–150",
      fiveTotal: "$500+",
      ai: "+$15/" + (lang === "fr" ? "praticien" : "practitioner"),
      insurance: "+$20 + $5/" + (lang === "fr" ? "prat." : "pract."),
      admin: lang === "fr" ? "Pas clair" : "Unclear",
      transparency: lang === "fr" ? "Sur devis" : "Quote-based",
      highlight: false,
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Neo<span className="text-[#a855f7]">Cliniq</span>
            </Link>
            <Link
              href="/comparison"
              className="text-sm text-[#a855f7] font-medium hidden sm:inline"
            >
              {lang === "fr" ? "Comparatif" : "Compare"}
            </Link>
          </div>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-sm text-white/50 hover:text-white transition-colors border border-white/10 rounded px-3 py-1"
          >
            {copy.langToggle}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#a855f7] bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-full px-4 py-1.5 mb-6">
            {copy.heroTag}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight mb-6">
            {copy.heroTitle}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            {copy.heroSubtitle}
          </p>
          <button
            onClick={() => scrollToSection("comparison-cta")}
            className="bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 active:scale-95"
          >
            {copy.heroCta}
          </button>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-white/90">
            {copy.pricingTitle}
          </h2>
          <p className="text-white/40 text-center text-sm mb-14">{copy.pricingSubtitle}</p>

          {/* Pricing cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {/* NeoCliniq */}
            <div className="relative bg-gradient-to-br from-[#a855f7]/10 to-transparent border-2 border-[#a855f7]/40 rounded-2xl p-6 order-first sm:order-2">
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold text-[#a855f7] mb-1">{pricing.neo.name}</h3>
                <div className="text-4xl font-black text-white mt-3">
                  {pricing.neo.base}
                  <span className="text-base font-semibold text-white/50">{copy.perMonth}</span>
                </div>
                <p className="text-xs text-[#a855f7]/70 mt-1">
                  + {pricing.neo.perPractitioner}{copy.perMonth} {copy.extraPractitioner}
                </p>
                <p className="text-xs text-white/30 mt-1">{copy.forLife}</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.fivePractitioners}</span>
                  <span className="text-[#a855f7] font-bold">{pricing.neo.fiveTotal}{copy.perMonth}</span>
                </div>
                <div className="border-t border-white/5" />
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.aiFeatures}</span>
                  <span className="text-emerald-400 font-medium">{pricing.neo.ai}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.insuranceBilling}</span>
                  <span className="text-emerald-400 font-medium">{pricing.neo.insurance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.adminAccounts}</span>
                  <span className="text-emerald-400 font-medium">{pricing.neo.admin}</span>
                </div>
                <div className="border-t border-white/5" />
                <div className="bg-[#a855f7]/10 rounded-xl p-3 text-center mt-4">
                  <span className="text-xs text-white/40">{copy.totalEstimate}</span>
                  <div className="text-2xl font-black text-[#a855f7]">{pricing.neo.fiveTotal}<span className="text-sm font-normal">{copy.perMonth}</span></div>
                </div>
              </div>
            </div>

            {/* ChiroTouch */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 order-2 sm:order-1">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white/70 mb-1">{pricing.chiroTouch.name}</h3>
                <div className="text-3xl font-black text-white/60 mt-3">
                  {pricing.chiroTouch.base}
                  <span className="text-base font-semibold text-white/30">{copy.perMonth}</span>
                </div>
                <p className="text-xs text-white/30 mt-1">
                  {copy.starting} · {lang === "fr" ? "par praticien" : "per provider"}
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.fivePractitioners}</span>
                  <span className="text-red-400/80 font-medium">{pricing.chiroTouch.fiveTotal}{copy.perMonth}</span>
                </div>
                <div className="border-t border-white/5" />
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.aiFeatures}</span>
                  <span className="text-white/60 font-medium">{pricing.chiroTouch.ai}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.insuranceBilling}</span>
                  <span className="text-white/60 font-medium">{pricing.chiroTouch.insurance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.adminAccounts}</span>
                  <span className="text-white/40">{pricing.chiroTouch.admin}</span>
                </div>
                <div className="border-t border-white/5" />
                <div className="bg-white/[0.03] rounded-xl p-3 text-center mt-4">
                  <span className="text-xs text-white/30">{copy.totalEstimate}</span>
                  <div className="text-2xl font-bold text-white/40">{pricing.chiroTouch.fiveTotal}<span className="text-sm font-normal">{copy.perMonth}</span></div>
                </div>
              </div>
            </div>

            {/* Jane App */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 order-3">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white/70 mb-1">{pricing.jane.name}</h3>
                <div className="text-2xl font-black text-white/60 mt-3">
                  {pricing.jane.base}
                </div>
                <p className="text-xs text-white/30 mt-1">
                  ~{pricing.jane.perPractitioner}{copy.perPractitioner}
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.fivePractitioners}</span>
                  <span className="text-red-400/80 font-medium">{pricing.jane.fiveTotal}{copy.perMonth}</span>
                </div>
                <div className="border-t border-white/5" />
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.aiFeatures}</span>
                  <span className="text-orange-400/80 font-medium">{pricing.jane.ai}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.insuranceBilling}</span>
                  <span className="text-orange-400/80 font-medium">{pricing.jane.insurance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">{copy.adminAccounts}</span>
                  <span className="text-white/40">{pricing.jane.admin}</span>
                </div>
                <div className="border-t border-white/5" />
                <div className="bg-white/[0.03] rounded-xl p-3 text-center mt-4">
                  <span className="text-xs text-white/30">{copy.totalEstimate}</span>
                  <div className="text-2xl font-bold text-white/40">{pricing.jane.fiveTotal}<span className="text-sm font-normal">{copy.perMonth}</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Savings callout */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3">
              <span className="text-emerald-400 font-bold text-lg">
                {copy.savingsLabel}: $380–$680+{copy.perMonth}
              </span>
              <span className="text-emerald-400/60 text-sm">{copy.savingsVs}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-14 text-white/90">
            {copy.highlightTitle}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {copy.highlights.map((h, i) => (
              <div
                key={i}
                className="relative bg-white/[0.03] border border-[#a855f7]/20 rounded-2xl p-6 hover:border-[#a855f7]/50 transition-colors"
              >
                <div className="text-3xl mb-4">{h.icon}</div>
                <h3 className="font-semibold text-white text-lg mb-2">{h.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-14 text-white/90">
            {copy.featureTitle}
          </h2>

          {/* Table header */}
          <div className="hidden sm:grid grid-cols-[1fr_100px_100px_100px] gap-4 mb-4 px-6">
            <div />
            <div className="text-center text-sm font-bold text-[#a855f7]">NeoCliniq</div>
            <div className="text-center text-sm font-medium text-white/50">ChiroTouch</div>
            <div className="text-center text-sm font-medium text-white/50">Jane App</div>
          </div>

          <div className="space-y-8">
            {copy.features.map((category, ci) => (
              <div key={ci}>
                <h3 className="text-sm font-semibold text-[#a855f7]/70 uppercase tracking-wider mb-3 px-6">
                  {category.category}
                </h3>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
                  {category.items.map((item, ii) => (
                    <div
                      key={ii}
                      className={`grid grid-cols-[1fr_80px_80px_80px] sm:grid-cols-[1fr_100px_100px_100px] gap-4 px-6 py-3 ${
                        ii !== category.items.length - 1 ? "border-b border-white/[0.04]" : ""
                      }`}
                    >
                      <span className="text-sm text-white/70">{item.name}</span>
                      <span className="text-center">
                        {item.neo === true ? (
                          <span className="text-emerald-400 font-bold">✓</span>
                        ) : item.neo === "addon" ? (
                          <span className="text-orange-400 text-xs font-medium">+$</span>
                        ) : (
                          <span className="text-red-400/60">✗</span>
                        )}
                      </span>
                      <span className="text-center">
                        {item.chiro === true ? (
                          <span className="text-emerald-400/60">✓</span>
                        ) : item.chiro === "addon" ? (
                          <span className="text-orange-400/60 text-xs font-medium">+$</span>
                        ) : (
                          <span className="text-red-400/40">✗</span>
                        )}
                      </span>
                      <span className="text-center">
                        {item.jane === true ? (
                          <span className="text-emerald-400/60">✓</span>
                        ) : item.jane === "addon" ? (
                          <span className="text-orange-400/60 text-xs font-medium">+$</span>
                        ) : (
                          <span className="text-red-400/40">✗</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-8 text-xs text-white/40">
            <span><span className="text-emerald-400 font-bold">✓</span> {copy.included}</span>
            <span><span className="text-orange-400 font-medium">+$</span> {copy.addOn}</span>
            <span><span className="text-red-400/60">✗</span> {copy.notAvailable}</span>
          </div>
        </div>
      </section>

      {/* Real User Complaints */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-14 text-white/90">
            {copy.complaintsTitle}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {copy.complaints.map((c, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6"
              >
                <div className="text-2xl mb-3">&ldquo;</div>
                <p className="text-white/70 text-sm leading-relaxed italic mb-4">
                  {c.quote}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/30 text-xs">{c.source}</span>
                  <span className="text-xs font-medium text-white/20 bg-white/[0.05] rounded-full px-3 py-1">
                    {c.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="comparison-cta" className="py-20 px-6">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#a855f7]/10 to-transparent border border-[#a855f7]/25 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{copy.ctaTitle}</h2>
          <p className="text-white/60 mb-8">{copy.ctaDesc}</p>
          <Link
            href="/#waitlist-form"
            className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 active:scale-95"
          >
            {copy.ctaCta}
          </Link>
          <p className="text-white/30 text-sm mt-4">{copy.ctaSub}</p>
        </div>
      </section>

      {/* Back link */}
      <div className="text-center pb-10">
        <Link href="/" className="text-white/30 hover:text-white/60 text-sm transition-colors">
          {copy.backHome}
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6 text-center">
        <p className="text-white/30 text-sm">{copy.footerText}</p>
        <p className="text-white/20 text-xs mt-1">{copy.footerSub}</p>
      </footer>
    </div>
  );
}
