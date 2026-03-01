"use client";

import { useState } from "react";

const FOUNDER_TOTAL = 30;
const FOUNDER_CLAIMED = 12;

// ROI calc: ~20 min saved per patient per month (reminders + admin + rescheduling)
const MIN_SAVED_PER_PATIENT = 20;
const DEFAULT_PATIENTS = 60;

export default function Home() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    clinicName: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [roiPatients, setRoiPatients] = useState(DEFAULT_PATIENTS);

  const roiHours = Math.round((roiPatients * MIN_SAVED_PER_PATIENT * 4) / 60);
  const roiDays = (roiHours / 8).toFixed(1);

  const t = {
    fr: {
      nav: "NeoCliniq",
      langToggle: "EN",
      heroTag: "Bientôt disponible",
      heroTitle: "Reprenez le contrôle de votre temps. NeoCliniq s'occupe du reste.",
      heroSubtitle:
        "Fini les fins de journée à rattraper vos dossiers. NeoCliniq automatise l'administratif pour que vous puissiez vous concentrer sur ce qui compte vraiment — vos patients.",
      heroCta: "Rejoindre la liste d'attente",
      heroSub: "Accès anticipé · À partir de 59$/mois à vie · Aucune carte requise",
      painTitle: "Vous reconnaissez-vous ici?",
      pains: [
        {
          icon: "📅",
          title: "Reprogrammation manuelle",
          desc: "Quand un praticien est en retard, votre réceptionniste appelle chaque patient un par un. En 2026.",
        },
        {
          icon: "📋",
          title: "Dossiers dispersés partout",
          desc: "Notes SOAP dans un outil, facturation dans un autre, rappels dans un troisième. Aucune cohérence.",
        },
        {
          icon: "🔔",
          title: "Rappels chronophages",
          desc: "Les confirmations et rappels de rendez-vous prennent des heures de temps administratif chaque semaine.",
        },
      ],
      solutionTitle: "NeoCliniq change la donne.",
      roiTitle: "Combien de temps perdez-vous chaque mois?",
      roiLabel: "Patients par semaine",
      roiResult: (h: number, d: string) => `NeoCliniq vous fait gagner ${h}h par mois — soit ${d} journées de travail.`,
      roiSub: "Calculé sur : appels de rappel + administration + reprogrammation manuelle",
      roiCta: "Récupérer ces heures →",
      solutions: [
        {
          icon: "⚡",
          title: "Reprogrammation automatique",
          desc: "Un praticien en retard? Le système notifie automatiquement tous les patients concernés et gère les ajustements.",
        },
        {
          icon: "🗂️",
          title: "Tout en un seul endroit",
          desc: "Horaire, dossiers patients, notes SOAP, facturation et rapports — dans une seule interface fluide.",
        },
        {
          icon: "🤖",
          title: "Rappels intelligents",
          desc: "SMS et emails automatiques pour les confirmations, rappels et suivis. Zéro effort manuel.",
        },
      ],
      phase2Title: "Ce qui s'en vient 🚀",
      phase2Subtitle: "On construit la clinique du futur. Voici ce qui arrive en Phase 2.",
      phase2Features: [
        {
          icon: "🎙️",
          title: "Agent vocal IA",
          desc: "Un agent IA répond aux appels entrants 24h/24, prend les rendez-vous et répond aux questions — sans réceptionniste.",
        },
        {
          icon: "📝",
          title: "Notes SOAP assistées par IA",
          desc: "Le praticien parle, NeoCliniq rédige. Les notes cliniques se génèrent automatiquement pendant la consultation.",
        },
        {
          icon: "📋",
          title: "Liste d'attente intelligente",
          desc: "Un rendez-vous se libère? Le système comble automatiquement la case avec le prochain patient sur la liste.",
        },
        {
          icon: "📊",
          title: "Rapports & revenus avancés",
          desc: "Tableaux de bord en temps réel, analyse des revenus par praticien, tendances et projections — tout automatisé.",
        },
      ],
      founderTitle: "Offre membre fondateur",
      founderDesc:
        "Seulement 30 places disponibles. Les membres fondateurs verrouillent leur tarif à 59$/mois (+ 15$/mois par praticien supplémentaire) pour toujours — peu importe ce que le prix atteint au lancement (99$/mois + 25$/praticien). Comptes admin et réceptionniste inclus gratuitement. Plus un accès prioritaire et un onboarding 1-à-1 personnalisé.",
      founderNote:
        "Tarif fondateur de 59,99$/mois (1 praticien inclus) + 15$/mois par praticien supplémentaire, verrouillé à vie. Des frais d’utilisation peuvent s’appliquer pour les fonctionnalités propulsées par l’IA.",
      founderSpots: "places réclamées",
      founderUrgency: "Il ne reste que",
      founderRemaining: "places disponibles.",
      formTitle: "Rejoindre la liste d'attente",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Courriel",
      phone: "Téléphone",
      clinicName: "Nom de la clinique (optionnel)",
      submit: "Réserver ma place",
      submitting: "Envoi...",
      successTitle: "Vous êtes sur la liste! 🎉",
      successDesc:
        "Merci! Vous serez parmi les premiers à accéder à NeoCliniq. On vous contacte bientôt.",
      errorMsg: "Une erreur s'est produite. Veuillez réessayer.",
      footerText: "© 2026 NeoCliniq · Quebec, Canada",
      footerSub: "Construit pour les chiropraticiens. Conçu au Québec.",
    },
    en: {
      nav: "NeoCliniq",
      langToggle: "FR",
      heroTag: "Coming Soon",
      heroTitle: "Take back control of your time. NeoCliniq handles the rest.",
      heroSubtitle:
        "No more end-of-day catch-up on files. NeoCliniq automates the admin so you can focus on what truly matters — your patients.",
      heroCta: "Join the waitlist",
      heroSub: "Early access · Starting at $59/mo locked for life · No card required",
      painTitle: "Does this sound familiar?",
      pains: [
        {
          icon: "📅",
          title: "Manual rescheduling",
          desc: "When a practitioner is running late, your receptionist calls every patient one by one. In 2026.",
        },
        {
          icon: "📋",
          title: "Data scattered everywhere",
          desc: "SOAP notes in one tool, billing in another, reminders in a third. No single source of truth.",
        },
        {
          icon: "🔔",
          title: "Time-consuming reminders",
          desc: "Appointment confirmations and reminders eat hours of admin time every single week.",
        },
      ],
      solutionTitle: "NeoCliniq changes everything.",
      roiTitle: "How much time are you losing every month?",
      roiLabel: "Patients per week",
      roiResult: (h: number, d: string) => `NeoCliniq saves you ${h}h per month — that's ${d} full workdays.`,
      roiSub: "Based on: reminder calls + admin + manual rescheduling per patient",
      roiCta: "Reclaim those hours →",
      solutions: [
        {
          icon: "⚡",
          title: "Automatic rescheduling",
          desc: "Practitioner running late? The system automatically notifies all affected patients and handles adjustments.",
        },
        {
          icon: "🗂️",
          title: "Everything in one place",
          desc: "Schedule, patient files, SOAP notes, billing and reports — in one seamless interface.",
        },
        {
          icon: "🤖",
          title: "Smart reminders",
          desc: "Automatic SMS and emails for confirmations, reminders and follow-ups. Zero manual effort.",
        },
      ],
      phase2Title: "What's coming 🚀",
      phase2Subtitle: "We're building the clinic of the future. Here's what's arriving in Phase 2.",
      phase2Features: [
        {
          icon: "🎙️",
          title: "Voice AI agent",
          desc: "An AI agent answers inbound calls 24/7, books appointments and answers questions — no receptionist needed.",
        },
        {
          icon: "📝",
          title: "AI-assisted SOAP notes",
          desc: "The practitioner speaks, NeoCliniq writes. Clinical notes are generated automatically during the consultation.",
        },
        {
          icon: "📋",
          title: "Smart waiting list",
          desc: "A slot opens up? The system automatically fills it with the next patient on the waiting list.",
        },
        {
          icon: "📊",
          title: "Advanced reports & revenue",
          desc: "Real-time dashboards, revenue analysis by practitioner, trends and projections — fully automated.",
        },
      ],
      founderTitle: "Founding member offer",
      founderDesc:
        "Only 30 spots available. Founding members lock in $59/mo (+ $15/mo per additional practitioner) forever — no matter what the price reaches at launch ($99/mo + $25/practitioner). Admin and receptionist accounts always free. Plus priority access and a personalized 1-on-1 onboarding.",
      founderNote:
        "Founding price of $59.99/month (1 practitioner included) + $15/month per additional practitioner, locked forever. Usage-based add-ons may apply for AI-powered features.",
      founderSpots: "spots claimed",
      founderUrgency: "Only",
      founderRemaining: "spots left.",
      formTitle: "Join the waitlist",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      clinicName: "Clinic name (optional)",
      submit: "Reserve my spot",
      submitting: "Sending...",
      successTitle: "You're on the list! 🎉",
      successDesc:
        "Thank you! You'll be among the first to access NeoCliniq. We'll be in touch soon.",
      errorMsg: "Something went wrong. Please try again.",
      footerText: "© 2026 NeoCliniq · Quebec, Canada",
      footerSub: "Built for chiropractors. Made in Quebec.",
    },
  };

  const copy = t[lang];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            Neo<span className="text-[#a855f7]">CliniQ</span>
          </span>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-sm text-white/50 hover:text-white transition-colors border border-white/10 rounded px-3 py-1"
          >
            {copy.langToggle}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#a855f7] bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-full px-4 py-1.5 mb-6">
            {copy.heroTag}
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight mb-6">
            {copy.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            {copy.heroSubtitle}
          </p>
          <button
            onClick={scrollToForm}
            className="bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 active:scale-95"
          >
            {copy.heroCta}
          </button>
          <p className="text-white/30 text-sm mt-4">{copy.heroSub}</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-14 text-white/90">
            {copy.painTitle}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {copy.pains.map((pain, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="text-3xl mb-4">{pain.icon}</div>
                <h3 className="font-semibold text-white mb-2">{pain.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{pain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-14 text-white/90">
            {copy.solutionTitle}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {copy.solutions.map((sol, i) => (
              <div
                key={i}
                className="relative bg-white/[0.03] border border-[#a855f7]/20 rounded-2xl p-6 hover:border-[#a855f7]/50 transition-colors"
              >
                <div className="text-3xl mb-4">{sol.icon}</div>
                <h3 className="font-semibold text-white mb-2">{sol.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white/90">{copy.roiTitle}</h2>
          <p className="text-white/40 text-sm mb-10">{copy.roiSub}</p>

          <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 sm:p-10">
            {/* Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-3">
                <label className="text-sm text-white/50">{copy.roiLabel}</label>
                <span className="text-3xl font-black text-white">{roiPatients}</span>
              </div>
              <input
                type="range"
                min={10}
                max={200}
                step={5}
                value={roiPatients}
                onChange={(e) => setRoiPatients(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${((roiPatients - 10) / 190) * 100}%, rgba(255,255,255,0.1) ${((roiPatients - 10) / 190) * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-white/20 mt-2">
                <span>10</span>
                <span>200</span>
              </div>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-br from-[#a855f7]/15 to-[#ec4899]/5 border border-[#a855f7]/30 rounded-2xl p-6 mb-6">
              <div className="text-5xl font-black text-[#a855f7] mb-2">{roiHours}h</div>
              <p className="text-white/80 font-medium">{copy.roiResult(roiHours, roiDays)}</p>
            </div>

            {/* Breakdown pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 text-xs text-white/40">
              <span className="bg-white/[0.05] rounded-full px-3 py-1">📞 {Math.round(roiPatients * 8 * 4 / 60)}h {lang === "fr" ? "rappels" : "reminder calls"}</span>
              <span className="bg-white/[0.05] rounded-full px-3 py-1">📋 {Math.round(roiPatients * 10 * 4 / 60)}h {lang === "fr" ? "administration" : "admin"}</span>
              <span className="bg-white/[0.05] rounded-full px-3 py-1">🔄 {Math.round(roiPatients * 2.4 * 4 / 60)}h {lang === "fr" ? "reprogrammation" : "rescheduling"}</span>
            </div>

            <button
              onClick={scrollToForm}
              className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.02] active:scale-95"
            >
              {copy.roiCta}
            </button>
          </div>
        </div>
      </section>

      {/* Phase 2 Coming Soon */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-3">{copy.phase2Title}</h2>
            <p className="text-white/50 max-w-xl mx-auto">{copy.phase2Subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.phase2Features.map((feat, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-[#a855f7]/15 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#a855f7]/60 bg-[#a855f7]/10 rounded-full px-2 py-0.5">
                    Phase 2
                  </span>
                </div>
                <div className="text-3xl mb-4">{feat.icon}</div>
                <h3 className="font-semibold text-white mb-2">{feat.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Offer */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#a855f7]/10 to-transparent border border-[#a855f7]/25 rounded-3xl p-8 sm:p-10 text-center">
          <div className="text-3xl mb-4">🏆</div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">{copy.founderTitle}</h2>

          {/* Pricing callout */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="text-center">
              <div className="text-4xl font-black text-[#a855f7]">$59<span className="text-lg font-semibold">/mo</span></div>
              <div className="text-xs text-[#a855f7]/60 mt-1">+ $15/mo {lang === "fr" ? "par praticien supp." : "per extra practitioner"}</div>
              <div className="text-xs text-white/40 mt-1">{lang === "fr" ? "membres fondateurs" : "founding members"}</div>
            </div>
            <div className="text-white/20 text-3xl">→</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white/30 line-through">$99<span className="text-base">/mo</span></div>
              <div className="text-xs text-white/20 mt-1">+ $25/mo {lang === "fr" ? "par praticien supp." : "per extra practitioner"}</div>
              <div className="text-xs text-white/30 mt-1">{lang === "fr" ? "prix de lancement" : "launch price"}</div>
            </div>
          </div>

          {/* Scarcity progress bar */}
          <div className="mt-6 mb-4">
            <div className="flex justify-between text-xs text-white/40 mb-2">
              <span>{FOUNDER_CLAIMED} {copy.founderSpots}</span>
              <span>{FOUNDER_TOTAL} {lang === "fr" ? "total" : "total"}</span>
            </div>
            <div className="w-full bg-white/[0.08] rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] h-3 rounded-full transition-all"
                style={{ width: `${(FOUNDER_CLAIMED / FOUNDER_TOTAL) * 100}%` }}
              />
            </div>
            <p className="text-[#a855f7] text-sm font-semibold mt-3">
              ⚡ {copy.founderUrgency} {FOUNDER_TOTAL - FOUNDER_CLAIMED} {copy.founderRemaining}
            </p>
          </div>

          <p className="text-white/50 text-sm leading-relaxed mt-4">{copy.founderDesc}</p>
          <p className="text-white/40 text-xs leading-relaxed mt-3 italic">{copy.founderNote}</p>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist-form" className="py-20 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">{copy.formTitle}</h2>

          {status === "success" ? (
            <div className="bg-[#a855f7]/10 border border-[#a855f7]/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-bold text-xl mb-2">{copy.successTitle}</h3>
              <p className="text-white/60">{copy.successDesc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">{copy.firstName} *</label>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#a855f7]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">{copy.lastName} *</label>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#a855f7]/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1.5">{copy.email} *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#a855f7]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1.5">{copy.phone} *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#a855f7]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1.5">{copy.clinicName}</label>
                <input
                  type="text"
                  value={form.clinicName}
                  onChange={(e) => setForm({ ...form, clinicName: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#a855f7]/50 transition-colors"
                />
              </div>
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">{copy.errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#a855f7] hover:bg-[#9333ea] disabled:opacity-50 text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.02] active:scale-95"
              >
                {status === "loading" ? copy.submitting : copy.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6 text-center">
        <p className="text-white/30 text-sm">{copy.footerText}</p>
        <p className="text-white/20 text-xs mt-1">{copy.footerSub}</p>
      </footer>
    </div>
  );
}
