"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="content-size">
      <div className="mx-auto flex h-16 items-center justify-between px-4">
        {/* ----------------Site Name ----------------*/}

        <span className="uppercase font-sans font-bold text-lg lg:text-xl">devlop.me</span>

        {/* ----------------Desktop Nav Links----------------*/}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((item, index) => (
            <li key={index} className="list-none text-sm">{item.label}</li>
          ))}
          <ThemeToggle />
          <Button variant="outline" className="border-black ">Start Project</Button>
          
        </nav>

        {/* ----------------Mobile Menu---------------- */}
        <div className="flex items-center gap-4 md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64 pt-8">
              {/* ----------------Header inside drawer---------------- */}
              <div className="flex items-center justify-between my-6 px-4">
                <span className="uppercase">devlop.me</span>
                <ThemeToggle />
              </div>

              {/* ----------------Mobile Nav---------------- */}
              <nav className="flex flex-col gap-4 px-4">
                {navLinks.map((item, index) => (
                  <li className="list-none" key={index}>{item.label}</li>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
