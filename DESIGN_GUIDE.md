# Alpha X Quant — Design Guide

## Design direction

Quiet institutional confidence: precise, minimal, research-led, and contemporary. The visual language should feel closer to a boutique quantitative research firm than a consumer-finance startup or personal portfolio.

## Color system

- Ink: `#071522` — primary text and dark surfaces
- Navy: `#0B2239` — navigation and section backgrounds
- Slate: `#516170` — supporting copy
- Mist: `#E8EEF2` — borders and cool neutral surfaces
- Paper: `#F7F9FA` — page background
- White: `#FFFFFF` — cards and reversed text
- Signal teal: `#54C6B2` — sparse emphasis, focus, and data marks
- Signal blue: `#6EA8D9` — secondary chart detail

Color is used structurally. Signal colors should remain accents rather than decorative gradients.

## Typography

- Display: a restrained editorial serif stack for major headings
- UI/body: a modern system sans-serif stack for speed and clarity
- Data labels: a system monospace stack for compact research notation
- Headings use controlled line lengths and tight tracking; body copy uses generous line-height

## Layout

- Maximum content width: approximately 1200px
- Strong alignment grid with generous horizontal margins
- Section spacing: 88–120px desktop; 64–80px mobile
- Cards use thin rules, small radii, and very light shadows only where hierarchy requires them
- First viewport pairs clear positioning copy with a CSS-rendered signal panel

## Visual motifs

- Fine financial grid lines
- Subtle plotted signal paths and factor bars rendered with CSS and semantic HTML
- Research notation, small caps, rules, and calibrated numeric labels
- No fake market charts, performance numbers, candlesticks, crypto motifs, or animated trading screens

## Interaction

- Transitions are short and functional: color, border, and small positional changes
- Respect `prefers-reduced-motion`
- Hover states never carry information unavailable to keyboard or touch users
- Focus states use a clearly visible teal outline

## Voice

- Direct, analytical, and measured
- Prefer “research,” “evaluate,” “develop,” and “explore”
- Avoid “best-in-class,” “market-beating,” “proven alpha,” “fund,” “asset manager,” and guaranteed outcomes

