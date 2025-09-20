"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import languageData from "../../languages/language.json";
import tableData from "../../languages/table.json";

// Types
interface DepositOffer {
  id: string;
  type: "term" | "demand";
  bank: string;
  logo: string; // public image path
  country: string; // e.g., Germany (AAA)
  currency: string; // e.g., EUR
  rateAER: number; // e.g., 3.05 => 3.05%
  termMonths: number; // 0 for demand (available anytime)
  withholdingTax: boolean; // true if no withholding tax badge should show
}

type SortKey = "interest" | "term" | "bank";

type TabKey = "term" | "demand";

const termOffers: DepositOffer[] = tableData.termOffers as DepositOffer[];

const demandOffers: DepositOffer[] = tableData.demandOffers as DepositOffer[];

function formatCurrency(value: number, currency = "EUR") {
  try {
    return new Intl.NumberFormat("en-IE", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `${currency} ${value.toFixed(2)}`;
  }
}

export default function DepositsTableSection() {
  const { depositsTable } = languageData;
  const [activeTab, setActiveTab] = useState<TabKey>("term");
  const [amount, setAmount] = useState<number>(30000);
  const [countryFilter, setCountryFilter] = useState<string>("All");
  const [termFilter, setTermFilter] = useState<string>("All");
  const [sortKey, setSortKey] = useState<SortKey>("interest");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [visibleCount, setVisibleCount] = useState<number>(5); // Show 5 items initially

  const data = activeTab === "term" ? termOffers : demandOffers;

  const countries = useMemo(() => {
    const s = new Set<string>(["All"]);
    data.forEach((o) => s.add(o.country));
    return Array.from(s);
  }, [data]);

  const terms = useMemo(() => {
    const s = new Set<string>(["All"]);
    if (activeTab === "term") {
      data.forEach((o) => s.add(monthsToLabel(o.termMonths)));
    } else {
      s.add("Available anytime");
    }
    return Array.from(s);
  }, [data, activeTab]);

  const filteredSorted = useMemo(() => {
    const filtered = data.filter((o) => {
      const countryOk = countryFilter === "All" || o.country === countryFilter;
      const termOk =
        termFilter === "All" ||
        (activeTab === "term"
          ? monthsToLabel(o.termMonths) === termFilter
          : termFilter === "Available anytime");
      return countryOk && termOk;
    });

    const sorted = [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "interest") {
        cmp = a.rateAER - b.rateAER;
      } else if (sortKey === "term") {
        cmp = a.termMonths - b.termMonths;
      } else if (sortKey === "bank") {
        cmp = a.bank.localeCompare(b.bank);
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return sorted;
  }, [data, activeTab, countryFilter, termFilter, sortKey, sortDir]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(5);
  }, [activeTab, countryFilter, termFilter, sortKey, sortDir]);

  const visibleOffers = filteredSorted.slice(0, visibleCount);
  const hasMore = filteredSorted.length > visibleCount;

  function loadMore() {
    setVisibleCount(prev => Math.min(prev + 5, filteredSorted.length));
  }

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  return (
    <section className="bg-[#F8F6F4] py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs header */}
        <div className="flex items-end justify-center border-b border-gray-200 pb-2">
          <div>
            <div className="flex gap-10" role="tablist" aria-label={depositsTable.tabsAriaLabel}>
              <button
                role="tab"
                aria-selected={activeTab === "term"}
                onClick={() => setActiveTab("term")}
                className={`pb-2 text-[15px] font-medium text-center ${
                  activeTab === "term"
                    ? "text-slate-900 border-b-2 border-blue-600"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {depositsTable.termDepositsTab.title}
                <div className="text-xs text-slate-500 font-normal">{depositsTable.termDepositsTab.description}</div>
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "demand"}
                onClick={() => setActiveTab("demand")}
                className={`pb-2 text-[15px] font-medium text-center ${
                  activeTab === "demand"
                    ? "text-slate-900 border-b-2 border-blue-600"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {depositsTable.demandDepositTab.title}
                <div className="text-xs text-slate-500 font-normal">{depositsTable.demandDepositTab.description}</div>
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <label className="flex items-center gap-2">
            <span className="text-sm text-slate-600 w-16">{depositsTable.controls.amount}</span>
            <input
              type="number"
              min={1}
              step={1}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value || 0))}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="flex items-center gap-2">
            <span className="text-sm text-slate-600 w-16">{depositsTable.controls.term}</span>
            <select
              value={termFilter}
              onChange={(e) => setTermFilter(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {terms.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span className="text-sm text-slate-600 w-16">{depositsTable.controls.country}</span>
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Table headers */}
        <div className="mt-4 grid grid-cols-[120px_1fr_1fr_160px] items-center text-sm text-slate-600">
          <button className="text-center hover:text-slate-800" onClick={() => toggleSort("interest")}>
            {depositsTable.tableHeaders.interest} {sortKey === "interest" ? (sortDir === "asc" ? "▲" : "▼") : ""}
          </button>
          <button className="text-center hover:text-slate-800" onClick={() => toggleSort("term")}>
            {depositsTable.tableHeaders.term} {sortKey === "term" ? (sortDir === "asc" ? "▲" : "▼") : ""}
          </button>
          <button className="text-center hover:text-slate-800" onClick={() => toggleSort("bank")}>
            {depositsTable.tableHeaders.bankCountryInterest}
          </button>
          <div className="text-center">{depositsTable.tableHeaders.action}</div>
        </div>

        {/* Rows */}
        <div className="mt-2 space-y-3">
          {visibleOffers.map((o) => (
            <div key={o.id} className="grid grid-cols-[120px_1fr_1fr_160px] gap-2 items-center rounded-2xl border border-gray-200 bg-white px-4 py-4">
              {/* Interest */}
              <div>
                <div className="text-3xl font-semibold text-slate-900">
                  {o.rateAER.toFixed(2)}<span className="text-base align-top">%</span>
                  <span className="ml-1 text-[10px] align-top text-slate-500">AER</span>
                </div>
              </div>

              {/* Term */}
              <div className="text-slate-900 text-center">
                <div className="font-medium">
                  {o.termMonths === 0 ? depositsTable.terms.availableAnytime : monthsToLabel(o.termMonths)}
                </div>
                {o.withholdingTax && (
                  <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-[11px] text-slate-700">
                    {depositsTable.terms.noWithholdingTax}
                  </div>
                )}
              </div>

              {/* Bank + Country + Gain */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Image src={o.logo} alt={o.bank} width={80} height={28} className="h-7 w-auto object-contain" />
                  <div className="text-sm text-slate-700">
                    <div className="font-medium text-slate-900">{o.bank}</div>
                    <div className="text-xs text-slate-500">{o.country} · in {o.currency}</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-900">
                  + {formatCurrency(estimateGain(amount, o), o.currency)}
                </div>
              </div>

              {/* Action */}
              <div className="flex justify-end">
                <Button className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">{depositsTable.buttons.saveNow}</Button>
              </div>

              {/* Footer links */}
              <div className="col-span-4 mt-2 flex justify-center gap-6 px-1 text-[12px] text-slate-600 text-center">
                <span className="cursor-pointer hover:text-slate-800">{depositsTable.footerLinks.offerDetails}</span>
                <span className="cursor-pointer hover:text-slate-800">{depositsTable.footerLinks.bank}</span>
                <span className="cursor-pointer hover:text-slate-800">{depositsTable.footerLinks.depositGuarantee}</span>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {hasMore && (
          <div className="mt-6 flex justify-center">
            <Button
              onClick={loadMore}
              variant="outline"
              className="rounded-full border-gray-300 bg-white px-6 py-2 text-sm text-slate-700 hover:bg-gray-50 hover:border-gray-400"
            >
              {depositsTable.buttons.seeMore}
            </Button>
          </div>
        )}

        {/* Results count */}
        <div className="mt-4 text-center text-sm text-slate-500">
          {depositsTable.resultsCount.replace('{visible}', visibleOffers.length.toString()).replace('{total}', filteredSorted.length.toString())}
        </div>
      </div>
    </section>
  );
}

function monthsToLabel(m: number) {
  const { depositsTable } = languageData;
  if (m === 0) return depositsTable.terms.availableAnytime;
  if (m % 12 === 0) {
    const y = m / 12;
    return y === 1 ? `1 ${depositsTable.terms.year}` : `${y} ${depositsTable.terms.years}`;
  }
  const yr = Math.floor(m / 12);
  const mo = m % 12;
  const yrStr = yr > 0 ? `${yr} ${yr === 1 ? depositsTable.terms.year : depositsTable.terms.years}` : "";
  const moStr = mo > 0 ? `${mo} ${mo === 1 ? depositsTable.terms.month : depositsTable.terms.months}` : "";
  return [yrStr, moStr].filter(Boolean).join(" ");
}

function estimateGain(amount: number, o: DepositOffer) {
  // Simple estimation (not compounding): amount * (rate/100) * years
  const years = o.termMonths === 0 ? 1 : o.termMonths / 12;
  const gain = amount * (o.rateAER / 100) * years;
  return Math.max(0, gain);
}