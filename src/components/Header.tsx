"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,

  NavigationMenuItem,

  NavigationMenuList,

} from "@/components/ui/navigation-menu";

export default function Header() {
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
              <NavigationMenuItem>
                <Link href="/savings-accounts" className="text-gray-700 hover:text-blue-600 font-medium">
                  Savings accounts
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about-us" className="text-gray-700 hover:text-blue-600 font-medium">
                  About us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/information" className="text-gray-700 hover:text-blue-600 font-medium">
                  Information
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/help" className="text-gray-700 hover:text-blue-600 font-medium">
                  Help
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="text-gray-700 border-gray-300">
              My Account
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}