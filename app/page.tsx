"use client";

import { useState } from "react";

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

  const t = {
    fr: {
      nav: "NeoCliniQ",
      langToggle: "EN",
      heroTag: "Bientôt disponible",
      heroTitle: "Reprenez le contrôle de votre temps. NeoCliniQ s'occupe du reste.",
      heroSubtitle:
        "Fini les fins de journée à rattraper vos dossiers. NeoCliniQ automatise l'administratif pour que vous puissiez vous concentrer sur ce qui compte vraiment — vos patients.",
      heroCta: "Rejoindre la liste d'attente",
      heroSub: "Accès anticipé · Tarif fondateur · Aucune carte requise",
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
      solutionTitle: "NeoCliniQ change la donne.",
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
          desc: "Le praticien parle, NeoCliniQ rédige. Les notes cliniques se génèrent automatiquement pendant la consultation.",
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
      founderTitle: "Offre fondateur",
      founderDesc:
        "Les 50 premières cliniques sur liste d'attente obtiennent un tarif fondateur à vie — 20% de réduction permanente sur le prix de lancement, plus un accès prioritaire et un onboarding personnalisé 1-à-1.",
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
        "Merci! Vous serez parmi les premiers à accéder à NeoCliniQ. On vous contacte bientôt.",
      errorMsg: "Une erreur s'est produite. Veuillez réessayer.",
      footerText: "© 2026 NeoCliniQ · Quebec, Canada",
      footerSub: "Construit pour les chiropraticiens. Conçu au Québec.",
    },
    en: {
      nav: "NeoCliniQ",
      langToggle: "FR",
      heroTag: "Coming Soon",
      heroTitle: "Take back control of your time. NeoCliniQ handles the rest.",
      heroSubtitle:
        "No more end-of-day catch-up on files. NeoCliniQ automates the admin so you can focus on what truly matters — your patients.",
      heroCta: "Join the waitlist",
      heroSub: "Early access · Founding member pricing · No card required",
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
      solutionTitle: "NeoCliniQ changes everything.",
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
          desc: "The practitioner speaks, NeoCliniQ writes. Clinical notes are generated automatically during the consultation.",
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
        "The first 50 clinics on the waitlist get lifetime founding pricing — 20% off forever vs. launch price, plus priority access and a personalized 1-on-1 onboarding.",
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
        "Thank you! You'll be among the first to access NeoCliniQ. We'll be in touch soon.",
      errorMsg: "Something went wrong. Please try again.",
      footerText: "© 2026 NeoCliniQ · Quebec, Canada",
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
          <p className="text-white/60 leading-relaxed">{copy.founderDesc}</p>
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
