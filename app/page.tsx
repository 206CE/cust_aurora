"use client"; // Mark as a Client Component

import React from "react";

import Hero from "@/app/components/Hero";
import { ServiceList } from "@/app/components/ServiceList";


const cards = [
  {
    id:1,
    name: "Tax Services",
    subName: "Compliance, audits, debt relief, and strategic tax planning.",
    description: [
      "Income Tax Returns",
      "VAT Registration & Compliance",
      "Tax Clearance Certificates",
      "SARS Dispute Resolution",
      "Capital Gains Tax Calculations",
    ],

  },
  {
    id:2,
    name: "Accounting & Bookkeeping",
    subName: "Accurate financial records and reporting for businesses.",
    description: [
      "Monthly Bookkeeping",
      "Bank Reconciliations",
      "Financial Statements",
      "Payroll Processing",
      "Audit Preparation",
    ],

  },
  {
    id:3,
    name: "Corporate Secretarial & CIPC",
    subName: "Company registrations, compliance, and governance support.",
    description: [
      "Company/CC Registrations",
      "Annual Returns Filing",
      "Beneficial Ownership Certification",
      "Directorship Changes",
      "Business Rescue Support",
    ],

  },
  {
    id:4,
    name: "Audit & Assurance",
    subName: "Statutory and forensic audits for transparency.",
    description: [
      "Financial Statement Audits",
      "Trust Fund Audits",
      "Internal Controls Assessment",
      "Fraud Investigations",
      "Due Diligence Reviews",
    ],

  },
  {
    id:5,
    name: "Payroll & HR Compliance",
    subName: "End-to-end payroll processing and statutory reporting.",
    description: [
      "Salary Structuring",
      "PAYE/UIF/SDL Reporting",
      "Payslip Generation",
      "EMP201/EMP501/IRP5 Filing",
      "Compliance Audits",
    ],

  },
  {
    id:6,
    name: "Specialized Services",
    subName: "Tailored solutions for unique needs.",
    description: [
      "BEE Certificates (Under R10M)",
      "Import/Export Licenses",
      "Tax Debt Negotiations",
      "Dispute Resolution",
      "Trust & Estate Administration",
    ],

  },
];

const faqs = [
  {
    question: "How long does a tax clearance certificate take?",
    answer:
      "SARS typically issues tax clearance certificates within 5–10 business days if all returns are up to date.",
  },
  {
    question: "What services do you offer for startups?",
    answer:
      "We handle company registration, VAT setup, monthly bookkeeping, payroll, and compliance filings for startups.",
  },
  {
    question: "Can you assist with SARS debt negotiations?",
    answer:
      "Yes, we specialize in negotiating tax debt settlements with SARS, including payment plans and compromises.",
  },
  {
    question: "Do you support trust fund audits?",
    answer:
      "Yes, we provide specialized audits for attorney and estate agent trust funds as required by regulatory bodies.",
  },
  {
    question: "How much does a BEE certificate cost?",
    answer:
      "Our BBBEE certificate verification starts at R999 (for businesses under R10M turnover). Contact us for details.",
  },
];

const ctas = [
  {
    label: "Get Quote",
    href: "/Contact",
  },
  { label: "Contact Us", href: "/Contact" },
];

export default function Home() {
  return (
    <main className="m-5">
      <section className="flex flex-col items-center justify-center text-center m-5">
        <Hero
          title="AURORA"
          tagline="Enlighten your tax worries."
          ctas={ctas}
          itemformat="btn"
          listformat=""
        />
      </section>
      <section className="flex max-w-auto">
        <Cards cards={cards} />
      </section>
      <section>
        <Faq faqs={faqs} />
      </section>
    </main>
  );
}
