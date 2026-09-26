---
name: Maxim Derkachev
description: One calm session on a green-phosphor terminal, set for reading.
colors:
  phosphor: "#86d39b"
  phosphor-hot: "#cdf0d6"
  phosphor-dim: "#60966e"
  phosphor-faint: "#507d5c"
  scan-rule: "#233427"
  glass: "#0b100c"
  glass-lit: "#111913"
typography:
  display:
    fontFamily: "VT323, ui-monospace, monospace"
    fontSize: "clamp(2.6rem, 6.4vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  headline:
    fontFamily: "VT323, ui-monospace, monospace"
    fontSize: "clamp(2.6rem, 5vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1
  figure:
    fontFamily: "VT323, ui-monospace, monospace"
    fontSize: "clamp(2.4rem, 4vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 0.95
  title:
    fontFamily: "VT323, ui-monospace, monospace"
    fontSize: "2.4rem"
    fontWeight: 400
    lineHeight: 1.05
  command:
    fontFamily: "VT323, ui-monospace, monospace"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1
  label:
    fontFamily: "VT323, ui-monospace, monospace"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1
  lead:
    fontFamily: "Azeret Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Azeret Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "\"liga\" 0, \"calt\" 0"
  body-strong:
    fontFamily: "Azeret Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.4
  meta:
    fontFamily: "Azeret Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.65
spacing:
  gutter: "clamp(1rem, 5vw, 4.5rem)"
  section: "clamp(3.5rem, 8vw, 6rem)"
  measure: "68ch"
  status-h: "2rem"
  bar-h: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.phosphor}"
    textColor: "{colors.glass}"
    typography: "{typography.command}"
    padding: "0.45rem 0.9rem 0.35rem"
  button-primary-hover:
    backgroundColor: "{colors.phosphor-hot}"
    textColor: "{colors.glass}"
  button-secondary:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.phosphor}"
    typography: "{typography.command}"
    padding: "0.45rem 0.9rem 0.35rem"
  button-secondary-hover:
    backgroundColor: "{colors.phosphor-hot}"
    textColor: "{colors.glass}"
  status-line:
    backgroundColor: "{colors.phosphor}"
    textColor: "{colors.glass}"
    typography: "{typography.label}"
    height: "{spacing.status-h}"
    padding: "0 {spacing.gutter}"
  key-bar-key:
    backgroundColor: "{colors.phosphor-dim}"
    textColor: "{colors.glass}"
    typography: "{typography.label}"
    height: "2.2rem"
  key-bar-key-hover:
    backgroundColor: "{colors.phosphor}"
  key-bar-key-active:
    backgroundColor: "{colors.phosphor-hot}"
  link-prompt:
    textColor: "{colors.phosphor}"
    typography: "{typography.command}"
  link-prompt-hover:
    backgroundColor: "{colors.phosphor}"
    textColor: "{colors.glass}"
---

# Design System: Maxim Derkachev

## Overview

**Creative North Star: "The Quiet Green Terminal"**

The whole site is one session on an old phosphor monitor, but the monitor is set for reading, not for show. A single soft, desaturated green glows on green-black glass; brightness is the only other variable. Headings, numbers, keys and commands speak in a chunky CRT bitmap face; every sentence a person has to read is set in a clean, generous monospace at full contrast. The effect should be calm and legible, closer to a well-lit VT terminal at night than to a hacker movie.

The screen is framed by two pieces of terminal furniture: an inverse-video status line pinned to the top and a Midnight-Commander-style numbered key bar fixed to the bottom, whose digits actually work from the keyboard. Between them, content is one long left-aligned scroll of shell sections (`$ whoami`, `$ now`, `$ history`), separated by faint dashed rules. Time is expressed as phosphor persistence: what is current glows hottest, what is old fades toward the glass.

Material is a thin CRT layer over everything: faint 3px scanlines and a soft tube vignette, a barely lit center on the glass, and a small bloom around the brightest text. There is no noise, no glitch, no neon, no second hue.

**Key Characteristics:**
- One hue (soft green phosphor), five brightness steps, on green-black glass.
- VT323 for display, labels and figures; Azeret Mono for all reading text.
- Inverse video (light bar, dark text) as the emphasis and hover language.
- Square cells, 1px solid borders on controls, 1px dashed rules between sections.
- Terminal furniture: sticky status line on top, fixed numbered key bar at the bottom.
- One authored motion moment: CRT power-on; otherwise only a blinking block cursor.

## Colors

A monochrome phosphor palette: one soft green at different brightnesses, over near-black glass with a green cast.

### Primary
- **Soft Green Phosphor** (phosphor): the default text color for everything, the fill of the status line, primary buttons, inverse-video hovers and the blinking cursor. Deliberately desaturated and calm, not matrix-neon.

### Secondary
- **Hot Phosphor** (phosphor-hot): the brightest step. The name, section headings, project titles, the email address, current-job figures, focus outlines and every hover fill. It marks "this is live / this is the thing".

### Neutral
- **Dim Phosphor** (phosphor-dim; source `color-mix(in oklab, phosphor 72%, glass)`): secondary reading text (meta lines, availability line, tag lines, stack labels, list dashes, footer) and the resting fill of key-bar keys. 5.5:1 on glass.
- **Faint Phosphor** (phosphor-faint; source `color-mix(in oklab, phosphor 60%, glass)`): the `$` prompt before headings, the `> ` prefix on link lists, scrollbar thumb, footer cursor. 4.0:1 on glass, so large glyphs and decoration only.
- **Scan Rule** (scan-rule; source `color-mix(in oklab, phosphor 22%, glass)`): dashed dividers between sections and history rows, and the top edge of the key bar.
- **Green-Black Glass** (glass): the page background, the key bar background, and the text color on every inverse-video surface.
- **Lit Glass** (glass-lit): the center of a radial falloff on the body (`radial-gradient(120% 90% at 30% 20%, glass-lit, glass 70%)`), the only place the glass itself changes.

### Named Rules
**The One Phosphor Rule.** Every foreground color is the phosphor mixed toward the glass in OKLab. No second hue, not for links, not for status, not for errors. New states are new brightness levels, never new colors.

**The Persistence Rule.** Recency is brightness. History rows compute their color as `color-mix(in oklab, phosphor calc(100% - age * 5%), glass)`; the current rows' figures are hot, and hovering or focusing a row restores it to full phosphor. Anything newer or more important is brighter; anything older fades.

**The Faint-Is-Large Rule.** Faint phosphor (4.0:1) appears only on display-size glyphs and decorative prefixes. Anything a visitor has to read sits at dim (5.5:1) or brighter.

## Typography

**Display Font:** VT323 (with ui-monospace, monospace), self-hosted woff2
**Body Font:** Azeret Mono (with ui-monospace, SF Mono, Menlo, monospace), self-hosted variable woff2, weights 100–900

**Character:** VT323 is the monitor's own bitmap voice: tall, blocky, unmistakably CRT, used big. Azeret Mono is a modern, open monospace that keeps the terminal texture while staying comfortable for paragraphs. Ligatures are off everywhere (`font-variant-ligatures: none`).

### Hierarchy
- **Display** (VT323 400, clamp(2.6rem, 6.4vw, 5.25rem), 1, 0.01em, uppercase, one line, nowrap): the name in the first viewport only. The contact email reuses the same voice at clamp(2.1rem, 7.2vw, 5.5rem).
- **Headline** (VT323 400, clamp(2.6rem, 5vw, 3.6rem), 1): section headings written as shell commands with a faint `$` prompt.
- **Figure** (VT323 400, clamp(2.4rem, 4vw, 3.6rem), 0.95): the one-fact number beside a history row ("$1M+", "hours -> min"); the date column uses VT323 at 2rem.
- **Title** (VT323 400, 2.4rem, 1.05): project names, written as directories (`memento/`).
- **Command** (VT323 400, 1.6rem, 1; 2rem in the wide right column): buttons and the main link list.
- **Label** (VT323 400, 1.35rem, 1): status line and key bar.
- **Lead** (Azeret Mono 400, clamp(1.15rem, 1.6vw, 1.4rem), 1.55, max 44ch): the intro sentence and the contact lead.
- **Body** (Azeret Mono 400, 1.0625rem, 1.65; 1rem under 640px, max 68ch): all prose.
- **Body Strong** (Azeret Mono 700, 1.0625rem, 1.4): role titles in history; the employer after the `·` returns to 400.
- **Meta** (Azeret Mono 400, 0.9–0.95rem, dim): meta lines, project tag lines, the stack line; the footer drops to 0.85rem.

### Named Rules
**The Two Voices Rule.** VT323 never sets a paragraph; Azeret Mono never sets a heading, key or figure. If it is a sentence, it is Azeret Mono.

**The Weight-of-the-Fact Rule.** Type size follows how much a fact matters, not where it sits. The strongest number in a history row is set at figure size in the margin; rows without a fact leave the column empty rather than inventing one.

**The Shell Grammar Rule.** Headings are commands (`$ whoami`, `$ ls ~/projects`, `$ mail`), projects are directories with a trailing slash, link lists are prefixed with `> `. The prompt characters are faint; the words are hot.

## Layout

A single left-aligned column inside a fluid side gutter (clamp(1rem, 5vw, 4.5rem)). Sections cap at 78rem; prose caps at 68ch; leads at 44–46ch. Sections are separated by clamp(3.5rem, 8vw, 6rem) of space plus a dashed rule on the heading itself.

The first viewport fills the height between status line and key bar and centers its content vertically. At 1100px and wider it becomes a two-column grid: name, lead, availability and actions on the left; the main link list as a right column starting at the lead line, with the top of the hero pushed down by clamp(3.5rem, 16vh, 10rem). Narrower, the link list wraps into a row under the actions.

History rows are a three-column grid (7.5rem date, 68ch body, figure right-aligned in the remainder); under 1100px the figure drops beneath the body; under 640px everything stacks. The stack list is a 9rem term column beside definitions, stacking under 640px.

The status line is sticky at 2rem tall; the key bar is fixed with 7 equal columns (4 columns and a 5.2rem reserved height under 640px). The body reserves bottom padding for the bar, and anchor scrolling offsets for the status line.

Breakpoints in use: 1100px, 860px (status drops uptime), 640px, 480px (status drops long availability text).

## Elevation & Depth

Flat. There are no box-shadows anywhere. Depth belongs to the tube, not to the elements: a fixed, non-interactive overlay draws 3px-period scanlines and a vignette over the entire page, and the glass carries a soft radial falloff from Lit Glass. The only "glow" is phosphor bloom on the hottest display text.

### Shadow Vocabulary
- **Phosphor bloom** (`text-shadow: 0 0 0.12em color-mix(in oklab, phosphor 35%, transparent)`): the name, the heading of the current section (`$ now`), and the contact email (at 30%). Removed when the email is inverted on hover.
- **Tube overlay** (`repeating-linear-gradient(to bottom, transparent 0 2px, rgb(0 0 0 / 0.07) 2px 3px), radial-gradient(140% 110% at 50% 50%, transparent 62%, rgb(0 0 0 / 0.42) 100%)`): one fixed layer above everything, pointer-events none, hidden in print.

### Named Rules
**The Glass Is Flat Rule.** Nothing floats. Elements sit on the glass; hierarchy comes from brightness, size and inverse video. Bloom is reserved for the few hottest, currently-live lines.

## Shapes

Square character cells. Radius is zero everywhere. Controls are outlined with 1px solid phosphor; buttons and keys carry a separate key-cap cell for the digit, divided by a 1px rule. Section headings and history rows are separated by 1px dashed Scan Rule, the one dashed form in the system. The cursor is a solid filled block. The favicon repeats the vocabulary: a `>` chevron and a block cursor on glass.

## Components

### Buttons
Keyboard keys, not pills.
- **Shape:** square, 1px solid phosphor border, no radius.
- **Anatomy:** a key-cap cell with the digit (`kbd`, padding 0.35rem 0.6rem, right border) followed by the label (padding 0.45rem 0.9rem 0.35rem), both in VT323 at 1.6rem (1.45rem under 640px).
- **Primary:** phosphor fill, glass text, glass divider. Used once per view for "Write to me".
- **Secondary:** transparent on glass, phosphor text and border.
- **Hover / Focus:** both fill with Hot Phosphor, glass text, glass divider (120ms background/color). Active nudges down 1px. Focus also gets the global 2px hot outline at 3px offset.
- A blinking block cursor follows the action row.

### Status Line
Inverse video across the top: phosphor fill, glass text, VT323 1.35rem, sticky, nowrap. Items: host (`mderk@girona`), uptime since 1998, live Girona time, availability with a blinking square, and an EN/ES toggle where the active language is re-inverted (glass cell, phosphor text). Items drop from the left as the viewport narrows.

### Key Bar (signature)
A Midnight-Commander function-key row fixed to the bottom on glass with a Scan Rule top edge. Each key is a phosphor digit on glass followed by a Dim Phosphor cell with glass text; hover lifts the cell to phosphor; the key of the section in view (`aria-current`) goes Hot, digit included. Digits 1–7 on the keyboard trigger the same keys. Labels are lowercase command words (`whoami`, `cv.pdf`, `español`).

### Link Lists
Prompt lines: each link is prefixed with a faint `> `, no underline, in VT323. Hover inverts the line (phosphor fill, glass text, prefix included). In body text, links keep an underline (1px, 0.22em offset) and hover to Hot Phosphor.

### History Log
Rows of date / role and story / figure, dimmed by age per the Persistence Rule. Hovering or focusing a row restores full phosphor and reveals a hot `>` pointer in the left margin (160ms color, 120ms pointer).

### Dash List
Bullets are a dim hyphen hung in a 1.6em indent; no dots, no icons.

### Motion
- **Power-on** (the one authored moment, once per load, skipped entirely under reduced motion): the hero collapses to a bright line and expands (700ms, `cubic-bezier(0.16, 1, 0.3, 1)`), the name types in with 15 steps, following lines rise in with a 120ms stagger, status line and key bar rise in.
- **Cursor blink:** `steps(1)` hard on/off, 1.06s for the cursor, 1.6s for the availability square; stopped under reduced motion.
- **State transitions:** 120–160ms color/background only.

## Do's and Don'ts

### Do:
- **Do** express every new state as a brightness step of the one phosphor (mix toward glass in OKLab), never as a new hue.
- **Do** use inverse video (phosphor or hot fill, glass text) for hover and emphasis on commands, links and keys.
- **Do** set every sentence in Azeret Mono at dim (5.5:1) or brighter, capped at 68ch.
- **Do** write headings as shell commands with a faint `$`, projects as directories with a trailing `/`, and link lists with a faint `> `.
- **Do** give new top-level sections a working digit in the key bar and light it while the section is on screen.
- **Do** keep corners square, controls on 1px solid phosphor, and dividers on 1px dashed Scan Rule.
- **Do** make older or secondary content dimmer and current content hotter.

### Don't:
- **Don't** add a second hue, and don't brighten the phosphor into saturated matrix-neon green.
- **Don't** set paragraphs in VT323 or shrink reading text into tiny mono.
- **Don't** add box-shadows, rounded corners, noise textures, glitch or chromatic-aberration effects.
- **Don't** use faint phosphor for anything a visitor has to read.
- **Don't** use pictographic icons, emoji or icon fonts; the vocabulary is ASCII prompt characters and block cursors.
- **Don't** add decorative color gradients, icon cards or bento grids; the only gradients are the glass falloff and the tube overlay.
- **Don't** add a second entrance animation; power-on is the one authored motion moment.
