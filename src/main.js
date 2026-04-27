import './style.css';
import * as THREE from 'three';

window.THREE = {
  Box3: THREE.Box3,
  BufferAttribute: THREE.BufferAttribute,
  BufferGeometry: THREE.BufferGeometry,
  CanvasTexture: THREE.CanvasTexture,
  CircleGeometry: THREE.CircleGeometry,
  DoubleSide: THREE.DoubleSide,
  Group: THREE.Group,
  Mesh: THREE.Mesh,
  MeshBasicMaterial: THREE.MeshBasicMaterial,
  MeshPhongMaterial: THREE.MeshPhongMaterial,
  PlaneGeometry: THREE.PlaneGeometry,
  Points: THREE.Points,
  PointsMaterial: THREE.PointsMaterial,
  TorusGeometry: THREE.TorusGeometry,
  Vector3: THREE.Vector3,
};

const canvas = document.querySelector('#game-canvas');
const daysEl = document.querySelector('#days');
const stabilityEl = document.querySelector('#stability');
const highScoreEl = document.querySelector('#high-score');
const warningsEl = document.querySelector('#warnings');
const heatMeter = document.querySelector('#heat-meter');
const coldMeter = document.querySelector('#cold-meter');
const chaosMeter = document.querySelector('#chaos-meter');
const signalMeter = document.querySelector('#signal-meter');
const hintLine = document.querySelector('#hint-line');
const toastLine = document.querySelector('#toast-line');
const modeReadout = document.querySelector('#mode-readout');
const modeName = document.querySelector('#mode-name');
const modeEffect = document.querySelector('#mode-effect');
const focusStatus = document.querySelector('#focus-status');
const deathScreen = document.querySelector('#death-screen');
const deathTitle = document.querySelector('#death-title');
const deathStats = document.querySelector('#death-stats');
const deathMessage = document.querySelector('#death-message');
const deathHighScore = document.querySelector('#death-high-score');
const restartButton = document.querySelector('#restart-button');
const nextButton = document.querySelector('#next-button');
const shareButton = document.querySelector('#share-button');
const shareStatus = document.querySelector('#share-status');
const pauseMenu = document.querySelector('#pause-menu');
const resumeButton = document.querySelector('#resume-button');
const pauseRestartButton = document.querySelector('#pause-restart-button');
const muteButton = document.querySelector('#mute-button');
const pauseNextButton = document.querySelector('#pause-next-button');
const pauseCopyButton = document.querySelector('#pause-copy-button');
const controlsButton = document.querySelector('#controls-button');
const controlsText = document.querySelector('#controls-text');
const portalBadge = document.querySelector('#portal-badge');
const infoScreen = document.querySelector('#info-screen');
const storyScreen = document.querySelector('#story-screen');
const modeButtons = [...document.querySelectorAll('[data-mode]')];
const actionButtons = [...document.querySelectorAll('[data-action]')];

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x02030a, 1);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x02030a, 0.018);

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 220);
camera.position.set(0, 0, 46);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const playPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
const worldPoint = new THREE.Vector3();
const clock = new THREE.Clock();

const DAY_SECONDS = 1.5;
const MAX_DT = 0.033;
const ANCHOR_LIFE = 2.5;
const MAX_ANCHORS = 3;
const FOCUS_TIME = 1.15;
const FOCUS_COOLDOWN = 8;
const START_GRACE = 3;
const MAX_SIGNAL = 100;
const ANCHOR_SIGNAL_COST = 28;
const PLANET_RADIUS = 0.6;
const DEBUG_DEATH_CAUSE = false;

const portalParams = new URLSearchParams(window.location.search);
const arrivedViaPortal = portalParams.get('portal') === 'true' || portalParams.get('portal') === '1';
const continuityKeys = ['username', 'color', 'speed', 'hp', 'team', 'avatar_url', 'speed_x', 'speed_y', 'speed_z', 'rotation_x', 'rotation_y', 'rotation_z'];
const portalContinuity = Object.fromEntries(continuityKeys.flatMap((key) => portalParams.has(key) ? [[key, portalParams.get(key)]] : []));
const spawnPoint = { x: -24, y: 12, z: 0 };
const exitPosition = { x: 90, y: -50, z: 0 };
const customExitPosition = new THREE.Vector3(18.4, -12.2, 0);

const modes = {
  shield: {
    label: 'SHIELD', toast: 'SHIELD MODE', effect: 'SHIELD: solar aura resistance ↑ cold risk ↑',
    heatDamage: 0.35, heatBuildup: 0.5, coldDamage: 1.25, coldBuildup: 1.25, chaosDamage: 1, chaosBuildup: 1,
    regen: 1, anchorCost: 1, anchorPull: 1, color: 0xffd36a,
  },
  hibernation: {
    label: 'SLEEP', toast: 'SLEEP MODE', effect: 'SLEEP: deep cold resistance ↑ signal regen ↑ chaos risk ↑',
    heatDamage: 1, heatBuildup: 1, coldDamage: 0.35, coldBuildup: 0.5, chaosDamage: 1.25, chaosBuildup: 1.25,
    regen: 1.35, anchorCost: 1, anchorPull: 1, color: 0x9ee7ff,
  },
  observatory: {
    label: 'OBSERVE', toast: 'OBSERVATORY MODE', effect: 'OBSERVE: clearer omens ↑ anchor cost ↓ aura protection ↓',
    heatDamage: 1.15, heatBuildup: 1.15, coldDamage: 1.15, coldBuildup: 1.15, chaosDamage: 1.15, chaosBuildup: 1.15,
    regen: 1, anchorCost: 0.75, anchorPull: 1.12, color: 0xffffff,
  },
};

const hintTexts = [
  'Click/tap to place gravity anchors',
  'Signal limits anchors',
  'Switch modes: 1 Shield, 2 Sleep, 3 Observe',
  'Space / FOCUS slows the dawn',
  'Touching a sun is fatal — modes only reduce aura damage',
];

if (portalContinuity.username) window.selfUsername = portalContinuity.username;
if (portalContinuity.speed) window.currentSpeed = Number.parseFloat(portalContinuity.speed) || undefined;

const colors = {
  red: new THREE.Color(0xff324f),
  blue: new THREE.Color(0xb9efff),
  gold: new THREE.Color(0xffc44d),
  violet: new THREE.Color(0xb377ff),
};

let state;
let audio;
let muted = false;
let highQuality = true;

function makeCircleTexture(color, soft = true) {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 2, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, color);
  gradient.addColorStop(soft ? 0.36 : 0.55, color);
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(c);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makePlanetTexture(kind = 'surface') {
  const size = 256;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  ctx.fillStyle = kind === 'clouds' ? 'rgba(0,0,0,0)' : '#123f73';
  ctx.fillRect(0, 0, size, size);

  if (kind === 'clouds') {
    for (let i = 0; i < 120; i += 1) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const w = 18 + Math.random() * 46;
      const h = 2 + Math.random() * 7;
      ctx.fillStyle = `rgba(255,255,255,${0.05 + Math.random() * 0.11})`;
      ctx.beginPath();
      ctx.ellipse(x, y, w, h, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
    const ocean = ctx.createLinearGradient(0, 0, size, size);
    ocean.addColorStop(0, '#1b6fa8');
    ocean.addColorStop(0.55, '#113c76');
    ocean.addColorStop(1, '#081a3f');
    ctx.fillStyle = ocean;
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 34; i += 1) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const radius = 10 + Math.random() * 24;
      ctx.fillStyle = Math.random() > 0.35 ? '#2d7742' : '#8b7045';
      ctx.beginPath();
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
        const r = radius * (0.62 + Math.random() * 0.68);
        const px = x + Math.cos(a) * r;
        const py = y + Math.sin(a) * r * (0.45 + Math.random() * 0.6);
        if (a === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.globalAlpha = 0.58;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    for (let i = 0; i < 80; i += 1) {
      ctx.fillStyle = 'rgba(255,226,142,0.55)';
      ctx.fillRect(Math.random() * size, Math.random() * size, 1, 1);
    }
  }

  const texture = new THREE.CanvasTexture(c);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const particleTexture = makeCircleTexture('rgba(255,255,255,1)');
const planetTexture = makePlanetTexture('surface');
const cloudTexture = makePlanetTexture('clouds');

function makeSprite(color, size, opacity = 1) {
  const material = new THREE.SpriteMaterial({
    map: particleTexture,
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(size, size, 1);
  return sprite;
}

function makeTextSprite(text, color = '#d7c4ff') {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 128;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = color;
  ctx.font = '700 34px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(179, 119, 255, 0.8)';
  ctx.shadowBlur = 18;
  ctx.fillText(text, c.width / 2, 72);
  const texture = new THREE.CanvasTexture(c);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.72, depthWrite: false });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(8, 2, 1);
  return sprite;
}

function makeSun(def) {
  const { id, name, color, size, phase, heat, pull, deathCause, dangerType } = def;
  const group = new THREE.Group();
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(size, 32, 24),
    new THREE.MeshBasicMaterial({ color })
  );
  const glow = makeSprite(color, size * 5, 0.35);
  const light = new THREE.PointLight(color, 2.3, 60, 1.45);
  group.add(glow, core, light);

  const rings = [];
  const ringMaterial = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false });
  for (let i = 0; i < 3; i += 1) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(1, 1.025, 96), ringMaterial.clone());
    ring.userData.offset = i / 3;
    group.add(ring);
    rings.push(ring);
  }

  const visualRadius = size;
  const killRadius = visualRadius + Math.max(PLANET_RADIUS * 0.75, 1.0);
  const dangerRadius = killRadius * 1.65;

  const killRing = new THREE.Mesh(
    new THREE.RingGeometry(killRadius - 0.06, killRadius, 72),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false })
  );
  const dangerRing = new THREE.Mesh(
    new THREE.RingGeometry(dangerRadius - 0.06, dangerRadius, 72),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.06, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false })
  );
  group.add(killRing, dangerRing);

  scene.add(group);
  return {
    id, name, color,
    size, visualRadius, killRadius, dangerRadius,
    phase, heat, pull,
    deathCause, dangerType,
    group, core, glow, rings, killRing, dangerRing,
    pos: new THREE.Vector3(),
    worldPos: new THREE.Vector3(),
    lastDistance: Infinity,
  };
}

function makeTrail(capacity, color, size) {
  const positions = new Float32Array(capacity * 3);
  const colorsArray = new Float32Array(capacity * 3);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
  const material = new THREE.PointsMaterial({ size, vertexColors: true, transparent: true, opacity: 0.72, blending: THREE.AdditiveBlending, depthWrite: false });
  const points = new THREE.Points(geometry, material);
  scene.add(points);
  return { capacity, index: 0, color: new THREE.Color(color), geometry, positions, colorsArray, points };
}

function pushTrail(trail, pos, strength = 1) {
  const i = trail.index % trail.capacity;
  trail.positions[i * 3] = pos.x;
  trail.positions[i * 3 + 1] = pos.y;
  trail.positions[i * 3 + 2] = pos.z;
  const fade = THREE.MathUtils.clamp(strength, 0.08, 1);
  trail.colorsArray[i * 3] = trail.color.r * fade;
  trail.colorsArray[i * 3 + 1] = trail.color.g * fade;
  trail.colorsArray[i * 3 + 2] = trail.color.b * fade;
  trail.index += 1;
  trail.geometry.attributes.position.needsUpdate = true;
  trail.geometry.attributes.color.needsUpdate = true;
}

function fadeTrail(trail, amount) {
  for (let i = 0; i < trail.colorsArray.length; i += 1) {
    trail.colorsArray[i] *= amount;
  }
  trail.geometry.attributes.color.needsUpdate = true;
}

function makeStarLayer(count, size, opacity, depth, spreadX = 112, spreadY = 70) {
  const points = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({ color: 0xd9dcff, size, transparent: true, opacity, depthWrite: false })
  );
  const starPositions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    starPositions[i * 3] = (Math.random() - 0.5) * spreadX;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
    starPositions[i * 3 + 2] = depth - Math.random() * 22;
  }
  points.geometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  scene.add(points);
  return points;
}

const starLayers = [
  makeStarLayer(320, 0.045, 0.54, -46),
  makeStarLayer(240, 0.075, 0.44, -34, 96, 62),
  makeStarLayer(90, 0.12, 0.34, -24, 74, 48),
];
const stars = starLayers[0];

const nebulaTexture = makeCircleTexture('rgba(119,68,180,1)');
const nebulaGroup = new THREE.Group();
for (let i = 0; i < 3; i += 1) {
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: nebulaTexture,
    color: i === 1 ? 0x27586a : 0x4c2a72,
    transparent: true,
    opacity: i === 2 ? 0.04 : 0.065,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }));
  sprite.position.set((i - 1) * 22, i === 1 ? -9 : 7, -42 - i * 4);
  sprite.scale.set(42 + i * 16, 24 + i * 7, 1);
  nebulaGroup.add(sprite);
}
scene.add(nebulaGroup);

const ambient = new THREE.AmbientLight(0x6e75aa, 0.34);
scene.add(ambient);

const SUN_DEFS = [
  { id: 'alpha', name: 'red', color: colors.red, size: 1.55, phase: 0.2, heat: 1.22, pull: 13.2, deathCause: 'burned', dangerType: 'heat' },
  { id: 'beta', name: 'blue', color: colors.blue, size: 1.25, phase: 2.5, heat: 0.72, pull: 10.8, deathCause: 'frozen', dangerType: 'cold' },
  { id: 'gamma', name: 'gold', color: colors.gold, size: 1.42, phase: 4.1, heat: 1.0, pull: 12.2, deathCause: 'scattered', dangerType: 'chaos' },
];
const suns = SUN_DEFS.map(makeSun);

const planet = new THREE.Group();
const planetCore = new THREE.Mesh(
  new THREE.SphereGeometry(0.58, 32, 18),
  new THREE.MeshStandardMaterial({ map: planetTexture, color: 0xffffff, roughness: 0.72, metalness: 0.02, emissive: 0x071629, emissiveIntensity: 0.46 })
);
const cloudLayer = new THREE.Mesh(
  new THREE.SphereGeometry(0.596, 32, 18),
  new THREE.MeshBasicMaterial({ map: cloudTexture, transparent: true, opacity: 0.42, blending: THREE.AdditiveBlending, depthWrite: false })
);
const civRing = new THREE.Mesh(
  new THREE.TorusGeometry(0.86, 0.024, 8, 96),
  new THREE.MeshBasicMaterial({ color: 0x9fffd4, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending })
);
civRing.rotation.x = Math.PI / 2.45;
const civGlow = makeSprite(0x8cffd6, 2.8, 0.22);
const atmosphere = makeSprite(0x87cfff, 2.15, 0.18);
const shieldRing = new THREE.Mesh(
  new THREE.TorusGeometry(1.04, 0.018, 8, 96),
  new THREE.MeshBasicMaterial({ color: 0xffd36a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
);
shieldRing.rotation.x = Math.PI / 2.2;
const hibernationShell = makeSprite(0x9ee7ff, 2.35, 0);
const observatoryArc = new THREE.Mesh(
  new THREE.RingGeometry(1.08, 1.1, 72, 1, 0, Math.PI * 1.35),
  new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
);
observatoryArc.rotation.x = Math.PI / 2.55;
const heatCracks = new THREE.Mesh(
  new THREE.RingGeometry(0.64, 0.67, 9),
  new THREE.MeshBasicMaterial({ color: 0xff6b2e, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, wireframe: true })
);
heatCracks.rotation.x = Math.PI / 2.7;
const frostTint = makeSprite(0x9ee7ff, 2.0, 0);
const chaosRing = new THREE.Mesh(
  new THREE.TorusGeometry(1.16, 0.012, 8, 96),
  new THREE.MeshBasicMaterial({ color: 0xd8b8ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending })
);
chaosRing.rotation.x = Math.PI / 2.05;
planet.add(planetCore, cloudLayer, civRing, civGlow, atmosphere, shieldRing, hibernationShell, observatoryArc, heatCracks, frostTint, chaosRing);
scene.add(planet);

if (portalContinuity.color) {
  try {
    const incomingColor = new THREE.Color(portalContinuity.color);
    planetCore.material.color.lerp(incomingColor, 0.45);
    civRing.material.color.copy(incomingColor);
    civGlow.material.color.copy(incomingColor);
  } catch {
    // Portal color params are optional and may not be valid CSS colors.
  }
}

const omenGroup = new THREE.Group();
scene.add(omenGroup);

const anchorGroup = new THREE.Group();
scene.add(anchorGroup);

const feedbackGroup = new THREE.Group();
scene.add(feedbackGroup);

const portalGuide = new THREE.Group();
portalGuide.position.copy(customExitPosition);
const portalGuideRing = new THREE.Mesh(
  new THREE.RingGeometry(0.55, 0.62, 48),
  new THREE.MeshBasicMaterial({ color: 0x59ffbf, transparent: true, opacity: 0.34, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
);
portalGuideRing.rotation.x = Math.PI / 2;
const portalGuideLabel = makeTextSprite('VIBE JAM', '#9fffd4');
portalGuideLabel.position.set(0, 1.1, 0);
portalGuideLabel.scale.set(3.2, 0.8, 1);
portalGuide.add(portalGuideRing, portalGuideLabel, makeSprite(0x59ffbf, 1.45, 0.12));
scene.add(portalGuide);

const nearMissEffects = [];
const focusRings = [];
for (let i = 0; i < 3; i += 1) {
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.62, 0.65, 96),
    new THREE.MeshBasicMaterial({ color: colors.violet, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
  );
  ring.rotation.x = Math.PI / 2;
  ring.visible = false;
  feedbackGroup.add(ring);
  focusRings.push({ ring, age: 99, delay: i * 0.15 });
}

const sunTrails = suns.map((sun) => makeTrail(170, sun.color, 0.12));
const planetTrail = makeTrail(220, 0x9fffd4, 0.1);

function makeAnchor(pos) {
  const group = new THREE.Group();
  group.position.copy(pos);
  const well = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.46, 48), new THREE.MeshBasicMaterial({ color: colors.violet, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
  const halo = new THREE.Mesh(new THREE.RingGeometry(0.86, 0.88, 48), new THREE.MeshBasicMaterial({ color: colors.violet, transparent: true, opacity: 0.26, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
  const arms = new THREE.LineSegments(
    new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-1.02, 0, 0), new THREE.Vector3(-0.55, 0, 0),
      new THREE.Vector3(0.55, 0, 0), new THREE.Vector3(1.02, 0, 0),
      new THREE.Vector3(0, -1.02, 0), new THREE.Vector3(0, -0.55, 0),
      new THREE.Vector3(0, 0.55, 0), new THREE.Vector3(0, 1.02, 0),
    ]),
    new THREE.LineBasicMaterial({ color: colors.violet, transparent: true, opacity: 0.42, blending: THREE.AdditiveBlending })
  );
  well.rotation.x = Math.PI / 2;
  halo.rotation.x = Math.PI / 2;
  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([pos, pos]),
    new THREE.LineBasicMaterial({ color: colors.violet, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending })
  );
  group.add(well, halo, arms, makeSprite(0x7d41ff, 1.8, 0.12));
  anchorGroup.add(group);
  anchorGroup.add(line);
  return { pos: pos.clone(), age: 0, group, well, halo, arms, line };
}

function createAudio() {
  if (audio || !window.AudioContext && !window.webkitAudioContext) return audio;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  try {
    const ctx = new AudioContext();
    const master = ctx.createGain();
    master.gain.value = 0.045;
    master.connect(ctx.destination);
    audio = { ctx, master };
  } catch {
    audio = null;
  }
  return audio;
}

function blip(freq, duration = 0.09, type = 'sine', gain = 0.8) {
  if (state?.muted) return;
  const a = createAudio();
  if (!a) return;
  if (a.ctx.state === 'suspended') a.ctx.resume().catch(() => {});
  const osc = a.ctx.createOscillator();
  const g = a.ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, a.ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * 0.55), a.ctx.currentTime + duration);
  g.gain.setValueAtTime(0, a.ctx.currentTime);
  g.gain.linearRampToValueAtTime(gain, a.ctx.currentTime + 0.012);
  g.gain.exponentialRampToValueAtTime(0.001, a.ctx.currentTime + duration);
  osc.connect(g).connect(a.master);
  osc.start();
  osc.stop(a.ctx.currentTime + duration + 0.02);
}

function playCue(name) {
  if (name === 'anchor') blip(440, 0.11, 'triangle', 0.75);
  else if (name === 'danger') blip(210, 0.16, 'square', 0.42);
  else if (name === 'nearMiss') blip(760, 0.12, 'sine', 0.55);
  else if (name === 'death') blip(state?.deathCause === 'frozen' ? 90 : 70, 0.55, 'sawtooth', 0.6);
  else if (name === 'highScore') {
    blip(520, 0.08, 'triangle', 0.45);
    window.setTimeout(() => blip(780, 0.12, 'sine', 0.42), 90);
  }
}

function initPortals() {
  planet.userData.portalContinuity = portalContinuity;
  if (!window.initVibeJamPortals) return;
  try {
    window.initVibeJamPortals({
      scene,
      getPlayer: () => planet,
      spawnPoint,
      exitPosition,
    });
    window.setTimeout(tameSamplePortals, 0);
  } catch (error) {
    console.warn('[Three Suns] Vibe Jam portal init skipped:', error);
  }
}

function tameSamplePortals() {
  scene.traverse((object) => {
    if (!object.isGroup || object.userData.threeSunsTamed) return;
    const hasSampleTorus = object.children.some((child) => child.geometry?.type === 'TorusGeometry' && child.geometry.parameters?.radius === 15);
    if (!hasSampleTorus) return;
    object.userData.threeSunsTamed = true;
    object.scale.setScalar(0.08);
    object.children.forEach((child) => {
      if (child.material) child.material.opacity = Math.min(child.material.opacity ?? 0.5, 0.34);
    });
  });
}

function buildPortalUrl() {
  const params = new URLSearchParams(window.location.search);
  continuityKeys.forEach((key) => {
    if (!params.has(key) && portalContinuity[key]) params.set(key, portalContinuity[key]);
  });
  params.set('portal', 'true');
  params.set('ref', `${window.location.origin}${window.location.pathname}`);
  params.set('speed', String(window.currentSpeed || 1));
  params.set('hp', String(Math.ceil(state?.stability ?? 100)));
  params.set('speed_x', String(Number(state?.planetVel?.x || 0).toFixed(2)));
  params.set('speed_y', String(Number(state?.planetVel?.y || 0).toFixed(2)));
  params.set('speed_z', '0');
  params.set('rotation_x', String(Number(planet.rotation.x).toFixed(2)));
  params.set('rotation_y', String(Number(planet.rotation.y).toFixed(2)));
  params.set('rotation_z', String(Number(planet.rotation.z).toFixed(2)));
  return `https://vibej.am/portal/2026?${params.toString()}`;
}

function nextGame() {
  window.location.href = buildPortalUrl();
}

function portalNumber(key, fallback) {
  const value = Number.parseFloat(portalParams.get(key));
  return Number.isFinite(value) ? value : fallback;
}

function resetGame() {
  const incomingSpeed = THREE.MathUtils.clamp(portalNumber('speed', 1), 0.4, 3.2);
  const portalKick = arrivedViaPortal
    ? new THREE.Vector3(
        THREE.MathUtils.clamp(portalNumber('speed_x', 0.7 * incomingSpeed), -2.8, 2.8),
        THREE.MathUtils.clamp(portalNumber('speed_y', 0.25 * incomingSpeed), -2.8, 2.8),
        0
      )
    : new THREE.Vector3(2.2, 1.08, 0);
  state = {
    time: 0,
    days: 0,
    difficulty: 0.88,
    stability: THREE.MathUtils.clamp(portalNumber('hp', 100), 35, 100),
    signal: MAX_SIGNAL,
    mode: 'shield',
    paused: false,
    muted,
    highQuality,
    dead: false,
    deathCause: '',
    deathWasHighScore: false,
    focus: 0,
    focusCooldown: 0,
    shake: 0,
    grace: START_GRACE,
    lastDangerCue: -99,
    lastNearMiss: -99,
    lastModeBlock: -99,
    nearMissArmed: false,
    prevNearest: Infinity,
    flashOmen: '',
    flashOmenUntil: 0,
    toast: '',
    toastUntil: 0,
    critical: { burned: 0, frozen: 0, scattered: 0, collapse: 0 },
    lastThreat: { burn: 0, cold: 0, chaos: 0, safe: true },
    anchors: [],
    planetPos: arrivedViaPortal ? new THREE.Vector3(-3.8, 2.8, 0) : new THREE.Vector3(0.2, -1.1, 0),
    planetVel: portalKick,
  };
  planet.rotation.set(
    portalNumber('rotation_x', 0),
    portalNumber('rotation_y', 0),
    portalNumber('rotation_z', 0)
  );
  for (const child of [...anchorGroup.children]) anchorGroup.remove(child);
  for (const trail of [...sunTrails, planetTrail]) {
    trail.positions.fill(0);
    trail.colorsArray.fill(0);
    trail.geometry.attributes.position.needsUpdate = true;
    trail.geometry.attributes.color.needsUpdate = true;
    trail.index = 0;
  }
  for (const effect of [...nearMissEffects]) feedbackGroup.remove(effect.mesh);
  nearMissEffects.length = 0;
  deathScreen.classList.add('hidden');
  deathScreen.removeAttribute('data-cause');
  pauseMenu.classList.add('hidden');
  infoScreen.classList.add('hidden');
  storyScreen.classList.add('hidden');
  shareStatus.textContent = '';
  highScoreEl.textContent = String(getHighScore());
  setMode(state.mode);
  updateHud(0, 0, 0, ['omens quiet']);
}

function getHighScore() {
  return Number.parseInt(localStorage.getItem('three-suns-high-score') || '0', 10) || 0;
}

function setHighScore(days) {
  if (days > getHighScore()) localStorage.setItem('three-suns-high-score', String(days));
  highScoreEl.textContent = String(getHighScore());
}

function setMode(mode) {
  if (!modes[mode] || !state) return;
  state.mode = mode;
  document.body.classList.remove('mode-shield', 'mode-hibernation', 'mode-observatory');
  document.body.classList.add(`mode-${mode}`);
  modeReadout.textContent = modes[mode].label;
  modeName.textContent = `MODE: ${modes[mode].label}`;
  modeEffect.textContent = modes[mode].effect;
  modeButtons.forEach((button) => button.classList.toggle('active', button.dataset.mode === mode));
  showToast(modes[mode].toast, 1.1);
  pulsePlanet(modes[mode].color, 0.75);
  state.flashOmen = makeWarnings(state.lastThreat.burn, state.lastThreat.cold, state.lastThreat.chaos, state.lastThreat.nearest || Infinity, state.lastThreat.speed || 0)[0];
  state.flashOmenUntil = state.mode === 'observatory' ? state.time + 0.15 : state.time;
}

function showToast(text, duration = 0.9) {
  if (!state) return;
  state.toast = text;
  state.toastUntil = state.time + duration;
  toastLine.textContent = text;
  toastLine.classList.add('visible');
}

function pulsePlanet(color, duration = 0.7) {
  focusRings.forEach((item) => {
    item.age = -item.delay;
    item.ring.visible = true;
    item.ring.position.copy(state.planetPos);
    item.ring.material.color.setHex(color);
    item.duration = duration;
  });
}

function togglePause(force) {
  if (!state || state.dead) return;
  state.paused = typeof force === 'boolean' ? force : !state.paused;
  pauseMenu.classList.toggle('hidden', !state.paused);
}

function openInfoScreen() {
  if (!state) return;
  storyScreen.classList.add('hidden');
  pauseMenu.classList.add('hidden');
  infoScreen.classList.remove('hidden');
  if (!state.dead) state.paused = true;
}

function openStoryScreen() {
  if (!state) return;
  infoScreen.classList.add('hidden');
  pauseMenu.classList.add('hidden');
  storyScreen.classList.remove('hidden');
  if (!state.dead) state.paused = true;
}

function closeOverlays() {
  infoScreen.classList.add('hidden');
  storyScreen.classList.add('hidden');
  if (state && !state.dead) state.paused = false;
}

function toggleMute() {
  muted = !muted;
  if (state) state.muted = muted;
  muteButton.textContent = muted ? 'Unmute' : 'Mute';
}

function toggleQuality() {
  highQuality = !highQuality;
  if (state) state.highQuality = highQuality;
  renderer.setPixelRatio(highQuality ? Math.min(window.devicePixelRatio, 2) : 1);
  nebulaGroup.visible = highQuality;
  sunTrails.forEach((trail) => { trail.points.visible = highQuality; });
  planetTrail.points.material.opacity = highQuality ? 0.72 : 0.38;
  starLayers[2].visible = highQuality;
  showToast(highQuality ? 'LOW FX OFF' : 'LOW FX ON', 1);
}

function updateSunPositions(t) {
  const diff = state?.difficulty || 1;
  suns.forEach((sun, i) => {
    const p = sun.phase;
    const wobble = Math.sin(t * (0.51 + i * 0.07) + p * 2.1) * 1.9 + Math.sin(t * 0.17 + i) * 1.1;
    const rx = 9.6 + i * 2.5 + Math.sin(t * 0.11 + p) * 2.2;
    const ry = 6.3 + i * 1.5 + Math.cos(t * 0.13 + p) * 1.4;
    const a = t * (0.32 + i * 0.045 + diff * 0.012) + p + Math.sin(t * 0.21 + p) * 0.9;
    sun.pos.set(
      Math.cos(a) * rx + Math.sin(t * 0.73 + p) * wobble,
      Math.sin(a * (1.17 + i * 0.08)) * ry + Math.cos(t * 0.49 + p) * 1.8,
      Math.sin(t * 0.37 + p) * 0.9
    );
    sun.group.position.copy(sun.pos);
    sun.core.rotation.y += 0.01 + i * 0.004;
    sun.glow.material.opacity = 0.28 + Math.sin(t * 2.2 + p) * 0.08;
    sun.rings.forEach((ring) => {
      const pulse = (t * (0.32 + i * 0.07 + diff * 0.025) + ring.userData.offset + Math.sin(t * 0.18 + p) * 0.08) % 1;
      const scale = sun.size * (2.4 + pulse * (6.8 + diff * 0.8));
      ring.scale.set(scale, scale, scale);
      ring.rotation.z = t * (0.1 + i * 0.03);
      ring.material.opacity = (1 - pulse) * (0.12 + diff * 0.035);
    });
    pushTrail(sunTrails[i], sun.pos, 0.75);
    sun.killRing.rotation.z = t * 0.22 + p;
    sun.killRing.material.opacity = 0.13 + Math.sin(t * 1.8 + p) * 0.05;
    sun.dangerRing.rotation.z = -(t * 0.1 + p);
    sun.dangerRing.material.opacity = 0.04 + Math.sin(t * 1.1 + p + 1.5) * 0.02;
  });
}

function placeAnchor(clientX, clientY) {
  if (state.dead || state.paused) return;
  createAudio();
  const mode = modes[state.mode];
  const anchorCost = ANCHOR_SIGNAL_COST * mode.anchorCost;
  if (state.signal < anchorCost) {
    state.flashOmen = 'SIGNAL TOO FAINT';
    state.flashOmenUntil = state.time + 0.75;
    playCue('danger');
    return;
  }
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  raycaster.ray.intersectPlane(playPlane, worldPoint);
  worldPoint.x = THREE.MathUtils.clamp(worldPoint.x, -20, 20);
  worldPoint.y = THREE.MathUtils.clamp(worldPoint.y, -13, 13);
  worldPoint.z = 0;
  if (state.anchors.length >= MAX_ANCHORS) {
    const old = state.anchors.shift();
    anchorGroup.remove(old.group);
    anchorGroup.remove(old.line);
  }
  state.signal = Math.max(0, state.signal - anchorCost);
  state.anchors.push(makeAnchor(worldPoint));
  state.flashOmen = 'ANCHOR SINGS BRIEFLY';
  state.flashOmenUntil = state.time + 0.75;
  playCue('anchor');
}

function triggerFocus() {
  if (state.dead || state.paused) return;
  if (state.focusCooldown > 0) {
    showToast('FOCUS RECHARGING', 0.8);
    return;
  }
  createAudio();
  state.focus = FOCUS_TIME;
  state.focusCooldown = FOCUS_COOLDOWN;
  state.flashOmen = 'TIME DILATED';
  state.flashOmenUntil = state.time + 1.1;
  showToast('FOCUS ACTIVE', 1.1);
  pulsePlanet(modes[state.mode].color, 0.85);
  blip(180, 0.34, 'sine', 0.9);
}

function advanceCritical(cause, condition, dt, limit) {
  state.critical[cause] = condition
    ? state.critical[cause] + dt
    : Math.max(0, state.critical[cause] - dt * 1.8);
  return state.critical[cause] >= limit;
}

function triggerNearMiss(pos) {
  state.lastNearMiss = state.time;
  state.flashOmen = 'NEAR MISS: THE SUN BLINKED FIRST';
  state.flashOmenUntil = state.time + 1.2;
  const mesh = new THREE.Mesh(
    new THREE.RingGeometry(0.9, 1.02, 72),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
  );
  mesh.position.copy(pos);
  mesh.rotation.x = Math.PI / 2;
  feedbackGroup.add(mesh);
  nearMissEffects.push({ mesh, age: 0 });
  playCue('nearMiss');
}

function updateNearMissEffects(dt) {
  for (let i = nearMissEffects.length - 1; i >= 0; i -= 1) {
    const effect = nearMissEffects[i];
    effect.age += dt;
    const life = 1 - effect.age / 0.7;
    effect.mesh.scale.setScalar(1 + effect.age * 5.8);
    effect.mesh.material.opacity = Math.max(0, life) * 0.72;
    if (effect.age >= 0.7) {
      feedbackGroup.remove(effect.mesh);
      nearMissEffects.splice(i, 1);
    }
  }
}

function updateFocusRings(dt) {
  focusRings.forEach((item) => {
    if (!item.ring.visible) return;
    item.age += dt;
    if (item.age < 0) return;
    const duration = item.duration || 0.85;
    const life = 1 - item.age / duration;
    item.ring.position.copy(state.planetPos);
    item.ring.scale.setScalar(1 + item.age * 4.4);
    item.ring.material.opacity = Math.max(0, life) * 0.58;
    if (item.age >= duration) {
      item.ring.visible = false;
      item.ring.material.opacity = 0;
    }
  });
}

const tempSunWorldPos = new THREE.Vector3();
const tempPlanetWorldPos = new THREE.Vector3();

function physicsStep(dt) {
  const pos = state.planetPos;
  const vel = state.planetVel;
  const accel = new THREE.Vector3();
  let nearest = Infinity;
  let nearestSun = null;
  let fatalCandidate = null;
  let fatalDistance = Infinity;
  let heat = 0;

  planet.position.copy(pos);
  planet.updateMatrixWorld();
  planet.getWorldPosition(tempPlanetWorldPos);

  for (const sun of suns) {
    sun.group.updateMatrixWorld();
    sun.group.getWorldPosition(tempSunWorldPos);
    sun.worldPos.copy(tempSunWorldPos);
    const toSun = tempSunWorldPos.clone().sub(tempPlanetWorldPos);
    const d = Math.max(toSun.length(), 0.0001);
    sun.lastDistance = d;
    if (d < nearest) {
      nearest = d;
      nearestSun = sun;
    }
    if (d <= sun.killRadius && d < fatalDistance) {
      fatalCandidate = sun;
      fatalDistance = d;
    }
    const d2 = Math.max(d * d, 4.8);
    heat += sun.heat / Math.max(0.55, d - sun.size * 0.38);
    const pull = THREE.MathUtils.clamp((sun.pull * state.difficulty) / d2, 0, 2.45);
    accel.addScaledVector(toSun.divideScalar(d), pull);
  }

  for (const anchor of state.anchors) {
    const age = anchor.age / ANCHOR_LIFE;
    const envelope = Math.sin((1 - age) * Math.PI * 0.5);
    const toAnchor = anchor.pos.clone().sub(pos);
    const d2 = Math.max(toAnchor.lengthSq(), 1.8);
    accel.addScaledVector(toAnchor.normalize(), THREE.MathUtils.clamp((10.4 * modes[state.mode].anchorPull * envelope) / d2, 0, 3.8));
  }

  const centerPull = pos.clone().multiplyScalar(-0.012 - Math.max(0, state.difficulty - 1.2) * 0.002);
  accel.add(centerPull);
  if (accel.length() > 5.2) accel.setLength(5.2);
  vel.addScaledVector(accel, dt);
  const maxSpeed = Math.min(16.5, 9.2 + state.difficulty * 2.2);
  if (vel.length() > maxSpeed) vel.setLength(maxSpeed);
  vel.multiplyScalar(0.9982);
  pos.addScaledVector(vel, dt);

  const speed = vel.length();
  const cold = THREE.MathUtils.smoothstep(nearest, 18, 29);
  const burn = THREE.MathUtils.smoothstep(heat, 0.88, 1.48);
  const chaos = THREE.MathUtils.smoothstep(speed, 7.2, 11.8) + Math.max(0, pos.length() - 20) * 0.032;
  const mode = modes[state.mode];
  const protectedBurn = burn * mode.heatDamage;
  const protectedCold = cold * mode.coldDamage;
  const protectedChaos = chaos * mode.chaosDamage;
  const burnBuildup = burn * mode.heatBuildup;
  const coldBuildup = cold * mode.coldBuildup;
  const chaosBuildup = chaos * mode.chaosBuildup;
  const safe = protectedBurn < 0.22 && protectedCold < 0.28 && protectedChaos < 0.34;
  const graceFactor = state.grace > 0 ? 0.18 : 1;
  const drain = (protectedBurn * 10.5 + protectedCold * 7.8 + protectedChaos * 9.2 + Math.max(0, state.difficulty - 1) * 0.45) * graceFactor;
  state.stability += (safe ? 3.4 : -drain) * dt;
  state.stability = THREE.MathUtils.clamp(state.stability, 0, 100);
  const signalRegen = (5.8 + (safe ? 6.6 : 1.5) + (state.stability > 72 ? 2.2 : 0)) * mode.regen;
  state.signal = THREE.MathUtils.clamp(state.signal + signalRegen * dt, 0, MAX_SIGNAL);
  state.lastThreat = { burn, cold, chaos, safe, nearest, speed };

  if (state.time - state.lastModeBlock > 1.25) {
    if (state.mode === 'shield' && burn > 0.5 && protectedBurn < burn * 0.55) {
      state.lastModeBlock = state.time;
      showToast('SOLAR AURA HELD', 0.75);
    } else if (state.mode === 'hibernation' && cold > 0.5 && protectedCold < cold * 0.55) {
      state.lastModeBlock = state.time;
      showToast('DEEP COLD HELD', 0.75);
    }
  }

  if (state.prevNearest < 3.45) state.nearMissArmed = true;
  if (state.nearMissArmed && nearest > 4.75 && nearest > state.prevNearest && state.time - state.lastNearMiss > 2.3) {
    state.nearMissArmed = false;
    triggerNearMiss(pos);
  }
  state.prevNearest = nearest;

  const realDanger = Math.max(protectedBurn, protectedChaos, protectedCold * 0.75);
  const inDangerRing = nearestSun ? nearestSun.lastDistance <= nearestSun.dangerRadius : false;
  if (state.grace <= 0 && (realDanger > 0.62 || inDangerRing)) {
    state.shake = Math.max(state.shake, (realDanger - 0.5) * 0.52);
    if (state.time - state.lastDangerCue > 3.2) {
      state.lastDangerCue = state.time;
      playCue('danger');
    }
  }

  const vulnerable = state.grace <= 0;
  const burnedFatal = advanceCritical('burned', vulnerable && burnBuildup > 0.94, dt, 0.5);
  const frozenFatal = advanceCritical('frozen', vulnerable && (nearest > 30.4 || coldBuildup > 0.96), dt, 1.05);
  const scatteredFatal = advanceCritical('scattered', vulnerable && (chaosBuildup > 1.02 || speed > 12.4 + state.difficulty * 0.8 || pos.length() > 31), dt, 0.72);
  const collapseFatal = advanceCritical('collapse', vulnerable && state.stability <= 0.5, dt, 0.45);

  let cause = null;
  if (vulnerable && fatalCandidate) cause = fatalCandidate.deathCause;
  else if (burnedFatal) cause = 'burned';
  else if (frozenFatal) cause = 'frozen';
  else if (scatteredFatal) cause = 'scattered';
  else if (collapseFatal) cause = 'collapse';

  if (DEBUG_DEATH_CAUSE) {
    if (state.time - (state.lastDebugLog || 0) > 0.5 || (cause && !state.dead)) {
      state.lastDebugLog = state.time;
      const activeDanger = burnBuildup >= coldBuildup && burnBuildup >= chaosBuildup
        ? 'heat'
        : coldBuildup >= chaosBuildup
          ? 'cold'
          : 'chaos';
      console.log('[death-debug]', {
        nearestSun: nearestSun?.id ?? null,
        nearestDistance: Number(nearest.toFixed(2)),
        activeDanger,
        fatalCandidate: fatalCandidate?.id ?? null,
        fatalCandidateCause: fatalCandidate?.deathCause ?? null,
        nextCause: cause,
        storedDeathCause: state.deathCause || null,
      });
    }
  }

  if (cause) kill(cause);

  updateHud(burn, cold, chaos, makeWarnings(burn, cold, chaos, nearest, speed));
}

function makeWarnings(burn, cold, chaos, nearest, speed) {
  if (state.flashOmen && state.time < state.flashOmenUntil) return [state.flashOmen];
  const messages = [];
  const observed = state.mode === 'observatory';
  if (state.grace > 0) messages.push('CIVILIZATION DREAMING');
  if (state.critical.burned > 0.18) messages.push('BURN WARNING: CLOUDS CURLING');
  else if (burn > 0.55 || nearest < 4.4) messages.push(observed ? 'RED SUN ASCENDING — HEAT RISK FROM ALPHA' : 'RED SUN ASCENDING');
  if (state.critical.frozen > 0.3) messages.push('FREEZE WARNING: LAST FIRES DIM');
  else if (cold > 0.5) messages.push(observed ? 'BLUE QUIET ERA — FREEZE RISK RISING' : 'BLUE QUIET ERA');
  if (state.critical.scattered > 0.22) messages.push('SCATTER WARNING: ORBITS TEARING');
  else if (chaos > 0.54 || speed > 9.2) messages.push(observed ? 'GRAVITY IS LYING — VELOCITY SPIKE SOON' : 'GRAVITY IS LYING');
  if (state.critical.collapse > 0.12 || state.stability < 18) messages.push('COLLAPSE WARNING: CITIES COUNT BACKWARD');
  if (!messages.length && burn < 0.18 && cold < 0.2 && chaos < 0.25) messages.push(observed ? 'STABLE WINDOW — SIGNAL RECOVERING' : state.stability > 82 ? 'CIVILIZATION DREAMING' : 'STABLE WINDOW');
  if (state.focusCooldown <= 0 && state.days > 4 && messages.length < 2) messages.push('FOCUS READY — SLOW TIME');
  return messages.length ? messages.slice(0, 2) : ['STABLE WINDOW'];
}

function updateHud(burn, cold, chaos, warnings) {
  daysEl.textContent = String(state.days);
  stabilityEl.textContent = `${Math.ceil(state.stability)}%`;
  modeReadout.textContent = modes[state.mode].label;
  modeName.textContent = `MODE: ${modes[state.mode].label}`;
  modeEffect.textContent = modes[state.mode].effect;
  focusStatus.textContent = state.focusCooldown > 0 ? `FOCUS ${Math.ceil(state.focusCooldown)}S` : 'FOCUS READY';
  warningsEl.textContent = warnings.join(' / ');
  heatMeter.style.width = `${Math.max(8, burn * 100)}%`;
  coldMeter.style.width = `${Math.max(8, cold * 100)}%`;
  chaosMeter.style.width = `${Math.max(8, chaos * 100)}%`;
  signalMeter.style.width = `${Math.max(8, (state.signal / MAX_SIGNAL) * 100)}%`;
  if (state.time < 10) {
    hintLine.textContent = hintTexts[Math.min(hintTexts.length - 1, Math.floor(state.time / 2))];
    hintLine.style.opacity = String(1 - Math.max(0, state.time - 8) / 2);
  } else {
    hintLine.style.opacity = '0';
  }
  if (state.toast && state.time < state.toastUntil) {
    toastLine.textContent = state.toast;
    toastLine.classList.add('visible');
  } else {
    toastLine.classList.remove('visible');
  }
}

function kill(cause) {
  if (state.dead) return;
  state.dead = true;
  state.deathCause = cause;
  const previousBest = getHighScore();
  setHighScore(state.days);
  state.deathWasHighScore = state.days > previousBest;
  const days = state.days;
  const causeLabel = {
    burned: 'Burned',
    frozen: 'Frozen',
    scattered: 'Chaos',
    collapse: 'Collapse',
  }[cause];
  const titles = {
    burned: 'THE DAWN CONSUMED YOU',
    frozen: 'THE LAST CITY FROZE',
    scattered: days % 2 ? 'GRAVITY FORGOT YOU' : 'THE HIDDEN MATH WON',
    collapse: 'NO ONE WILL REMEMBER THE ORBIT',
  };
  const messagePools = {
    burned: ['The red sun taught the oceans to boil.', 'The atmosphere became a funeral flame.', 'The cities glowed once, then vanished.'],
    frozen: ['Warmth became a myth.', 'The oceans stopped remembering waves.', 'The last signal arrived as ice.'],
    scattered: ['Your orbit became a rumor.', 'Resonance completed its sentence.', 'The world missed itself by a fraction.'],
    collapse: ['Civilization understood too late.', 'The last observatory blinked twice.', 'History became a closed set.'],
  };
  const messages = Object.fromEntries(Object.entries(messagePools).map(([key, pool]) => [key, pool[days % pool.length]]));
  deathScreen.dataset.cause = cause;
  deathTitle.textContent = titles[cause];
  deathStats.textContent = `Your civilization survived ${days} days.`;
  deathMessage.textContent = messages[cause];
  deathHighScore.textContent = `Cause ${causeLabel} / High score ${getHighScore()}`;
  shareStatus.textContent = state.deathWasHighScore ? 'New high score. The dawn is annoyed.' : '';
  deathScreen.classList.remove('hidden');
  playCue('death');
  if (state.deathWasHighScore) window.setTimeout(() => playCue('highScore'), 420);
}

async function copyShareText() {
  if (!state || !navigator.clipboard) return;
  const url = `${window.location.origin}${window.location.pathname}`;
  const text = `I survived ${state.days} days in Three Suns: Chaotic Dawn ☀️☀️☀️ ${url}`;
  try {
    await navigator.clipboard.writeText(text);
    shareStatus.textContent = 'Copied survival boast.';
  } catch {
    // Clipboard is optional; blocked browsers should not affect the game.
  }
}

function updateAnchors(dt) {
  for (let i = state.anchors.length - 1; i >= 0; i -= 1) {
    const anchor = state.anchors[i];
    anchor.age += dt;
    const life = 1 - anchor.age / ANCHOR_LIFE;
    anchor.group.rotation.y += dt * 2.1;
    anchor.group.rotation.z -= dt * 0.8;
    anchor.well.scale.setScalar(1 + anchor.age * 0.62);
    anchor.halo.scale.setScalar(1.1 + Math.sin(state.time * 9 + i) * 0.24 + anchor.age * 0.35);
    anchor.arms.scale.setScalar(1 + Math.sin(state.time * 7 + i) * 0.08);
    const mid = anchor.pos.clone().lerp(state.planetPos, 0.5);
    mid.z = 0.9 + Math.sin(state.time * 3 + i) * 0.25;
    const points = [anchor.pos, mid, state.planetPos].map((point) => point.clone());
    anchor.line.geometry.setFromPoints(points);
    anchor.line.material.opacity = THREE.MathUtils.clamp(life, 0, 1) * 0.38;
    anchor.group.children.forEach((child) => {
      if (child.material) child.material.opacity = THREE.MathUtils.clamp(life, 0, 1) * 0.78;
    });
    if (anchor.age >= ANCHOR_LIFE) {
      anchorGroup.remove(anchor.group);
      anchorGroup.remove(anchor.line);
      state.anchors.splice(i, 1);
    }
  }
}

function updatePlanetVisuals(dt) {
  const { burn, cold, chaos } = state.lastThreat;
  const modeColor = modes[state.mode].color;
  cloudLayer.rotation.y += dt * 0.35;
  atmosphere.material.color.setHex(modeColor);
  atmosphere.material.opacity = 0.13 + Math.max(burn, cold, chaos) * 0.12;
  shieldRing.material.opacity = state.mode === 'shield' ? 0.86 : 0;
  hibernationShell.material.opacity = state.mode === 'hibernation' ? 0.34 : 0;
  observatoryArc.material.opacity = state.mode === 'observatory' ? 0.9 : 0;
  observatoryArc.rotation.z += dt * 1.3;
  heatCracks.material.opacity = burn * 0.62;
  frostTint.material.opacity = cold * 0.18 + (state.mode === 'hibernation' ? 0.08 : 0);
  chaosRing.material.opacity = chaos * 0.54;
  chaosRing.rotation.z += dt * (2.4 + chaos * 6);
  chaosRing.position.x = Math.sin(state.time * 41) * chaos * 0.035;
  chaosRing.position.y = Math.cos(state.time * 37) * chaos * 0.035;
  const stress = Math.max(0, 1 - state.stability / 100);
  planetCore.material.emissiveIntensity = THREE.MathUtils.lerp(0.48, 0.08, stress) + burn * 0.35;
  const sleepDim = state.mode === 'hibernation' ? 0.55 : 1;
  civGlow.material.opacity = Math.max(0.04, 0.22 - stress * 0.16) * sleepDim;
  civRing.material.opacity *= sleepDim;
  civRing.material.color.setHex(modeColor);
}

function checkCustomPortal() {
  if (state.dead || state.paused) return;
  if (state.planetPos.distanceTo(customExitPosition) < 1.25) nextGame();
}

function updateCamera(dt) {
  state.shake = Math.max(0, state.shake - dt * 0.8);
  const shake = state.shake * state.shake * (state.highQuality ? 0.55 : 0.22);
  camera.position.x = Math.sin(state.time * 37) * shake;
  camera.position.y = Math.cos(state.time * 31) * shake;
  camera.position.z = 46 + Math.sin(state.time * 18) * shake;
  camera.lookAt(0, 0, 0);
}

function animate() {
  requestAnimationFrame(animate);
  let dt = Math.min(clock.getDelta(), MAX_DT);
  if (state.paused && !state.dead) {
    updateCamera(0);
    if (window.animateVibeJamPortals) window.animateVibeJamPortals();
    renderer.render(scene, camera);
    return;
  }
  if (state.dead) dt *= 0.12;
  if (state.focus > 0 && !state.dead) {
    dt *= 0.36;
    state.focus -= dt / 0.36;
  }
  if (state.focusCooldown > 0) state.focusCooldown = Math.max(0, state.focusCooldown - dt);

  state.time += dt;
  updateSunPositions(state.time);
  fadeTrail(planetTrail, state.highQuality ? 0.983 : 0.94);
  sunTrails.forEach((trail) => fadeTrail(trail, state.highQuality ? 0.987 : 0.93));
  updateNearMissEffects(dt);
  updateFocusRings(dt);
  portalGuideRing.rotation.z += dt * 0.45;
  portalGuideRing.scale.setScalar(1 + Math.sin(state.time * 2.1) * 0.08);

  if (!state.dead) {
    state.days = Math.floor(state.time / DAY_SECONDS);
    state.grace = Math.max(0, state.grace - dt);
    state.difficulty = 0.88
      + THREE.MathUtils.smoothstep(state.days, 10, 20) * 0.16
      + Math.max(0, state.days - 20) * 0.007
      + Math.max(0, state.days - 60) * 0.009
      + Math.max(0, state.days - 100) * 0.018;
    updateAnchors(dt);
    physicsStep(dt);
    planet.position.copy(state.planetPos);
    window.currentSpeed = Number(state.planetVel.length().toFixed(2));
    planetCore.rotation.y += dt * 1.3;
    planetCore.rotation.x += dt * 0.27;
    civRing.rotation.z += dt * (1.3 + (100 - state.stability) * 0.012);
    civRing.material.opacity = 0.42 + state.stability / 230 + Math.sin(state.time * 8) * 0.05;
    pushTrail(planetTrail, state.planetPos, 0.95);
    if (state.planetVel.length() > 6) {
      pushTrail(planetTrail, state.planetPos.clone().addScaledVector(state.planetVel, -0.018), 0.46);
    }
    updatePlanetVisuals(dt);
    checkCustomPortal();
  } else {
    civRing.material.opacity = 0.18 + Math.sin(state.time * 12) * 0.06;
  }

  starLayers.forEach((layer, i) => {
    layer.rotation.z += dt * (0.002 + i * 0.0015);
    layer.position.x = Math.sin(state.time * (0.05 + i * 0.02)) * (0.1 + i * 0.08);
  });
  nebulaGroup.rotation.z += dt * 0.0015;
  updateCamera(dt);
  if (window.animateVibeJamPortals) window.animateVibeJamPortals();
  renderer.render(scene, camera);
}

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
}

window.addEventListener('resize', resize);
window.addEventListener('pointerdown', (event) => {
  if (event.target.closest('button')) return;
  placeAnchor(event.clientX, event.clientY);
}, { passive: true });
window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    if (!infoScreen.classList.contains('hidden') || !storyScreen.classList.contains('hidden')) {
      closeOverlays();
    } else {
      togglePause();
    }
  }
  if (event.code === 'KeyR') resetGame();
  if (event.code === 'KeyM') toggleMute();
  if (event.code === 'KeyP') toggleQuality();
  if (event.code === 'Digit1') setMode('shield');
  if (event.code === 'Digit2') setMode('hibernation');
  if (event.code === 'Digit3') setMode('observatory');
  if (DEBUG_DEATH_CAUSE) {
    if (event.code === 'KeyB') kill('burned');
    if (event.code === 'KeyF') kill('frozen');
    if (event.code === 'KeyG') kill('scattered');
    if (event.code === 'KeyC') kill('collapse');
  }
  if (event.code === 'Space') {
    event.preventDefault();
    triggerFocus();
  }
});
restartButton.addEventListener('click', resetGame);
nextButton.addEventListener('click', nextGame);
shareButton.addEventListener('click', copyShareText);
resumeButton.addEventListener('click', () => togglePause(false));
pauseRestartButton.addEventListener('click', resetGame);
muteButton.addEventListener('click', toggleMute);
pauseNextButton.addEventListener('click', nextGame);
pauseCopyButton.addEventListener('click', copyShareText);
controlsButton.addEventListener('click', () => { controlsText.hidden = !controlsText.hidden; });
portalBadge.addEventListener('click', nextGame);
document.querySelector('#info-button').addEventListener('click', openInfoScreen);
document.querySelector('#story-button').addEventListener('click', openStoryScreen);
document.querySelector('#pause-info-button').addEventListener('click', openInfoScreen);
document.querySelector('#pause-story-button').addEventListener('click', openStoryScreen);
document.querySelector('#info-resume-button').addEventListener('click', closeOverlays);
document.querySelector('#info-restart-button').addEventListener('click', () => { closeOverlays(); resetGame(); });
document.querySelector('#info-next-button').addEventListener('click', nextGame);
document.querySelector('#story-resume-button').addEventListener('click', closeOverlays);
document.querySelector('#story-restart-button').addEventListener('click', () => { closeOverlays(); resetGame(); });
document.querySelector('#story-next-button').addEventListener('click', nextGame);
modeButtons.forEach((button) => {
  button.addEventListener('click', () => setMode(button.dataset.mode));
});
actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.action === 'focus') triggerFocus();
    if (button.dataset.action === 'pause') togglePause();
  });
});

initPortals();
resize();
resetGame();
animate();
