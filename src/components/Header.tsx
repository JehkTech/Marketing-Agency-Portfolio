import React, { useState } from 'react';
import { Button } from './ui/button';
import { Moon, Sun, ChevronDown, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border/10 bg-gradient-to-r from-background via-background/95 to-background backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
            KINERTIC MEDIA ARTS
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-lime-400 transition-colors text-sm">
                <span>HOME 1</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/95 backdrop-blur-md border-border/50">
                <DropdownMenuItem>Home Option 1</DropdownMenuItem>
                <DropdownMenuItem>Home Option 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-lime-400 transition-colors text-sm">
                <span>PAGES</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/95 backdrop-blur-md border-border/50">
                <DropdownMenuItem>About Us</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>FAQ</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-lime-400 transition-colors text-sm">
                <span>SERVICES</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/95 backdrop-blur-md border-border/50">
                <DropdownMenuItem>Digital Marketing</DropdownMenuItem>
                <DropdownMenuItem>Branding</DropdownMenuItem>
                <DropdownMenuItem>Web Design</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#works" className="hover:text-lime-400 transition-colors text-sm">OUR WORKS</a>
            <a href="#contact" className="hover:text-lime-400 transition-colors text-sm">CONTACT</a>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-lime-400/10 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-gradient-to-b from-background to-muted/20">
                <nav className="flex flex-col space-y-6 mt-8">
                  <a href="#" className="text-lg hover:text-lime-400 transition-colors" onClick={() => setIsOpen(false)}>
                    HOME
                  </a>
                  <a href="#" className="text-lg hover:text-lime-400 transition-colors" onClick={() => setIsOpen(false)}>
                    PAGES
                  </a>
                  <a href="#" className="text-lg hover:text-lime-400 transition-colors" onClick={() => setIsOpen(false)}>
                    SERVICES
                  </a>
                  <a href="#works" className="text-lg hover:text-lime-400 transition-colors" onClick={() => setIsOpen(false)}>
                    OUR WORKS
                  </a>
                  <a href="#contact" className="text-lg hover:text-lime-400 transition-colors" onClick={() => setIsOpen(false)}>
                    CONTACT
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}