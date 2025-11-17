import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Building2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const clientData = [
  {
    service: "PRODUCT DEVELOPMENT",
    year: "2022",
    client: "INTERNATIONAL GROUP CORP"
  },
  {
    service: "GRAPHIC DESIGN",
    year: "2022", 
    client: "TOTAL COMPANY"
  },
  {
    service: "DIGITAL MARKETING",
    year: "2023",
    client: "REAL TECH BIZ EUROPE"
  },
  {
    service: "PRODUCT BRANDING",
    year: "2023",
    client: "STOREPACK CENTER GLOBAL"
  }
];

export function ClientTable() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const table = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/5 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-lime-400/5 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div 
          ref={header.ref}
          className={`text-center mb-8 sm:mb-12 ${header.isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-lime-400" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-foreground to-lime-400 bg-clip-text text-transparent">
              CLIENT SHOWCASE
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Trusted by leading companies worldwide
          </p>
        </div>
        
        <div 
          ref={table.ref}
          className={`bg-gradient-to-br from-card/80 to-muted/20 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-border/50 backdrop-blur-sm overflow-x-auto ${
            table.isVisible ? 'animate-scale-in animation-delay-300' : 'opacity-0'
          }`}
        >
          <Table>
            <TableHeader>
              <TableRow className="border-b border-lime-400/20 hover:bg-transparent">
                <TableHead className="text-left text-xs sm:text-sm text-lime-400">SERVICES</TableHead>
                <TableHead className="text-left text-xs sm:text-sm text-lime-400">YEAR</TableHead>
                <TableHead className="text-left text-xs sm:text-sm text-lime-400">CLIENT</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientData.map((item, index) => (
                <TableRow 
                  key={index} 
                  className="border-b border-border/30 hover:bg-gradient-to-r hover:from-lime-400/5 hover:to-emerald-400/5 transition-all duration-300 cursor-pointer group"
                >
                  <TableCell className="py-4 sm:py-6 text-sm sm:text-base group-hover:text-lime-400 transition-colors">
                    {item.service}
                  </TableCell>
                  <TableCell className="py-4 sm:py-6 text-xs sm:text-sm text-muted-foreground">
                    {item.year}
                  </TableCell>
                  <TableCell className="py-4 sm:py-6 text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.client}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}