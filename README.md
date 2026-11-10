# Music Tools

Browser tools for playing, practicing and writing music, kept in one repository and deployed as one Vercel project. Each tool lives in its own folder, and the folder name is its URL path.

| Group | Tool | Path | Notes |
|---|---|---|---|
| Play | Grand | `/grand/` | Concert piano with a metronome. Single HTML file. |
| Play | MIDI Bloom (beta) | `/midi-bloom/` | MIDI-driven visualizer and synth. Single HTML file. Needs WebGL2; MIDI input needs Chrome or Edge. |
| Practice | Chord Loop | external link | Lives in Jazz Interactive at `jazzinteractive.org/07-practice-tools.html`. The hub links to it; the code stays in `mopajazz/jazz`. |
| Practice | Jazz Ear Trainer | `/ear-trainer/` | React app, built with Vite. |
| Write | Syncopate | `/syncopate/` | ABC notation lab. Static files; loads abcjs from a CDN. |

`index.html` at the root is the hub page that links to all of them.

## Build and deploy

```bash
npm install
```

```bash
npm run build
```

The build copies the hub and the static tools into `dist/` and builds the ear trainer into `dist/ear-trainer/`. `vercel.json` tells Vercel to run that build and serve `dist/`, so importing this repository into Vercel needs no extra settings.

To work on the ear trainer with live reload:

```bash
npm run dev:ear-trainer
```

## Adding a tool

1. Put it in a new folder with an `index.html`.
2. Add the folder name to `STATIC` in `scripts/build.mjs` (skip this if it has its own build step, and add that step instead).
3. Add a card for it in the root `index.html`.

## Where each tool came from

- Grand: `mopajazz/Grand-Piano`
- Syncopate: `mopajazz/ABCjs-webapp`
- Jazz Ear Trainer: `mopajazz/jazzear-trainer`
- MIDI Bloom: a local file, added here for the first time
