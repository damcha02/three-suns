# Three Suns: Chaotic Dawn

Protect an Earth-like civilization planet from three unstable suns by spending scarce Signal on temporary gravity anchors before fire, cold, or hidden orbital math ends the dawn.

`Three Suns: Chaotic Dawn` is a lightweight Vibe Jam 2026 browser survival game built with Vite, Three.js, plain JavaScript, and CSS. It starts instantly, uses procedural visuals and tiny optional Web Audio sounds, and stores the best survived day in `localStorage`.

## Controls

- Click or tap to place a temporary gravity anchor.
- Up to three anchors can exist at once.
- Press Space / FOCUS to slow time briefly.
- Press 1 for Shield, 2 for Sleep, and 3 for Observe.
- Press Esc to pause or resume.
- Press R to restart after death or from pause.
- Press M to mute or unmute.
- Press P to toggle LOW FX mode.
- On mobile, use the Focus, Shield, Sleep, Observe, and Pause buttons.
- Use the small Vibe Jam badge or in-world edge portal to leave through the 2026 portal network.

## Gameplay

- **Direct contact with any sun is always fatal.** No mode or anchor prevents instant death on collision.
- Modes reduce nearby **aura damage** (the danger field around each sun), not collision damage.
- Shield mode reduces solar aura heat damage and slows heat danger buildup, but makes cold worse.
- Sleep mode reduces deep cold damage, regenerates Signal faster, and slows freeze danger buildup, but makes chaos worse.
- Observe mode gives clearer omens, lowers anchor Signal cost, and improves anchor control, but reduces all aura protection.
- Gravity anchors cost Signal, and Signal regenerates faster during stable play.
- Omens stay mysterious in normal modes and become more actionable in Observe mode.
- Difficulty is forgiving during the first seconds, stressful after day 60, and brutal after day 100.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment Notes

- Vercel: import the repo, keep the default Vite settings, use `npm run build`, and publish `dist`.
- Cloudflare Pages: set build command to `npm run build` and output directory to `dist`.
- The game does not need server state, login, or environment variables.
- URLs with `?portal=true` still start instantly with no menu or loading screen.

## Portal Support

- The optional Vibe Jam portal sample is loaded and guarded so the game still runs if it fails.
- `initVibeJamPortals({ scene, getPlayer, spawnPoint, exitPosition })` is called after the Three.js scene and player planet exist.
- `animateVibeJamPortals()` is called only when present.
- A custom small in-world Vibe Jam trigger redirects to `https://vibej.am/portal/2026` with reasonable continuity params and `ref` set to the current game URL.

## Vibe Jam Compliance Checklist

- Required widget is included exactly in `index.html`: `<script async src="https://vibej.am/2026/widget.js"></script>`.
- Optional Vibe Jam portal sample is included in `index.html`: `<script src="https://vibej.am/2026/portal/sample.js"></script>`.
- Portal integration calls `initVibeJamPortals({ scene, getPlayer, spawnPoint, exitPosition })` after the Three.js scene and player planet exist.
- `animateVibeJamPortals()` is called safely inside the animation loop when available.
- No loading screen, login, signup, external art assets, or external audio assets.
- Procedural visuals only.
- Plain JavaScript, CSS, Vite, and Three.js.
- Original setting and terminology.

## Gameplay Notes

- Difficulty starts forgiving with a short grace period, becomes stressful after day 60, and becomes brutal after day 100.
- Omens hint at heat, cold, instability, collapse, and stable windows without exposing formulas.
- Cinematic full-screen death overlay includes days survived, cause, high score, next-game routing, and a clipboard share message.

## Submission Description

Three unstable suns circle a fragile world. Spend Signal carefully, switch civilization survival modes, read impossible omens, and survive as many days as possible before the dawn learns your orbit.
