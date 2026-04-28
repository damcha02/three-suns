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
const dangerVignette = document.querySelector('#danger-vignette');
const daysEl = document.querySelector('#days');
const healthEl = document.querySelector('#health');
const healthFill = document.querySelector('#health-fill');
const healthBar = document.querySelector('.health-bar');
const runModeReadout = document.querySelector('#run-mode-readout');
const levelRow = document.querySelector('#level-row');
const levelReadout = document.querySelector('#level-readout');
const nextLevelRow = document.querySelector('#next-level-row');
const nextLevelReadout = document.querySelector('#next-level-readout');
const highScoreEl = document.querySelector('#high-score');
const warningsEl = document.querySelector('#warnings');
const heatMeter = document.querySelector('#heat-meter');
const coldMeter = document.querySelector('#cold-meter');
const chaosMeter = document.querySelector('#chaos-meter');
const signalMeter = document.querySelector('#signal-meter');
const hintLine = document.querySelector('#hint-line');
const toastLine = document.querySelector('#toast-line');
const levelBanner = document.querySelector('#level-banner');
const levelBannerTitle = document.querySelector('#level-banner-title');
const levelBannerSubtitle = document.querySelector('#level-banner-subtitle');
const levelBannerName = document.querySelector('#level-banner-name');
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
const runModeToggle = document.querySelector('#run-mode-toggle');
const infoScreen = document.querySelector('#info-screen');
const storyScreen = document.querySelector('#story-screen');
const leaderboardScreen = document.querySelector('#leaderboard-screen');
const leaderboardContent = document.querySelector('#leaderboard-content');
const publishButton = document.querySelector('#publish-button');
const publishForm = document.querySelector('#publish-form');
const publishNameInput = document.querySelector('#publish-name-input');
const publishConfirmButton = document.querySelector('#publish-confirm-button');
const tutorialBox = document.querySelector('#tutorial-box');
const tutorialTitle = document.querySelector('#tutorial-title');
const tutorialText = document.querySelector('#tutorial-text');
const tutorialGotIt = document.querySelector('#tutorial-got-it');
const tutorialSkip = document.querySelector('#tutorial-skip');
const infoTutorialButton = document.querySelector('#info-tutorial-button');
const infoStoryButton = document.querySelector('#info-story-button');
const infoSurvivalButton = document.querySelector('#info-survival-button');
const infoLevelButton = document.querySelector('#info-level-button');
const modeButtons = [...document.querySelectorAll('[data-mode]')];
const actionButtons = [...document.querySelectorAll('[data-action]')];

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x02030a, 1);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x02030a, 0.018);

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 220);
camera.position.set(0, 0, 56);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const playPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
const worldPoint = new THREE.Vector3();
const clock = new THREE.Clock();

const DAY_SECONDS = 1.5;
const MAX_DT = 0.033;
const ANCHOR_LIFE = 2.8;
const MAX_ANCHORS = 3;
const FOCUS_TIME = 1.15;
const FOCUS_COOLDOWN = 8;
const START_GRACE = 3;
const MAX_SIGNAL = 100;
const ANCHOR_SIGNAL_COST = 28;
const PLANET_RADIUS = 0.6;
const PLANET_DAMPING = 0.999;
const SUN_DAMPING = 0.9994;
const GLOBAL_GRAVITY_SCALE = 0.9;
const SUN_SPEED_SCALE = 1.28;
const GAMMA_GRAVITY_MULTIPLIER = 2.65;
const SUN_COLLISION_PADDING = 1.15;
const SUPERNOVA_GRACE = 1.5;
const OUTER_SAFE_RADIUS = 30;
const VOID_SUNLIGHT_RADIUS = 23;
const VOID_DAMAGE_DELAY = 4;
const TUTORIAL_KEY = 'three-suns-tutorial-complete';
const RUN_MODE_KEY = 'three-suns-run-mode';
const LEVEL_HIGH_KEY = 'three-suns-highest-level';
const LEADERBOARD_KEY = 'three-suns-leaderboard';
const COMET_WARNING_LEAD = 2;
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
    label: 'SHIELD', toast: 'SHIELD MODE', effect: 'SHIELD: red heat aura resistance ↑ cold/chaos risk modest ↑',
    heatDamage: 0.25, heatBuildup: 0.3, coldDamage: 1.12, coldBuildup: 1.1, chaosDamage: 1.08, chaosBuildup: 1.08,
    regen: 1, anchorCost: 1, anchorPull: 1, color: 0xffd36a,
  },
  hibernation: {
    label: 'SLEEP', toast: 'SLEEP MODE', effect: 'SLEEP: blue cold aura resistance ↑ signal regen ↑ chaos risk modest ↑',
    heatDamage: 1.08, heatBuildup: 1.08, coldDamage: 0.25, coldBuildup: 0.3, chaosDamage: 1.12, chaosBuildup: 1.12,
    regen: 1.35, anchorCost: 1, anchorPull: 1, color: 0x9ee7ff,
  },
  observatory: {
    label: 'OBSERVE', toast: 'OBSERVATORY MODE', effect: 'OBSERVE: gamma chaos aura resistance ↑ clearer omens ↑ anchor cost ↓',
    heatDamage: 1.08, heatBuildup: 1.08, coldDamage: 1.08, coldBuildup: 1.08, chaosDamage: 0.5, chaosBuildup: 0.55,
    regen: 1, anchorCost: 0.65, anchorPull: 1.14, color: 0xffffff,
  },
};

const LEVELS = [
  { level: 1, day: 20, name: 'FIRST DAWN' },
  { level: 2, day: 40, name: 'ORBITAL APPRENTICE' },
  { level: 3, day: 60, name: 'STELLAR NAVIGATOR' },
  { level: 4, day: 90, name: 'GRAVITY SAINT' },
  { level: 5, day: 120, name: 'LAST WORLD KEEPER' },
];

const hintTexts = [
  'Click/tap = gravity anchor',
  'Suns kill on contact, auras drain health',
  'Switch modes: Shield heat, Sleep cold, Observe chaos',
  'Space / FOCUS slows the dawn',
  'Stay warm, but do not touch the suns',
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
let music = null;
let muted = localStorage.getItem('threesuns_muted') === 'true';
let highQuality = true;
let selectedRunMode = localStorage.getItem(RUN_MODE_KEY) === 'level' ? 'level' : 'survival';

const tutorial = { active: false, index: 0, timer: 0 };
const tutorialSteps = [
  { title: 'THIS IS YOUR WORLD', text: 'Keep it alive.', highlight: 'planet' },
  { title: 'READ THE SUNS', text: 'Touching a sun kills instantly. Auras damage health.', highlight: 'sun' },
  { title: 'PLACE AN ANCHOR', text: 'Click or tap to place a gravity anchor. Anchors bend your path.', highlight: 'planet' },
  { title: 'ANCHORS COST SIGNAL', text: 'Signal limits anchor spam and refills while you fly well.', highlight: 'signal' },
  { title: 'SWITCH MODES', text: 'Shield protects from red heat aura. Sleep protects from blue cold aura. Observe protects from yellow/gamma chaos aura.', highlight: 'modes' },
  { title: 'FOCUS SLOWS TIME', text: 'Press Space or tap FOCUS to bend a dangerous moment.', highlight: 'focus' },
  { title: 'DO NOT CAMP THE VOID', text: 'Stay close enough for warmth, far enough to survive. The outer dark will freeze you if you camp outside.', highlight: 'sun' },
  { title: 'SURVIVE THE DAWN', text: 'Survival Mode is endless. Level Mode rewards day milestones. Watch for comet warnings.', highlight: 'planet' },
];

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
  const glow = makeSprite(color, size * 5.8, 0.43);
  const light = new THREE.PointLight(color, 2.55, 68, 1.45);
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
  const killRadius = visualRadius + PLANET_RADIUS * 0.72;
  const dangerRadius = visualRadius * 2.35;
  const auraRadius = visualRadius * 4.0 + PLANET_RADIUS;
  const auraGlow = makeSprite(color, auraRadius * 2.0, 0.075);
  group.add(auraGlow);

  const killRing = new THREE.Mesh(
    new THREE.RingGeometry(killRadius - 0.06, killRadius, 72),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false })
  );
  const dangerRing = new THREE.Mesh(
    new THREE.RingGeometry(auraRadius - 0.06, auraRadius, 72),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.09, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false })
  );
  group.add(killRing, dangerRing);

  scene.add(group);
  return {
    id, name, color,
    size, visualRadius, killRadius, dangerRadius, auraRadius,
    phase, heat, pull,
    deathCause, dangerType,
    group, core, glow, auraGlow, rings, killRing, dangerRing,
    pos: new THREE.Vector3(),
    vel: new THREE.Vector3(),
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
  { id: 'alpha', name: 'red', color: colors.red, size: 1.95, phase: 0.2, heat: 1.22, pull: 13.2, deathCause: 'burned', dangerType: 'heat' },
  { id: 'beta', name: 'blue', color: colors.blue, size: 1.55, phase: 2.5, heat: 0.72, pull: 10.8, deathCause: 'frozen', dangerType: 'cold' },
  { id: 'gamma', name: 'gold', color: colors.gold, size: 1.78, phase: 4.1, heat: 1.0, pull: 13.8, deathCause: 'scattered', dangerType: 'chaos' },
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

const cometGroup = new THREE.Group();
scene.add(cometGroup);

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
const supernovaEffects = [];
const explosionParticles = [];
const comets = [];
const focusRings = [];
const tutorialRing = new THREE.Mesh(
  new THREE.RingGeometry(0.9, 1.02, 96),
  new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false })
);
tutorialRing.rotation.x = Math.PI / 2;
tutorialRing.visible = false;
feedbackGroup.add(tutorialRing);
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

function createMusic() {
  if (music || !audio) return;
  const ctx = audio.ctx;

  const musicMaster = ctx.createGain();
  musicMaster.gain.value = 0;
  musicMaster.connect(audio.master);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 1800;
  filter.Q.value = 0.7;
  filter.connect(musicMaster);

  const droneGain = ctx.createGain();
  droneGain.gain.value = 0.65;
  droneGain.connect(filter);

  const drone1 = ctx.createOscillator();
  drone1.type = 'sine';
  drone1.frequency.value = 55;
  drone1.start();
  drone1.connect(droneGain);

  const drone2 = ctx.createOscillator();
  drone2.type = 'triangle';
  drone2.frequency.value = 82;
  drone2.start();
  drone2.connect(droneGain);

  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 0.07;
  lfo.start();
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 2.5;
  lfo.connect(lfoGain);
  lfoGain.connect(drone1.frequency);
  lfoGain.connect(drone2.frequency);

  const harmGain = ctx.createGain();
  harmGain.gain.value = 0;
  harmGain.connect(filter);

  const harm = ctx.createOscillator();
  harm.type = 'sine';
  harm.frequency.value = 220;
  harm.start();
  harm.connect(harmGain);

  // Delay reverb tail
  const delayNode = ctx.createDelay(0.5);
  delayNode.delayTime.value = 0.26;
  const delayFeedback = ctx.createGain();
  delayFeedback.gain.value = 0.34;
  droneGain.connect(delayNode);
  delayNode.connect(delayFeedback);
  delayFeedback.connect(delayNode);
  const delayOut = ctx.createGain();
  delayOut.gain.value = 0.18;
  delayNode.connect(delayOut);
  delayOut.connect(musicMaster);

  const collapseGain = ctx.createGain();
  collapseGain.gain.value = 0;
  collapseGain.connect(musicMaster);
  const collapseOsc = ctx.createOscillator();
  collapseOsc.type = 'sawtooth';
  collapseOsc.frequency.value = 38;
  collapseOsc.start();
  collapseOsc.connect(collapseGain);

  const heartGain = ctx.createGain();
  heartGain.gain.value = 0;
  heartGain.connect(musicMaster);
  const heartOsc = ctx.createOscillator();
  heartOsc.type = 'sine';
  heartOsc.frequency.value = 62;
  heartOsc.start();
  heartOsc.connect(heartGain);

  music = { musicMaster, filter, droneGain, drone1, drone2, lfo, lfoGain, harmGain, harm, delayOut, collapseGain, collapseOsc, heartGain, heartOsc, lastHeartbeat: 0 };
  if (!muted) musicMaster.gain.setTargetAtTime(0.9, ctx.currentTime + 0.1, 1.8);
}

function updateMusic() {
  if (!audio) return;
  if (!music) { createMusic(); return; }
  const ctx = audio.ctx;
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  const t = ctx.currentTime;
  const threat = state?.lastThreat || { proximityIntensity: 0, safe: true };
  const prox = THREE.MathUtils.clamp(threat.proximityIntensity || 0, 0, 1);
  const isFocus = (state?.focus || 0) > 0;
  const isDead = state?.dead || false;

  const targetVol = muted ? 0 : isDead ? 0.5 : (0.9 + prox * 1.1);
  music.musicMaster.gain.setTargetAtTime(targetVol, t, isDead ? 3.5 : 0.6);

  const targetFreq = isFocus ? (500 + prox * 300) : (1400 + prox * 1600);
  music.filter.frequency.setTargetAtTime(targetFreq, t, 0.25);

  music.lfo.frequency.setTargetAtTime(0.05 + prox * 0.28, t, 0.8);
  music.lfoGain.gain.setTargetAtTime(2 + prox * 9, t, 0.5);
  music.harmGain.gain.setTargetAtTime(isFocus ? 0.08 : prox * 0.55, t, 0.7);

  if (state) {
    const harmFreq = (isFocus ? 165 : 220) + Math.sin(state.time * 0.09) * 12;
    music.harm.frequency.setTargetAtTime(harmFreq, t, 2.0);
  }

  music.collapseGain.gain.setTargetAtTime(isDead ? 0.45 : 0, t, isDead ? 2.5 : 0.4);

  if (!isDead && prox > 0.6 && state) {
    const interval = 0.55 - prox * 0.28;
    if (state.time - music.lastHeartbeat > interval) {
      music.lastHeartbeat = state.time;
      music.heartGain.gain.cancelScheduledValues(t);
      music.heartGain.gain.setValueAtTime(0, t);
      music.heartGain.gain.linearRampToValueAtTime(0.55 * prox, t + 0.025);
      music.heartGain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    }
  } else if (prox <= 0.6) {
    music.heartGain.gain.setTargetAtTime(0, t, 0.15);
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
  params.set('hp', String(Math.ceil(state?.health ?? 100)));
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

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function randomUnitVector() {
  const angle = Math.random() * Math.PI * 2;
  return new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0);
}

function sunGravityWeight(sun) {
  return sun.pull * GLOBAL_GRAVITY_SCALE * (sun.id === 'gamma' ? GAMMA_GRAVITY_MULTIPLIER : 1);
}

function placeSunsSafely(avoidPos = null, sunsToPlace = suns) {
  const resetSet = new Set(sunsToPlace);
  const placed = suns
    .filter((sun) => !resetSet.has(sun))
    .map((sun) => ({ sun, pos: sun.pos.clone() }));
  for (let i = 0; i < sunsToPlace.length; i += 1) {
    const sun = sunsToPlace[i];
    let pos = null;
    for (let attempt = 0; attempt < 140; attempt += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = randomBetween(sun.id === 'gamma' ? 6.0 : 7.8, 17.0);
      const candidate = new THREE.Vector3(
        Math.cos(angle) * radius + randomBetween(-3.2, 3.2),
        Math.sin(angle) * radius * 0.76 + randomBetween(-2.2, 2.2),
        0
      );
      const clear = placed.every((other) => candidate.distanceTo(other.pos) > Math.max(sun.killRadius + other.sun.killRadius + 5.2, (sun.auraRadius + other.sun.auraRadius) * 0.72));
      const playerSafe = !avoidPos || candidate.distanceTo(avoidPos) > Math.max(sun.auraRadius + 3.2, sun.killRadius + 6.0);
      if (clear && playerSafe) {
        pos = candidate;
        break;
      }
    }
    if (!pos) {
      const baseAngle = avoidPos && avoidPos.lengthSq() > 0.001 ? Math.atan2(-avoidPos.y, -avoidPos.x) : Math.random() * Math.PI * 2;
      for (let attempt = 0; attempt < 18; attempt += 1) {
        const angle = baseAngle + (attempt / 18) * Math.PI * 2 + i * 1.65;
        const candidate = new THREE.Vector3(Math.cos(angle) * 16.5, Math.sin(angle) * 12.25, 0);
        const clear = placed.every((other) => candidate.distanceTo(other.pos) > Math.max(sun.killRadius + other.sun.killRadius + 5.2, (sun.auraRadius + other.sun.auraRadius) * 0.72));
        const playerSafe = !avoidPos || candidate.distanceTo(avoidPos) > Math.max(sun.auraRadius + 3.2, sun.killRadius + 6.0);
        if (clear && playerSafe) {
          pos = candidate;
          break;
        }
      }
    }
    if (!pos) pos = randomUnitVector().multiplyScalar(randomBetween(14.4, 17.3));
    const tangent = new THREE.Vector3(-pos.y, pos.x, 0).normalize().multiplyScalar(randomBetween(0.16, 0.46) * SUN_SPEED_SCALE);
    const drift = randomUnitVector().multiplyScalar(randomBetween(0.02, 0.16) * SUN_SPEED_SCALE);
    sun.pos.copy(pos);
    sun.vel.copy(tangent.add(drift));
    sun.group.position.copy(sun.pos);
    sun.worldPos.copy(sun.pos);
    placed.push({ sun, pos });
  }
}

function buildRandomLayout(portalKick) {
  placeSunsSafely();

  let planetPos = null;
  for (let attempt = 0; attempt < 140; attempt += 1) {
    const candidate = new THREE.Vector3(randomBetween(-17, 17), randomBetween(-10.8, 10.8), 0);
    const safe = suns.every((sun) => {
      const minSafe = Math.max(sun.auraRadius + 1.2, sun.size * 3.8);
      return candidate.distanceTo(sun.pos) > minSafe;
    });
    if (safe) {
      planetPos = candidate;
      break;
    }
  }
  if (!planetPos) {
    const weightedAway = suns.reduce((sum, sun) => sum.add(sun.pos), new THREE.Vector3()).multiplyScalar(-1);
    if (weightedAway.lengthSq() < 0.001) weightedAway.copy(randomUnitVector());
    weightedAway.normalize();
    planetPos = weightedAway.multiplyScalar(14.8);
  }

  let dominantSun = suns[0];
  let dominantWeight = -Infinity;
  for (const sun of suns) {
    const d2 = Math.max(planetPos.distanceToSquared(sun.pos), 1);
    const weight = sunGravityWeight(sun) / d2;
    if (weight > dominantWeight) {
      dominantWeight = weight;
      dominantSun = sun;
    }
  }
  const toDominant = dominantSun.pos.clone().sub(planetPos);
  const distance = Math.max(toDominant.length(), 1);
  const tangentSign = Math.random() < 0.5 ? -1 : 1;
  const tangent = new THREE.Vector3(-toDominant.y, toDominant.x, 0).normalize().multiplyScalar(tangentSign);
  const orbitalSpeed = Math.sqrt(sunGravityWeight(dominantSun) / distance) * randomBetween(0.78, 1.12);
  const planetVel = tangent.multiplyScalar(orbitalSpeed)
    .add(randomUnitVector().multiplyScalar(randomBetween(0.08, 0.36)))
    .add(portalKick.clone().multiplyScalar(arrivedViaPortal ? 0.25 : 0.08));

  spawnPoint.x = planetPos.x;
  spawnPoint.y = planetPos.y;
  return { planetPos, planetVel };
}

function resetGame(runMode = selectedRunMode) {
  selectedRunMode = runMode === 'level' ? 'level' : 'survival';
  localStorage.setItem(RUN_MODE_KEY, selectedRunMode);
  const incomingSpeed = THREE.MathUtils.clamp(portalNumber('speed', 1), 0.4, 3.2);
  const portalKick = arrivedViaPortal
    ? new THREE.Vector3(
        THREE.MathUtils.clamp(portalNumber('speed_x', 0.7 * incomingSpeed), -2.8, 2.8),
        THREE.MathUtils.clamp(portalNumber('speed_y', 0.25 * incomingSpeed), -2.8, 2.8),
        0
      )
    : new THREE.Vector3(2.2, 1.08, 0);
  const layout = buildRandomLayout(portalKick);
  state = {
    time: 0,
    days: 0,
    difficulty: 0.88,
    runMode: selectedRunMode,
    currentLevel: 0,
    nextLevelIndex: 0,
    levelGravityBonus: 0,
    levelAuraBonus: 0,
    levelBannerUntil: 0,
    levelBannerFadeAt: 0,
    meteorShower: null,
    health: THREE.MathUtils.clamp(portalNumber('hp', 100), 35, 100),
    signal: MAX_SIGNAL,
    mode: 'shield',
    paused: false,
    muted,
    highQuality,
    dead: false,
    deathFreeze: 0,
    deathToken: 0,
    deathCause: '',
    deathWasHighScore: false,
    focus: 0,
    focusCooldown: 0,
    shake: 0,
    damageFlash: 0,
    supernovaFlash: 0,
    supernovaCooldown: 0,
    voidExposure: 0,
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
    nextCometWarnAt: randomBetween(16, 22),
    pendingComet: null,
    critical: { burned: 0, frozen: 0, scattered: 0, collapse: 0 },
    lastProximityWarn: -99,
    lastDamageType: '',
    lastThreat: { burn: 0, cold: 0, chaos: 0, safe: true, proximityIntensity: 0, damageType: '' },
    anchors: [],
    planetPos: layout.planetPos,
    planetVel: layout.planetVel,
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
  for (const effect of [...supernovaEffects]) feedbackGroup.remove(effect.mesh);
  supernovaEffects.length = 0;
  for (const particle of [...explosionParticles]) feedbackGroup.remove(particle.sprite);
  explosionParticles.length = 0;
  for (const comet of [...comets]) removeComet(comet);
  comets.length = 0;
  deathScreen.classList.add('hidden');
  deathScreen.removeAttribute('data-cause');
  levelBanner.classList.add('hidden');
  levelBanner.classList.remove('fading');
  pauseMenu.classList.add('hidden');
  infoScreen.classList.add('hidden');
  storyScreen.classList.add('hidden');
  leaderboardScreen.classList.add('hidden');
  publishForm.classList.add('hidden');
  shareStatus.textContent = '';
  updateScoreReadout();
  updateRunModeToggle();
  setMode(state.mode);
  updateHud(0, 0, 0, ['omens quiet']);
}

function getHighScore() {
  return Number.parseInt(localStorage.getItem('three-suns-high-score') || '0', 10) || 0;
}

function setHighScore(days) {
  if (days > getHighScore()) localStorage.setItem('three-suns-high-score', String(days));
  updateScoreReadout();
}

function getHighestLevel() {
  return Number.parseInt(localStorage.getItem(LEVEL_HIGH_KEY) || '0', 10) || 0;
}

function setHighestLevel(level) {
  if (level > getHighestLevel()) localStorage.setItem(LEVEL_HIGH_KEY, String(level));
  updateScoreReadout();
}

function getLeaderboard() {
  try { return JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || '[]'); } catch { return []; }
}

function addLeaderboardEntry(name, mode, days, level) {
  const board = getLeaderboard();
  board.push({ name: (name || 'Pilot').trim().slice(0, 24) || 'Pilot', mode, days, level, timestamp: Date.now() });
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(board));
}

function getSortedLeaderboard() {
  return getLeaderboard().sort((a, b) => {
    const aLvl = a.mode === 'level' ? a.level : 0;
    const bLvl = b.mode === 'level' ? b.level : 0;
    if (bLvl !== aLvl) return bLvl - aLvl;
    return b.days - a.days;
  });
}

function escHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function renderLeaderboard() {
  const entries = getSortedLeaderboard();
  if (!entries.length) {
    leaderboardContent.innerHTML = '<p class="leaderboard-empty">No records yet. Survive a run first.</p>';
    return;
  }
  const rows = entries.slice(0, 20).map((entry, i) => {
    const rank = i + 1;
    const score = entry.mode === 'level' ? `Lv ${entry.level} / ${entry.days}d` : `${entry.days} days`;
    return `<tr class="${rank <= 3 ? `rank-${rank}` : ''}"><td>${rank}</td><td>${escHtml(entry.name)}</td><td>${entry.mode === 'level' ? 'LEVEL' : 'SURV'}</td><td>${score}</td></tr>`;
  }).join('');
  leaderboardContent.innerHTML = `<table class="leaderboard-table"><thead><tr><th>#</th><th>Name</th><th>Mode</th><th>Score</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function openLeaderboard() {
  if (!state) return;
  renderLeaderboard();
  infoScreen.classList.add('hidden');
  storyScreen.classList.add('hidden');
  pauseMenu.classList.add('hidden');
  leaderboardScreen.classList.remove('hidden');
  if (!state.dead) state.paused = true;
}

function showPublishForm() {
  if (!state || !state.dead) return;
  publishForm.classList.remove('hidden');
  publishNameInput.value = '';
  publishNameInput.focus();
}

function confirmPublish() {
  if (!state) return;
  const name = publishNameInput.value.trim() || 'Pilot';
  addLeaderboardEntry(name, state.runMode, state.days, state.currentLevel);
  publishForm.classList.add('hidden');
  shareStatus.textContent = 'Score published locally.';
}

function getLevelName(level) {
  return LEVELS.find((item) => item.level === level)?.name || 'UNCHARTED';
}

function updateScoreReadout() {
  if (!state || state.runMode === 'survival') highScoreEl.textContent = String(getHighScore());
  else highScoreEl.textContent = `L${getHighestLevel()}`;
}

function updateRunModeToggle() {
  if (!runModeToggle) return;
  const mode = state?.runMode || selectedRunMode;
  runModeToggle.textContent = mode === 'level' ? 'LEVEL' : 'SURVIVAL';
  runModeToggle.title = mode === 'level'
    ? 'Level: reach milestones and level up'
    : 'Survival: endless run — survive as long as possible';
  runModeToggle.classList.toggle('active', mode === 'level');
}

function startRunMode(mode) {
  selectedRunMode = mode === 'level' ? 'level' : 'survival';
  closeOverlays();
  resetGame(selectedRunMode);
  showToast(selectedRunMode === 'level' ? 'LEVEL MODE' : 'SURVIVAL MODE', 1.2);
  pulsePlanet(selectedRunMode === 'level' ? 0xffffff : 0x9fffd4, 0.9);
}

function clearTutorialHighlights() {
  healthBar.classList.remove('tutorial-highlight');
  signalMeter.classList.remove('tutorial-highlight');
  document.querySelector('#mode-controls')?.classList.remove('tutorial-highlight');
  document.querySelector('#mode-info')?.classList.remove('tutorial-highlight');
  document.querySelector('#mobile-controls')?.classList.remove('tutorial-highlight');
  tutorialRing.visible = false;
  tutorialRing.material.opacity = 0;
}

function updateTutorialBox() {
  if (!tutorial.active) return;
  const step = tutorialSteps[tutorial.index];
  tutorialTitle.textContent = step.title;
  tutorialText.textContent = step.text;
  tutorialBox.classList.remove('hidden');
  clearTutorialHighlights();
  if (step.highlight === 'signal') signalMeter.classList.add('tutorial-highlight');
  if (step.highlight === 'modes') {
    document.querySelector('#mode-controls')?.classList.add('tutorial-highlight');
    document.querySelector('#mobile-controls')?.classList.add('tutorial-highlight');
  }
  if (step.highlight === 'focus') {
    document.querySelector('#mode-info')?.classList.add('tutorial-highlight');
    document.querySelector('#mobile-controls')?.classList.add('tutorial-highlight');
  }
}

function startTutorial(replay = false) {
  if (!state || state.dead) return;
  if (!replay && (arrivedViaPortal || localStorage.getItem(TUTORIAL_KEY))) return;
  infoScreen.classList.add('hidden');
  storyScreen.classList.add('hidden');
  pauseMenu.classList.add('hidden');
  state.paused = false;
  state.grace = Math.max(state.grace, 4);
  state.health = Math.max(state.health, 70);
  tutorial.active = true;
  tutorial.index = 0;
  tutorial.timer = 0;
  updateTutorialBox();
}

function finishTutorial() {
  if (!tutorial.active) return;
  tutorial.active = false;
  tutorialBox.classList.add('hidden');
  clearTutorialHighlights();
  localStorage.setItem(TUTORIAL_KEY, 'true');
  if (state && !state.dead) {
    state.grace = Math.max(state.grace, 2);
    state.flashOmen = 'SURVIVE THE DAWN';
    state.flashOmenUntil = state.time + 1.4;
  }
}

function advanceTutorial() {
  if (!tutorial.active) return;
  if (tutorial.index >= tutorialSteps.length - 1) {
    finishTutorial();
    return;
  }
  tutorial.index += 1;
  tutorial.timer = 0;
  updateTutorialBox();
}

function notifyTutorial(action) {
  if (!tutorial.active) return;
  if (action === 'anchor' || action === 'mode' || action === 'focus') pulsePlanet(modes[state.mode].color, 0.45);
}

function updateTutorial() {
  if (!tutorial.active || !state || state.dead) return;
  state.grace = Math.max(state.grace, 0.35);
  state.health = Math.max(state.health, 45);
  state.voidExposure = Math.min(state.voidExposure, 1.5);
}

function updateTutorialHighlight() {
  if (!tutorial.active) return;
  const step = tutorialSteps[tutorial.index];
  if (step.highlight !== 'planet' && step.highlight !== 'sun') return;
  const targetSun = suns.reduce((nearest, sun) => (
    !nearest || sun.lastDistance < nearest.lastDistance ? sun : nearest
  ), null);
  const target = step.highlight === 'planet' ? state.planetPos : targetSun?.pos;
  if (!target) return;
  const size = step.highlight === 'planet' ? 2.3 : targetSun.auraRadius;
  tutorialRing.visible = true;
  tutorialRing.position.copy(target);
  tutorialRing.scale.setScalar(size * (1 + Math.sin(state.time * 4.8) * 0.08));
  tutorialRing.material.color.setHex(step.highlight === 'planet' ? 0x9fffd4 : targetSun.color.getHex());
  tutorialRing.material.opacity = 0.34 + Math.sin(state.time * 5.6) * 0.12;
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
  showToast(`${modes[mode].label} ACTIVE`, 1.1);
  pulsePlanet(modes[mode].color, 1.05);
  state.damageFlash = Math.max(state.damageFlash, 0.25);
  if (music && audio && !muted) {
    const t = audio.ctx.currentTime;
    music.musicMaster.gain.cancelScheduledValues(t);
    music.musicMaster.gain.setValueAtTime(music.musicMaster.gain.value, t);
    music.musicMaster.gain.linearRampToValueAtTime(2.2, t + 0.07);
    music.musicMaster.gain.setTargetAtTime(0.9, t + 0.07, 0.45);
  }
  state.flashOmen = makeWarnings(state.lastThreat.burn, state.lastThreat.cold, state.lastThreat.chaos, state.lastThreat.nearest || Infinity, state.lastThreat.speed || 0)[0];
  state.flashOmenUntil = state.mode === 'observatory' ? state.time + 0.15 : state.time;
  notifyTutorial('mode');
}

function showToast(text, duration = 0.9) {
  if (!state) return;
  state.toast = text;
  state.toastUntil = state.time + duration;
  toastLine.textContent = text;
  toastLine.classList.add('visible');
}

function showBanner(title, subtitle, name = '') {
  levelBannerTitle.textContent = title;
  levelBannerSubtitle.textContent = subtitle || 'Difficulty increased';
  levelBannerName.textContent = name;
  levelBanner.classList.remove('hidden', 'fading');
  state.levelBannerFadeAt = state.time + 2;
  state.levelBannerUntil = state.time + 2.45;
}

function showLevelBanner(level, name, subtitle) {
  showBanner(`LEVEL ${level} REACHED`, subtitle, name);
}

function updateLevelBanner() {
  if (!state || state.levelBannerUntil <= 0) return;
  levelBanner.classList.toggle('fading', state.time >= state.levelBannerFadeAt);
  if (state.time >= state.levelBannerUntil) {
    levelBanner.classList.add('hidden');
    levelBanner.classList.remove('fading');
    state.levelBannerUntil = 0;
  }
}

function updateLevelMode() {
  if (!state || state.runMode !== 'level') return;
  const next = LEVELS[state.nextLevelIndex];
  if (!next || state.days < next.day) return;
  state.currentLevel = next.level;
  state.nextLevelIndex += 1;
  let scalingText = 'Difficulty increased';
  if (next.level > 1 && next.level % 2 === 0) {
    state.levelAuraBonus += 0.05;
    scalingText = 'Aura damage increased';
  } else if (next.level > 1) {
    state.levelGravityBonus += 0.05;
    scalingText = 'Gravity increased';
  }
  state.health = THREE.MathUtils.clamp(state.health + 20, 0, 100);
  state.signal = THREE.MathUtils.clamp(state.signal + 38, 0, MAX_SIGNAL);
  setHighestLevel(state.currentLevel);
  showToast(`LEVEL ${next.level} — ${next.name}`, 2.4);
  showLevelBanner(next.level, next.name, scalingText);
  state.flashOmen = `LEVEL ${next.level} — ${next.name}`;
  state.flashOmenUntil = state.time + 2.4;
  pulsePlanet(0xffffff, 1.1);
  playCue('highScore');
  if (next.level % 3 === 0) triggerMeteorShower();
}

function triggerMeteorShower() {
  if (!state || state.runMode !== 'level') return;
  state.meteorShower = {
    startAt: state.time + 2.2,
    nextAt: state.time + 2.2,
    remaining: 7,
    activeUntil: state.time + 9,
  };
  state.flashOmen = 'METEOR SHOWER — THE SKY IS BREAKING';
  state.flashOmenUntil = state.time + 2.2;
  window.setTimeout(() => {
    if (state?.meteorShower) showBanner('METEOR SHOWER', 'The sky is breaking', 'Move between the falling lights');
  }, 700);
  playCue('danger');
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
  if (tutorial.active) finishTutorial();
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
  leaderboardScreen.classList.add('hidden');
  localStorage.setItem('threesuns_seen_info', 'true');
  if (state && !state.dead) state.paused = false;
}

function toggleMute() {
  muted = !muted;
  if (state) state.muted = muted;
  localStorage.setItem('threesuns_muted', String(muted));
  muteButton.textContent = muted ? 'Unmute' : 'Mute';
  if (music && audio) {
    const t = audio.ctx.currentTime;
    music.musicMaster.gain.setTargetAtTime(muted ? 0 : 0.9, t, 0.3);
  }
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

function updateSunPositions(t, dt = 0) {
  const diff = state?.difficulty || 1;
  if (state && dt > 0 && !state.dead) {
    suns.forEach((sun) => {
      const accel = new THREE.Vector3();
      for (const other of suns) {
        if (other === sun) continue;
        const toOther = other.pos.clone().sub(sun.pos);
        const d2 = Math.max(toOther.lengthSq(), 18);
        accel.addScaledVector(toOther.normalize(), (sunGravityWeight(other) * (1 + (state.levelGravityBonus || 0)) * 0.046) / d2);
      }
      const bound = Math.max(0, sun.pos.length() - 14.5);
      if (bound > 0) accel.addScaledVector(sun.pos.clone().normalize(), -bound * 0.018);
      sun.vel.addScaledVector(accel, dt);
      if (sun.vel.length() > 3.0) sun.vel.setLength(3.0);
      sun.vel.multiplyScalar(SUN_DAMPING);
      sun.pos.addScaledVector(sun.vel, dt);
      sun.pos.z = Math.sin(t * 0.34 + sun.phase) * 0.65;
    });
  }
  suns.forEach((sun, i) => {
    const p = sun.phase;
    sun.group.position.copy(sun.pos);
    sun.worldPos.copy(sun.pos);
    sun.core.rotation.y += 0.01 + i * 0.004;
    const pulseSpeed = sun.id === 'alpha' ? 3.1 : sun.id === 'beta' ? 1.45 : 4.4;
    sun.glow.material.opacity = 0.32 + Math.sin(t * pulseSpeed + p) * 0.1;
    sun.auraGlow.material.opacity = 0.055 + Math.sin(t * (pulseSpeed * 0.55) + p) * 0.018;
    sun.auraGlow.scale.setScalar(sun.auraRadius * 2.0 * (1 + Math.sin(t * 1.2 + p) * 0.025));
    sun.rings.forEach((ring) => {
      const pulse = (t * (0.32 + i * 0.07 + diff * 0.025) + ring.userData.offset + Math.sin(t * 0.18 + p) * 0.08) % 1;
      const scale = sun.size * (2.4 + pulse * (7.6 + diff * 0.8));
      ring.scale.set(scale, scale, scale);
      ring.rotation.z = t * (0.1 + i * 0.03);
      ring.material.opacity = (1 - pulse) * (0.16 + diff * 0.04);
    });
    pushTrail(sunTrails[i], sun.pos, 0.75);
    const inBuf = sun.lastDistance > sun.killRadius && sun.lastDistance <= sun.dangerRadius;
    const bufPulse = inBuf
      ? 1 - THREE.MathUtils.smoothstep(sun.lastDistance, sun.killRadius, sun.dangerRadius)
      : 0;
    sun.killRing.rotation.z = t * 0.22 + p;
    sun.killRing.material.opacity = (0.13 + Math.sin(t * 1.8 + p) * 0.05) * (1 + bufPulse * 2.8);
    sun.dangerRing.rotation.z = -(t * 0.1 + p);
    sun.dangerRing.material.opacity = 0.075 + Math.sin(t * 1.1 + p + 1.5) * 0.03;
  });
}

function checkSunCollisions() {
  if (!state || state.dead || tutorial.active || state.supernovaCooldown > 0) return;
  const colliding = new Set();
  const links = new Map(suns.map((sun) => [sun, new Set()]));
  for (let i = 0; i < suns.length; i += 1) {
    for (let j = i + 1; j < suns.length; j += 1) {
      const a = suns[i];
      const b = suns[j];
      const distance = a.pos.distanceTo(b.pos);
      const collisionDistance = a.size + b.size + SUN_COLLISION_PADDING;
      if (distance <= collisionDistance) {
        colliding.add(a);
        colliding.add(b);
        links.get(a).add(b);
        links.get(b).add(a);
      }
    }
  }
  if (!colliding.size) return;

  const start = colliding.values().next().value;
  const cluster = [];
  const stack = [start];
  const seen = new Set();
  while (stack.length) {
    const sun = stack.pop();
    if (seen.has(sun)) continue;
    seen.add(sun);
    cluster.push(sun);
    links.get(sun).forEach((linked) => stack.push(linked));
  }
  const center = cluster.reduce((sum, sun) => sum.add(sun.pos), new THREE.Vector3()).multiplyScalar(1 / cluster.length);
  const nearestPairDistance = cluster.reduce((nearest, sun, i) => {
    for (let j = i + 1; j < cluster.length; j += 1) nearest = Math.min(nearest, sun.pos.distanceTo(cluster[j].pos));
    return nearest;
  }, Infinity);
  triggerSupernova(center, nearestPairDistance, cluster);
}

function placeAnchor(clientX, clientY) {
  if (state.dead || state.paused) return;
  createAudio();
  if (audio?.ctx.state === 'suspended') audio.ctx.resume().catch(() => {});
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
  worldPoint.x = THREE.MathUtils.clamp(worldPoint.x, -25, 25);
  worldPoint.y = THREE.MathUtils.clamp(worldPoint.y, -16, 16);
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
  triggerRipple(worldPoint, colors.violet.getHex(), 0.5, 4.6, 0.68);
  pulsePlanet(colors.violet.getHex(), 0.42);
  notifyTutorial('anchor');
  playCue('anchor');
}

function triggerFocus() {
  if (state.dead || state.paused) return;
  if (state.focusCooldown > 0) {
    notifyTutorial('focus');
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
  notifyTutorial('focus');
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

function triggerRipple(pos, color = 0xffffff, duration = 0.55, speed = 5.2, opacity = 0.62) {
  const mesh = new THREE.Mesh(
    new THREE.RingGeometry(0.45, 0.52, 64),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false })
  );
  mesh.position.copy(pos);
  mesh.rotation.x = Math.PI / 2;
  feedbackGroup.add(mesh);
  nearMissEffects.push({ mesh, age: 0, duration, speed, opacity });
}

function updateNearMissEffects(dt) {
  for (let i = nearMissEffects.length - 1; i >= 0; i -= 1) {
    const effect = nearMissEffects[i];
    effect.age += dt;
    const duration = effect.duration || 0.7;
    const life = 1 - effect.age / duration;
    effect.mesh.scale.setScalar(1 + effect.age * (effect.speed || 5.8));
    effect.mesh.material.opacity = Math.max(0, life) * (effect.opacity || 0.72);
    if (effect.age >= duration) {
      feedbackGroup.remove(effect.mesh);
      nearMissEffects.splice(i, 1);
    }
  }
}

function triggerSupernova(pos, sourceDistance, collidingSuns = suns) {
  if (!state || state.dead || state.supernovaCooldown > 0) return;
  const isTriple = collidingSuns.length >= 3;
  const power = isTriple ? 1.25 : 1;
  state.supernovaCooldown = 2.6;
  state.supernovaFlash = power;
  state.shake = Math.max(state.shake, isTriple ? 1.65 : 1.25);
  state.flashOmen = isTriple ? 'THREE DAWNS SHATTERED' : 'BINARY IMPACT';
  state.flashOmenUntil = state.time + 1.15;
  showToast(isTriple ? 'THREE NEW DAWNS IGNITE' : 'TWIN STARS REIGNITE', 1.8);

  const mesh = new THREE.Mesh(
    new THREE.RingGeometry(0.8, 1.08, 112),
    new THREE.MeshBasicMaterial({ color: 0xf8e9ff, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false })
  );
  mesh.position.copy(pos);
  mesh.rotation.x = Math.PI / 2;
  feedbackGroup.add(mesh);
  supernovaEffects.push({ mesh, age: 0, power });
  spawnExplosionParticles(pos, isTriple ? 0xf8e9ff : collidingSuns[0]?.color.getHex() || 0xffffff, isTriple ? 18 : 12, power);

  const distance = state.planetPos.distanceTo(pos);
  if (distance < (isTriple ? 6.5 : 5.4)) {
    placeSunsSafely(state.planetPos, collidingSuns);
    kill(sourceDistance < 1.3 ? 'collapse' : 'scattered');
    return;
  }

  const shock = 1 - THREE.MathUtils.smoothstep(distance, isTriple ? 6.5 : 5.4, isTriple ? 30 : 25);
  if (shock > 0) {
    const damage = THREE.MathUtils.lerp(12, isTriple ? 78 : 56, shock ** 1.25);
    state.health = Math.max(0, state.health - damage);
    state.damageFlash = Math.max(state.damageFlash, 0.9);
    state.lastDamageType = 'chaos';
    if (state.health <= 0) {
      placeSunsSafely(state.planetPos, collidingSuns);
      kill('collapse');
      return;
    }
  }

  placeSunsSafely(state.planetPos, collidingSuns);
  state.grace = Math.max(state.grace, SUPERNOVA_GRACE);
  state.nearMissArmed = false;
  state.prevNearest = Infinity;
  blip(52, 0.58, 'sawtooth', 0.85);
}

function spawnExplosionParticles(pos, color = 0xffffff, count = 10, power = 1, direction = null) {
  const baseAngle = direction ? Math.atan2(direction.y, direction.x) : 0;
  for (let i = 0; i < count; i += 1) {
    const sprite = makeSprite(color, randomBetween(0.16, 0.34) * power, 0.9);
    sprite.position.copy(pos);
    const spread = direction ? randomBetween(-0.75, 0.75) : randomBetween(0, Math.PI * 2);
    const angle = direction ? baseAngle + spread : spread;
    const vel = new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0).multiplyScalar(randomBetween(7, 14) * power);
    feedbackGroup.add(sprite);
    explosionParticles.push({ sprite, vel, age: 0, life: randomBetween(0.45, 0.85), size: sprite.scale.x });
  }
}

function updateExplosionParticles(dt) {
  for (let i = explosionParticles.length - 1; i >= 0; i -= 1) {
    const particle = explosionParticles[i];
    particle.age += dt;
    particle.sprite.position.addScaledVector(particle.vel, dt);
    particle.vel.multiplyScalar(1 - dt * 1.8);
    const life = Math.max(0, 1 - particle.age / particle.life);
    particle.sprite.material.opacity = life * 0.85;
    particle.sprite.scale.setScalar(particle.size * (1 + particle.age * 2.5));
    if (particle.age >= particle.life) {
      feedbackGroup.remove(particle.sprite);
      explosionParticles.splice(i, 1);
    }
  }
}

function updateSupernovaEffects(dt) {
  if (state) {
    state.supernovaFlash = Math.max(0, state.supernovaFlash - dt * 1.15);
    state.supernovaCooldown = Math.max(0, state.supernovaCooldown - dt);
  }
  for (let i = supernovaEffects.length - 1; i >= 0; i -= 1) {
    const effect = supernovaEffects[i];
    effect.age += dt;
    const life = 1 - effect.age / 1.15;
    effect.mesh.scale.setScalar(1 + effect.age * 23 * (effect.power || 1));
    effect.mesh.material.opacity = Math.max(0, life) * 0.95;
    effect.mesh.material.color.lerp(colors.gold, dt * 1.8);
    if (effect.age >= 1.15) {
      feedbackGroup.remove(effect.mesh);
      supernovaEffects.splice(i, 1);
    }
  }
}

function cometDirectionLabel(dir) {
  if (Math.abs(dir.x) > Math.abs(dir.y)) return dir.x > 0 ? 'WEST VECTOR' : 'EAST VECTOR';
  return dir.y > 0 ? 'SOUTH VECTOR' : 'NORTH VECTOR';
}

function warnComet() {
  const side = Math.floor(Math.random() * 4);
  const start = new THREE.Vector3(
    side === 0 ? -34 : side === 1 ? 34 : randomBetween(-30, 30),
    side === 2 ? -22 : side === 3 ? 22 : randomBetween(-18, 18),
    0
  );
  const target = new THREE.Vector3(randomBetween(-9, 9), randomBetween(-6, 6), 0);
  const dir = target.sub(start).normalize();
  state.pendingComet = { at: state.time + COMET_WARNING_LEAD, start, dir };
  state.nextCometWarnAt = Infinity;
  state.flashOmen = state.mode === 'observatory'
    ? `COMET INBOUND — ${cometDirectionLabel(dir)}`
    : 'COMET INBOUND';
  state.flashOmenUntil = state.time + 1.75;
  playCue('danger');
}

function spawnComet(config) {
  const isMeteor = Boolean(config.isMeteor);
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(isMeteor ? 0.17 : 0.28, 14, 10),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  const glow = makeSprite(isMeteor ? 0xc7f2ff : 0xfff0b8, isMeteor ? 1.15 : 1.9, isMeteor ? 0.28 : 0.34);
  const trail = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), config.dir.clone().multiplyScalar(isMeteor ? -3.4 : -5)]),
    new THREE.LineBasicMaterial({ color: 0xffd36a, transparent: true, opacity: 0.78, blending: THREE.AdditiveBlending })
  );
  const group = new THREE.Group();
  group.add(trail, glow, head);
  group.position.copy(config.start);
  cometGroup.add(group);
  comets.push({
    group, head, glow, trail,
    pos: config.start.clone(),
    vel: config.dir.clone().multiplyScalar(config.speed || randomBetween(13.5, 16.5)),
    age: 0,
    isMeteor,
    damage: config.damage || 70,
    impulse: config.impulse || 3.7,
  });
}

function removeComet(comet) {
  cometGroup.remove(comet.group);
}

function triggerCometImpact(comet) {
  state.health = Math.max(0, state.health - comet.damage);
  state.planetVel.addScaledVector(comet.vel.clone().normalize(), comet.impulse);
  state.shake = Math.max(state.shake, comet.isMeteor ? 0.72 : 1.1);
  state.damageFlash = Math.max(state.damageFlash, 0.95);
  state.lastDamageType = 'chaos';
  state.flashOmen = comet.isMeteor ? 'METEOR IMPACT' : 'COMET IMPACT';
  state.flashOmenUntil = state.time + 1.25;
  showToast(comet.isMeteor ? 'METEOR IMPACT' : 'COMET IMPACT', 1.25);
  triggerNearMiss(state.planetPos);
  spawnExplosionParticles(state.planetPos, comet.isMeteor ? 0xc7f2ff : 0xffd36a, comet.isMeteor ? 7 : 10, comet.isMeteor ? 0.62 : 0.9, comet.vel.clone().normalize());
  if (state.health <= 0) kill('impact');
}

function spawnShowerMeteor() {
  const side = Math.floor(Math.random() * 4);
  const start = new THREE.Vector3(
    side === 0 ? -36 : side === 1 ? 36 : randomBetween(-28, 28),
    side === 2 ? -24 : side === 3 ? 24 : randomBetween(-18, 18),
    0
  );
  let target = state.planetPos.clone().add(new THREE.Vector3(randomBetween(-9, 9), randomBetween(-7, 7), 0));
  if (target.distanceTo(state.planetPos) < 4.5) target.add(randomUnitVector().multiplyScalar(5.2));
  spawnComet({
    start,
    dir: target.sub(start).normalize(),
    isMeteor: true,
    speed: randomBetween(10.5, 13.2),
    damage: randomBetween(20, 35),
    impulse: 1.6,
  });
}

function updateMeteorShower() {
  if (!state?.meteorShower || state.dead || tutorial.active) return;
  const shower = state.meteorShower;
  if (state.time < shower.startAt) return;
  if (shower.remaining > 0 && state.time >= shower.nextAt) {
    spawnShowerMeteor();
    shower.remaining -= 1;
    shower.nextAt = state.time + randomBetween(0.55, 1.05);
  }
  if (state.time > shower.activeUntil && shower.remaining <= 0) state.meteorShower = null;
}

function updateComets(dt) {
  if (!state || state.dead || tutorial.active) return;
  updateMeteorShower();
  if (!state.pendingComet && state.time >= state.nextCometWarnAt) warnComet();
  if (state.pendingComet && state.time >= state.pendingComet.at) {
    spawnComet(state.pendingComet);
    state.pendingComet = null;
    state.nextCometWarnAt = state.time + randomBetween(20, 40);
  }
  for (let i = comets.length - 1; i >= 0; i -= 1) {
    const comet = comets[i];
    comet.age += dt;
    if (comet.isMeteor) {
      const accel = new THREE.Vector3();
      for (const sun of suns) {
        const toSun = sun.pos.clone().sub(comet.pos);
        const d2 = Math.max(toSun.lengthSq(), 8);
        accel.addScaledVector(toSun.normalize(), (sunGravityWeight(sun) * (1 + (state.levelGravityBonus || 0)) * 0.18) / d2);
      }
      if (accel.length() > 2.4) accel.setLength(2.4);
      comet.vel.addScaledVector(accel, dt);
    }
    comet.pos.addScaledVector(comet.vel, dt);
    comet.group.position.copy(comet.pos);
    comet.group.rotation.z = Math.atan2(comet.vel.y, comet.vel.x);
    comet.trail.geometry.setFromPoints([
      new THREE.Vector3(0, 0, 0),
      comet.vel.clone().normalize().multiplyScalar(comet.isMeteor ? -3.8 : -5.6),
    ]);
    comet.glow.material.opacity = 0.22 + Math.sin(state.time * 12) * 0.08;
    if (comet.pos.distanceTo(state.planetPos) < 0.95) {
      triggerCometImpact(comet);
      removeComet(comet);
      comets.splice(i, 1);
      continue;
    }
    const burned = suns.some((sun) => comet.pos.distanceTo(sun.pos) < sun.killRadius + 0.65);
    if (burned || comet.age > 7 || Math.abs(comet.pos.x) > 42 || Math.abs(comet.pos.y) > 28) {
      removeComet(comet);
      comets.splice(i, 1);
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
  let cold = 0;
  let chaos = 0;
  let totalDamage = 0;
  let activeDamageType = '';
  let activeDamageAmount = 0;
  let reducedDamageType = '';

  planet.position.copy(pos);
  planet.updateMatrixWorld();
  planet.getWorldPosition(tempPlanetWorldPos);

  for (const sun of suns) {
    sun.group.updateMatrixWorld();
    sun.group.getWorldPosition(tempSunWorldPos);
    sun.worldPos.copy(tempSunWorldPos);
    const toSun = tempSunWorldPos.clone().sub(tempPlanetWorldPos);
    const d = Math.max(toSun.length(), 0.0001);
    const dir = toSun.divideScalar(d);
    sun.lastDistance = d;
    if (d < nearest) {
      nearest = d;
      nearestSun = sun;
    }
    if (d <= sun.killRadius && d < fatalDistance) {
      fatalCandidate = sun;
      fatalDistance = d;
    }
    const d2 = Math.max(d * d, 3.8);
    const pull = (sunGravityWeight(sun) * state.difficulty * (1 + (state.levelGravityBonus || 0))) / d2;
    accel.addScaledVector(dir, pull);

    if (d <= sun.auraRadius) {
      const intensity = THREE.MathUtils.clamp((sun.auraRadius - d) / Math.max(0.001, sun.auraRadius - sun.killRadius), 0, 1);
      const shaped = intensity ** 1.35;
      const mode = modes[state.mode];
      const modeMultiplier = sun.dangerType === 'heat' ? mode.heatDamage
        : sun.dangerType === 'cold' ? mode.coldDamage : mode.chaosDamage;
      const peakDamage = sun.dangerType === 'heat' ? 48 : sun.dangerType === 'cold' ? 40 : 44;
      const damage = THREE.MathUtils.lerp(2.2, peakDamage, shaped) * modeMultiplier * (1 + (state.levelAuraBonus || 0));
      const threat = THREE.MathUtils.clamp(shaped * modeMultiplier, 0, 1.4);
      if (shaped > 0.35 && modeMultiplier <= 0.55) reducedDamageType = sun.dangerType;
      if (sun.dangerType === 'heat') heat = Math.max(heat, threat);
      else if (sun.dangerType === 'cold') cold = Math.max(cold, threat);
      else chaos = Math.max(chaos, threat);
      totalDamage += damage;
      if (damage > activeDamageAmount) {
        activeDamageAmount = damage;
        activeDamageType = sun.dangerType;
      }
    }
  }

  for (const anchor of state.anchors) {
    const age = anchor.age / ANCHOR_LIFE;
    const envelope = Math.sin((1 - age) * Math.PI * 0.5) ** 0.75;
    const toAnchor = anchor.pos.clone().sub(pos);
    const distance = Math.max(toAnchor.length(), 0.001);
    const falloff = Math.max(distance, 1.35) ** 1.9;
    accel.addScaledVector(toAnchor.divideScalar(distance), THREE.MathUtils.clamp((15.0 * modes[state.mode].anchorPull * envelope) / falloff, 0, 5.0));
  }

  const centerPull = pos.clone().multiplyScalar(-0.006 - Math.max(0, pos.length() - 20) * 0.0015);
  accel.add(centerPull);
  if (accel.length() > 8.0) accel.setLength(8.0);
  vel.addScaledVector(accel, dt);
  const maxSpeed = Math.min(18.5, 10.6 + state.difficulty * 2.6);
  if (vel.length() > maxSpeed) vel.setLength(maxSpeed);
  vel.multiplyScalar(PLANET_DAMPING);
  pos.addScaledVector(vel, dt);

  const speed = vel.length();
  const mode = modes[state.mode];
  const auraActive = totalDamage > 0;
  const voidOutside = pos.length() > OUTER_SAFE_RADIUS || nearest > VOID_SUNLIGHT_RADIUS;
  state.voidExposure = voidOutside
    ? state.voidExposure + dt
    : Math.max(0, state.voidExposure - dt * 1.8);
  const voidRamp = THREE.MathUtils.clamp((state.voidExposure - VOID_DAMAGE_DELAY) / 11, 0, 1);
  const voidThreat = THREE.MathUtils.clamp((state.voidExposure - 1.2) / 10, 0, 1);
  const voidDamage = voidRamp > 0 ? (1.5 + 17 * (voidRamp ** 1.35)) : 0;
  const graceFactor = state.grace > 0 ? 0.28 : 1;
  if (auraActive) {
    const damage = totalDamage * graceFactor * dt;
    state.health = Math.max(0, state.health - damage);
    state.damageFlash = Math.max(state.damageFlash, THREE.MathUtils.clamp(damage * 0.09 + activeDamageAmount * 0.012, 0.18, 0.85));
    state.lastDamageType = activeDamageType;
    state.shake = Math.max(state.shake, THREE.MathUtils.clamp(Math.max(heat, cold, chaos) * 0.7, 0, 0.85));
    if (state.time - state.lastProximityWarn > 0.7) {
      state.lastProximityWarn = state.time;
      state.flashOmen = activeDamageType === 'heat' ? 'HEAT RISING'
        : activeDamageType === 'cold' ? 'FREEZE WARNING' : 'ORBIT UNSTABLE';
      state.flashOmenUntil = state.time + 0.7;
    }
  }
  if (voidDamage > 0) {
    const damage = voidDamage * graceFactor * dt;
    state.health = Math.max(0, state.health - damage);
    state.damageFlash = Math.max(state.damageFlash, THREE.MathUtils.clamp(0.16 + voidRamp * 0.55, 0.16, 0.72));
    state.lastDamageType = 'cold';
    cold = Math.max(cold, 0.28 + voidRamp * 0.82);
    if (state.time - state.lastProximityWarn > 1.1) {
      state.lastProximityWarn = state.time;
      state.flashOmen = state.voidExposure > 8 ? 'NO SUNLIGHT DETECTED' : 'VOID COLD RISING';
      state.flashOmenUntil = state.time + 0.9;
    }
  } else if (voidThreat > 0) {
    cold = Math.max(cold, voidThreat * 0.42);
  }
  if (!auraActive && !voidOutside) {
    state.health = THREE.MathUtils.clamp(state.health + 4.8 * mode.regen * dt, 0, 100);
  }
  state.damageFlash = Math.max(0, state.damageFlash - dt * 1.8);
  const safe = !auraActive && !voidOutside;
  const signalRegen = (5.8 + (safe ? 7.2 : 1.3) + (state.health > 72 ? 2.2 : 0)) * mode.regen * 1.2;
  state.signal = THREE.MathUtils.clamp(state.signal + signalRegen * dt, 0, MAX_SIGNAL);

  if (voidOutside && !activeDamageType) activeDamageType = 'cold';
  const proximityIntensity = Math.max(heat, cold, chaos, voidThreat * 0.72);
  const speedChaos = THREE.MathUtils.smoothstep(speed, 8.8, 13.2) * 0.34;
  chaos = Math.max(chaos, speedChaos);
  state.lastThreat = { burn: heat, cold, chaos, safe, nearest, speed, proximityIntensity, damageType: activeDamageType };

  if (state.time - state.lastModeBlock > 1.25) {
    if (state.mode === 'shield' && reducedDamageType === 'heat') {
      state.lastModeBlock = state.time;
      showToast('SOLAR AURA HELD', 0.75);
    } else if (state.mode === 'hibernation' && reducedDamageType === 'cold') {
      state.lastModeBlock = state.time;
      showToast('DEEP COLD HELD', 0.75);
    } else if (state.mode === 'observatory' && reducedDamageType === 'chaos') {
      state.lastModeBlock = state.time;
      showToast('RESONANCE DAMPED', 0.75);
    }
  }

  if (state.prevNearest < (nearestSun?.killRadius ?? 2.5) + 0.75) state.nearMissArmed = true;
  if (state.nearMissArmed && nearest > (nearestSun?.killRadius ?? 2.5) + 2.1 && nearest > state.prevNearest && state.time - state.lastNearMiss > 2.3) {
    state.nearMissArmed = false;
    triggerNearMiss(pos);
  }
  state.prevNearest = nearest;

  if (auraActive) {
    if (state.time - state.lastDangerCue > 3.2) {
      state.lastDangerCue = state.time;
      playCue('danger');
    }
  }

  let cause = null;
  if (fatalCandidate) cause = fatalCandidate.deathCause;
  else if (state.health <= 0) {
    cause = state.lastDamageType === 'heat' ? 'burned'
      : state.lastDamageType === 'cold' ? 'frozen'
        : state.lastDamageType === 'chaos' ? 'scattered' : 'collapse';
  }

  if (DEBUG_DEATH_CAUSE) {
    if (state.time - (state.lastDebugLog || 0) > 0.5 || (cause && !state.dead)) {
      state.lastDebugLog = state.time;
      const activeDanger = heat >= cold && heat >= chaos ? 'heat' : cold >= chaos ? 'cold' : 'chaos';
      console.log('[death-debug]', {
        nearestSun: nearestSun?.id ?? null,
        nearestDistance: Number(nearest.toFixed(2)),
        proximityIntensity: Number(proximityIntensity.toFixed(2)),
        activeDanger,
        fatalCandidate: fatalCandidate?.id ?? null,
        fatalCandidateCause: fatalCandidate?.deathCause ?? null,
        nextCause: cause,
        storedDeathCause: state.deathCause || null,
      });
    }
  }

  if (cause && tutorial.active) {
    cause = null;
    state.health = Math.max(state.health, 45);
    state.damageFlash = Math.max(state.damageFlash, 0.35);
    if (fatalCandidate) state.planetVel.addScaledVector(state.planetPos.clone().sub(fatalCandidate.pos).normalize(), 1.8);
  }
  if (cause) kill(cause);

  updateHud(heat, cold, chaos, makeWarnings(heat, cold, chaos, nearest, speed));
}

function makeWarnings(burn, cold, chaos, nearest, speed) {
  if (state.flashOmen && state.time < state.flashOmenUntil) return [state.flashOmen];
  const messages = [];
  const observed = state.mode === 'observatory';
  if (state.grace > 0) messages.push('CIVILIZATION DREAMING');
  if (state.voidExposure > VOID_DAMAGE_DELAY) messages.push(state.voidExposure > 8 ? 'NO SUNLIGHT DETECTED' : 'VOID COLD RISING');
  if (burn > 0.55) messages.push(observed ? 'HEAT RISING — ALPHA AURA' : 'HEAT RISING');
  if (cold > 0.5) messages.push(observed ? 'FREEZE WARNING — BETA AURA' : 'FREEZE WARNING');
  if (chaos > 0.54 || speed > 9.2) messages.push(observed ? 'ORBIT UNSTABLE — GAMMA PULL' : 'ORBIT UNSTABLE');
  if (state.health < 18) messages.push('HEALTH CRITICAL');
  if (!messages.length && burn < 0.18 && cold < 0.2 && chaos < 0.25) messages.push(observed ? 'STABLE WINDOW — HEALTH RECOVERING' : state.health > 82 ? 'CIVILIZATION DREAMING' : 'STABLE WINDOW');
  if (state.focusCooldown <= 0 && state.days > 4 && messages.length < 2) messages.push('FOCUS READY — SLOW TIME');
  return messages.length ? messages.slice(0, 2) : ['STABLE WINDOW'];
}

function updateHud(burn, cold, chaos, warnings) {
  daysEl.textContent = String(state.days);
  runModeReadout.textContent = state.runMode === 'level' ? 'LEVEL' : 'SURVIVAL';
  levelRow.style.display = state.runMode === 'level' ? '' : 'none';
  nextLevelRow.style.display = state.runMode === 'level' ? '' : 'none';
  if (state.runMode === 'level') {
    const next = LEVELS[state.nextLevelIndex];
    levelReadout.textContent = state.currentLevel > 0 ? `${state.currentLevel}` : '0';
    nextLevelReadout.textContent = next ? `${next.day}D` : 'MAX';
  }
  healthEl.textContent = `${Math.ceil(state.health)}%`;
  healthFill.style.width = `${Math.max(0, state.health)}%`;
  healthBar.classList.toggle('flash', state.damageFlash > 0.05);
  modeReadout.textContent = modes[state.mode].label;
  modeName.textContent = `MODE: ${modes[state.mode].label}`;
  modeEffect.textContent = modes[state.mode].effect;
  focusStatus.textContent = state.focusCooldown > 0 ? `FOCUS ${Math.ceil(state.focusCooldown)}S` : 'FOCUS READY';
  warningsEl.textContent = warnings.join(' / ');
  heatMeter.style.width = `${Math.max(8, burn * 100)}%`;
  coldMeter.style.width = `${Math.max(8, cold * 100)}%`;
  chaosMeter.style.width = `${Math.max(8, chaos * 100)}%`;
  signalMeter.style.width = `${Math.max(8, (state.signal / MAX_SIGNAL) * 100)}%`;
  document.body.classList.toggle('danger-heat', state.lastThreat.damageType === 'heat');
  document.body.classList.toggle('danger-cold', state.lastThreat.damageType === 'cold');
  document.body.classList.toggle('danger-chaos', state.lastThreat.damageType === 'chaos');
  document.body.classList.toggle('danger-supernova', state.supernovaFlash > 0);
  document.body.classList.toggle('low-health', state.health < 20 && !state.dead);
  dangerVignette.style.setProperty('--danger-alpha', String(THREE.MathUtils.clamp(state.damageFlash + state.lastThreat.proximityIntensity * 0.42 + state.supernovaFlash, 0, 0.95)));
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
  state.deathFreeze = 0.2;
  state.deathToken += 1;
  state.deathCause = cause;
  state.supernovaFlash = Math.max(state.supernovaFlash, 0.9);
  state.shake = Math.max(state.shake, 1.2);
  state.lastDamageType = cause === 'burned' ? 'heat' : cause === 'frozen' ? 'cold' : 'chaos';
  const previousBest = state.runMode === 'level' ? getHighestLevel() : getHighScore();
  if (state.runMode === 'level') setHighestLevel(state.currentLevel);
  else setHighScore(state.days);
  state.deathWasHighScore = state.runMode === 'level' ? state.currentLevel > previousBest : state.days > previousBest;
  const days = state.days;
  const causeLabel = {
    burned: 'Burned',
    frozen: 'Frozen',
    scattered: 'Chaos',
    collapse: 'Collapse',
    impact: 'Impact',
  }[cause];
  const titles = {
    burned: 'THE DAWN CONSUMED YOU',
    frozen: 'THE LAST CITY FROZE',
    scattered: days % 2 ? 'GRAVITY FORGOT YOU' : 'THE HIDDEN MATH WON',
    collapse: 'NO ONE WILL REMEMBER THE ORBIT',
    impact: 'THE SKY STRUCK BACK',
  };
  const messagePools = {
    burned: ['The red sun taught the oceans to boil.', 'The atmosphere became a funeral flame.', 'The cities glowed once, then vanished.'],
    frozen: ['Warmth became a myth.', 'The oceans stopped remembering waves.', 'The last signal arrived as ice.'],
    scattered: ['Your orbit became a rumor.', 'Resonance completed its sentence.', 'The world missed itself by a fraction.'],
    collapse: ['Civilization understood too late.', 'The last observatory blinked twice.', 'History became a closed set.'],
    impact: ['The comet did not ask permission.', 'The sky remembered violence.', 'A bright stone ended the calculation.'],
  };
  const messages = Object.fromEntries(Object.entries(messagePools).map(([key, pool]) => [key, pool[days % pool.length]]));
  deathScreen.dataset.cause = cause;
  deathTitle.textContent = titles[cause];
  deathStats.textContent = state.runMode === 'level'
    ? `Level ${state.currentLevel} ${state.currentLevel ? getLevelName(state.currentLevel) : 'UNREACHED'} / ${days} days survived.`
    : `Survival Mode: your civilization survived ${days} days.`;
  deathMessage.textContent = messages[cause];
  deathHighScore.textContent = state.runMode === 'level'
    ? `Cause ${causeLabel} / Highest level ${getHighestLevel()}`
    : `Cause ${causeLabel} / High score ${getHighScore()}`;
  shareStatus.textContent = state.deathWasHighScore ? 'New high score. The dawn is annoyed.' : '';
  const token = state.deathToken;
  window.setTimeout(() => {
    if (state?.dead && state.deathToken === token) deathScreen.classList.remove('hidden');
  }, 200);
  playCue('death');
  if (state.deathWasHighScore) window.setTimeout(() => playCue('highScore'), 420);
}

async function copyShareText() {
  if (!state || !navigator.clipboard) return;
  const url = `${window.location.origin}${window.location.pathname}`;
  const text = state.runMode === 'level'
    ? `I reached Level ${state.currentLevel} after ${state.days} days in Three Suns: Chaotic Dawn ${url}`
    : `I survived ${state.days} days in Three Suns: Chaotic Dawn ${url}`;
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
    mid.z = 0.8 + Math.sin(state.time * 2.2 + i) * 0.12;
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
  const { burn, cold, chaos, proximityIntensity: pI = 0 } = state.lastThreat;
  const modeColor = modes[state.mode].color;
  cloudLayer.rotation.y += dt * 0.35;
  atmosphere.material.color.setHex(modeColor);
  atmosphere.material.opacity = 0.13 + Math.max(burn, cold, chaos) * 0.12 + pI * 0.22;
  shieldRing.material.opacity = state.mode === 'shield' ? 0.86 : 0;
  hibernationShell.material.opacity = state.mode === 'hibernation' ? 0.34 : 0;
  observatoryArc.material.opacity = state.mode === 'observatory' ? 0.9 : 0;
  observatoryArc.rotation.z += dt * 1.3;
  heatCracks.material.opacity = burn * 0.62 + pI * 0.38;
  frostTint.material.opacity = cold * 0.18 + (state.mode === 'hibernation' ? 0.08 : 0) + pI * 0.14;
  chaosRing.material.opacity = chaos * 0.54 + pI * 0.32;
  chaosRing.rotation.z += dt * (2.4 + chaos * 6);
  chaosRing.position.x = Math.sin(state.time * 41) * chaos * 0.035;
  chaosRing.position.y = Math.cos(state.time * 37) * chaos * 0.035;
  const stress = Math.max(0, 1 - state.health / 100);
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
  const drift = state.dead ? 0 : 0.18;
  camera.position.x = Math.sin(state.time * 37) * shake + Math.sin(state.time * 0.17) * drift;
  camera.position.y = Math.cos(state.time * 31) * shake + Math.cos(state.time * 0.13) * drift;
  camera.position.z = 56 + Math.sin(state.time * 18) * shake;
  camera.lookAt(0, 0, 0);
}

function animate() {
  requestAnimationFrame(animate);
  const realDt = Math.min(clock.getDelta(), MAX_DT);
  updateMusic();
  let dt = realDt;
  updateTutorial(realDt);
  if (tutorial.active && !state.dead) dt *= 0.18;
  if (!state.dead && state.health < 20) dt *= 0.94;
  if (state.paused && !state.dead) {
    updateCamera(0);
    if (window.animateVibeJamPortals) window.animateVibeJamPortals();
    renderer.render(scene, camera);
    return;
  }
  if (state.dead) {
    if (state.deathFreeze > 0) {
      state.deathFreeze = Math.max(0, state.deathFreeze - realDt);
      dt = 0;
    } else {
      dt *= 0.12;
    }
  }
  if (state.focus > 0 && !state.dead) {
    dt *= 0.36;
    state.focus -= dt / 0.36;
  }
  if (state.focusCooldown > 0) state.focusCooldown = Math.max(0, state.focusCooldown - dt);

  state.time += dt;
  updateSunPositions(state.time, dt);
  checkSunCollisions();
  fadeTrail(planetTrail, state.highQuality ? 0.983 : 0.94);
  sunTrails.forEach((trail) => fadeTrail(trail, state.highQuality ? 0.987 : 0.93));
  updateNearMissEffects(dt);
  updateSupernovaEffects(dt);
  updateExplosionParticles(dt);
  updateLevelBanner();
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
    state.difficulty *= 0.85 + THREE.MathUtils.smoothstep(state.days, 0, 25) * 0.15;
    state.difficulty *= 1 + THREE.MathUtils.smoothstep(state.days, 60, 110) * 0.1;
    updateLevelMode();
    updateAnchors(dt);
    physicsStep(dt);
    updateComets(dt);
    planet.position.copy(state.planetPos);
    window.currentSpeed = Number(state.planetVel.length().toFixed(2));
    planetCore.rotation.y += dt * 1.3;
    planetCore.rotation.x += dt * 0.27;
    civRing.rotation.z += dt * (1.3 + (100 - state.health) * 0.012);
    civRing.material.opacity = 0.42 + state.health / 230 + Math.sin(state.time * 8) * 0.05;
    pushTrail(planetTrail, state.planetPos, 0.95);
    if (state.planetVel.length() > 6) {
      pushTrail(planetTrail, state.planetPos.clone().addScaledVector(state.planetVel, -0.018), 0.46);
    }
    updatePlanetVisuals(dt);
    updateTutorialHighlight();
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
  if (event.target.closest('#tutorial-box')) return;
  placeAnchor(event.clientX, event.clientY);
}, { passive: true });
window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    if (tutorial.active) {
      finishTutorial();
    } else if (!infoScreen.classList.contains('hidden') || !storyScreen.classList.contains('hidden')) {
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
restartButton.addEventListener('click', () => resetGame());
nextButton.addEventListener('click', nextGame);
shareButton.addEventListener('click', copyShareText);
resumeButton.addEventListener('click', () => togglePause(false));
pauseRestartButton.addEventListener('click', () => resetGame());
muteButton.addEventListener('click', toggleMute);
pauseNextButton.addEventListener('click', nextGame);
pauseCopyButton.addEventListener('click', copyShareText);
controlsButton.addEventListener('click', () => { controlsText.hidden = !controlsText.hidden; });
portalBadge.addEventListener('click', nextGame);
runModeToggle.addEventListener('click', () => startRunMode((state?.runMode || selectedRunMode) === 'level' ? 'survival' : 'level'));
tutorialSkip.addEventListener('click', finishTutorial);
tutorialGotIt.addEventListener('click', advanceTutorial);
document.querySelector('#info-button').addEventListener('click', openInfoScreen);
document.querySelector('#story-button').addEventListener('click', openStoryScreen);
document.querySelector('#leaderboard-button').addEventListener('click', openLeaderboard);
document.querySelector('#leaderboard-close-button').addEventListener('click', closeOverlays);
document.querySelector('#leaderboard-clear-button').addEventListener('click', () => {
  localStorage.removeItem(LEADERBOARD_KEY);
  renderLeaderboard();
});
publishButton.addEventListener('click', showPublishForm);
publishConfirmButton.addEventListener('click', confirmPublish);
publishNameInput.addEventListener('keydown', (e) => { if (e.code === 'Enter') { e.preventDefault(); confirmPublish(); } });
document.querySelector('#pause-info-button').addEventListener('click', openInfoScreen);
document.querySelector('#pause-story-button').addEventListener('click', openStoryScreen);
document.querySelector('#info-resume-button').addEventListener('click', closeOverlays);
infoSurvivalButton.addEventListener('click', () => startRunMode('survival'));
infoLevelButton.addEventListener('click', () => startRunMode('level'));
infoTutorialButton.addEventListener('click', () => { closeOverlays(); startTutorial(true); });
infoStoryButton.addEventListener('click', openStoryScreen);
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

muteButton.textContent = muted ? 'Unmute' : 'Mute';
initPortals();
resize();
resetGame();
animate();
startTutorial(false);
