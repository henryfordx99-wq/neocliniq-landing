"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RevealSection,
  RevealStagger,
  HeroEntrance,
  FloatingOrbs,
  GrainOverlay,
  TiltCard,
} from "../components/animations";

export default function Comparison() {
  const [lang, setLangState] = useState<"fr" | "en">("fr");

  useEffect(() => {
    const saved = localStorage.getItem("neocliniq-lang");
    if (saved === "en" || saved === "fr") setLangState(saved);
  }, []);

  const setLang = (l: "fr" | "en") => {
    setLangState(l);
    localStorage.setItem("neocliniq-lang", l);
  };

  const t = {
    fr: {
      langToggle: "EN",
      heroTag: "Comparatif",
      heroTitle: "Pourquoi les chiropraticiens",
      heroHighlight: "choisissent NeoCliniq",
      heroSubtitle: "On a analysé les deux plus grands logiciels de gestion de clinique. Voici ce que vous payez vraiment — et ce que vous obtenez.",
      heroCta: "Rejoindre la liste d'attente",
      pricingTitle: "Le vrai coût pour votre clinique",
      pricingSubtitle: "Comparaison pour une clinique avec 5 praticiens",
      perMonth: "/mois", perPractitioner: "/praticien/mois", starting: "à partir de",
      included: "Inclus", addOn: "Supplément", notAvailable: "Non disponible",
      forLife: "verrouillé à vie", extraPractitioner: "par praticien supp.",
      adminAccounts: "Comptes admin/réception", unlimited: "Illimités et gratuits", unclear: "Pas clair",
      basePrice: "Prix de base", fivePractitioners: "5 praticiens", aiFeatures: "Fonctionnalités IA",
      insuranceBilling: "Facturation assurances", totalEstimate: "Estimation totale",
      savingsLabel: "Vous économisez", savingsVs: "vs les alternatives",
      featureTitle: "Fonctionnalité par fonctionnalité",
      features: [
        { category: "Documentation clinique", items: [
          { name: "Notes SOAP spécifiques chiro", neo: true as boolean | string, chiro: true as boolean | string, jane: false as boolean | string },
          { name: "Notes SALT", neo: true, chiro: true, jane: false },
          { name: "Comparaison de notes", neo: true, chiro: true, jane: false },
          { name: "Modèles personnalisables", neo: true, chiro: true, jane: true },
        ]},
        { category: "Prise de rendez-vous", items: [
          { name: "Réservation en ligne intégrée", neo: true, chiro: true, jane: true },
          { name: "Reste sur votre site web", neo: true, chiro: false, jane: false },
          { name: "Rappels SMS + courriel", neo: true, chiro: true, jane: true },
          { name: "Reprogrammation automatique", neo: true, chiro: false, jane: false },
        ]},
        { category: "Intelligence artificielle", items: [
          { name: "IA incluse dans le prix de base", neo: true, chiro: true, jane: false },
          { name: "Notes SOAP assistées par IA", neo: true, chiro: true, jane: "addon" },
          { name: "Agent vocal IA 24/7", neo: true, chiro: false, jane: false },
          { name: "Architecture IA-native", neo: true, chiro: false, jane: false },
        ]},
        { category: "Facturation & paiements", items: [
          { name: "Facturation assurances intégrée", neo: true, chiro: true, jane: "addon" },
          { name: "Facturation assurances canadiennes", neo: true, chiro: false, jane: "addon" },
          { name: "Suivi des dépenses", neo: true, chiro: false, jane: false },
          { name: "Tarification transparente", neo: true, chiro: false, jane: false },
        ]},
        { category: "Conformité & langue", items: [
          { name: "Conforme PIPEDA", neo: true, chiro: false, jane: true },
          { name: "Interface en français", neo: true, chiro: false, jane: false },
          { name: "Conçu pour le Québec", neo: true, chiro: false, jane: false },
          { name: "Bilingue FR/EN", neo: true, chiro: false, jane: false },
        ]},
      ],
      highlightTitle: "Ce qui fait la différence",
      highlights: [
        { icon: "💰", title: "10 à 30x moins cher", desc: "59,99$/mois pour tout. Pas de devis. Pas de surprises. Pas de « contactez-nous pour les prix »." },
        { icon: "🧠", title: "IA native, pas un extra", desc: "ChiroTouch inclut l'IA à 159$/mois. Jane App la vend à 15$/praticien/mois en supplément. Chez NeoCliniq, l'IA est incluse dans le prix de base." },
        { icon: "🇨🇦", title: "Fait au Québec, en français", desc: "Le seul logiciel de gestion de clinique conçu ici, en français d'abord, avec conformité PIPEDA native." },
        { icon: "👥", title: "Comptes admin illimités et gratuits", desc: "Vos réceptionnistes et administrateurs ne devraient pas coûter un supplément. Chez les compétiteurs, ce n'est pas clair ou ça coûte extra." },
      ],
      complaintsTitle: "Ce que les utilisateurs disent vraiment",
      complaints: [
        { quote: "Ridiculement cher avec du nickel-and-diming constant.", source: "Utilisateur ChiroTouch — Capterra", product: "ChiroTouch" },
        { quote: "L'interface a l'air de 2010. On a besoin de 3 moniteurs pour l'utiliser efficacement.", source: "Utilisateur ChiroTouch — TrustRadius", product: "ChiroTouch" },
        { quote: "Pas de fonctionnalités spécifiques aux chiropraticiens — les modèles sont trop génériques.", source: "Utilisateur Jane App — GetApp", product: "Jane App" },
        { quote: "Impossible de personnaliser les rapports financiers. Pas de suivi des dépenses.", source: "Utilisateur Jane App — Capterra", product: "Jane App" },
      ],
      ctaTitle: "Prêt à simplifier votre clinique?",
      ctaDesc: "Rejoignez les membres fondateurs et verrouillez votre tarif à 59$/mois pour toujours.",
      ctaCta: "Rejoindre la liste d'attente",
      ctaSub: "Accès anticipé · Aucune carte requise · 30 places seulement",
      backHome: "← Retour à l'accueil",
      footerText: "© 2026 NeoCliniq · Quebec, Canada",
      footerSub: "Construit pour les chiropraticiens. Conçu au Québec.",
      compare: "Comparatif",
    },
    en: {
      langToggle: "FR",
      heroTag: "Comparison",
      heroTitle: "Why chiropractors are",
      heroHighlight: "choosing NeoCliniq",
      heroSubtitle: "We analyzed the two biggest clinic management platforms. Here's what you're really paying — and what you're actually getting.",
      heroCta: "Join the waitlist",
      pricingTitle: "The real cost for your clinic",
      pricingSubtitle: "Comparison for a clinic with 5 practitioners",
      perMonth: "/mo", perPractitioner: "/practitioner/mo", starting: "starting at",
      included: "Included", addOn: "Add-on", notAvailable: "Not available",
      forLife: "locked for life", extraPractitioner: "per extra practitioner",
      adminAccounts: "Admin/reception accounts", unlimited: "Unlimited & free", unclear: "Unclear",
      basePrice: "Base price", fivePractitioners: "5 practitioners", aiFeatures: "AI features",
      insuranceBilling: "Insurance billing", totalEstimate: "Total estimate",
      savingsLabel: "You save", savingsVs: "vs alternatives",
      featureTitle: "Feature by feature",
      features: [
        { category: "Clinical documentation", items: [
          { name: "Chiro-specific SOAP notes", neo: true as boolean | string, chiro: true as boolean | string, jane: false as boolean | string },
          { name: "SALT notes", neo: true, chiro: true, jane: false },
          { name: "Note comparison", neo: true, chiro: true, jane: false },
          { name: "Customizable templates", neo: true, chiro: true, jane: true },
        ]},
        { category: "Scheduling & booking", items: [
          { name: "Online booking", neo: true, chiro: true, jane: true },
          { name: "Stays on your website", neo: true, chiro: false, jane: false },
          { name: "SMS + email reminders", neo: true, chiro: true, jane: true },
          { name: "Automatic rescheduling", neo: true, chiro: false, jane: false },
        ]},
        { category: "Artificial intelligence", items: [
          { name: "AI included in base price", neo: true, chiro: true, jane: false },
          { name: "AI-assisted SOAP notes", neo: true, chiro: true, jane: "addon" },
          { name: "24/7 voice AI agent", neo: true, chiro: false, jane: false },
          { name: "AI-native architecture", neo: true, chiro: false, jane: false },
        ]},
        { category: "Billing & payments", items: [
          { name: "Integrated insurance billing", neo: true, chiro: true, jane: "addon" },
          { name: "Canadian insurance billing", neo: true, chiro: false, jane: "addon" },
          { name: "Expense tracking", neo: true, chiro: false, jane: false },
          { name: "Transparent pricing", neo: true, chiro: false, jane: false },
        ]},
        { category: "Compliance & language", items: [
          { name: "PIPEDA compliant", neo: true, chiro: false, jane: true },
          { name: "French interface", neo: true, chiro: false, jane: false },
          { name: "Built for Quebec", neo: true, chiro: false, jane: false },
          { name: "Bilingual FR/EN", neo: true, chiro: false, jane: false },
        ]},
      ],
      highlightTitle: "What makes the difference",
      highlights: [
        { icon: "💰", title: "10-30x cheaper", desc: "$59.99/mo for everything. No quotes. No surprises. No \"contact us for pricing\"." },
        { icon: "🧠", title: "AI-native, not an add-on", desc: "ChiroTouch includes AI at $159/mo. Jane App sells it at $15/practitioner/mo as an add-on. NeoCliniq includes AI in the base price." },
        { icon: "🇨🇦", title: "Made in Quebec, in French", desc: "The only clinic management software built here, French-first, with native PIPEDA compliance." },
        { icon: "👥", title: "Unlimited free admin accounts", desc: "Your receptionists and admins shouldn't cost extra. With competitors, it's unclear or costs more." },
      ],
      complaintsTitle: "What users actually say",
      complaints: [
        { quote: "Ridiculously expensive with constant nickel-and-diming.", source: "ChiroTouch user — Capterra", product: "ChiroTouch" },
        { quote: "The interface looks like 2010. You need 3 monitors to use it effectively.", source: "ChiroTouch user — TrustRadius", product: "ChiroTouch" },
        { quote: "No chiro-specific features — the templates are too generic.", source: "Jane App user — GetApp", product: "Jane App" },
        { quote: "Can't customize financial reports. No expense tracking at all.", source: "Jane App user — Capterra", product: "Jane App" },
      ],
      ctaTitle: "Ready to simplify your clinic?",
      ctaDesc: "Join founding members and lock in $59/mo forever.",
      ctaCta: "Join the waitlist",
      ctaSub: "Early access · No card required · 30 spots only",
      backHome: "← Back to home",
      footerText: "© 2026 NeoCliniq · Quebec, Canada",
      footerSub: "Built for chiropractors. Made in Quebec.",
      compare: "Compare",
    },
  };

  const copy = t[lang];

  const pricing = {
    neo: { name: "NeoCliniq", base: "$59.99", perPractitioner: "$15", fiveTotal: "~$120", ai: lang === "fr" ? "Inclus" : "Included", insurance: lang === "fr" ? "Inclus" : "Included", admin: lang === "fr" ? "Illimités, gratuits" : "Unlimited, free", highlight: true },
    chiroTouch: { name: "ChiroTouch", base: "$159", perPractitioner: "~$100+", fiveTotal: "$800+", ai: lang === "fr" ? "Inclus (Rheo AI)" : "Included (Rheo AI)", insurance: lang === "fr" ? "Inclus (É.-U. seulement)" : "Included (US only)", admin: lang === "fr" ? "Pas clair" : "Unclear", highlight: false },
    jane: { name: "Jane App", base: lang === "fr" ? "Sur devis" : "Quote-based", perPractitioner: "$70–150", fiveTotal: "$500+", ai: "+$15/" + (lang === "fr" ? "praticien" : "practitioner"), insurance: "+$20 + $5/" + (lang === "fr" ? "prat." : "pract."), admin: lang === "fr" ? "Pas clair" : "Unclear", highlight: false },
  };

  function FeatureIcon({ value }: { value: boolean | string }) {
    if (value === true) return <span className="font-bold text-emerald-400">✓</span>;
    if (value === "addon") return <span className="text-xs font-medium text-[#d4ab4a]">+$</span>;
    return <span className="text-red-400/50">✗</span>;
  }

  return (
    <div className="min-h-screen bg-[#0b1929] text-white font-sans">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0b1929]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-lg font-bold tracking-tight transition-colors duration-200 hover:opacity-80" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="bg-gradient-to-r from-[#e2c56e] to-[#d4ab4a] bg-clip-text text-transparent">Neo</span><span className="text-white">Cliniq</span>
            </Link>
            <Link href="/comparison" className="hidden text-sm font-medium text-[#d4ab4a] sm:inline">
              {copy.compare}
            </Link>
          </div>
          <button onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-[#a0aab4] transition-transform duration-200 hover:-translate-y-px hover:border-[#d4ab4a]/30 hover:text-white active:translate-y-0 active:scale-[0.98]">
            {copy.langToggle}
          </button>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-40 pb-20 px-6">
        <FloatingOrbs />
        <GrainOverlay />
        <div className="relative mx-auto max-w-3xl text-center">
          <HeroEntrance delay={0}>
            <span className="mb-6 inline-block rounded-full border border-[#d4ab4a]/20 bg-[#d4ab4a]/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#e2c56e]">
              {copy.heroTag}
            </span>
          </HeroEntrance>
          <HeroEntrance delay={150}>
            <h1 className="mb-6 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              {copy.heroTitle}{" "}
              <span className="bg-gradient-to-r from-[#e2c56e] via-[#d4ab4a] to-[#b08530] bg-clip-text text-transparent">
                {copy.heroHighlight}
              </span>
            </h1>
          </HeroEntrance>
          <HeroEntrance delay={300}>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#e0e0e0]" style={{ lineHeight: "1.7" }}>
              {copy.heroSubtitle}
            </p>
          </HeroEntrance>
          <HeroEntrance delay={450}>
            <Link href="/#waitlist-form"
              className="inline-block rounded-xl bg-gradient-to-r from-[#d4ab4a] to-[#b08530] px-8 py-4 text-base font-bold text-[#0b1929] transition-transform duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
              style={{ boxShadow: "0 2px 8px rgba(212,171,74,0.25), 0 8px 24px rgba(212,171,74,0.15)" }}>
              {copy.heroCta}
            </Link>
          </HeroEntrance>
        </div>
      </section>

      {/* ─── Pricing Comparison ─── */}
      <section className="relative border-y border-white/[0.06] bg-[#132a42]/40 py-24 px-6">
        <GrainOverlay opacity={0.02} />
        <div className="relative mx-auto max-w-5xl">
          <RevealSection className="mb-16 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white/90 sm:text-3xl">{copy.pricingTitle}</h2>
            <p className="text-sm text-[#a0aab4]">{copy.pricingSubtitle}</p>
          </RevealSection>

          <RevealStagger className="grid gap-6 sm:grid-cols-3" staggerMs={120}>
            {/* ChiroTouch */}
            <TiltCard className="order-2 sm:order-1">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-white/70">{pricing.chiroTouch.name}</h3>
                <div className="mt-3 text-3xl font-black text-white/60">{pricing.chiroTouch.base}<span className="text-base font-semibold text-white/30">{copy.perMonth}</span></div>
                <p className="mt-1 text-xs text-white/30">{copy.starting} · {lang === "fr" ? "par praticien" : "per provider"}</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.fivePractitioners}</span><span className="font-medium text-red-400/80">{pricing.chiroTouch.fiveTotal}{copy.perMonth}</span></div>
                <div className="border-t border-white/[0.06]" />
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.aiFeatures}</span><span className="font-medium text-white/60">{pricing.chiroTouch.ai}</span></div>
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.insuranceBilling}</span><span className="font-medium text-white/60">{pricing.chiroTouch.insurance}</span></div>
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.adminAccounts}</span><span className="text-white/40">{pricing.chiroTouch.admin}</span></div>
                <div className="border-t border-white/[0.06]" />
                <div className="mt-4 rounded-xl bg-white/[0.03] p-3 text-center">
                  <span className="text-xs text-white/30">{copy.totalEstimate}</span>
                  <div className="text-2xl font-bold text-white/40">{pricing.chiroTouch.fiveTotal}<span className="text-sm font-normal">{copy.perMonth}</span></div>
                </div>
              </div>
            </TiltCard>

            {/* NeoCliniq - center, highlighted */}
            <TiltCard gold className="order-1 sm:order-2 border-[#d4ab4a]/30" style={{ background: "linear-gradient(135deg, rgba(212,171,74,0.08) 0%, rgba(19,42,66,0.6) 100%)" }}>
              <div className="mb-6 mt-2 text-center">
                <h3 className="text-xl font-bold text-[#d4ab4a]">{pricing.neo.name}</h3>
                <div className="mt-3 text-4xl font-black text-white">{pricing.neo.base}<span className="text-base font-semibold text-white/50">{copy.perMonth}</span></div>
                <p className="mt-1 text-xs text-[#d4ab4a]/70">+ {pricing.neo.perPractitioner}{copy.perMonth} {copy.extraPractitioner}</p>
                <p className="mt-1 text-xs text-white/30">{copy.forLife}</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.fivePractitioners}</span><span className="font-bold text-[#d4ab4a]">{pricing.neo.fiveTotal}{copy.perMonth}</span></div>
                <div className="border-t border-white/[0.06]" />
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.aiFeatures}</span><span className="font-medium text-emerald-400">{pricing.neo.ai}</span></div>
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.insuranceBilling}</span><span className="font-medium text-emerald-400">{pricing.neo.insurance}</span></div>
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.adminAccounts}</span><span className="font-medium text-emerald-400">{pricing.neo.admin}</span></div>
                <div className="border-t border-white/[0.06]" />
                <div className="mt-4 rounded-xl bg-[#d4ab4a]/10 p-3 text-center">
                  <span className="text-xs text-white/40">{copy.totalEstimate}</span>
                  <div className="text-2xl font-black text-[#d4ab4a]">{pricing.neo.fiveTotal}<span className="text-sm font-normal">{copy.perMonth}</span></div>
                </div>
              </div>
            </TiltCard>

            {/* Jane App */}
            <TiltCard className="order-3">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-white/70">{pricing.jane.name}</h3>
                <div className="mt-3 text-2xl font-black text-white/60">{pricing.jane.base}</div>
                <p className="mt-1 text-xs text-white/30">~{pricing.jane.perPractitioner}{copy.perPractitioner}</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.fivePractitioners}</span><span className="font-medium text-red-400/80">{pricing.jane.fiveTotal}{copy.perMonth}</span></div>
                <div className="border-t border-white/[0.06]" />
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.aiFeatures}</span><span className="font-medium text-[#d4ab4a]/80">{pricing.jane.ai}</span></div>
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.insuranceBilling}</span><span className="font-medium text-[#d4ab4a]/80">{pricing.jane.insurance}</span></div>
                <div className="flex justify-between"><span className="text-[#a0aab4]">{copy.adminAccounts}</span><span className="text-white/40">{pricing.jane.admin}</span></div>
                <div className="border-t border-white/[0.06]" />
                <div className="mt-4 rounded-xl bg-white/[0.03] p-3 text-center">
                  <span className="text-xs text-white/30">{copy.totalEstimate}</span>
                  <div className="text-2xl font-bold text-white/40">{pricing.jane.fiveTotal}<span className="text-sm font-normal">{copy.perMonth}</span></div>
                </div>
              </div>
            </TiltCard>
          </RevealStagger>

          {/* Savings callout */}
          <RevealSection className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-3">
              <span className="text-lg font-bold text-emerald-400">{copy.savingsLabel}: $380–$680+{copy.perMonth}</span>
              <span className="text-sm text-emerald-400/60">{copy.savingsVs}</span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Key Highlights ─── */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <RevealSection className="mb-16 text-center">
            <h2 className="text-2xl font-bold text-white/90 sm:text-3xl">{copy.highlightTitle}</h2>
          </RevealSection>
          <RevealStagger className="grid gap-6 sm:grid-cols-2" staggerMs={120}>
            {copy.highlights.map((h, i) => (
              <TiltCard key={i} gold>
                <div className="mb-4 text-3xl">{h.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-white">{h.title}</h3>
                <p className="text-sm text-[#a0aab4]" style={{ lineHeight: "1.85" }}>{h.desc}</p>
              </TiltCard>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ─── Feature Comparison Table ─── */}
      <section className="relative border-y border-white/[0.06] bg-[#132a42]/40 py-24 px-6">
        <GrainOverlay opacity={0.02} />
        <div className="relative mx-auto max-w-5xl">
          <RevealSection className="mb-14 text-center">
            <h2 className="text-2xl font-bold text-white/90 sm:text-3xl">{copy.featureTitle}</h2>
          </RevealSection>

          {/* Table header */}
          <div className="mb-4 hidden gap-4 px-6 sm:grid sm:grid-cols-[1fr_100px_100px_100px]">
            <div />
            <div className="text-center text-sm font-bold text-[#d4ab4a]">NeoCliniq</div>
            <div className="text-center text-sm font-medium text-white/50">ChiroTouch</div>
            <div className="text-center text-sm font-medium text-white/50">Jane App</div>
          </div>

          <div className="space-y-8">
            {copy.features.map((category, ci) => (
              <RevealSection key={ci} delay={ci * 80}>
                <h3 className="mb-3 px-6 text-sm font-semibold uppercase tracking-wider text-[#d4ab4a]/70">
                  {category.category}
                </h3>
                <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#132a42]/40">
                  {category.items.map((item, ii) => (
                    <div key={ii}
                      className={`grid grid-cols-[1fr_80px_80px_80px] gap-4 px-6 py-3 sm:grid-cols-[1fr_100px_100px_100px] ${ii !== category.items.length - 1 ? "border-b border-white/[0.04]" : ""}`}>
                      <span className="text-sm text-white/70">{item.name}</span>
                      <span className="text-center"><FeatureIcon value={item.neo} /></span>
                      <span className="text-center"><FeatureIcon value={item.chiro} /></span>
                      <span className="text-center"><FeatureIcon value={item.jane} /></span>
                    </div>
                  ))}
                </div>
              </RevealSection>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-6 text-xs text-white/40">
            <span><span className="font-bold text-emerald-400">✓</span> {copy.included}</span>
            <span><span className="font-medium text-[#d4ab4a]">+$</span> {copy.addOn}</span>
            <span><span className="text-red-400/50">✗</span> {copy.notAvailable}</span>
          </div>
        </div>
      </section>

      {/* ─── User Complaints ─── */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <RevealSection className="mb-14 text-center">
            <h2 className="text-2xl font-bold text-white/90 sm:text-3xl">{copy.complaintsTitle}</h2>
          </RevealSection>
          <RevealStagger className="grid gap-6 sm:grid-cols-2" staggerMs={120}>
            {copy.complaints.map((c, i) => (
              <TiltCard key={i}>
                <div className="mb-3 text-2xl text-[#d4ab4a]/40">&ldquo;</div>
                <p className="mb-4 text-sm italic leading-relaxed text-white/70">{c.quote}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30">{c.source}</span>
                  <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/20">{c.product}</span>
                </div>
              </TiltCard>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <RevealSection className="py-24 px-6">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-[#d4ab4a]/20 p-8 text-center sm:p-12"
          style={{ background: "linear-gradient(135deg, rgba(212,171,74,0.08) 0%, rgba(19,42,66,0.6) 50%, rgba(176,133,48,0.06) 100%)", boxShadow: "0 2px 4px rgba(11,25,41,0.1), 0 8px 24px rgba(11,25,41,0.12), 0 24px 48px rgba(212,171,74,0.06)" }}>
          <GrainOverlay opacity={0.02} />
          <div className="relative">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{copy.ctaTitle}</h2>
            <p className="mb-8 text-[#e0e0e0]">{copy.ctaDesc}</p>
            <Link href="/#waitlist-form"
              className="inline-block rounded-xl bg-gradient-to-r from-[#d4ab4a] to-[#b08530] px-8 py-4 text-base font-bold text-[#0b1929] transition-transform duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
              style={{ boxShadow: "0 2px 8px rgba(212,171,74,0.25), 0 8px 24px rgba(212,171,74,0.15)" }}>
              {copy.ctaCta}
            </Link>
            <p className="mt-4 text-sm text-[#a0aab4]">{copy.ctaSub}</p>
          </div>
        </div>
      </RevealSection>

      {/* Back link */}
      <div className="pb-10 text-center">
        <Link href="/" className="text-sm text-white/30 transition-colors duration-200 hover:text-[#d4ab4a]">{copy.backHome}</Link>
      </div>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/[0.06] py-10 px-6 text-center">
        <Image src="/Logo_Transparent.svg" alt="NeoCliniq" width={60} height={70} className="mx-auto mb-4 h-12 w-auto opacity-40" />
        <p className="text-sm text-[#a0aab4]">{copy.footerText}</p>
        <p className="mt-1 text-xs text-white/20">{copy.footerSub}</p>
      </footer>
    </div>
  );
}
