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
                  <div className="w-64 bg-white border border-gray-200 shadow-lg rounded-md">
                    <div className="py-2">
                      {/* Festgeld */}
                      <Link 
                        href={header.dropdown?.sparen?.festgeld?.link || "/festgeld"} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {header.dropdown?.sparen?.festgeld?.title || "Festgeld"}
                      </Link>

                      {/* Tagesgeld */}
                      <Link 
                        href={header.dropdown?.sparen?.tagesgeld?.link || "/tagesgeld"} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {header.dropdown?.sparen?.tagesgeld?.title || "Tagesgeld"}
                      </Link>

                      {/* Nachhaltiges Festgeld */}
                      <Link 
                        href={header.dropdown?.sparen?.nachhaltiges_festgeld?.link || "/nachhaltig"} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {header.dropdown?.sparen?.nachhaltiges_festgeld?.title || "Nachhaltiges Festgeld"}
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Investieren */}
              <NavigationMenuItem>
                <Link href="/investieren" className="text-gray-700 hover:text-blue-600 font-medium">
                  {header.navigation.investieren}
                </Link>
              </NavigationMenuItem>

              {/* Finanzwissen */}
              <NavigationMenuItem>
                <Link href="/finanzwissen" className="text-gray-700 hover:text-blue-600 font-medium">
                  {header.navigation.finanzwissen}
                </Link>
              </NavigationMenuItem>

              {/* Hilfe */}
              <NavigationMenuItem>
                <Link href="/hilfe" className="text-gray-700 hover:text-blue-600 font-medium">
                  {header.navigation.hilfe}
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