"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import languageData from '../../languages/language.json';

type LanguageData = typeof languageData;

export default function Header() {
  const header = languageData.header;
  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Country Selection Bar */}
      <div className="hidden bg-blue-50 px-4 py-2 text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-gray-700">
            You are currently on the Raisin Ireland website. Please choose another option from the list if this is not your country of residence.
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
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu>
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

                      {/* Andere Finanzwissen Seiten können buraya eklenebilir */}
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

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="text-gray-700 border-gray-300">
              {header.buttons?.depot || "Depot"}
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Registrieren
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}