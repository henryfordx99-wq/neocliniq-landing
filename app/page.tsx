"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RevealSection,
  RevealStagger,
  HeroEntrance,
  FloatingOrbs,
  GrainOverlay,
  TiltCard,
} from "./components/animations";

const FOUNDER_TOTAL = 30;
const FOUNDER_CLAIMED = 12;
const MIN_SAVED_PER_PATIENT = 20;
const DEFAULT_PATIENTS = 60;

/* ─── Icon Box ─── */
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4ab4a]/10 text-2xl">
      {children}
    </div>
  );
}

export default function Home() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", clinicName: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [lang, setLangState] = useState<"fr" | "en">("fr");

  // Sync language with localStorage
  useEffect(() => {
    const saved = localStorage.getItem("neocliniq-lang");
    if (saved === "en" || saved === "fr") setLangState(saved);
  }, []);

  const setLang = (l: "fr" | "en") => {
    setLangState(l);
    localStorage.setItem("neocliniq-lang", l);
  };
  const [roiPatients, setRoiPatients] = useState(DEFAULT_PATIENTS);

  /* Mouse glow for hero */
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleHeroMouse = useCallback((e: MouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleHeroMouse);
    return () => el.removeEventListener("mousemove", handleHeroMouse);
  }, [handleHeroMouse]);

  const roiHours = Math.round((roiPatients * MIN_SAVED_PER_PATIENT * 4) / 60);
  const roiDays = (roiHours / 8).toFixed(1);

  const t = {
    fr: {
      langToggle: "EN",
      heroTag: "Bientôt disponible",
      heroTitle: "Reprenez le contrôle de votre temps.",
      heroHighlight: "NeoCliniq s'occupe du reste.",
      heroSubtitle: "Fini les fins de journée à rattraper vos dossiers. NeoCliniq automatise l'administratif pour que vous puissiez vous concentrer sur ce qui compte vraiment — vos patients.",
      heroCta: "Rejoindre la liste d'attente",
      heroSub: "Accès anticipé · À partir de 59$/mois à vie · Aucune carte requise",
      painTitle: "Vous reconnaissez-vous ici?",
      painSubtitle: "Ces frustrations quotidiennes qui vous ralentissent.",
      pains: [
        { icon: "📅", title: "Reprogrammation manuelle", desc: "Quand un praticien est en retard, votre réceptionniste appelle chaque patient un par un. En 2026." },
        { icon: "📋", title: "Dossiers dispersés partout", desc: "Notes SOAP dans un outil, facturation dans un autre, rappels dans un troisième. Aucune cohérence." },
        { icon: "🔔", title: "Rappels chronophages", desc: "Les confirmations et rappels de rendez-vous prennent des heures de temps administratif chaque semaine." },
      ],
      solutionTitle: "NeoCliniq change la donne.",
      solutionSubtitle: "Une plateforme unique. Tout automatisé. Zéro stress.",
      roiTitle: "Combien de temps perdez-vous chaque mois?",
      roiLabel: "Patients par semaine",
      roiResult: (h: number, d: string) => `NeoCliniq vous fait gagner ${h}h par mois — soit ${d} journées de travail.`,
      roiSub: "Calculé sur : appels de rappel + administration + reprogrammation manuelle",
      roiCta: "Récupérer ces heures →",
      solutions: [
        { icon: "⚡", title: "Reprogrammation automatique", desc: "Un praticien en retard? Le système notifie automatiquement tous les patients concernés et gère les ajustements." },
        { icon: "🗂️", title: "Tout en un seul endroit", desc: "Horaire, dossiers patients, notes SOAP, facturation et rapports — dans une seule interface fluide." },
        { icon: "🤖", title: "Rappels intelligents", desc: "SMS et emails automatiques pour les confirmations, rappels et suivis. Zéro effort manuel." },
      ],
      phase2Title: "Ce qui s'en vient",
      phase2Subtitle: "On construit la clinique du futur. Voici ce qui arrive en Phase 2.",
      phase2Features: [
        { icon: "🎙️", title: "Agent vocal IA", desc: "Un agent IA répond aux appels entrants 24h/24, prend les rendez-vous et répond aux questions — sans réceptionniste." },
        { icon: "📝", title: "Notes SOAP assistées par IA", desc: "Le praticien parle, NeoCliniq rédige. Les notes cliniques se génèrent automatiquement pendant la consultation." },
        { icon: "📋", title: "Liste d'attente intelligente", desc: "Un rendez-vous se libère? Le système comble automatiquement la case avec le prochain patient sur la liste." },
        { icon: "📊", title: "Rapports & revenus avancés", desc: "Tableaux de bord en temps réel, analyse des revenus par praticien, tendances et projections — tout automatisé." },
      ],
      founderTitle: "Offre membre fondateur",
      founderDesc: "Seulement 30 places disponibles. Les membres fondateurs verrouillent leur tarif à 59$/mois (+ 15$/mois par praticien supplémentaire) pour toujours — peu importe ce que le prix atteint au lancement (99$/mois + 25$/praticien). Comptes admin et réceptionniste inclus gratuitement. Plus un accès prioritaire et un onboarding 1-à-1 personnalisé.",
      founderNote: "Tarif fondateur de 59,99$/mois (1 praticien inclus) + 15$/mois par praticien supplémentaire, verrouillé à vie. Des frais d'utilisation peuvent s'appliquer pour les fonctionnalités propulsées par l'IA.",
      founderSpots: "places réclamées", founderUrgency: "Il ne reste que", founderRemaining: "places disponibles.",
      formTitle: "Rejoindre la liste d'attente",
      firstName: "Prénom", lastName: "Nom", email: "Courriel", phone: "Téléphone", clinicName: "Nom de la clinique (optionnel)",
      submit: "Réserver ma place", submitting: "Envoi...",
      successTitle: "Vous êtes sur la liste!", successDesc: "Merci! Vous serez parmi les premiers à accéder à NeoCliniq. On vous contacte bientôt.",
      errorMsg: "Une erreur s'est produite. Veuillez réessayer.",
      footerText: "© 2026 NeoCliniq · Quebec, Canada", footerSub: "Construit pour les chiropraticiens. Conçu au Québec.",
      founderPer: "par praticien supp.", founderMembers: "membres fondateurs", founderLaunch: "prix de lancement",
      reminders: "rappels", admin: "administration", rescheduling: "reprogrammation", compare: "Comparer",
    },
    en: {
      langToggle: "FR",
      heroTag: "Coming Soon",
      heroTitle: "Take back control of your time.",
      heroHighlight: "NeoCliniq handles the rest.",
      heroSubtitle: "No more end-of-day catch-up on files. NeoCliniq automates the admin so you can focus on what truly matters — your patients.",
      heroCta: "Join the waitlist",
      heroSub: "Early access · Starting at $59/mo locked for life · No card required",
      painTitle: "Does this sound familiar?",
      painSubtitle: "The daily frustrations slowing you down.",
      pains: [
        { icon: "📅", title: "Manual rescheduling", desc: "When a practitioner is running late, your receptionist calls every patient one by one. In 2026." },
        { icon: "📋", title: "Data scattered everywhere", desc: "SOAP notes in one tool, billing in another, reminders in a third. No single source of truth." },
        { icon: "🔔", title: "Time-consuming reminders", desc: "Appointment confirmations and reminders eat hours of admin time every single week." },
      ],
      solutionTitle: "NeoCliniq changes everything.",
      solutionSubtitle: "One platform. Fully automated. Zero stress.",
      roiTitle: "How much time are you losing every month?",
      roiLabel: "Patients per week",
      roiResult: (h: number, d: string) => `NeoCliniq saves you ${h}h per month — that's ${d} full workdays.`,
      roiSub: "Based on: reminder calls + admin + manual rescheduling per patient",
      roiCta: "Reclaim those hours →",
      solutions: [
        { icon: "⚡", title: "Automatic rescheduling", desc: "Practitioner running late? The system automatically notifies all affected patients and handles adjustments." },
        { icon: "🗂️", title: "Everything in one place", desc: "Schedule, patient files, SOAP notes, billing and reports — in one seamless interface." },
        { icon: "🤖", title: "Smart reminders", desc: "Automatic SMS and emails for confirmations, reminders and follow-ups. Zero manual effort." },
      ],
      phase2Title: "What's coming",
      phase2Subtitle: "We're building the clinic of the future. Here's what's arriving in Phase 2.",
      phase2Features: [
        { icon: "🎙️", title: "Voice AI agent", desc: "An AI agent answers inbound calls 24/7, books appointments and answers questions — no receptionist needed." },
        { icon: "📝", title: "AI-assisted SOAP notes", desc: "The practitioner speaks, NeoCliniq writes. Clinical notes are generated automatically during the consultation." },
        { icon: "📋", title: "Smart waiting list", desc: "A slot opens up? The system automatically fills it with the next patient on the waiting list." },
        { icon: "📊", title: "Advanced reports & revenue", desc: "Real-time dashboards, revenue analysis by practitioner, trends and projections — fully automated." },
      ],
      founderTitle: "Founding member offer",
      founderDesc: "Only 30 spots available. Founding members lock in $59/mo (+ $15/mo per additional practitioner) forever — no matter what the price reaches at launch ($99/mo + $25/practitioner). Admin and receptionist accounts always free. Plus priority access and a personalized 1-on-1 onboarding.",
      founderNote: "Founding price of $59.99/month (1 practitioner included) + $15/month per additional practitioner, locked forever. Usage-based add-ons may apply for AI-powered features.",
      founderSpots: "spots claimed", founderUrgency: "Only", founderRemaining: "spots left.",
      formTitle: "Join the waitlist",
      firstName: "First name", lastName: "Last name", email: "Email", phone: "Phone", clinicName: "Clinic name (optional)",
      submit: "Reserve my spot", submitting: "Sending...",
      successTitle: "You're on the list!", successDesc: "Thank you! You'll be among the first to access NeoCliniq. We'll be in touch soon.",
      errorMsg: "Something went wrong. Please try again.",
      footerText: "© 2026 NeoCliniq · Quebec, Canada", footerSub: "Built for chiropractors. Made in Quebec.",
      founderPer: "per extra practitioner", founderMembers: "founding members", founderLaunch: "launch price",
      reminders: "reminder calls", admin: "admin", rescheduling: "rescheduling", compare: "Compare",
    },
  };

  const copy = t[lang];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, lang }) });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  }

  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0b1929] text-white font-sans">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0b1929]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-lg font-bold tracking-tight transition-colors duration-200 hover:opacity-80" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="bg-gradient-to-r from-[#e2c56e] to-[#d4ab4a] bg-clip-text text-transparent">Neo</span><span className="text-white">Cliniq</span>
            </Link>
            <Link href="/comparison" className="hidden text-sm text-[#a0aab4] transition-colors duration-200 hover:text-[#d4ab4a] sm:inline">
              {copy.compare}
            </Link>
          </div>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-[#a0aab4] transition-transform duration-200 hover:-translate-y-px hover:border-[#d4ab4a]/30 hover:text-white focus-visible:outline-2 focus-visible:outline-[#d4ab4a] active:translate-y-0 active:scale-[0.98]"
          >
            {copy.langToggle}
          </button>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative overflow-hidden px-6">
        {/* Mouse-reactive glow */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(212,171,74,0.08), transparent 60%)`,
          }}
        />
        <FloatingOrbs />
        <GrainOverlay />

        {/* First viewport: Logo + headline only */}
        <div className="relative flex min-h-screen flex-col items-center justify-center text-center">
          {/* Animated logo — big, transparent, with glow */}
          <div className="logo-animate mb-10">
            <Image
              src="/Logo_Transparent.svg"
              alt="NeoCliniq"
              width={200}
              height={230}
              className="h-44 w-auto sm:h-56 md:h-64"
              priority
            />
          </div>

          <HeroEntrance delay={800}>
            <span className="mb-6 inline-block rounded-full border border-[#d4ab4a]/20 bg-[#d4ab4a]/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#e2c56e]">
              {copy.heroTag}
            </span>
          </HeroEntrance>

          <HeroEntrance delay={1000}>
            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
              {copy.heroTitle}
              <br />
              <span className="bg-gradient-to-r from-[#e2c56e] via-[#d4ab4a] to-[#b08530] bg-clip-text text-transparent">
                {copy.heroHighlight}
              </span>
            </h1>
          </HeroEntrance>

          {/* Scroll indicator */}
          <HeroEntrance delay={1600}>
            <div className="mt-10 animate-bounce">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto text-[#d4ab4a]/40">
                <path d="M7 13l5 5 5-5M7 7l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </HeroEntrance>
        </div>

        {/* Below the fold: subtitle + CTA */}
        <div className="relative mx-auto max-w-3xl pb-28 pt-8 text-center">
          <HeroEntrance delay={300}>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#e0e0e0] sm:text-xl" style={{ lineHeight: "1.7" }}>
              {copy.heroSubtitle}
            </p>
          </HeroEntrance>

          <HeroEntrance delay={450}>
            <button
              onClick={scrollToForm}
              className="group relative rounded-xl bg-gradient-to-r from-[#d4ab4a] to-[#b08530] px-8 py-4 text-base font-bold text-[#0b1929] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#d4ab4a] active:translate-y-0 active:scale-[0.98]"
              style={{ boxShadow: "0 2px 8px rgba(212,171,74,0.25), 0 8px 24px rgba(212,171,74,0.15)" }}
            >
              {copy.heroCta}
            </button>
            <p className="mt-4 text-sm text-[#a0aab4]">{copy.heroSub}</p>
          </HeroEntrance>
        </div>
      </section>

      {/* ─── Pain Points ─── */}
      <section className="relative border-y border-white/[0.06] bg-[#132a42]/40 py-24 px-6">
        <GrainOverlay opacity={0.02} />
        <div className="relative mx-auto max-w-5xl">
          <RevealSection className="mb-16 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white/90 sm:text-3xl">{copy.painTitle}</h2>
            <p className="text-[#a0aab4]">{copy.painSubtitle}</p>
          </RevealSection>
          <RevealStagger className="grid gap-6 sm:grid-cols-3" staggerMs={120}>
            {copy.pains.map((pain, i) => (
              <TiltCard key={i}>
                <IconBox>{pain.icon}</IconBox>
                <h3 className="mb-3 font-semibold text-white">{pain.title}</h3>
                <p className="text-sm text-[#a0aab4]" style={{ lineHeight: "1.85" }}>{pain.desc}</p>
              </TiltCard>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ─── Solutions ─── */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <RevealSection className="mb-16 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white/90 sm:text-3xl">{copy.solutionTitle}</h2>
            <p className="text-[#a0aab4]">{copy.solutionSubtitle}</p>
          </RevealSection>
          <RevealStagger className="grid gap-6 sm:grid-cols-3" staggerMs={120}>
            {copy.solutions.map((sol, i) => (
              <TiltCard key={i} gold>
                <IconBox>{sol.icon}</IconBox>
                <h3 className="mb-3 font-semibold text-white">{sol.title}</h3>
                <p className="text-sm text-[#a0aab4]" style={{ lineHeight: "1.85" }}>{sol.desc}</p>
              </TiltCard>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ─── ROI Calculator ─── */}
      <RevealSection className="py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-white/90 sm:text-3xl">{copy.roiTitle}</h2>
          <p className="mb-10 text-sm text-[#a0aab4]">{copy.roiSub}</p>

          <div
            className="rounded-3xl border border-white/[0.08] bg-[#132a42]/50 p-8 backdrop-blur-sm sm:p-10"
            style={{ boxShadow: "0 1px 3px rgba(11,25,41,0.1), 0 8px 24px rgba(11,25,41,0.15), 0 24px 48px rgba(212,171,74,0.05)" }}
          >
            <div className="mb-8">
              <div className="mb-3 flex items-end justify-between">
                <label className="text-sm text-[#a0aab4]">{copy.roiLabel}</label>
                <span className="text-3xl font-black text-white">{roiPatients}</span>
              </div>
              <input
                type="range" min={10} max={200} step={5} value={roiPatients}
                onChange={(e) => setRoiPatients(Number(e.target.value))}
                className="w-full"
                style={{ background: `linear-gradient(to right, #d4ab4a 0%, #d4ab4a ${((roiPatients - 10) / 190) * 100}%, rgba(255,255,255,0.08) ${((roiPatients - 10) / 190) * 100}%, rgba(255,255,255,0.08) 100%)` }}
              />
              <div className="mt-2 flex justify-between text-xs text-white/20"><span>10</span><span>200</span></div>
            </div>

            <div className="mb-6 rounded-2xl border border-[#d4ab4a]/20 bg-gradient-to-br from-[#d4ab4a]/[0.12] to-[#b08530]/[0.04] p-6">
              <div className="mb-2 text-5xl font-black text-[#d4ab4a]">{roiHours}h</div>
              <p className="font-medium text-[#e0e0e0]">{copy.roiResult(roiHours, roiDays)}</p>
            </div>

            <div className="mb-8 flex flex-wrap justify-center gap-2 text-xs text-[#a0aab4]">
              <span className="rounded-full bg-white/[0.05] px-3 py-1">📞 {Math.round((roiPatients * 8 * 4) / 60)}h {copy.reminders}</span>
              <span className="rounded-full bg-white/[0.05] px-3 py-1">📋 {Math.round((roiPatients * 10 * 4) / 60)}h {copy.admin}</span>
              <span className="rounded-full bg-white/[0.05] px-3 py-1">🔄 {Math.round((roiPatients * 2.4 * 4) / 60)}h {copy.rescheduling}</span>
            </div>

            <button
              onClick={scrollToForm}
              className="w-full rounded-xl bg-gradient-to-r from-[#d4ab4a] to-[#b08530] px-8 py-4 text-base font-bold text-[#0b1929] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#d4ab4a] active:translate-y-0 active:scale-[0.98]"
              style={{ boxShadow: "0 2px 8px rgba(212,171,74,0.2), 0 8px 20px rgba(212,171,74,0.12)" }}
            >
              {copy.roiCta}
            </button>
          </div>
        </div>
      </RevealSection>

      {/* ─── Phase 2 ─── */}
      <section className="relative border-y border-white/[0.06] bg-[#132a42]/40 py-24 px-6">
        <GrainOverlay opacity={0.02} />
        <div className="relative mx-auto max-w-5xl">
          <RevealSection className="mb-16 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white/90 sm:text-3xl">{copy.phase2Title}</h2>
            <p className="mx-auto max-w-xl text-[#a0aab4]">{copy.phase2Subtitle}</p>
          </RevealSection>
          <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerMs={100}>
            {copy.phase2Features.map((feat, i) => (
              <TiltCard key={i} className="relative overflow-hidden">
                <div className="absolute right-3 top-3">
                  <span className="rounded-full bg-[#d4ab4a]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#d4ab4a]/60">Phase 2</span>
                </div>
                <IconBox>{feat.icon}</IconBox>
                <h3 className="mb-3 font-semibold text-white">{feat.title}</h3>
                <p className="text-sm text-[#a0aab4]" style={{ lineHeight: "1.85" }}>{feat.desc}</p>
              </TiltCard>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ─── Founder Offer ─── */}
      <RevealSection className="py-24 px-6">
        <div
          className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-[#d4ab4a]/20 p-8 text-center sm:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(212,171,74,0.08) 0%, rgba(19,42,66,0.6) 50%, rgba(176,133,48,0.06) 100%)",
            boxShadow: "0 2px 4px rgba(11,25,41,0.1), 0 8px 24px rgba(11,25,41,0.12), 0 24px 48px rgba(212,171,74,0.06)",
          }}
        >
          <GrainOverlay opacity={0.02} />
          <div className="relative">
            <div className="mx-auto mb-6">
              <Image src="/Logo_Transparent.svg" alt="NeoCliniq" width={80} height={93} className="mx-auto h-20 w-auto sm:h-24" />
            </div>
            <h2 className="mb-6 text-xl font-bold sm:text-2xl">{copy.founderTitle}</h2>

            <div className="my-8 flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-[#d4ab4a]">$59<span className="text-lg font-semibold">/mo</span></div>
                <div className="mt-1 text-xs text-[#d4ab4a]/60">+ $15/mo {copy.founderPer}</div>
                <div className="mt-1 text-xs text-[#a0aab4]">{copy.founderMembers}</div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/30">→</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white/25 line-through">$99<span className="text-base">/mo</span></div>
                <div className="mt-1 text-xs text-white/15">+ $25/mo {copy.founderPer}</div>
                <div className="mt-1 text-xs text-white/25">{copy.founderLaunch}</div>
              </div>
            </div>

            <div className="mb-4 mt-8">
              <div className="mb-2 flex justify-between text-xs text-[#a0aab4]">
                <span>{FOUNDER_CLAIMED} {copy.founderSpots}</span>
                <span>{FOUNDER_TOTAL} total</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-3 rounded-full bg-gradient-to-r from-[#e2c56e] via-[#d4ab4a] to-[#b08530]" style={{ width: `${(FOUNDER_CLAIMED / FOUNDER_TOTAL) * 100}%` }} />
              </div>
              <p className="mt-3 text-sm font-semibold text-[#d4ab4a]">{copy.founderUrgency} {FOUNDER_TOTAL - FOUNDER_CLAIMED} {copy.founderRemaining}</p>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-[#e0e0e0]" style={{ lineHeight: "1.7" }}>{copy.founderDesc}</p>
            <p className="mt-3 text-xs italic leading-relaxed text-[#a0aab4]">{copy.founderNote}</p>
          </div>
        </div>
      </RevealSection>

      {/* ─── Waitlist Form ─── */}
      <RevealSection className="py-24 px-6" id="waitlist-form">
        <div className="mx-auto max-w-md" id="waitlist-form">
          <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">{copy.formTitle}</h2>

          {status === "success" ? (
            <div className="rounded-2xl border border-[#d4ab4a]/20 bg-[#d4ab4a]/[0.08] p-8 text-center" style={{ boxShadow: "0 4px 16px rgba(212,171,74,0.1)" }}>
              <div className="mb-4 text-4xl">✓</div>
              <h3 className="mb-2 text-xl font-bold">{copy.successTitle}</h3>
              <p className="text-[#e0e0e0]">{copy.successDesc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm text-[#a0aab4]">{copy.firstName} *</label>
                  <input type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#132a42]/60 px-4 py-3 text-white placeholder-white/20 transition-colors duration-200 focus:border-[#d4ab4a]/40 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-[#a0aab4]">{copy.lastName} *</label>
                  <input type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#132a42]/60 px-4 py-3 text-white placeholder-white/20 transition-colors duration-200 focus:border-[#d4ab4a]/40 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-[#a0aab4]">{copy.email} *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-[#132a42]/60 px-4 py-3 text-white placeholder-white/20 transition-colors duration-200 focus:border-[#d4ab4a]/40 focus:outline-none" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-[#a0aab4]">{copy.phone} *</label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-[#132a42]/60 px-4 py-3 text-white placeholder-white/20 transition-colors duration-200 focus:border-[#d4ab4a]/40 focus:outline-none" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-[#a0aab4]">{copy.clinicName}</label>
                <input type="text" value={form.clinicName} onChange={(e) => setForm({ ...form, clinicName: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-[#132a42]/60 px-4 py-3 text-white placeholder-white/20 transition-colors duration-200 focus:border-[#d4ab4a]/40 focus:outline-none" />
              </div>
              {status === "error" && <p className="text-center text-sm text-red-400">{copy.errorMsg}</p>}
              <button type="submit" disabled={status === "loading"}
                className="w-full rounded-xl bg-gradient-to-r from-[#d4ab4a] to-[#b08530] px-8 py-4 text-base font-bold text-[#0b1929] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#d4ab4a] active:translate-y-0 active:scale-[0.98] disabled:opacity-50"
                style={{ boxShadow: "0 2px 8px rgba(212,171,74,0.2), 0 8px 20px rgba(212,171,74,0.12)" }}
              >
                {status === "loading" ? copy.submitting : copy.submit}
              </button>
            </form>
          )}
        </div>
      </RevealSection>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/[0.06] py-10 px-6 text-center">
        <Image src="/Logo_Transparent.svg" alt="NeoCliniq" width={60} height={70} className="mx-auto mb-4 h-12 w-auto opacity-40" />
        <p className="text-sm text-[#a0aab4]">{copy.footerText}</p>
        <p className="mt-1 text-xs text-white/20">{copy.footerSub}</p>
      </footer>
    </div>
  );
}
