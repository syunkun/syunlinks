---
name: Kyoto Fushimi Premium
colors:
  surface: '#fcf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fcf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e5e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#59413c'
  inverse-surface: '#31312d'
  inverse-on-surface: '#f3f0ea'
  outline: '#8d706b'
  outline-variant: '#e1bfb9'
  surface-tint: '#b02d1b'
  primary: '#911507'
  on-primary: '#ffffff'
  primary-container: '#b32f1d'
  on-primary-container: '#ffd1c9'
  inverse-primary: '#ffb4a7'
  secondary: '#4b6453'
  on-secondary: '#ffffff'
  secondary-container: '#c8e4cf'
  on-secondary-container: '#4d6756'
  tertiary: '#594437'
  on-tertiary: '#ffffff'
  tertiary-container: '#725c4e'
  on-tertiary-container: '#f4d6c4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a7'
  on-primary-fixed: '#400200'
  on-primary-fixed-variant: '#8e1305'
  secondary-fixed: '#cde9d4'
  secondary-fixed-dim: '#b2cdb9'
  on-secondary-fixed: '#082013'
  on-secondary-fixed-variant: '#344c3d'
  tertiary-fixed: '#fbddca'
  tertiary-fixed-dim: '#dec1af'
  on-tertiary-fixed: '#28180d'
  on-tertiary-fixed-variant: '#574335'
  background: '#fcf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e5e2dc'
typography:
  display-lg:
    fontFamily: notoSerif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: notoSerif
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: notoSerif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: notoSerif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: hankenGrotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: hankenGrotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: hankenGrotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: hankenGrotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
  section-gap: 96px
---

## Brand & Style

The brand personality is rooted in the quiet confidence of centuries-old brewing traditions, translated for a modern, global connoisseur. This design system evokes the serene atmosphere of a Fushimi brewery—cool shadows, the scent of cedar, and the vibrant flash of a torii gate. 

The design style is **Minimalist-Tactile**. It prioritizes extreme clarity and generous whitespace to signify luxury, while utilizing subtle digital textures to mimic the physical sensation of *washi* paper and dark wood grain. The interface should feel like a well-curated gallery: quiet, intentional, and focused on the artistry of the product.

## Colors

The palette is a dialogue between the natural materials of sake production and the spiritual architecture of Kyoto.

*   **Vermilion (Primary):** Inspired by the Inari shrines, used sparingly for calls to action, accents, and high-impact brand moments.
*   **Bottle Green (Secondary):** A deep, translucent green reflecting the traditional glass of sake magnums. Used for secondary actions and structural grounding.
*   **Kura Wood (Tertiary):** A dark, charred brown representing the wooden beams of the brewery. Used for typography and deep contrast elements.
*   **Washi White (Neutral):** A warm, textured off-white that serves as the primary canvas. It reduces eye strain and reinforces the premium, organic feel.

The default mode is **Light**, emphasizing the paper-like quality of the interface.

## Typography

Typography in this design system balances the editorial grace of Mincho serifs with the functional precision of contemporary grotesques. 

**Noto Serif** is used for all headlines and display text. Its high-contrast strokes evoke traditional Japanese calligraphy and stone-carved inscriptions. **Hanken Grotesk** is used for body copy and UI labels to ensure absolute legibility and a modern, "clean" technical feel. 

Large display type should be set with tighter letter spacing to create a sense of density and importance, while labels should be generously tracked out to emphasize a structured, architectural rhythm.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model to maintain a sense of structured, intentional composition. The layout is centered on a 12-column grid for desktop, moving to 4 columns for mobile.

Whitespace is treated as a core design element—never "empty" space, but a "Ma" (the Japanese concept of negative space) that gives the content room to breathe. Section gaps are intentionally large to encourage a slow, deliberate scrolling experience. Elements should often be offset from the center or aligned to a rigid vertical axis to mimic the asymmetric balance found in Japanese architecture.

## Elevation & Depth

To maintain the tactile, paper-like aesthetic, this design system avoids heavy shadows. Depth is instead conveyed through:

*   **Tonal Layering:** Using subtle shifts in the Washi White (neutral) palette to distinguish between background and foreground (e.g., a slightly darker cream for "wells" or background containers).
*   **Fine Outlines:** Using 0.5px or 1px strokes in Kura Wood at low opacity (10-15%) to define component boundaries without creating heavy visual weight.
*   **Subtle Textures:** Overlaying a very low-opacity grain texture on top-level surfaces to simulate the fibrous nature of handmade paper.
*   **Overlapping Elements:** Using layout rather than shadows to show hierarchy—such as a product image slightly overlapping a text block.

## Shapes

The shape language is primarily **Sharp**, reflecting the precise joinery of traditional wooden architecture. 

A "Soft" roundedness (Level 1) is applied only to interactive elements like buttons and input fields to make them feel approachable and distinct from purely decorative or structural elements. Larger containers and cards should maintain sharp, 90-degree corners to reinforce the sense of a grid-based, premium layout.

## Components

### Buttons
Primary buttons use the Deep Vermilion background with Washi White text, featuring a subtle inner border to suggest depth. Secondary buttons use a Kura Wood outline with a transparent background. All buttons should have a hover state that slightly shifts the color towards the Bottle Green for a sophisticated transition.

### Input Fields
Inputs are minimalist: a single bottom border in Kura Wood with a floating label in Hanken Grotesk. Focus states are indicated by the border darkening and a subtle, 2px Vermilion accent on the left edge.

### Cards
Cards are defined by their content and whitespace rather than heavy containers. If a container is necessary, use a subtle 1px Wood Brown border at 10% opacity. Images within cards should always use a slight desaturation filter that returns to full color on hover.

### Sake-specific Components
*   **Flavor Profiles:** A custom radar chart component using thin lines and Vermilion points to illustrate the dry/sweet and rich/light characteristics of each sake.
*   **Temperature Indicator:** A subtle vertical scale indicating the ideal serving temperature (chilled to warm), using the Bottle Green for cold and Vermilion for warm.
*   **Heritage Badges:** Small, circular icons reminiscent of *Hanko* stamps, used to highlight specific certifications or award wins.