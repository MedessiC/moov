import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // MIDEESSI brand colors
        midnight: {
          DEFAULT: "hsl(var(--midnight-blue))",
          50: "hsl(240 64% 97%)",
          100: "hsl(240 64% 92%)",
          200: "hsl(240 64% 82%)",
          300: "hsl(240 64% 67%)",
          400: "hsl(240 64% 52%)",
          500: "hsl(240 64% 40%)",
          600: "hsl(240 64% 27%)",
          700: "hsl(240 64% 22%)",
          800: "hsl(240 64% 17%)",
          900: "hsl(240 64% 12%)",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          50: "hsl(51 100% 97%)",
          100: "hsl(51 100% 92%)",
          200: "hsl(51 100% 82%)",
          300: "hsl(51 100% 70%)",
          400: "hsl(51 100% 60%)",
          500: "hsl(51 100% 50%)",
          600: "hsl(48 100% 45%)",
          700: "hsl(45 100% 38%)",
          800: "hsl(42 100% 30%)",
          900: "hsl(40 100% 22%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
      },
      boxShadow: {
        gold: "0 4px 14px 0 hsl(51 100% 50% / 0.4)",
        card: "0 4px 6px -1px hsl(240 64% 27% / 0.1), 0 2px 4px -2px hsl(240 64% 27% / 0.1)",
        "card-hover": "0 10px 15px -3px hsl(240 64% 27% / 0.1), 0 4px 6px -4px hsl(240 64% 27% / 0.1)",
      },
      fontSize: {
        /* Typographie fluide et responsive */
        xs: "clamp(0.75rem, 1vw, 0.875rem)",
        sm: "clamp(0.875rem, 1.2vw, 1rem)",
        base: "clamp(1rem, 1.4vw, 1.125rem)",
        lg: "clamp(1.125rem, 1.6vw, 1.375rem)",
        xl: "clamp(1.375rem, 2vw, 1.75rem)",
        "2xl": "clamp(1.75rem, 2.5vw, 2.25rem)",
        "3xl": "clamp(2rem, 3vw, 2.5rem)",
        "4xl": "clamp(2.25rem, 4vw, 3rem)",
        "5xl": "clamp(2.5rem, 5vw, 3.75rem)",
        "6xl": "clamp(3rem, 6vw, 4.5rem)",
        "7xl": "clamp(3.5rem, 7vw, 5rem)",
        "8xl": "clamp(4rem, 8vw, 6rem)",
        "9xl": "clamp(4.5rem, 9vw, 7rem)",
        /* Tailles additionnelles pour composants */
        hero: "clamp(2.5rem, 7vw, 4.5rem)",
        heading: "clamp(1.75rem, 4vw, 2.5rem)",
        subheading: "clamp(1.25rem, 2.5vw, 1.75rem)",
        body: "clamp(0.95rem, 1.5vw, 1.1rem)",
        caption: "clamp(0.8rem, 1vw, 0.95rem)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
