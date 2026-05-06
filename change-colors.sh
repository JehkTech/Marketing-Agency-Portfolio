#!/bin/bash

##############################################################################
# Kinertic Media Arts - Color Theme Customization Script
# 
# This script allows you to easily change the color scheme of your website
# by updating the Tailwind configuration and CSS variables.
#
# Usage: bash change-colors.sh
##############################################################################

set -e

echo "🎨 =============================================="
echo "   Kinertic Media Arts - Color Customizer"
echo "   Easily change your website's color scheme"
echo "============================================== 🎨"
echo ""

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}Choose a color scheme:${NC}"
echo ""
echo "1. Original (Black & Gold)"
echo "2. Royal Blue & Gold"
echo "3. Purple & Coral"
echo "4. Dark Green & Lime"
echo "5. Charcoal & Electric Blue"
echo "6. Navy & Orange"
echo "7. Deep Red & Gold"
echo "8. Custom (Enter your own colors)"
echo ""
read -p "Enter your choice (1-8): " choice

# Define color schemes
case $choice in
  1)
    PRIMARY_BG="#0A0A0A"
    PRIMARY_TEXT="#FAFAFA"
    ACCENT_PRIMARY="#D4AF37"
    ACCENT_LIGHT="#F2D06B"
    ACCENT_SECONDARY="#3B82F6"
    ACCENT_TERTIARY="#8B5CF6"
    SCHEME_NAME="Original Black & Gold"
    ;;
  2)
    PRIMARY_BG="#0F1729"
    PRIMARY_TEXT="#F8FAFC"
    ACCENT_PRIMARY="#FFD700"
    ACCENT_LIGHT="#FFED4E"
    ACCENT_SECONDARY="#1E40AF"
    ACCENT_TERTIARY="#3B82F6"
    SCHEME_NAME="Royal Blue & Gold"
    ;;
  3)
    PRIMARY_BG="#1A0B2E"
    PRIMARY_TEXT="#F5F3FF"
    ACCENT_PRIMARY="#FF6B9D"
    ACCENT_LIGHT="#FFA6C9"
    ACCENT_SECONDARY="#7C3AED"
    ACCENT_TERTIARY="#A78BFA"
    SCHEME_NAME="Purple & Coral"
    ;;
  4)
    PRIMARY_BG="#0D1F0D"
    PRIMARY_TEXT="#F0FDF4"
    ACCENT_PRIMARY="#84CC16"
    ACCENT_LIGHT="#BEF264"
    ACCENT_SECONDARY="#15803D"
    ACCENT_TERTIARY="#22C55E"
    SCHEME_NAME="Dark Green & Lime"
    ;;
  5)
    PRIMARY_BG="#18181B"
    PRIMARY_TEXT="#FAFAFA"
    ACCENT_PRIMARY="#06B6D4"
    ACCENT_LIGHT="#22D3EE"
    ACCENT_SECONDARY="#0284C7"
    ACCENT_TERTIARY="#7DD3FC"
    SCHEME_NAME="Charcoal & Electric Blue"
    ;;
  6)
    PRIMARY_BG="#0C1844"
    PRIMARY_TEXT="#F1F5F9"
    ACCENT_PRIMARY="#FF6B35"
    ACCENT_LIGHT="#FF8C61"
    ACCENT_SECONDARY="#1E3A8A"
    ACCENT_TERTIARY="#3B82F6"
    SCHEME_NAME="Navy & Orange"
    ;;
  7)
    PRIMARY_BG="#1A0505"
    PRIMARY_TEXT="#FEF2F2"
    ACCENT_PRIMARY="#DC2626"
    ACCENT_LIGHT="#EF4444"
    ACCENT_SECONDARY="#B91C1C"
    ACCENT_TERTIARY="#FFD700"
    SCHEME_NAME="Deep Red & Gold"
    ;;
  8)
    echo ""
    echo -e "${YELLOW}Enter custom colors (hex format, e.g., #1A2B3C):${NC}"
    read -p "Primary Background: " PRIMARY_BG
    read -p "Primary Text: " PRIMARY_TEXT
    read -p "Primary Accent (Gold): " ACCENT_PRIMARY
    read -p "Accent Light: " ACCENT_LIGHT
    read -p "Secondary Accent (Blue): " ACCENT_SECONDARY
    read -p "Tertiary Accent (Purple): " ACCENT_TERTIARY
    SCHEME_NAME="Custom Colors"
    ;;
  *)
    echo -e "${RED}Invalid choice. Exiting.${NC}"
    exit 1
    ;;
esac

echo ""
echo -e "${GREEN}✅ Selected: $SCHEME_NAME${NC}"
echo ""
echo -e "${BLUE}📋 Color Preview:${NC}"
echo "  Primary Background: $PRIMARY_BG"
echo "  Primary Text: $PRIMARY_TEXT"
echo "  Primary Accent: $ACCENT_PRIMARY"
echo "  Accent Light: $ACCENT_LIGHT"
echo "  Secondary Accent: $ACCENT_SECONDARY"
echo "  Tertiary Accent: $ACCENT_TERTIARY"
echo ""

read -p "Apply these colors? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "Color change cancelled."
    exit 0
fi

echo ""
echo -e "${BLUE}🔧 Updating Tailwind configuration...${NC}"

# Backup current tailwind config
cp tailwind.config.ts tailwind.config.ts.backup
echo -e "${GREEN}✅ Backup created: tailwind.config.ts.backup${NC}"

# Update tailwind.config.ts
cat > tailwind.config.ts << EOF
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kinertic: {
          black: '$PRIMARY_BG',
          white: '$PRIMARY_TEXT',
          gold: '$ACCENT_PRIMARY',
          'gold-light': '$ACCENT_LIGHT',
          blue: '$ACCENT_SECONDARY',
          purple: '$ACCENT_TERTIARY',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, $ACCENT_SECONDARY 0%, $ACCENT_TERTIARY 100%)',
        'gradient-gold': 'linear-gradient(135deg, $ACCENT_PRIMARY 0%, $ACCENT_LIGHT 100%)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, $ACCENT_SECONDARY 0px, transparent 50%), radial-gradient(at 100% 0%, $ACCENT_TERTIARY 0px, transparent 50%), radial-gradient(at 100% 100%, $ACCENT_SECONDARY 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
EOF

echo -e "${GREEN}✅ Tailwind config updated${NC}"

echo ""
echo -e "${BLUE}🔧 Updating CSS variables...${NC}"

# Backup current globals.css
cp app/globals.css app/globals.css.backup
echo -e "${GREEN}✅ Backup created: app/globals.css.backup${NC}"

# Convert hex to RGB for glassmorphism effects
hex_to_rgb() {
    hex=\${1#"#"}
    printf "%d, %d, %d" 0x\${hex:0:2} 0x\${hex:2:2} 0x\${hex:4:2}
}

TEXT_RGB=\$(hex_to_rgb "$PRIMARY_TEXT")
ACCENT_RGB=\$(hex_to_rgb "$ACCENT_PRIMARY")

# Update CSS variables in globals.css
sed -i.bak "s/--glass-bg: rgba([^)]*)/--glass-bg: rgba($TEXT_RGB, 0.05)/" app/globals.css
sed -i.bak "s/--glass-border: rgba([^)]*)/--glass-border: rgba($TEXT_RGB, 0.1)/" app/globals.css

# Update scrollbar colors
sed -i.bak "s/::-webkit-scrollbar-thumb {[^}]*}/::-webkit-scrollbar-thumb { background: $ACCENT_PRIMARY; border-radius: 4px; }/" app/globals.css
sed -i.bak "s/::-webkit-scrollbar-thumb:hover {[^}]*}/::-webkit-scrollbar-thumb:hover { background: $ACCENT_LIGHT; }/" app/globals.css

# Update selection color
sed -i.bak "s/::selection {[^}]*}/::selection { background: $ACCENT_PRIMARY; color: $PRIMARY_BG; }/" app/globals.css

# Update focus-visible outline
sed -i.bak "s/outline: 2px solid [^;]*/outline: 2px solid $ACCENT_PRIMARY/" app/globals.css

echo -e "${GREEN}✅ CSS variables updated${NC}"

echo ""
echo -e "${BLUE}🔧 Updating body background...${NC}"

# Update body background in globals.css
sed -i.bak "s/background: #[0-9A-Fa-f]*/background: $PRIMARY_BG/" app/globals.css
sed -i.bak "s/color: #[0-9A-Fa-f]*/color: $PRIMARY_TEXT/" app/globals.css

echo -e "${GREEN}✅ Body styles updated${NC}"

echo ""
echo -e "${GREEN}🎉 Color scheme applied successfully!${NC}"
echo ""
echo -e "${YELLOW}⚠️  Important:${NC}"
echo "1. Restart your development server for changes to take effect"
echo "2. Run: npm run dev"
echo "3. If colors don't update, try clearing the cache:"
echo "   rm -rf .next && npm run dev"
echo ""
echo -e "${BLUE}💾 Backups created:${NC}"
echo "  - tailwind.config.ts.backup"
echo "  - app/globals.css.backup"
echo ""
echo -e "${CYAN}To restore original colors:${NC}"
echo "  mv tailwind.config.ts.backup tailwind.config.ts"
echo "  mv app/globals.css.backup app/globals.css"
echo ""
