import Image from "next/image";
import Link from "next/link";
import languageData from '../../languages/language.json';

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H7.9V12.06h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.9h2.78l-.44 2.91h-2.34v7.03C18.34 21.23 22 17.07 22 12.06z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.83v1.98h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V23h-4v-5.88c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V23h-4V8.5z" />
    </svg>
  );
}

export default function Footer() {
  const { footer } = languageData;
  
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      {/* watermark */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex select-none items-end justify-center overflow-hidden">
        <span className="translate-y-6 text-[min(40vw,560px)] font-black leading-none text-slate-200/50">raisin</span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12">
        {/* top grid */}
        <div className="grid gap-10 md:grid-cols-5">
          {/* left logo + social */}
          <div className="space-y-6">
            <Image src="/earth.svg" alt="Earth Capital Management GmbH" width={180} height={45} className="h-auto w-[180px]" />
            <div>
              <p className="text-sm font-medium text-slate-700">{footer.followUs}</p>
              <div className="mt-3 flex items-center gap-3 text-[#0F2745]">
                <Link href="#" aria-label={footer.facebookLabel} className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 hover:bg-slate-50">
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label={footer.linkedInLabel} className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 hover:bg-slate-50">
                  <LinkedInIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* columns */}
          <div>
            <h4 className="text-[14px] font-semibold text-slate-900">{footer.companyTeam.title}</h4>
            <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
              <li><Link href="/about-us" className="hover:text-slate-900">{footer.companyTeam.links.aboutUs}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.companyTeam.links.partnerBanks}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.companyTeam.links.depositGuarantee}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.companyTeam.links.referFriend}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.companyTeam.links.press}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.companyTeam.links.careers}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.companyTeam.links.raisinUpdates}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.companyTeam.links.raisinBank}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold text-slate-900">{footer.savingsAccounts.title}</h4>
            <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
              <li><Link href="#" className="hover:text-slate-900">{footer.savingsAccounts.links.allSavings}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.savingsAccounts.links.depositAccounts}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.savingsAccounts.links.demandDeposit}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold text-slate-900">{footer.information.title}</h4>
            <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
              <li><Link href="#" className="hover:text-slate-900">{footer.information.links.savings}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.information.links.banking}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.information.links.taxes}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.information.links.investments}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.information.links.pensions}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold text-slate-900">{footer.helpContact.title}</h4>
            <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
              <li><Link href="#" className="hover:text-slate-900">{footer.helpContact.links.contactUs}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.helpContact.links.faqs}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.helpContact.links.accessibility}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.helpContact.links.affiliatePartnerships}</Link></li>
              <li><Link href="#" className="hover:text-slate-900">{footer.helpContact.links.complaintManagement}</Link></li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-800">
              <Image src="/images/ireland.png" alt={footer.countryFlagAlt} width={24} height={16} className="h-4 w-6 rounded-[2px] border border-slate-300" />
              <span className="text-sm">{footer.countryName}</span>
            </div>
            <div className="text-xs text-slate-700">{footer.copyright}</div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-700">
              <Link href="#" className="hover:text-slate-900">{footer.bottomLinks.dataProtection}</Link>
              <Link href="#" className="hover:text-slate-900">{footer.bottomLinks.itSecurity}</Link>
              <Link href="#" className="hover:text-slate-900">{footer.bottomLinks.termsConditions}</Link>
              <Link href="#" className="hover:text-slate-900">{footer.bottomLinks.siteInformation}</Link>
              <Link href="#" className="hover:text-slate-900">{footer.bottomLinks.accessibility}</Link>
              <Link href="#" className="hover:text-slate-900">{footer.bottomLinks.privacySettings}</Link>
            </div>
            <Image src="/images/sectigo-trust-seal.svg" alt={footer.sectigoAlt} width={180} height={40} className="h-10 w-auto" />
          </div>

          <p className="mt-6 text-[12px] leading-relaxed text-slate-600">
            {footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}