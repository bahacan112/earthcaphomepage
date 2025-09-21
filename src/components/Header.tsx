"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import languageData from '../../languages/language.json';

// Hamburger Menu Icon Component
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="flex flex-col justify-center items-center w-6 h-6 cursor-pointer">
    <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
    <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
    <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
  </div>
);

export default function Header() {
  const header = languageData.header;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Country Selection Bar */}
      <div className="hidden bg-blue-50 px-4 py-2 text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-gray-700">
            You are currently on the Earth Capital Management GMBH Ireland website. Please choose another option from the list if this is not your country of residence.
          </span>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2">
              <Image src="/images/ireland.png" alt="Ireland" width={18} height={12} className="h-3 w-[18px] rounded-[2px] border border-slate-300" />
              Ireland
            </span>
            <Button variant="outline" size="sm">
              Close
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/earth.svg"
              alt="Earth Capital Management"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="flex items-center space-x-8">
              {/* Sparen Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  {header.navigation.sparen}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 bg-white border border-gray-200 shadow-lg rounded-md">
                    <div className="py-3">
                      {/* Festgeld */}
                      <Link 
                        href={header.dropdown?.sparen?.festgeld?.link || "/festgeld"} 
                        className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {header.dropdown?.sparen?.festgeld?.title || "Festgeld"}
                        </div>
                        <div className="text-xs text-gray-600">
                          {header.dropdown?.sparen?.festgeld?.description || "Einlage mit fester Laufzeit und festem Zinssatz"}
                        </div>
                      </Link>

                      {/* Tagesgeld */}
                      <Link 
                        href={header.dropdown?.sparen?.tagesgeld?.link || "/tagesgeld"} 
                        className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {header.dropdown?.sparen?.tagesgeld?.title || "Tagesgeld"}
                        </div>
                        <div className="text-xs text-gray-600">
                          {header.dropdown?.sparen?.tagesgeld?.description || "Flexible Einlage ohne feste Laufzeit und mit variablem Zinssatz"}
                        </div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Finanzwissen Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                  {header.navigation.finanzwissen}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 bg-white border border-gray-200 shadow-lg rounded-md">
                    <div className="py-3">
                      {/* Nachhaltig */}
                      <Link 
                        href="/nachhaltig" 
                        className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          Nachhaltiges Festgeld
                        </div>
                        <div className="text-xs text-gray-600">
                          Nachhaltige Geldanlage mit ESG-Kriterien
                        </div>
                      </Link>

                      <Link 
                        href="/einlagensicherung" 
                        className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          Einlagensicherung
                        </div>
                        <div className="text-xs text-gray-600">
                          Schutz Ihrer Einlagen bis 100.000 € pro Bank
                        </div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                  {header.navigation.about}
                </Link>
              </NavigationMenuItem>

              {/* Kontakt */}
              <NavigationMenuItem>
                <Link href="/kontakt" className="text-gray-700 hover:text-blue-600 font-medium">
                  {header.navigation.kontakt}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile & Tablet Right Side - Login Button + Hamburger Menu */}
          <div className="flex items-center space-x-3">
            {/* Login Button - Always visible */}
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
            >
              <a href="https://investor.earthcap.de" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>

            {/* Hamburger Menu - Only visible on mobile and tablet */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <HamburgerIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
            <div className="px-4 py-6 space-y-4">
              {/* Sparen Section */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">
                  {header.navigation.sparen}
                </h3>
                <div className="pl-4 space-y-3">
                  <Link 
                    href={header.dropdown?.sparen?.festgeld?.link || "/festgeld"}
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium">
                      {header.dropdown?.sparen?.festgeld?.title || "Festgeld"}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {header.dropdown?.sparen?.festgeld?.description || "Einlage mit fester Laufzeit und festem Zinssatz"}
                    </div>
                  </Link>
                  <Link 
                    href={header.dropdown?.sparen?.tagesgeld?.link || "/tagesgeld"}
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium">
                      {header.dropdown?.sparen?.tagesgeld?.title || "Tagesgeld"}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {header.dropdown?.sparen?.tagesgeld?.description || "Flexible Einlage ohne feste Laufzeit und mit variablem Zinssatz"}
                    </div>
                  </Link>
                </div>
              </div>

              {/* Finanzwissen Section */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">
                  {header.navigation.finanzwissen}
                </h3>
                <div className="pl-4 space-y-3">
                  <Link 
                    href="/nachhaltig"
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium">Nachhaltiges Festgeld</div>
                    <div className="text-sm text-gray-500 mt-1">Nachhaltige Geldanlage mit ESG-Kriterien</div>
                  </Link>
                  <Link 
                    href="/einlagensicherung"
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium">Einlagensicherung</div>
                    <div className="text-sm text-gray-500 mt-1">Schutz Ihrer Einlagen bis 100.000 € pro Bank</div>
                  </Link>
                </div>
              </div>

              {/* Direct Links */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <Link 
                  href="/about"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {header.navigation.about}
                </Link>
                <Link 
                  href="/kontakt"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {header.navigation.kontakt}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}