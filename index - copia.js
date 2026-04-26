/* ════════════════════════════════════════════════════════
       FRASES DE PRUEBA TTS (configurables)
    ════════════════════════════════════════════════════════ */
const TTS_TEST_PHRASES = [
  "Please confirm the delivery date for this shipment",
  "We need to update the inventory records as soon as possible",
  "Could you check the tracking number for this package",
  "The warehouse is running low on supplies and needs restocking",
  "I will send you the invoice once the order is processed",
  "Please verify the quantities before signing the receiving report",
  "The shipment is scheduled to arrive at the distribution center tomorrow morning",
  "Can you provide me with the latest status of our outstanding orders",
  "We should schedule a meeting to discuss the logistics optimization plan",
  "The client has requested a change in the delivery address for their order",
  "Please make sure all items are properly labeled before shipping",
  "The transportation costs have increased significantly this quarter"
];

/* ════════════════════════════════════════════════════════
       RUTAS DE RECURSOS LOCALES Y CONFIGURACIÓN
    ════════════════════════════════════════════════════════ */
const APP_CONFIG = {
  VERSION: 10,
  PROGRAM_NAME: 'Gestión Logística'
};

const ASSETS = {
  autorImg: './Autor_Speaking_Challenge.png',
  banderaImg: './Bandera_Speaking_Challenge.png',
  videoCreditos: './creditos_speaking_challenge.mp4',
  videoJuego: './video_speaking_challenge.mp4'
};

const FRASES_DB = [
  {
    id: 1,
    ra: '260101027-01',
    ra_label: 'Clasificar datos',
    en: 'Sort data by delivery date',
    es: 'Ordenar datos por fecha de entrega',
    nivel: 'Bajo',
  },
  {
    id: 2,
    ra: '260101027-01',
    ra_label: 'Clasificar datos',
    en: 'Group items by product category',
    es: 'Agrupar artículos por categoría',
    nivel: 'Medio',
  },
  {
    id: 3,
    ra: '260101027-01',
    ra_label: 'Clasificar datos',
    en: 'Classify shipments by priority level',
    es: 'Clasificar envíos por prioridad',
    nivel: 'Medio',
  },
  {
    id: 4,
    ra: '260101027-01',
    ra_label: 'Clasificar datos',
    en: 'Tag records with status codes',
    es: 'Etiquetar registros con códigos',
    nivel: 'Alto',
  },
  {
    id: 5,
    ra: '260101027-01',
    ra_label: 'Clasificar datos',
    en: 'Separate inbound from outbound',
    es: 'Separar entradas de salidas',
    nivel: 'Bajo',
  },
  {
    id: 6,
    ra: '260101027-02',
    ra_label: 'Organizar información',
    en: 'Store inventory data in tables',
    es: 'Almacenar inventario en tablas',
    nivel: 'Bajo',
  },
  {
    id: 7,
    ra: '260101027-02',
    ra_label: 'Organizar información',
    en: 'Update the logistics spreadsheet',
    es: 'Actualizar la hoja de logística',
    nivel: 'Medio',
  },
  {
    id: 8,
    ra: '260101027-02',
    ra_label: 'Organizar información',
    en: 'Archive old shipping records',
    es: 'Archivar registros de envíos viejos',
    nivel: 'Bajo',
  },
  {
    id: 9,
    ra: '260101027-02',
    ra_label: 'Organizar información',
    en: 'Create a database for tracking orders',
    es: 'Crear base de datos para pedidos',
    nivel: 'Medio',
  },
  {
    id: 10,
    ra: '260101027-02',
    ra_label: 'Organizar información',
    en: 'Merge data from multiple warehouses',
    es: 'Combinar datos de múltiples fuentes',
    nivel: 'Alto',
  },
  {
    id: 11,
    ra: '260101027-03',
    ra_label: 'Verificar calidad',
    en: 'Check for duplicate entries in the log',
    es: 'Verificar entradas duplicadas',
    nivel: 'Bajo',
  },
  {
    id: 12,
    ra: '260101027-03',
    ra_label: 'Verificar calidad',
    en: 'Validate the shipment manifest',
    es: 'Validar el manifiesto de envío',
    nivel: 'Medio',
  },
  {
    id: 13,
    ra: '260101027-03',
    ra_label: 'Verificar calidad',
    en: 'Detect errors in the data set',
    es: 'Detectar errores en el conjunto',
    nivel: 'Medio',
  },
  {
    id: 14,
    ra: '260101027-03',
    ra_label: 'Verificar calidad',
    en: 'Cross-check orders with invoices',
    es: 'Contrastar pedidos con facturas',
    nivel: 'Alto',
  },
  {
    id: 15,
    ra: '260101027-03',
    ra_label: 'Verificar calidad',
    en: 'Audit the inventory count accuracy',
    es: 'Auditar la exactitud del conteo',
    nivel: 'Alto',
  },
  {
    id: 16,
    ra: '260101027-04',
    ra_label: 'Reportar resultados',
    en: 'Generate the daily logistics report',
    es: 'Generar el reporte diario logístico',
    nivel: 'Medio',
  },
  {
    id: 17,
    ra: '260101027-04',
    ra_label: 'Reportar resultados',
    en: 'Present your findings to the manager',
    es: 'Presentar hallazgos al gerente',
    nivel: 'Medio',
  },
  {
    id: 18,
    ra: '260101027-04',
    ra_label: 'Reportar resultados',
    en: 'Submit the monthly KPI summary now',
    es: 'Enviar resumen mensual de KPIs',
    nivel: 'Alto',
  },
  {
    id: 19,
    ra: '260101027-04',
    ra_label: 'Reportar resultados',
    en: 'Share the analysis with the team',
    es: 'Compartir el análisis con el equipo',
    nivel: 'Bajo',
  },
  {
    id: 20,
    ra: '260101027-04',
    ra_label: 'Reportar resultados',
    en: 'Export all results to a PDF file',
    es: 'Exportar todos los resultados a PDF',
    nivel: 'Bajo',
  },
];

/* ════════════════════════════════════════════════════════
       MÓDULO JS-02: ESTADO GLOBAL DE LA APLICACIÓN
    ════════════════════════════════════════════════════════ */
const APP = {
  /* Configuración */
  mode: 'prueba',
  numTeams: 2,
  teams: [
    {
      name: 'Equipo 1',
      color: '#39A900',
      players: [
        { name: 'Manuel', scores: [] },
        { name: 'Aldo', scores: [] },
      ],
    },
    {
      name: 'Equipo 2',
      color: '#1565c0',
      players: [
        { name: 'Carlos', scores: [] },
        { name: 'Ana', scores: [] },
      ],
    },
  ],
  pMin: 30, // pronunciación mínima (%)
  pAcc: 70, // pronunciación aceptable (%)
  txtMin: 'Try again! Practice makes perfect!',
  txtAcc: 'Excellent! Great pronunciation! Keep it up!',
  reps: 3,
  showES: true,
  readRules: true,
  hoverRead: true,
  gameStartTime: null,
  winnerPhrase: 'Congratulations! You are the champion!',
  voice: '',
  rate: 0.9,
  pitch: 1.0,
  skin: 'default',
  jsonFile: null,
  jsonFilename: '',
  /* Estado del juego */
  frases: [], // frases activas de la sesión
  qIdx: 0, // índice de pregunta actual
  scores: {}, // {id: {teamIdx, playerIdx, puntaje, attempts}}
  turnTeam: 0, // equipo en turno
  turnPlayer: 0, // jugador en turno dentro del equipo
  recognition: null, // instancia SpeechRecognition permanente
  micReady: false, // micrófono pre-habilitado
  diceRolled: false, // ¿ya se tiraron los dados?
  currentAttempts: {}, // {id: número de intentos}
};

/* ════════════════════════════════════════════════════════
       MÓDULO JS-04: LETRAS FLOTANTES DE FONDO (HOME)
       Genera letras/fonemas del inglés flotando como decoración
    ════════════════════════════════════════════════════════ */
function initBgLetters() {
  const container = document.getElementById('bg-letters');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZth sh ch ph wh ing tion'.split(' ');
  container.innerHTML = '';
  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div');
    el.className = 'bg-letter';
    el.textContent = letters[Math.floor(Math.random() * letters.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.top = Math.random() * 100 + '%';
    el.style.fontSize = 40 + Math.random() * 100 + 'px';
    el.style.animationDuration = 14 + Math.random() * 20 + 's';
    el.style.animationDelay = -(Math.random() * 20) + 's';
    container.appendChild(el);
  }
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-05: NAVEGACIÓN ENTRE PANTALLAS
    ════════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function openModal(id) {
  document.getElementById(id).classList.add('open');
  // Cargar voces cuando se abra el modal de configuración
  if (id === 'modal-config') {
    setTimeout(loadVoices, 100);
    setTimeout(populateTtsPhrases, 150);
  }
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}
document.querySelectorAll('.modal-ov').forEach((ov) => {
  ov.addEventListener('click', (e) => {
    if (e.target === ov) ov.classList.remove('open');
  });
});
function showCredits() {
  const video = document.getElementById('creditos-video');
  if (video) {
    video.src = ASSETS.videoCreditos;
    video.load();
  }
  openModal('modal-creditos');
}

function showAutor() {
  const img = document.getElementById('autor-img');
  if (img) {
    img.src = ASSETS.autorImg;
  }
  openModal('modal-autor');
}

function showVideos() {
  const video = document.getElementById('video-container');
  if (video) {
    video.src = ASSETS.videoJuego;
    video.load();
  }
  openModal('modal-videos');
}

/* Tooltip para botones del menú */
function showTooltip(text) {
  const tip = document.getElementById('tooltip-box');
  if (tip) {
    tip.textContent = text;
    tip.classList.add('visible');
  }
}
function hideTooltip() {
  const tip = document.getElementById('tooltip-box');
  if (tip) tip.classList.remove('visible');
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-06: CONSTRUCTOR DE EQUIPOS EN CONFIGURACIÓN
    ════════════════════════════════════════════════════════ */
const TEAM_COLORS = ['#39A900', '#1565c0', '#e67e22', '#c0392b'];
const DEFAULT_PLAYERS = [
  ['Manuel', 'Aldo'],
  ['Carlos', 'Ana'],
];

/** Genera el bloque visual de configuración de equipos */
function updateTeamBlocks() {
  const n = parseInt(document.getElementById('cfg-num-teams').value);
  const wrap = document.getElementById('teams-builder');
  wrap.innerHTML = '';
  wrap.dataset.cols = n;

  for (let t = 0; t < n; t++) {
    const existingTeam = APP.teams[t];
    const color = existingTeam?.color || TEAM_COLORS[t];
    const existingPlayers =
      existingTeam?.players ||
      (DEFAULT_PLAYERS[t] || ['Jugador 1', 'Jugador 2']).map((nm) => ({ name: nm, scores: [] }));
    const existingName = existingTeam?.name || `Equipo ${t + 1}`;

    const block = document.createElement('div');
    block.className = 'team-block';
    block.id = `team-block-${t}`;
    block.style.borderLeftColor = color;
    block.innerHTML = `
      <div class="team-block-header" style="flex-wrap:wrap;gap:5px">
        <input type="color" class="team-color-picker" id="team-color-${t}"
          value="${color}" title="Color del equipo"
          oninput="onTeamColorChange(${t},this.value)">
        <input class="team-name-inp" id="team-name-${t}"
          value="${existingName}" placeholder="Nombre del equipo"
          style="flex:1;min-width:80px"
          oninput="document.getElementById('team-block-${t}').style.borderLeftColor=document.getElementById('team-color-${t}').value">
      </div>
      <div style="font-size:.58rem;color:var(--text2);margin:3px 0 5px">
        RGB: <span id="team-rgb-${t}">${color}</span>
      </div>
      <div class="players-list" id="players-list-${t}"
        ondragover="e=>e.preventDefault()"
        ondrop="handleListDrop(event,${t})"></div>
      <button class="btn-add-row" onclick="addPlayer(${t})">+ Agregar jugador</button>
    `;
    wrap.appendChild(block);
    existingPlayers.forEach((p, pi) => addPlayerRow(t, pi, p.name));
  }
}

function onTeamColorChange(teamIdx, color) {
  const block = document.getElementById(`team-block-${teamIdx}`);
  if (block) block.style.borderLeftColor = color;
  const rgb = document.getElementById(`team-rgb-${teamIdx}`);
  if (rgb) rgb.textContent = color;
}

/** Añade una fila de jugador al bloque de equipo */
function addPlayer(teamIdx) {
  const list = document.getElementById(`players-list-${teamIdx}`);
  const idx = list.children.length;
  addPlayerRow(teamIdx, idx, '');
}
let _dragSrcId = null;

function addPlayerRow(teamIdx, playerIdx, name) {
  const list = document.getElementById(`players-list-${teamIdx}`);
  if (!list) return;
  const uid = `prow-${teamIdx}-${Date.now()}-${playerIdx}`;
  const row = document.createElement('div');
  row.className = 'player-row';
  row.id = uid;
  row.draggable = true;
  row.innerHTML = `
    <span class="drag-handle" title="Arrastrar para reordenar">⠿</span>
    <input class="player-inp" value="${name.replace(/"/g, '&quot;')}" placeholder="Nombre jugador">
    <button class="btn-sm-icon btn-del-p" onclick="removePlayerRow(${teamIdx},'${uid}')">✕</button>
  `;

  // ── Drag & Drop ──
  row.addEventListener('dragstart', (e) => {
    _dragSrcId = uid;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', uid);
    setTimeout(() => row.classList.add('dragging'), 0);
    list.classList.add('drag-active');
  });
  row.addEventListener('dragend', () => {
    row.classList.remove('dragging');
    document.querySelectorAll('.players-list').forEach((l) => l.classList.remove('drag-active'));
    document.querySelectorAll('.player-row').forEach((r) => r.classList.remove('drag-over'));
  });
  row.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    document.querySelectorAll('.player-row').forEach((r) => r.classList.remove('drag-over'));
    row.classList.add('drag-over');
  });
  row.addEventListener('dragleave', () => row.classList.remove('drag-over'));
  row.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    row.classList.remove('drag-over');
    const fromId = e.dataTransfer.getData('text/plain');
    const fromEl = document.getElementById(fromId);
    if (fromEl && fromEl !== row) {
      const parent = row.parentNode;
      const rows = [...parent.children];
      const fi = rows.indexOf(fromEl);
      const ti = rows.indexOf(row);
      if (fi > -1 && ti > -1) {
        if (fi < ti) parent.insertBefore(fromEl, row.nextSibling);
        else parent.insertBefore(fromEl, row);
      }
    }
  });

  list.appendChild(row);
}

function handleListDrop(e, teamIdx) {
  e.preventDefault();
}
function removePlayerRow(teamIdx, rowId) {
  const list = document.getElementById(`players-list-${teamIdx}`);
  if (list.children.length <= 1) {
    showToast('⚠️ Debe haber al menos 1 jugador por equipo');
    return;
  }
  const row = document.getElementById(rowId);
  if (row) row.remove();
}

/** Llena la tabla de frases en config */
function populateConfigFrases() {
  const tbody = document.getElementById('cfg-frases-body');
  tbody.innerHTML = '';
  // Usar preguntas del JSON si están cargadas, si no usar FRASES_DB
  const frases = APP.jsonFile || FRASES_DB;
  frases.forEach((f, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i + 1}</td><td>${f.en}</td><td>${f.es || ''}</td><td style="font-size:.63rem">${f.ra_label || f.ra || ''}</td><td><span class="badge-nivel ${f.nivel === 'Bajo' ? 'n-bajo' : f.nivel === 'Medio' ? 'n-medio' : f.nivel === 'Alto' ? 'n-alto' : 'n-medio'}">${f.nivel || 'Medio'}</span></td>`;
    tbody.appendChild(tr);
  });
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-07: GUARDAR CONFIGURACIÓN
    ════════════════════════════════════════════════════════ */
function saveConfig() {
  const numTeams = parseInt(document.getElementById('cfg-num-teams').value);
  APP.numTeams = numTeams;
  APP.mode = document.getElementById('cfg-mode').value;
  APP.pMin = parseInt(document.getElementById('cfg-pmin').value);
  APP.pAcc = parseInt(document.getElementById('cfg-pacc').value);
  APP.txtMin = document.getElementById('cfg-txt-min').value.trim() || 'Try again!';
  APP.txtAcc = document.getElementById('cfg-txt-acc').value.trim() || 'Excellent!';
  APP.reps = parseInt(document.getElementById('cfg-reps').value) || 3;
  APP.readRules = document.getElementById('cfg-read-rules').value === '1';
  APP.hoverRead = document.getElementById('cfg-hover-read').value === '1';
  APP.winnerPhrase = document.getElementById('cfg-winner-phrase').value.trim();
  APP.showES = document.getElementById('cfg-show-es').value === '1';
  APP.voice = document.getElementById('cfg-voice').value;
  APP.rate = parseFloat(document.getElementById('cfg-rate').value) || 0.9;
  APP.pitch = parseFloat(document.getElementById('cfg-pitch').value) || 1.0;
  APP.skin = document.getElementById('cfg-skin').value || 'default';

  // Validar pMin < pAcc
  if (APP.pMin >= APP.pAcc) {
    showToast('⚠️ La pronunciación mínima debe ser menor a la aceptable');
    return;
  }

  // Reconstruir equipos desde el formulario
  APP.teams = [];
  for (let t = 0; t < numTeams; t++) {
    const nameEl = document.getElementById(`team-name-${t}`);
    const teamName = nameEl ? nameEl.value.trim() || `Equipo ${t + 1}` : `Equipo ${t + 1}`;
    const list = document.getElementById(`players-list-${t}`);
    const players = [];
    if (list) {
      list.querySelectorAll('.player-inp').forEach((inp) => {
        const n = inp.value.trim();
        if (n) players.push({ name: n, scores: [] });
      });
    }
    if (players.length === 0) players.push({ name: `Jugador ${t + 1}`, scores: [] });
    const colorEl = document.getElementById(`team-color-${t}`);
    const teamColor = colorEl ? colorEl.value : TEAM_COLORS[t];
    APP.teams.push({ name: teamName, color: teamColor, players });
  }

  closeModal('modal-config');
  showToast('✅ Configuración guardada correctamente');
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-08: INICIALIZACIÓN DEL JUEGO
    ════════════════════════════════════════════════════════ */
function initGame() {
  // Verificar navegador al iniciar
  const check = checkBrowserSupport();
  if (check.warning && APP.mode !== 'prueba') {
    showToast(check.warning);
  }

  // Construir lista de frases - usar JSON si está cargado, si no FRASES_DB
  let frases = APP.jsonFile ? [...APP.jsonFile] : [...FRASES_DB];
  if (document.getElementById('cfg-nivel') && document.getElementById('cfg-nivel').value)
    frases = frases.filter((f) => f.nivel === document.getElementById('cfg-nivel').value);
  const countSel = document.getElementById('cfg-count');
  const count = countSel ? parseInt(countSel.value) || 20 : 20;
  frases = frases.slice(0, count);
  const orderSel = document.getElementById('cfg-order');
  if (orderSel && orderSel.value === 'random') frases = frases.sort(() => Math.random() - 0.5);
  APP.frases = frases;
  APP.qIdx = 0;
  APP.scores = {};
  APP.currentAttempts = {};
  APP.readCounts = {};
  APP.diceRolled = false;
  APP.turnTeam = 0;
  APP.turnPlayer = 0;

  // Resetear scores de jugadores
  APP.teams.forEach((t) => t.players.forEach((p) => (p.scores = [])));

  // Pre-habilitar micrófono si es posible
  initMicPermission();

  // Leer reglas si está configurado
  if (APP.readRules) {
    const rulesText =
      'Welcome to Speaking Challenge. Listen to each phrase, then press the microphone button and speak clearly in English. Good luck!';
    speak(rulesText);
  }

  APP.gameStartTime = Date.now();
  startClock();
  // Mostrar pantalla de juego
  showScreen('screen-game');

  // Actualizar UI
  updateModeBadge();
  renderTeamsScorebar();
  renderQuestion();
  updateNavButtons();

  // Lanzar dados
  setTimeout(() => showDice(), 500);
}

function updateModeBadge() {
  const b = document.getElementById('mode-badge');
  if (APP.mode === 'evaluacion') {
    b.textContent = '📝 Evaluación';
    b.style.borderColor = 'var(--orange)';
    b.style.color = 'var(--orange)';
    b.style.background = 'rgba(230,126,34,.12)';
  } else {
    b.textContent = '🧪 Prueba';
    b.style.borderColor = 'var(--green)';
    b.style.color = 'var(--green)';
    b.style.background = 'rgba(57,169,0,.12)';
  }
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-09: DADOS
    ════════════════════════════════════════════════════════ */
const DICE_FACES = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
let dicePhase = 0; // 0=lanzar, 1=resultado

// Función para reproducir sonido de dados
function playDiceSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // Crear sonido de "clic" tipo dado
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    // Sonido de impacto corto
    oscillator.frequency.setValueAtTime(800 + Math.random() * 400, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.1);
  } catch (e) {
    // Si falla, ignorar silenciosamente
  }
}

function showDice() {
  const ov = document.getElementById('dice-overlay');
  ov.classList.add('open');
  dicePhase = 0;

  // Si solo hay 1 equipo, ocultar el P2
  const p2wrap = document.getElementById('dice-p2-wrap');
  p2wrap.style.display = APP.numTeams > 1 ? 'block' : 'none';

  document.getElementById('dice-p1-label').textContent = APP.teams[0].name;
  if (APP.numTeams > 1) document.getElementById('dice-p2-label').textContent = APP.teams[1].name;
  document.getElementById('die1').textContent = '🎲';
  document.getElementById('die2').textContent = '🎲';
  document.getElementById('dice-result').textContent = 'Presiona Lanzar para tirar los dados';
  const btn = document.getElementById('btn-dice');
  btn.textContent = '🎲 Lanzar';
  btn.onclick = rollDice;
}

function rollDice() {
  const die1 = document.getElementById('die1'),
    die2 = document.getElementById('die2');
  // Animación de rodado
  die1.classList.add('rolling');
  die2.classList.add('rolling');
  // Sonido de dados rodando
  playDiceSound();
  let interval = setInterval(() => {
    die1.textContent = DICE_FACES[Math.floor(Math.random() * 6)];
    die2.textContent = DICE_FACES[Math.floor(Math.random() * 6)];
  }, 80);

  setTimeout(() => {
    clearInterval(interval);
    die1.classList.remove('rolling');
    die2.classList.remove('rolling');
    // Sonido de dados cayendo
    playDiceSound();
    const v1 = Math.floor(Math.random() * 6) + 1;
    const v2 = Math.floor(Math.random() * 6) + 1;
    die1.textContent = DICE_FACES[v1 - 1];
    die2.textContent = DICE_FACES[v2 - 1];

    let resultMsg = '';
    if (APP.numTeams === 1) {
      resultMsg = `<strong>${APP.teams[0].name}</strong> sacó un <strong>${v1}</strong>. ¡A pronunciar!`;
      APP.turnTeam = 0;
      APP.turnPlayer = 0;
    } else {
      if (v1 > v2) {
        die1.classList.add('winner');
        resultMsg = `<strong>${APP.teams[0].name}</strong> ganó (${v1} vs ${v2}) — ¡Comienza ${APP.teams[0].name}!`;
        APP.turnTeam = 0;
      } else if (v2 > v1) {
        die2.classList.add('winner');
        resultMsg = `<strong>${APP.teams[1].name}</strong> ganó (${v2} vs ${v1}) — ¡Comienza ${APP.teams[1].name}!`;
        APP.turnTeam = 1;
      } else {
        resultMsg = `¡Empate (${v1}=${v2})! Lanzando de nuevo...`;
        setTimeout(rollDice, 1200);
        return;
      }
    }
    APP.turnPlayer = 0;
    document.getElementById('dice-result').innerHTML = resultMsg;
    const btn = document.getElementById('btn-dice');
    btn.textContent = '▶ Comenzar Juego';
    btn.onclick = closeDiceAndStart;
  }, 1400);
}

function closeDiceAndStart() {
  document.getElementById('dice-overlay').classList.remove('open');
  APP.diceRolled = true;
  updateTurnBanner();
  renderTeamsScorebar();
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-10: RENDERIZADO DE PREGUNTA ACTUAL
    ════════════════════════════════════════════════════════ */
function renderQuestion() {
  if (!APP.frases.length) return;
  const f = APP.frases[APP.qIdx];
  const num = String(APP.qIdx + 1).padStart(2, '0');

  document.getElementById('qc-num').textContent = num;
  document.getElementById('qc-en').textContent = f.en;
  document.getElementById('qc-es').textContent = APP.showES ? f.es : '';
  document.getElementById('qc-ra-badge').textContent = f.ra_label;
  document.getElementById('nav-progress').textContent = `${APP.qIdx + 1} / ${APP.frases.length}`;

  const nivelBadge = document.getElementById('qc-nivel-badge');
  nivelBadge.textContent = f.nivel;
  nivelBadge.className = `badge-nivel ${f.nivel === 'Bajo' ? 'n-bajo' : f.nivel === 'Medio' ? 'n-medio' : 'n-alto'}`;

  // Barra de progreso
  const pct = (APP.qIdx / (APP.frases.length - 1 || 1)) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';

  // Recuperar puntaje de la pregunta actual para el jugador en turno
  const key = `${APP.qIdx}-${APP.turnTeam}-${APP.turnPlayer}`;
  const sc = APP.scores[key];
  const att = APP.currentAttempts[key] || 0;

  document.getElementById('qc-attempts-lbl').textContent =
    att > 0 ? `${att} intento${att > 1 ? 's' : ''}` : '';
  // Actualizar contadores en botones
  updateAttemptCounters();

  if (sc != null) {
    showScoreInCard(sc);
  } else {
    document.getElementById('feedback-spoken').textContent = 'Presiona 🎤 Pronunciar para comenzar';
    document.getElementById('score-display').innerHTML = '';
  }

  // Historial de todos los que respondieron esta pregunta
  const histLines = [];
  APP.teams.forEach((team, ti) => {
    team.players.forEach((pl, pi) => {
      const k = `${APP.qIdx}-${ti}-${pi}`;
      if (APP.scores[k] != null) histLines.push(`${pl.name}: ${APP.scores[k]}%`);
    });
  });
  document.getElementById('qc-score-history').textContent = histLines.join(' · ');
}

/** Muestra el círculo de puntaje en la tarjeta */
function showScoreInCard(score) {
  const cls = score >= APP.pAcc ? 'sc-good' : score >= APP.pMin ? 'sc-ok' : 'sc-bad';
  document.getElementById('score-display').innerHTML =
    `<div class="score-circle ${cls}">${score}%</div>`;
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-11: NAVEGACIÓN DE PREGUNTAS
    ════════════════════════════════════════════════════════ */
function goQuestion(idx) {
  if (idx < 0 || idx >= APP.frases.length) return;
  APP.qIdx = idx;
  renderQuestion();
  updateNavButtons();
  // Pasar turno si avanzamos
  advanceTurn();
}

function updateNavButtons() {
  const i = APP.qIdx,
    n = APP.frases.length;
  document.getElementById('nav-first').disabled = i === 0;
  document.getElementById('nav-prev').disabled = i === 0;
  document.getElementById('nav-next').disabled = i === n - 1;
  document.getElementById('nav-last').disabled = i === n - 1;
}

function skipQuestion() {
  if (APP.qIdx < APP.frases.length - 1) {
    goQuestion(APP.qIdx + 1);
  } else {
    showToast('✅ Estás en la última pregunta. Presiona Finalizar.');
  }
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-12: TURNO DE JUGADORES (ROTACIÓN)
    ════════════════════════════════════════════════════════ */
function advanceTurn() {
  // Avanzar jugador dentro del equipo
  const team = APP.teams[APP.turnTeam];
  APP.turnPlayer = (APP.turnPlayer + 1) % team.players.length;
  // Cada vuelta completa de jugadores, cambiar equipo
  if (APP.turnPlayer === 0 && APP.numTeams > 1) {
    APP.turnTeam = (APP.turnTeam + 1) % APP.numTeams;
  }
  updateTurnBanner();
  renderTeamsScorebar();
}

function updateTurnBanner() {
  const team = APP.teams[APP.turnTeam] || APP.teams[0];
  const player = team.players[APP.turnPlayer] || team.players[0];
  document.getElementById('turn-name').textContent = player.name;
  document.getElementById('turn-team').textContent = team.name;
  document.getElementById('turn-name').style.color = team.color;
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-13: MARCADOR DE EQUIPOS EN TOPBAR + ESTADÍSTICAS
    ════════════════════════════════════════════════════════ */
function renderTeamsScorebar() {
  const bar = document.getElementById('teams-scorebar');
  bar.innerHTML = '';
  const statsDiv = document.getElementById('live-stats-teams');
  if (statsDiv) statsDiv.innerHTML = '';

  let bestTeam = { name: '—', avg: 0 },
    bestPlayer = { name: '—', avg: 0, teamColor: '#fff' };

  APP.teams.forEach((team, ti) => {
    const allScores = [];
    team.players.forEach((pl, pi) => {
      Object.entries(APP.scores).forEach(([k, v]) => {
        const [qi, tti, tpi] = k.split('-').map(Number);
        if (tti === ti && tpi === pi) allScores.push(v);
      });
    });
    const avg = allScores.length
      ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
      : 0;
    const isActive = ti === APP.turnTeam;
    const pill = document.createElement('div');
    pill.className = `team-score-pill ${isActive ? 'active-team' : ''}`;
    pill.style.borderColor = isActive ? team.color : '';
    pill.dataset.ti = ti;
    pill.dataset.avg = avg;
    pill.style.setProperty('--pill-color', team.color);
    pill.innerHTML = `
      <span style="width:10px;height:10px;border-radius:50%;background:${team.color};display:inline-block;flex-shrink:0"></span>
      <span class="ts-name">${team.name}</span>
      <span class="ts-val">${avg}%</span>
      <span class="ts-pct">(${allScores.length} resp.)</span>
    `;
    bar.appendChild(pill);

    if (avg > bestTeam.avg) bestTeam = { name: team.name, avg, color: team.color, ti };

    // Bloque de estadísticas lateral
    if (statsDiv) {
      const totalQ = APP.frases.length || 20;
      const block = document.createElement('div');
      block.className = 'stat-team-block';
      block.style.borderLeft = `3px solid ${team.color}`;
      // Calcular puntajes por jugador
      const playerRows = team.players
        .map((pl, pi) => {
          const pScores = [];
          Object.entries(APP.scores).forEach(([k, v]) => {
            const [qi, tti, tpi] = k.split('-').map(Number);
            if (tti === ti && tpi === pi) pScores.push(v);
const rate = document.getElementById('cfg-rate');
  if (rate) {
    rate.addEventListener('input', () => {
      document.getElementById('rate-show').textContent = rate.value + 'x';
    });
  }
});
          const pAvg = pScores.length
            ? Math.round(pScores.reduce((a, b) => a + b, 0) / pScores.length)
            : 0;
          if (pAvg > bestPlayer.avg)
            bestPlayer = { name: pl.name, avg: pAvg, teamColor: team.color };
          const scoreColor =
            pAvg >= APP.pAcc ? '#2ecc71' : pAvg >= APP.pMin ? 'var(--gold)' : '#e74c3c';
          return `<div class="stat-player-row" draggable="true" data-ti="${ti}" data-pi="${pi}" data-pname="${pl.name}" data-pavg="${pAvg}">
          <span class="drag-handle">⠿</span>
          <span class="stat-pname">${pl.name}</span>
          <span class="stat-pscore" style="color:${scoreColor}">${pAvg}% (${pScores.length}/${totalQ})</span>
        </div>`;
        })
        .join('');

      block.innerHTML = `
        <div class="stat-team-name" style="color:${team.color}">
          ${isActive ? '▶ ' : ''}${team.name}
        </div>
        <div class="stat-team-pct" style="color:${avg >= APP.pAcc ? '#2ecc71' : avg >= APP.pMin ? 'var(--gold)' : '#e74c3c'}">${avg}%</div>
        <div class="stat-team-ratio">${allScores.length} de ${totalQ} resp. correctas</div>
        <div class="stat-players">${playerRows}</div>
      `;
      statsDiv.appendChild(block);
    }
  });

  // ── Aplicar glow a pill del mejor equipo ──
  document.querySelectorAll('.team-score-pill').forEach((p) => {
    p.classList.remove('top-team');
    const ti = parseInt(p.dataset.ti || '-1');
    if (bestTeam.ti !== undefined && ti === bestTeam.ti && bestTeam.avg > 0) {
      p.classList.add('top-team');
      p.style.setProperty('--pill-color', bestTeam.color || '#fff');
    }
  });

  // ── Aplicar glow a fila del mejor jugador ──
  document.querySelectorAll('.stat-player-row').forEach((r) => {
    r.classList.remove('top-player');
    if (r.dataset.pname === bestPlayer.name && bestPlayer.avg > 0) {
      r.classList.add('top-player');
      r.style.setProperty('--player-color', bestPlayer.teamColor || '#fff');
    }
  });

  // Actualizar botones de top performer
  const topTeamBtn = document.getElementById('btn-top-team');
  const topPlayerBtn = document.getElementById('btn-top-player');
  if (topTeamBtn) {
    document.getElementById('top-team-name').textContent = bestTeam.name;
    document.getElementById('top-team-score').textContent = bestTeam.avg ? `${bestTeam.avg}%` : '';
    topTeamBtn.classList.toggle('has-winner', bestTeam.avg > 0);
    topTeamBtn.style.setProperty('--team-color', bestTeam.color || '#fff');
    topTeamBtn.style.color = bestTeam.color || 'var(--text)';
  }
  if (topPlayerBtn) {
    document.getElementById('top-player-name').textContent = bestPlayer.name;
    document.getElementById('top-player-score').textContent = bestPlayer.avg
      ? `${bestPlayer.avg}%`
      : '';
    topPlayerBtn.classList.toggle('has-winner', bestPlayer.avg > 0);
    topPlayerBtn.style.setProperty('--team-color', bestPlayer.teamColor || '#fff');
    topPlayerBtn.style.color = bestPlayer.teamColor || 'var(--text)';
  }
}

function highlightTopTeam() {
  let best = { avg: -1, idx: -1 };
  APP.teams.forEach((team, ti) => {
    const s = [];
    team.players.forEach((pl, pi) => {
      Object.entries(APP.scores).forEach(([k, v]) => {
        const [qi, tti, tpi] = k.split('-').map(Number);
        if (tti === ti && tpi === pi) s.push(v);
      });
    });
    const avg = s.length ? Math.round(s.reduce((a, b) => a + b, 0) / s.length) : 0;
    if (avg > best.avg) {
      best = { avg, idx: ti, name: team.name };
    }
  });
  if (best.idx >= 0) showToast(`🏆 Mejor equipo: ${best.name} con ${best.avg}%`);
}
function highlightTopPlayer() {
  let best = { avg: -1, name: '—' };
  APP.teams.forEach((team, ti) => {
    team.players.forEach((pl, pi) => {
      const s = [];
      Object.entries(APP.scores).forEach(([k, v]) => {
        const [qi, tti, tpi] = k.split('-').map(Number);
        if (tti === ti && tpi === pi) s.push(v);
      });
      const avg = s.length ? Math.round(s.reduce((a, b) => a + b, 0) / s.length) : 0;
      if (avg > best.avg) best = { avg, name: pl.name };
    });
  });
  showToast(`⭐ Mejor jugador: ${best.name} con ${best.avg}%`);
}

/* ════════════════════════════════════════════════════════
        MÓDULO JS-14: SÍNTESIS DE VOZ (TTS)
     ════════════════════════════════════════════════════════ */
function loadVoices() {
  const select = document.getElementById('cfg-voice');
  if (!select) return;
  
  // Asegurar que las voces estén cargadas
  if (window.speechSynthesis.getVoices().length === 0) {
    // Retry después de un momento
    setTimeout(loadVoices, 200);
    return;
  }
  
  const voices = window.speechSynthesis.getVoices();
  select.innerHTML = '';
  
  const defaultVoices = {
    'en-US': voices.filter(v => v.lang.startsWith('en-US')),
    'en-GB': voices.filter(v => v.lang.startsWith('en-GB')),
  };
  const preferred = [...defaultVoices['en-US'], ...defaultVoices['en-GB'], ...voices];
  const added = new Set();
  preferred.forEach(v => {
    if (!added.has(v.name)) {
      added.add(v.name);
      const opt = document.createElement('option');
      opt.value = v.name;
      opt.textContent = `${v.name} (${v.lang})`;
      select.appendChild(opt);
    }
  });
  
  // Escuchar cambios futuros
  window.speechSynthesis.onvoiceschanged = loadVoices;
  
  // Poblar combo de frases TTS
  populateTtsPhrases();
}

/* Poblar combo de frases de prueba TTS */
function populateTtsPhrases() {
  const select = document.getElementById('cfg-tts-phrase');
  if (!select) return;
  select.innerHTML = '<option value="">Seleccionar frase...</option>';
  TTS_TEST_PHRASES.forEach((frase, i) => {
    const opt = document.createElement('option');
    opt.value = frase;
    opt.textContent = `${i + 1}. ${frase.substring(0, 50)}${frase.length > 50 ? '...' : ''}`;
    select.appendChild(opt);
  });
}

/* Mostrar preview de frase seleccionada */
function updateTtsPreview() {
  const select = document.getElementById('cfg-tts-phrase');
  const preview = document.getElementById('tts-preview');
  if (!select || !preview) return;
  if (select.value) {
    preview.textContent = `📝 "${select.value}"`;
    preview.style.display = 'block';
  } else {
    preview.style.display = 'none';
  }
}

function testVoice() {
  const select = document.getElementById('cfg-tts-phrase');
  const testText = select && select.value ? select.value : 'Hello! This is a test of the selected voice and speed.';
  speak(testText);
  showToast('🔊 Reproduciendo: ' + testText.substring(0, 40) + '...');
}

function speak(text, lang = 'en-US') {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = lang;
  utt.rate = APP.rate || 0.9;
  utt.pitch = APP.pitch || 1.0;
  if (APP.voice) {
    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find(v => v.name === APP.voice);
    if (selectedVoice) utt.voice = selectedVoice;
  }
  window.speechSynthesis.speak(utt);
}

function readCurrentPhrase() {
  const f = APP.frases[APP.qIdx];
  if (!f) return;
  // Registrar lectura
  const rKey = 'r' + APP.qIdx + '-' + APP.turnTeam + '-' + APP.turnPlayer;
  APP.readCounts = APP.readCounts || {};
  APP.readCounts[rKey] = (APP.readCounts[rKey] || 0) + 1;
  speak(f.en);
  showToast('🔊 ' + f.en);
  updateAttemptCounters();
}

function readRules() {
  const txt =
    'Welcome to Speaking Challenge. Press the microphone button and speak clearly in English. If your score is above the acceptable threshold, you will receive a congratulation message. Good luck!';
  speak(txt);
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-15: MICRÓFONO PERMANENTE
       Se inicializa una sola vez y queda activo.
       Usa eventos para cada grabación.
    ════════════════════════════════════════════════════════ */
function checkBrowserSupport() {
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google/.test(navigator.vendor);
  const hasSpeechAPI = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  if (!hasSpeechAPI) {
    return { supported: false, message: '⚠️ Tu navegador no soporta reconocimiento de voz. Usa Google Chrome.' };
  }
  if (!isChrome) {
    return { supported: true, warning: '⚠️ Para mejor experiencia usa Google Chrome.' };
  }
  return { supported: true, warning: null };
}

function initMicPermission() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    showToast('⚠️ Tu navegador no soporta reconocimiento de voz. Usa Google Chrome.');
    return;
  }
  // Crear instancia permanente
  if (APP.recognition) {
    try {
      APP.recognition.abort();
    } catch (e) {}
  }
  const rec = new SR();
  rec.lang = 'en-US';
  rec.continuous = false;
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  APP.recognition = rec;
  APP.micReady = true;
}

let recCallback = null; // callback para procesar resultado

function startRecording() {
  const check = checkBrowserSupport();
  if (!check.supported) {
    showToast(check.message);
    return;
  }
  if (!APP.micReady || !APP.recognition) {
    initMicPermission();
    if (!APP.micReady) return;
  }
  const f = APP.frases[APP.qIdx];
  if (!f) return;

  // Verificar límite de intentos en modo evaluación
  const key = `${APP.qIdx}-${APP.turnTeam}-${APP.turnPlayer}`;
  const att = APP.currentAttempts[key] || 0;
  if (APP.mode === 'evaluacion' && att >= APP.reps) {
    showToast(`⛔ Máximo ${APP.reps} intentos en modo evaluación`);
    return;
  }

  // UI: modo grabando
  const btn = document.getElementById('btn-speak');
  btn.textContent = '🔴 Grabando...';
  btn.classList.add('recording');
  document.getElementById('rec-ind').classList.add('on');
  document.getElementById('feedback-spoken').textContent = 'Escuchando...';

  const rec = APP.recognition;

  rec.onresult = function (e) {
    const spoken = e.results[0][0].transcript.toLowerCase().trim();
    const original = f.en.toLowerCase().trim();
    const sim = levenshtein(original, spoken);
    processScore(sim, spoken, key, f);
  };
  rec.onerror = function (err) {
    showToast('⚠️ Error: ' + (err.error === 'no-speech' ? 'No se detectó voz' : err.error));
    resetRecBtn();
  };
  rec.onend = function () {
    resetRecBtn();
  };

  try {
    rec.start();
  } catch (e) {
    showToast('⚠️ No se pudo iniciar el micrófono');
    resetRecBtn();
  }
}

function resetRecBtn() {
  const btn = document.getElementById('btn-speak');
  if (btn) {
    btn.innerHTML = '🎤 Pronunciar';
    btn.classList.remove('recording');
  }
  document.getElementById('rec-ind').classList.remove('on');
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-16: PROCESAMIENTO DEL PUNTAJE
    ════════════════════════════════════════════════════════ */
function processScore(score, spoken, key, frase) {
  // Actualizar intentos
  APP.currentAttempts[key] = (APP.currentAttempts[key] || 0) + 1;
  const att = APP.currentAttempts[key];

  // Promediar en modo evaluación
  if (APP.mode === 'evaluacion' && APP.scores[key] != null) {
    APP.scores[key] = Math.round((APP.scores[key] * (att - 1) + score) / att);
  } else {
    APP.scores[key] = score;
  }

  // Guardar en el jugador también
  const team = APP.teams[APP.turnTeam];
  const player = team.players[APP.turnPlayer];
  if (APP.mode === 'evaluacion' && player.scores[APP.qIdx] != null) {
    player.scores[APP.qIdx] = APP.scores[key];
  } else {
    player.scores[APP.qIdx] = score;
  }

  // Feedback visual
  document.getElementById('feedback-spoken').textContent = `"${spoken}"`;
  showScoreInCard(APP.scores[key]);
  document.getElementById('qc-attempts-lbl').textContent = `${att} intento${att > 1 ? 's' : ''}`;
  updateAttemptCounters();

  // Feedback de voz según umbrales
  if (score < APP.pMin) {
    speak(APP.txtMin);
    showToast(`😓 ${score}% — ${APP.txtMin}`);
  } else if (score >= APP.pAcc) {
    speak(APP.txtAcc);
  } else {
    showToast(`👍 Pronunciación: ${score}%`);
  }

  // Actualizar historial
  const histLines = [];
  APP.teams.forEach((tm, ti) => {
    tm.players.forEach((pl, pi) => {
      const k = `${APP.qIdx}-${ti}-${pi}`;
      if (APP.scores[k] != null) histLines.push(`${pl.name}: ${APP.scores[k]}%`);
    });
  });
  document.getElementById('qc-score-history').textContent = histLines.join(' · ');

  // Actualizar marcadores
  renderTeamsScorebar();
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-17: ALGORITMO LEVENSHTEIN
       Calcula similitud entre texto original y pronunciado
    ════════════════════════════════════════════════════════ */
function levenshtein(a, b) {
  const m = a.length,
    n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return Math.round((1 - dp[m][n] / Math.max(m, n)) * 100);
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-18: FINALIZAR JUEGO — PANTALLA DE RESULTADOS
    ════════════════════════════════════════════════════════ */
function finishGame() {
  // Calcular promedios por equipo y por jugador
  const teamResults = APP.teams.map((team, ti) => {
    const playerResults = team.players.map((pl, pi) => {
      const scores = [];
      APP.frases.forEach((_, qi) => {
        const k = `${qi}-${ti}-${pi}`;
        if (APP.scores[k] != null) scores.push(APP.scores[k]);
      });
      const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
      return { name: pl.name, avg, count: scores.length };
    });
    // Promedio del equipo = promedio de sus jugadores
    const teamAvg = playerResults.length
      ? Math.round(playerResults.reduce((a, b) => a + b.avg, 0) / playerResults.length)
      : 0;
    return { name: team.name, color: team.color, avg: teamAvg, players: playerResults };
  });

  // Ordenar equipos: ganador primero
  teamResults.sort((a, b) => b.avg - a.avg);
  const winner = teamResults[0];

  // Leer frase del ganador
  speak(`${winner.name} wins! ${APP.winnerPhrase}`);

  // Construir pantalla de resultados
  document.getElementById('winner-title').textContent = `🏆 ${winner.name} — ${winner.avg}%`;
  document.getElementById('winner-phrase').textContent = `"${APP.winnerPhrase}"`;

  const teamsDiv = document.getElementById('results-teams');
  teamsDiv.innerHTML = '';
  teamResults.forEach((t, idx) => {
    const sorted = [...t.players].sort((a, b) => b.avg - a.avg);
    const card = document.createElement('div');
    card.className = `result-team-card ${idx === 0 ? 'winner-card' : ''}`;
    card.innerHTML = `
      <div class="rtc-name" style="color:${t.color}">${idx === 0 ? '🥇' : '🥈'} ${t.name}</div>
      <div class="rtc-avg" style="color:${idx === 0 ? 'var(--gold)' : 'var(--text2)'}">${t.avg}%</div>
      <div class="rtc-players">
        ${sorted.map((p) => `<div class="rp-row"><span class="rp-name">${p.name}</span><span class="rp-score" style="color:${p.avg >= APP.pAcc ? '#2ecc71' : p.avg >= APP.pMin ? 'var(--gold)' : '#e74c3c'}">${p.avg}%</span></div>`).join('')}
      </div>
    `;
    teamsDiv.appendChild(card);
  });

  // Construir podio equipos (desc, izq-der)
  buildPodium(
    'podium-teams',
    teamResults.map((t) => ({ name: t.name, score: t.avg, sub: '', color: t.color })),
  );

  // Construir podio jugadores (sin importar equipo)
  const allPlayers = [];
  APP.teams.forEach((team, ti) => {
    team.players.forEach((pl, pi) => {
      const scores = [];
      APP.frases.forEach((_, qi) => {
        const k = `${qi}-${ti}-${pi}`;
        if (APP.scores[k] != null) scores.push(APP.scores[k]);
      });
      const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
      allPlayers.push({ name: pl.name, score: avg, sub: team.name, color: team.color });
    });
  });
  allPlayers.sort((a, b) => b.score - a.score);
  buildPodium('podium-players', allPlayers);

  showScreen('screen-results');
  launchFireworks();
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-19: FUEGOS ARTIFICIALES
    ════════════════════════════════════════════════════════ */
function launchFireworks() {
  const container = document.getElementById('fw-container');
  container.innerHTML = '';
  const colors = ['#f1c40f', '#39A900', '#e74c3c', '#3498db', '#9b59b6', '#e67e22', '#fff'];
  for (let w = 0; w < 40; w++) {
    setTimeout(() => {
      for (let i = 0; i < 12; i++) {
        const el = document.createElement('div');
        el.className = 'firework';
        const x = 10 + Math.random() * 80,
          y = 10 + Math.random() * 70;
        const size = 60 + Math.random() * 120;
        el.style.cssText = `
          left:${x}%;top:${y}%;
          width:${size}px;height:${size}px;
          background:radial-gradient(circle,${colors[Math.floor(Math.random() * colors.length)]}88,transparent 70%);
          animation-duration:${0.6 + Math.random() * 0.8}s;
          animation-delay:${Math.random() * 0.3}s;
        `;
        container.appendChild(el);
        setTimeout(() => el.remove(), 1500);
      }
    }, w * 300);
  }
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-20: TOAST Y UTILIDADES
    ════════════════════════════════════════════════════════ */
let _toastT = null;
function showToast(msg, dur = 3200) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastT);
  _toastT = setTimeout(() => t.classList.remove('show'), dur);
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-21: SINCRONIZACIÓN DE RANGOS EN CONFIG
    ════════════════════════════════════════════════════════ */
function syncRanges() {
  const pmin = document.getElementById('cfg-pmin');
  const pacc = document.getElementById('cfg-pacc');
  if (!pmin || !pacc) return;
  pmin.addEventListener('input', () => {
    document.getElementById('pmin-show').textContent = pmin.value + '%';
    if (parseInt(pmin.value) >= parseInt(pacc.value)) pacc.value = parseInt(pmin.value) + 5;
    document.getElementById('pacc-lbl').textContent = pacc.value;
    document.getElementById('pacc-show').textContent = pacc.value + '%';
  });
  pacc.addEventListener('input', () => {
    document.getElementById('pacc-show').textContent = pacc.value + '%';
    if (parseInt(pacc.value) <= parseInt(pmin.value)) pmin.value = parseInt(pacc.value) - 5;
    document.getElementById('pmin-lbl').textContent = pmin.value;
    document.getElementById('pmin-show').textContent = pmin.value + '%';
  });
  
  // Sincronizar slider de velocidad
  const rate = document.getElementById('cfg-rate');
  if (rate) {
    rate.addEventListener('input', () => {
      document.getElementById('rate-show').textContent = rate.value + 'x';
    });
  }
  
  // Sincronizar slider de pitch
  const pitch = document.getElementById('cfg-pitch');
  if (pitch) {
    pitch.addEventListener('input', () => {
      document.getElementById('pitch-show').textContent = pitch.value;
    });
  }
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-22: INICIALIZACIÓN AL CARGAR LA PÁGINA
    ════════════════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  // Cargar voces disponibles
  loadVoices();

  // ── Sonido tipo película al mostrar la intro ──
  playIntroSound();

  // Imagen del autor
  document.getElementById('home-author').src = ASSETS.autorImg;

  // Fondo de dados con bandera
  const diceBg = document.querySelector('.dice-bg');
  if (diceBg) diceBg.style.backgroundImage = `url('${ASSETS.banderaImg}')`;

  // Tooltip para botones del home
  document.querySelectorAll('.home-btn[data-tip]').forEach(btn => {
    btn.addEventListener('mouseenter', () => showTooltip(btn.dataset.tip));
    btn.addEventListener('mouseleave', hideTooltip);
  });

  // Letras flotantes decorativas en home
  initBgLetters();

  // Construir bloques de equipo por defecto
  updateTeamBlocks();

  // Poblar tabla de frases en config
  populateConfigFrases();

  // Sincronizar sliders de pronunciación, velocidad y pitch
  syncRanges();

  // Mostrar pantalla de inicio (se verá tras dismiss del splash)
  showScreen('screen-home');
  
  // Actualizar versión y programa en modales
  const vDisp = document.getElementById('cfg-version-display');
  const pDisp = document.getElementById('cfg-programa-display');
  const rVDisp = document.getElementById('rules-version');
  const rPDisp = document.getElementById('rules-programa');
  if (vDisp) vDisp.textContent = APP_CONFIG.VERSION;
  if (pDisp) pDisp.textContent = APP_CONFIG.PROGRAM_NAME;
  if (rVDisp) rVDisp.textContent = APP_CONFIG.VERSION;
  if (rPDisp) rPDisp.textContent = APP_CONFIG.PROGRAM_NAME;

  console.log('✅ Speaking Challenge iniciado. Frases:', FRASES_DB.length);
});

/* ════════════════════════════════════════════════════════
       INTRO SPLASH: sonido + dismiss
    ════════════════════════════════════════════════════════ */
function playIntroSound() {
  // Sonido de película usando Web Audio API
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Dramatic cinematic "boom" + riser
    const playTone = (freq, start, dur, gain, type = 'sine') => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.8, ctx.currentTime + start + dur * 0.7);
      g.gain.setValueAtTime(0, ctx.currentTime + start);
      g.gain.linearRampToValueAtTime(gain, ctx.currentTime + start + 0.05);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + dur);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + dur);
    };
    // Deep boom
    playTone(60, 0, 1.2, 0.6, 'sawtooth');
    playTone(90, 0, 1.0, 0.4, 'sine');
    // Mid swell
    playTone(180, 0.3, 0.8, 0.3, 'sine');
    playTone(260, 0.5, 0.6, 0.25, 'triangle');
    // High shimmer
    playTone(520, 0.8, 0.5, 0.15, 'sine');
    playTone(880, 1.0, 0.4, 0.1, 'sine');
    // Final chord
    [220, 330, 440, 550].forEach((f, i) => playTone(f, 1.1 + i * 0.05, 0.9, 0.12, 'triangle'));
  } catch (e) {
    /* silencioso si no soportado */
  }
}

function dismissIntro() {
  const splash = document.getElementById('screen-intro');
  splash.classList.add('fade-out');
  setTimeout(() => {
    splash.style.display = 'none';
  }, 850);
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-NEW-A: RELOJ Y TIEMPO TRANSCURRIDO
    ════════════════════════════════════════════════════════ */
let _clockInterval = null;
function startClock() {
  clearInterval(_clockInterval);
  _clockInterval = setInterval(() => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const el = document.getElementById('gc-time');
    if (el) el.textContent = `${hh}:${mm}:${ss}`;

    if (APP.gameStartTime) {
      const diff = Math.floor((Date.now() - APP.gameStartTime) / 1000);
      const em = Math.floor(diff / 60),
        es = diff % 60;
      const el2 = document.getElementById('gc-elapsed');
      if (el2) el2.textContent = `⏱ ${String(em).padStart(2, '0')}:${String(es).padStart(2, '0')}`;
    }
  }, 1000);
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-NEW-B: CONTADORES EN BOTONES LEER/PRONUNCIAR
    ════════════════════════════════════════════════════════ */
function updateAttemptCounters() {
  const key = `${APP.qIdx}-${APP.turnTeam}-${APP.turnPlayer}`;
  const rKey = `r${key}`;
  APP.readCounts = APP.readCounts || {};
  const att = APP.currentAttempts[key] || 0;
  const reads = APP.readCounts[rKey] || 0;
  const reps = APP.reps || 3;

  // Badge lectura
  const rcEl = document.getElementById('read-counter');
  if (rcEl) {
    rcEl.textContent = `${reads}`;
    rcEl.className = 'read-badge' + (reads > 0 ? ' active' : '');
    rcEl.title = `${reads} lectura${reads !== 1 ? 's' : ''} realizadas`;
  }

  // Badge pronunciación: mostrar intento actual / total
  const scEl = document.getElementById('speak-counter');
  if (scEl) {
    const pct = reps > 0 ? att / reps : 0;
    scEl.textContent = `${att}/${reps}`;
    scEl.className =
      'speak-badge ' + (att >= reps ? 'over' : att >= Math.ceil(reps / 2) ? 'warn' : 'ok');
    scEl.title = `${att} intento${att !== 1 ? 's' : ''} de ${reps} permitidos`;

    // Deshabilitar botón si límite alcanzado en modo evaluación
    const btnSpeak = document.getElementById('btn-speak');
    if (btnSpeak && APP.mode === 'evaluacion') {
      btnSpeak.disabled = att >= reps;
      btnSpeak.style.opacity = att >= reps ? '0.45' : '1';
    }
  }
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-NEW-C: HOVER SOBRE REGLAS → TTS
    ════════════════════════════════════════════════════════ */
const RULES_TEXT = [
  'Configura los equipos y jugadores antes de iniciar.',
  'El juego inicia con la tirada de dados. El jugador con mayor número comienza.',
  'Solo se muestra una pregunta a la vez. Navega con los botones.',
  'Presiona Leer para escuchar la pronunciación correcta antes de grabar.',
  'Presiona Pronunciar y habla en inglés claramente.',
  'Si superas el umbral aceptable del 70 por ciento, el sistema te felicitará.',
  'Si quedas por debajo del mínimo del 30 por ciento, recibirás un mensaje motivador.',
  'En Modo Evaluación los intentos se promedian acumulativamente.',
  'El sistema lleva puntaje por equipo y por jugador en tiempo real.',
  'Al finalizar se muestra el equipo ganador con fuegos artificiales.',
];
let _hoverTimer = null;
function hoverRule(el, idx) {
  if (!APP.hoverRead) return;
  el.classList.add('rule-hovered');
  clearTimeout(_hoverTimer);
  _hoverTimer = setTimeout(() => speak(RULES_TEXT[idx], 'es-CO'), 300);
}
function unhoverRule(el, idx) {
  el.classList.remove('rule-hovered');
  clearTimeout(_hoverTimer);
  window.speechSynthesis && window.speechSynthesis.cancel();
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-NEW-D: CONFIRMACIÓN SALIR
    ════════════════════════════════════════════════════════ */
function confirmExit() {
  if (confirm('¿Desea salir al menú principal? Se perderán los puntajes actuales.')) {
    clearInterval(_clockInterval);
    showScreen('screen-home');
  }
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-NEW-E: DASHBOARD
    ════════════════════════════════════════════════════════ */
function openDashboard() {
  const cont = document.getElementById('dashboard-content');
  cont.innerHTML = '';

  // Tarjetas por equipo
  const grid = document.createElement('div');
  grid.className = 'dash-grid';
  APP.teams.forEach((team, ti) => {
    const card = document.createElement('div');
    card.className = 'dash-card';
    card.style.borderLeft = `3px solid ${team.color}`;
    const playerBars = team.players
      .map((pl, pi) => {
        const scores = [];
        Object.entries(APP.scores).forEach(([k, v]) => {
          const [qi, tti, tpi] = k.split('-').map(Number);
          if (tti === ti && tpi === pi) scores.push(v);
        });
        const avg = scores.length
          ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
          : 0;
        const color = avg >= APP.pAcc ? '#2ecc71' : avg >= APP.pMin ? '#f1c40f' : '#e74c3c';
        return `<div class="dash-bar-row">
        <span class="dash-bar-label">${pl.name}</span>
        <div class="dash-bar-track"><div class="dash-bar-fill" style="width:${avg}%;background:${color}"></div></div>
        <span class="dash-bar-val" style="color:${color}">${avg}%</span>
      </div>`;
      })
      .join('');
    const teamScores = [];
    team.players.forEach((_, pi) => {
      Object.entries(APP.scores).forEach(([k, v]) => {
        const [qi, tti, tpi] = k.split('-').map(Number);
        if (tti === ti) teamScores.push(v);
      });
    });
    const tAvg = teamScores.length
      ? Math.round(teamScores.reduce((a, b) => a + b, 0) / teamScores.length)
      : 0;
    card.innerHTML = `<div class="dash-card-title" style="color:${team.color}">${team.name} — ${tAvg}%</div>${playerBars}`;
    grid.appendChild(card);
  });
  cont.appendChild(grid);
  openModal('modal-dashboard');
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-NEW-F: EXPORTAR RESULTADOS CSV
    ════════════════════════════════════════════════════════ */
function exportResults() {
  let csv = 'Equipo,Jugador,#Pregunta,Frase Inglés,Frase Español,Nivel,RA,Puntaje(%),Intentos\n';
  APP.teams.forEach((team, ti) => {
    team.players.forEach((pl, pi) => {
      APP.frases.forEach((f, qi) => {
        const k = `${qi}-${ti}-${pi}`;
        const score = APP.scores[k] != null ? APP.scores[k] : '';
        const att = APP.currentAttempts[k] || 0;
        if (score !== '') {
          const row = [
            team.name,
            pl.name,
            qi + 1,
            `"${f.en}"`,
            `"${f.es}"`,
            f.nivel,
            f.ra,
            score,
            att,
          ].join(',');
          csv += row + '\n';
        }
      });
    });
  });
  // Metadata header
  const inst = document.getElementById('cfg-instructor')
    ? document.getElementById('cfg-instructor').value
    : '';
  const ficha = document.getElementById('cfg-ficha')
    ? document.getElementById('cfg-ficha').value
    : '';
  const prog = document.getElementById('cfg-programa')
    ? document.getElementById('cfg-programa').value
    : '';
  const elapsed = document.getElementById('gc-elapsed')
    ? document.getElementById('gc-elapsed').textContent
    : '';
  const meta = `Speaking Challenge v5 - ${prog} - Ficha ${ficha} - Instructor: ${inst} - Duración: ${elapsed}\n\n`;
  const blob = new Blob([meta + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SpeakingChallenge_v5_Ficha${ficha}_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('📥 Resultados exportados como CSV');
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-NEW-G: PODIO VISUAL
    ════════════════════════════════════════════════════════ */
function buildPodium(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  // Tomar top 3, ordenados desc ya
  const top = items.slice(0, 3);
  // Orden visual: 2º · 1º · 3º (podio olímpico)
  const order = [1, 0, 2]; // índices de top[] para mostrar izq-centro-der
  const medals = ['🥇', '🥈', '🥉'];
  const podiumClasses = ['podium-1', 'podium-2', 'podium-3'];
  // Mapa visual: posición 0=left=2nd, posición 1=center=1st, posición 2=right=3rd
  const visualOrder = [top[1], top[0], top[2]];
  const blockClass = ['podium-2', 'podium-1', 'podium-3'];
  const medal = [medals[1], medals[0], medals[2]];

  visualOrder.forEach((item, vi) => {
    if (!item) return;
    const slot = document.createElement('div');
    slot.className = 'podium-slot';
    slot.innerHTML = `
      <div class="podium-name" style="color:${item.color || 'var(--text)'}">${item.name}</div>
      <div class="podium-score">${item.score}%</div>
      ${item.sub ? `<div class="podium-team-tag">${item.sub}</div>` : ''}
      <div class="podium-block ${blockClass[vi]}" style="border-bottom:3px solid ${item.color || '#fff'}">${medal[vi]}</div>
    `;
    el.appendChild(slot);
  });
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-NEW-H: CARGAR PREGUNTAS DESDE JSON
   ════════════════════════════════════════════════════════ */
function loadQuestionsFromJSON(input) {
  const file = input.files[0];
  const statusEl = document.getElementById('json-status');
  const infoEl = document.getElementById('json-info');
  const filenameEl = document.getElementById('json-filename');
  const countEl = document.getElementById('json-count');
  
  if (!file) {
    statusEl.textContent = 'Sin archivo cargado';
    statusEl.classList.remove('loaded');
    infoEl.style.display = 'none';
    APP.jsonFile = null;
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      let preguntas = [];
      
      if (Array.isArray(data)) {
        preguntas = data;
      } else if (data.frases && Array.isArray(data.frases)) {
        preguntas = data.frases;
      } else if (data.preguntas && Array.isArray(data.preguntas)) {
        preguntas = data.preguntas;
      } else {
        throw new Error('Formato JSON no válido');
      }
      
      // Validar estructura mínima
      if (preguntas.length === 0 || !preguntas[0].en) {
        throw new Error('El JSON debe contener preguntas con campo "en"');
      }
      
      // Guardar preguntas cargadas
      APP.jsonFile = preguntas;
      APP.jsonFilename = file.name;
      
      statusEl.textContent = `✓ Cargado: ${preguntas.length} preguntas`;
      statusEl.classList.add('loaded');
      filenameEl.textContent = file.name;
      countEl.textContent = preguntas.length;
      infoEl.style.display = 'block';
      
      showToast(`✅ ${preguntas.length} preguntas cargadas desde ${file.name}`);
      
      // Actualizar tabla de frases en config
      populateConfigFrases();
      
    } catch (err) {
      statusEl.textContent = '❌ Error: ' + err.message;
      statusEl.classList.remove('loaded');
      showToast('❌ Error al cargar JSON: ' + err.message);
    }
  };
  
  reader.onerror = function() {
    statusEl.textContent = '❌ Error al leer archivo';
    statusEl.classList.remove('loaded');
    showToast('❌ Error al leer el archivo');
  };
  
  reader.readAsText(file);
}

/* ════════════════════════════════════════════════════════
       MÓDULO JS-NEW-I: SKINS / TEMAS
   ════════════════════════════════════════════════════════ */
function changeSkin(skinName) {
  APP.skin = skinName;
  if (skinName === 'default') {
    document.documentElement.removeAttribute('data-skin');
  } else {
    document.documentElement.setAttribute('data-skin', skinName);
  }
  showToast(`🎨 Tema: ${skinName === 'default' ? 'Default' : getSkinDisplayName(skinName)}`);
}

function resetSkin() {
  document.getElementById('cfg-skin').value = 'default';
  changeSkin('default');
  showToast('🎨 Tema restaurado a Default');
}

function getSkinDisplayName(skinName) {
  const names = {
    'ocean': 'Océano',
    'sunset': 'Atardecer',
    'purple': 'Violeta',
    'dark': 'Oscuro'
  };
  return names[skinName] || skinName;
}
