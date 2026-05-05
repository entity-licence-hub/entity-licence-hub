import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Building2,
  FileText,
  Globe2,
  CalendarDays,
  ArrowRight,
  Mail,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const jurisdictions = [
  {
    name: "Vanuatu",
    tag: "Financial licensing",
    summary:
      "Company setup, financial dealer licensing, renewal, PI insurance, audit and ongoing compliance tracking.",
  },
  {
    name: "Belize",
    tag: "LLC & compliance",
    summary:
      "LLC formation, economic substance considerations, tax registration timing and redomiciliation overview.",
  },
  {
    name: "Seychelles",
    tag: "Company services",
    summary:
      "Entity formation, registered agent maintenance, annual obligations and practical document preparation.",
  },
  {
    name: "BVI",
    tag: "Corporate structuring",
    summary:
      "International business company setup, corporate records, maintenance and compliance reminders.",
  },
];

const resources = [
  "Offshore Company Setup Checklist",
  "Financial Licence Preparation Checklist",
  "Annual Compliance Calendar Template",
  "KYC & Due Diligence Document List",
];

const faqs = [
  {
    q: "Is this legal or regulatory advice?",
    a: "No. The content is for general information only. Requirements can change and should be confirmed with qualified advisers, registered agents or regulators before action is taken.",
  },
  {
    q: "Can a client use this website to decide which jurisdiction to choose?",
    a: "The website can help clients understand common options and questions, but final structuring decisions should be based on their business model, ownership structure, regulatory exposure, tax position and compliance capacity.",
  },
  {
    q: "Will this website collect sensitive KYC documents?",
    a: "The first version should not collect passports, proof of address, bank documents or confidential client files. It should only collect basic inquiry information.",
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${dark ? "text-slate-400" : "text-slate-500"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold tracking-tight md:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-md">
              <Globe2 size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none text-slate-950">
                Entity & Licence Hub
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Entity Formation · Financial Licensing · Compliance
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#jurisdictions" className="hover:text-slate-950">
              Jurisdictions
            </a>
            <a href="#licensing" className="hover:text-slate-950">
              Licensing
            </a>
            <a href="#resources" className="hover:text-slate-950">
              Resources
            </a>
            <a href="#contact" className="hover:text-slate-950">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Make an inquiry
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 py-20 md:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.12),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(100,116,139,0.15),_transparent_32%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex flex-wrap gap-2">
                <Badge>Practical knowledge hub</Badge>
                <Badge>No confidential client files</Badge>
                <Badge>Built for global business planning</Badge>
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
                Offshore entity, financial licence and compliance guidance.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                A practical information platform helping business owners understand offshore entity formation,
                financial licensing routes, document preparation and ongoing compliance obligations before
                they begin a formal engagement.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#resources"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-slate-800"
                >
                  Explore resources <ArrowRight className="ml-2" size={16} />
                </a>
                <a
                  href="#jurisdictions"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400"
                >
                  Compare jurisdictions
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/70"
            >
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <p className="text-sm font-medium text-slate-300">
                  Client journey overview
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    [Building2, "Entity Formation", "Entity setup, registered agent, corporate documents"],
                    [ShieldCheck, "Financial Licensing", "Application route, document checklist, fit-and-proper preparation"],
                    [CalendarDays, "Ongoing Compliance", "Renewal, filings, audit, insurance and deadline reminders"],
                    [FileText, "Resource Library", "Checklists, FAQs and practical explainers"],
                  ].map(([Icon, title, text]) => (
                    <div
                      key={title}
                      className="flex gap-4 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-950">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white px-5 py-12">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {[
              [Search, "Clear before consultation", "Clients can self-educate before asking for a quote or formal advice."],
              [CheckCircle2, "Checklist-driven", "Turn repeated questions into structured, downloadable preparation lists."],
              [AlertTriangle, "Compliance-aware", "Avoid aggressive promises and keep the tone professional, cautious and credible."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <Icon className="mb-4 text-slate-800" size={24} />
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="jurisdictions" className="px-5 py-20">
          <SectionTitle
            eyebrow="Jurisdiction guides"
            title="Organise information by jurisdiction."
            description="Each jurisdiction page can explain entity formation, licensing options, continuing obligations, typical documents and points requiring professional confirmation."
          />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {jurisdictions.map((item) => (
              <div
                key={item.name}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.tag}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.summary}
                </p>
                <button className="mt-6 inline-flex items-center text-sm font-semibold text-slate-950">
                  View guide{" "}
                  <ArrowRight
                    className="ml-2 transition group-hover:translate-x-1"
                    size={15}
                  />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="licensing" className="bg-white px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Licence guidance
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Explain the process without overpromising the result.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                The website should help clients understand what normally needs to be assessed:
                business model, ownership structure, management experience, compliance framework,
                financial resources and local requirements.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Securities Dealer / Brokerage",
                "Investment Advisory",
                "Payment or EMI-related structures",
                "AML/CFT compliance framework",
                "PI insurance and renewal support",
                "Audit and annual filing coordination",
              ].map((text) => (
                <div key={text} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <CheckCircle2 className="mb-3 text-slate-800" size={20} />
                  <p className="font-medium text-slate-900">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="px-5 py-20">
          <SectionTitle
            eyebrow="Lead magnet"
            title="Turn professional knowledge into downloadable resources."
            description="A practical checklist can help potential clients prepare before consultation and can become the first step in collecting non-sensitive inquiry leads."
          />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
            {resources.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <FileText className="mb-5 text-slate-800" size={24} />
                <h3 className="font-semibold leading-6 text-slate-950">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Available as a future PDF download or email-gated resource.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="FAQ"
              title="Keep the site trustworthy."
              description="A professional site in this area should be cautious, transparent and clear about the limits of general information."
              dark
            />
            <div className="grid gap-5 md:grid-cols-3">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-3xl bg-white/8 p-6 ring-1 ring-white/10">
                  <h3 className="text-lg font-semibold">{item.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Mail size={22} />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Start with a general inquiry.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This form should collect only basic non-sensitive information. Do not request passport copies,
                proof of address, bank statements or confidential documents at this stage.
              </p>
              <div className="mt-6 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900 ring-1 ring-amber-200">
                Compliance note: add a proper privacy notice before publishing a real inquiry form.
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-500"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-500"
                  placeholder="Email / WhatsApp / WeChat"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <input
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-500"
                placeholder="Jurisdiction or service of interest"
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
              />

              <textarea
                className="min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-500"
                placeholder="Briefly describe the general inquiry. Please do not submit confidential documents."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:w-auto">
                Submit inquiry <ArrowRight className="ml-2" size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Entity & Licence Hub. Prototype only.</p>
          <p>
            General information only. Not legal, tax, regulatory, financial or investment advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
