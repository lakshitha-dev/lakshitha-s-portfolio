# Project Showcase Image Prompts

Complete, copy-paste-ready prompts for generating portfolio project thumbnails with any AI image
tool (Midjourney, DALL·E, Ideogram, Flux, etc.). Each prompt is fully self-contained — paste the
whole block, no assembly needed.

**Shared visual identity** (already baked into every prompt): white background, faint gray grid,
frosted-glass panels, black typography accents, subtle purple-indigo and green-blue gradient
glows, minimal flat-3D SaaS-illustration style, 16:10 landscape (~1400×875px target).

**After generating:** export as JPG or WebP around 1400×875, drop into `src/assets/projects/`,
and point the project's `image` field in `src/data/index.ts` at the new file. The carousel
renders cards at 280px wide with 1rem corner radius, so compositions should read clearly even
small.

**Negative prompt (use with all, where the tool supports it):**
> text, words, letters, watermark, logo, photorealistic people, faces, dark background, neon
> cyberpunk, clutter, low quality, blurry, distorted UI

---

## 1. DocMind — AI Document Q&A (RAG)

> A clean modern SaaS product illustration on a pure white background with a faint light-gray
> grid pattern. Center-left: a neat stack of white PDF document pages with softly rounded
> corners, one page lifting off the stack and dissolving into a stream of small glowing purple
> particles. The particle stream flows rightward into a translucent crystalline cube built from
> a hexagonal lattice structure (a vector database), glowing faintly indigo from within. From
> the cube, a second stream flows up-right into a frosted-glass chat panel with thin white
> borders and a soft drop shadow, containing an answer bubble and three small rounded citation
> chips attached beneath it. A subtle horizontal row of four tiny glyph icons along the bottom
> edge suggests a pipeline: document, scissors-split, cube, chat bubble. Color palette: white
> and light gray surfaces, black line accents, purple-to-indigo gradient glow (#673ab7 to
> #3f51b5) used sparingly, one small green-blue accent. Minimal flat-3D style with soft studio
> lighting, gentle ambient occlusion under the glass panels, no text, no people, high detail,
> 16:10 landscape composition with generous negative space. --ar 16:10

## 2. AI Article Generator — n8n Multi-Agent Pipeline

> A clean modern automation-workflow illustration on a pure white background with a faint
> light-gray grid. A horizontal pipeline of five rounded frosted-glass nodes connected
> left-to-right by smooth curved bezier wires with small directional dots traveling along them.
> Each node contains a single minimal black glyph on glass: (1) a magnifying glass over a tiny
> globe, (2) a simple flowchart diagram, (3) a picture frame with a mountain icon, (4) a
> fountain-pen nib, (5) a shield with a checkmark. The wires glow softly purple-indigo where
> they connect. At the far right, the pipeline terminates in a polished white article document
> mockup with a hero-image placeholder rectangle, gray text-line bars, and a small green
> circular badge with a checkmark floating at its corner. Above the pipeline, a faint dotted
> orchestration line arcs over all five nodes from a small conductor node, suggesting
> deterministic control. Color palette: white surfaces, black glyphs, purple-indigo gradient
> accents (#673ab7 to #3f51b5), one green success accent (#4caf50). Minimal flat-3D SaaS style,
> soft shadows under every node, no text, no people, crisp and uncluttered, 16:10 landscape.
> --ar 16:10

## 3. Travel Plan Platform — AI Travel Marketplace for Sri Lanka

> A clean isometric SaaS illustration on a pure white background with a faint gray grid. Center:
> a stylized, minimal outline map shape of the island of Sri Lanka in very light gray, lying
> flat like a game board. Hovering above it, a frosted-glass chat panel with thin white borders
> showing a multi-day itinerary as a vertical timeline of three rounded steps with tiny cost
> chips. Around the map, three floating glass cards connected to locations by dotted route
> lines with small pins: a beach-hotel card with a tiny palm tree and bed glyph, a tour-guide
> card with a circular avatar silhouette and a five-star rating row, and a vehicle card with a
> minimalist tuk-tuk icon. A soft green-to-blue gradient glow (#4caf50 to #2196f3) accents the
> route lines; a purple-indigo glow accents the chat panel. Small orbiting dots suggest live
> services communicating. Minimal flat-3D style, soft studio lighting, gentle shadows beneath
> floating elements, no text, no real faces, airy negative space, 16:10 landscape. --ar 16:10

## 4. Enterprise Expense Agent & MCP Gateway (confidential — abstract visual)

> A clean modern enterprise-software illustration on a pure white background with a faint gray
> grid. Left: a frosted-glass chat window styled like a corporate messaging app, containing a
> photo of a paper receipt being scanned by a thin horizontal purple light beam, with small
> sparkle glyphs indicating AI extraction. From the chat window, a smooth wire flows rightward
> through a central translucent gateway cube with a minimal plug/socket glyph engraved on its
> face, glowing softly indigo (representing an MCP gateway), with a tiny shield-and-key glyph
> floating beside it for OAuth security. The wire then splits into two endpoints on the right:
> a green-tinted spreadsheet document icon with a grid of cells, and a red-tinted PDF document
> icon, both with small checkmark badges. A subtle cloud outline floats behind the cube
> suggesting Azure hosting. Color palette: white and glass surfaces, black glyphs, enterprise
> blue-gray accents, purple-indigo glow, one green and one soft red document accent. Minimal
> flat-3D SaaS style, soft shadows, no text, no faces, 16:10 landscape. --ar 16:10

## 5. ServiceNow IT-Support Platform (confidential — abstract visual)

> A clean modern IT-operations illustration on a pure white background with a faint gray grid.
> Left: a frosted-glass chat panel with a support-bot avatar circle and an incident card
> (rounded rectangle with a small warning-triangle glyph and priority dot) sliding out of it.
> The card travels along a smooth wire through a central translucent gateway cube with a
> plug/socket glyph, glowing softly indigo. Right: a kanban-style glass ticket board with three
> columns of small rounded cards, one card highlighted green with a checkmark as resolved.
> Above the board, a small escalation arrow curves toward a minimal chat-bubbles icon
> (team-chat escalation). Beneath the wire, a tiny circuit-breaker switch glyph and a shield
> glyph suggest resilience patterns. Color palette: white and glass surfaces, black glyphs,
> blue-gray enterprise accents, purple-indigo gateway glow, single green resolved accent.
> Minimal flat-3D SaaS style, soft studio lighting, no text, no faces, orderly composition,
> 16:10 landscape. --ar 16:10

## 6. QuizBank — AI Evaluation Platform

> A clean modern ed-tech dashboard illustration on a pure white background with a faint gray
> grid. Split composition: on the left, a frosted-glass panel where a small magic-wand glyph
> with sparkles generates a fanned stack of multiple-choice question cards — each card a white
> rounded rectangle with one circular option dot filled black and a row of one-to-five tiny
> difficulty stars. On the right, a second glass panel shows evaluation results: a large donut
> chart in purple-indigo and green segments, a small ascending bar chart, and a horizontal row
> of three circular avatar silhouettes with a tiny stopwatch glyph above them indicating a
> timed assessment. A thin wire connects the two panels with a small directional dot. Color
> palette: white surfaces, black glyphs, purple-indigo gradient (#673ab7 to #3f51b5) for the
> primary chart, green-blue (#4caf50 to #2196f3) secondary accents. Minimal flat-3D SaaS style,
> soft shadows under panels, no text, no faces, balanced negative space, 16:10 landscape.
> --ar 16:10

## 7. Real-Time Auction Platform

> A clean modern marketplace illustration on a pure white background with a faint gray grid.
> Center: a frosted-glass auction card with a minimal gavel icon resting on a sound block,
> surrounded by three floating glass bid bubbles of increasing size, each containing a rising
> price-tag glyph and an upward arrow, connected by a dotted ascending curve suggesting
> real-time bidding. To the right, a slim vertical glass panel shows a live-activity feed as
> three stacked rows with pulsing green presence dots. A small padlock-with-card glyph at the
> bottom suggests secure escrow payments. A subtle stopwatch glyph with a red sweep hand floats
> top-right indicating countdown pressure. Color palette: white and glass surfaces, black
> glyphs, orange-to-red gradient accent (#ff9800 to #f44336) on the price arrows, green
> presence dots. Minimal flat-3D SaaS style, soft studio lighting, no text, no faces, 16:10
> landscape. --ar 16:10

## 8. AI Finance Management Platform

> A clean modern fintech dashboard illustration on a pure white background with a faint gray
> grid. A large frosted-glass dashboard panel tilted slightly in perspective, containing: a
> smooth area-chart curve rising left to right with a soft green-blue gradient fill (#4caf50
> to #2196f3), a row of three small rounded stat tiles with minimal glyphs (a wallet, a
> recurring-arrows subscription symbol, a piggy bank), and a vertical stack of three
> transaction rows each with a category icon circle automatically color-tagged purple, green,
> or blue by a tiny AI sparkle glyph hovering beside them. A small target/goal ring chart sits
> in the top corner, three-quarters filled. Color palette: white surfaces, black line glyphs,
> green-blue primary gradient, purple-indigo AI accents. Minimal flat-3D SaaS style, soft
> shadows, no text, no faces, precise and orderly, 16:10 landscape. --ar 16:10

## 9. Smart Waste Coordination App

> A clean modern civic-tech mobile illustration on a pure white background with a faint gray
> grid. Center: two overlapping frosted-glass smartphone mockups with thin white borders. The
> front phone shows a minimal map view with a winding route line connecting three circular
> waypoint pins — one house glyph, one truck glyph, one recycling-bin glyph — with a small
> moving-truck marker mid-route glowing softly green. The back phone shows a simple operations
> dashboard: a bar chart and two status rows with green and orange indicator dots. Around the
> phones, three small floating glass badges: a recycling-arrows triangle, a map-pin, and a
> bell-notification glyph. Color palette: white and glass surfaces, black glyphs, green primary
> accent (#4caf50), blue secondary (#2196f3), one orange status dot. Minimal flat-3D SaaS
> style, soft studio lighting, gentle shadows, no text, no faces, 16:10 landscape. --ar 16:10

---

### Consistency checklist (apply to every generation)

1. Background must stay pure white with the faint gray grid — reject renders with colored or
   dark backgrounds.
2. Glass panels: translucent white, thin light border, soft shadow — never dark smoked glass.
3. At most two gradient accent families per image (purple-indigo #673ab7→#3f51b5,
   green-blue #4caf50→#2196f3, orange-red #ff9800→#f44336 for the auction only).
4. No readable text in the artwork (generated text always looks wrong at 280px).
5. Same camera feel across the set: straight-on or gentle isometric, generous negative space.
6. Regenerate any image that draws real human faces — silhouettes and avatar circles only.
