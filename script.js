const data = [
    {
        name: "Joel Embiid",
        team: "Philadelphia 76ers (PHI)",
        points: 33,
        rebounds: 10.8,
        assists: 5.7,
        blocks: 1.5,
        turnovers: 4.2
    },
    {
        name: "Jalen Brunson",
        team: "New York Knicks (NYK)",
        points: 32.4,
        rebounds: 3.3,
        assists: 7.5,
        blocks: 0.2,
        turnovers: 2.7
    },
    {
        name: "Shai Gilgeous-Alexander",
        team: "Oklahoma City Thunder (OKC)",
        points: 30.2,
        rebounds: 7.2,
        assists: 6.4,
        blocks: 1.7,
        turnovers: 2.2
    },
    {
        name: "Tyrese Maxey",
        team: "Philadelphia 76ers (PHI)",
        points: 29.8,
        rebounds: 5.2,
        assists: 6.8,
        blocks: 0.3,
        turnovers: 2.2
    },
    {
        name: "Donovan Mitchell",
        team: "Cleveland Cavaliers (CAVS)",
        points: 29.6,
        rebounds: 5.4,
        assists: 4.7,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Luka Dončić",
        team: "Dallas Mavericks (DAL)",
        points: 28.9,
        rebounds: 9.5,
        assists: 8.1,
        blocks: 0.4,
        turnovers: 4.1
    },
    {
        name: "Nikola Jokić",
        team: "Denver Nuggets (DEN)",
        points: 28.7,
        rebounds: 13.4,
        assists: 8.7,
        blocks: 0.7,
        turnovers: 3.3
    },
    {
        name: "Anthony Davis",
        team: "Los Angeles Lakers (LAL)",
        points: 27.8,
        rebounds: 15.6,
        assists: 4,
        blocks: 1.6,
        turnovers: 2.2
    },
    {
        name: "LeBron James",
        team: "Los Angeles Lakers (LAL)",
        points: 27.8,
        rebounds: 6.8,
        assists: 8.8,
        blocks: 1,
        turnovers: 3.8
    },
    {
        name: "Anthony Edwards",
        team: "Minnesota Timberwolves (MIN)",
        points: 27.6,
        rebounds: 7,
        assists: 6.5,
        blocks: 0.6,
        turnovers: 3.3
    },
    {
        name: "Devin Booker",
        team: "Phoenix Suns (PHX)",
        points: 27.5,
        rebounds: 3.3,
        assists: 6,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Paolo Banchero",
        team: "Orlando Magic (ORL)",
        points: 27,
        rebounds: 8.6,
        assists: 4,
        blocks: 0.6,
        turnovers: 4.6
    },
    {
        name: "Kevin Durant",
        team: "Phoenix Suns (PHX)",
        points: 26.8,
        rebounds: 6.5,
        assists: 3.3,
        blocks: 1.5,
        turnovers: 2.5
    },
    {
        name: "Jayson Tatum",
        team: "Boston Celtics (BOS)",
        points: 25,
        rebounds: 9.7,
        assists: 6.3,
        blocks: 0.7,
        turnovers: 2.6
    },
    {
        name: "Khris Middleton",
        team: "Milwaukee Bucks (MIL)",
        points: 24.7,
        rebounds: 9.2,
        assists: 4.7,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Jaylen Brown",
        team: "Boston Celtics (BOS)",
        points: 23.9,
        rebounds: 5.9,
        assists: 3.3,
        blocks: 0.6,
        turnovers: 2.7
    },
    {
        name: "Bam Adebayo",
        team: "Miami Heat (MIA)",
        points: 22.6,
        rebounds: 9.4,
        assists: 3.8,
        blocks: 0,
        turnovers: 1.6
    },
    {
        name: "Kyrie Irving",
        team: "Dallas Mavericks (DAL)",
        points: 22.1,
        rebounds: 3.7,
        assists: 5.1,
        blocks: 0.3,
        turnovers: 2.3
    },
    {
        name: "Pascal Siakam",
        team: "Indiana Pacers (IND)",
        points: 21.6,
        rebounds: 7.5,
        assists: 3.8,
        blocks: 0.4,
        turnovers: 1.1
    },
    {
        name: "James Harden",
        team: "Los Angeles Clippers (LAC)",
        points: 21.2,
        rebounds: 4.5,
        assists: 8,
        blocks: 1,
        turnovers: 2.3
    },
    {
        name: "Jamal Murray",
        team: "Denver Nuggets (DEN)",
        points: 20.6,
        rebounds: 4.3,
        assists: 5.6,
        blocks: 0.5,
        turnovers: 2.6
    },
    {
        name: "Paul George",
        team: "Los Angeles Clippers (LAC)",
        points: 19.5,
        rebounds: 6.8,
        assists: 4.8,
        blocks: 0.5,
        turnovers: 2.3
    },
    {
        name: "Karl-Anthony Towns",
        team: "Minnesota Timberwolves (MIN)",
        points: 19.1,
        rebounds: 9,
        assists: 2.6,
        blocks: 0.2,
        turnovers: 1.7
    },
    {
        name: "Franz Wagner",
        team: "Orlando Magic (ORL)",
        points: 18.9,
        rebounds: 6.9,
        assists: 4.4,
        blocks: 1.3,
        turnovers: 1.3
    },
    {
        name: "Jalen Williams",
        team: "Oklahoma City Thunder (OKC)",
        points: 18.7,
        rebounds: 6.8,
        assists: 5.4,
        blocks: 0.5,
        turnovers: 1.9
    },
    {
        name: "Tyrese Haliburton",
        team: "Indiana Pacers (IND)",
        points: 18.7,
        rebounds: 4.8,
        assists: 8.2,
        blocks: 0.7,
        turnovers: 2.1
    },
    {
        name: "Donte DiVincenzo",
        team: "New York Knicks (NYK)",
        points: 17.8,
        rebounds: 4,
        assists: 2.6,
        blocks: 0.9,
        turnovers: 1.2
    },
    {
        name: "CJ McCollum",
        team: "New Orleans Pelicans (NOP)",
        points: 17.8,
        rebounds: 4.8,
        assists: 4.8,
        blocks: 0.8,
        turnovers: 4
    },
    {
        name: "Brook Lopez",
        team: "Milwaukee Bucks (MIL)",
        points: 17.7,
        rebounds: 4.3,
        assists: 1.8,
        blocks: 1.3,
        turnovers: 1.5
    },
    {
        name: "Myles Turner",
        team: "Indiana Pacers (IND)",
        points: 17,
        rebounds: 6.6,
        assists: 2.1,
        blocks: 1.5,
        turnovers: 1.9
    },
    {
        name: "Austin Reaves",
        team: "Los Angeles Lakers (LAL)",
        points: 16.8,
        rebounds: 3.8,
        assists: 3.6,
        blocks: 0.6,
        turnovers: 0.8
    },
    {
        name: "Tyler Herro",
        team: "Miami Heat (MIA)",
        points: 16.8,
        rebounds: 3.6,
        assists: 5.4,
        blocks: 0,
        turnovers: 2.8
    },
    {
        name: "Derrick White",
        team: "Boston Celtics (BOS)",
        points: 16.7,
        rebounds: 4.3,
        assists: 4.1,
        blocks: 1.2,
        turnovers: 0.8
    },
    {
        name: "Bobby Portis",
        team: "Milwaukee Bucks (MIL)",
        points: 16.5,
        rebounds: 11.3,
        assists: 1,
        blocks: 0.2,
        turnovers: 1.5
    },
    {
        name: "Bradley Beal",
        team: "Phoenix Suns (PHX)",
        points: 16.5,
        rebounds: 2.8,
        assists: 4.5,
        blocks: 0.3,
        turnovers: 3.3
    },
    {
        name: "Ivica Zubac",
        team: "Los Angeles Clippers (LAC)",
        points: 16.2,
        rebounds: 9.3,
        assists: 1,
        blocks: 0.5,
        turnovers: 1.3
    },
    {
        name: "Evan Mobley",
        team: "Cleveland Cavaliers (CAVS)",
        points: 16,
        rebounds: 9.3,
        assists: 2.3,
        blocks: 2.2,
        turnovers: 1.8
    },
    {
        name: "Michael Porter Jr.",
        team: "Denver Nuggets (DEN)",
        points: 15.8,
        rebounds: 6.8,
        assists: 1.1,
        blocks: 0.8,
        turnovers: 1.5
    },
    {
        name: "Darius Garland",
        team: "Cleveland Cavaliers (CAVS)",
        points: 15.7,
        rebounds: 3.6,
        assists: 5.8,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Chet Holmgren",
        team: "Oklahoma City Thunder (OKC)",
        points: 15.6,
        rebounds: 7.2,
        assists: 2.1,
        blocks: 2.5,
        turnovers: 1.9
    },
    {
        name: "Andrew Nembhard",
        team: "Indiana Pacers (IND)",
        points: 14.9,
        rebounds: 3.3,
        assists: 5.5,
        blocks: 0.2,
        turnovers: 1.4
    },
    {
        name: "Jalen Suggs",
        team: "Orlando Magic (ORL)",
        points: 14.7,
        rebounds: 5.1,
        assists: 3.3,
        blocks: 0.4,
        turnovers: 2.9
    },
    {
        name: "Josh Hart",
        team: "New York Knicks (NYK)",
        points: 14.5,
        rebounds: 11.5,
        assists: 4.5,
        blocks: 0.8,
        turnovers: 2.6
    },
    {
        name: "Jonas Valančiūnas",
        team: "New Orleans Pelicans (NOP)",
        points: 14.5,
        rebounds: 11,
        assists: 1.3,
        blocks: 0,
        turnovers: 2.5
    },
    {
        name: "Aaron Gordon",
        team: "Denver Nuggets (DEN)",
        points: 14.3,
        rebounds: 7.3,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    },
    {
        name: "Brandon Ingram",
        team: "New Orleans Pelicans (NOP)",
        points: 14.3,
        rebounds: 4.5,
        assists: 3.3,
        blocks: 1.3,
        turnovers: 2.3
    },
    {
        name: "D'Angelo Russell",
        team: "Los Angeles Lakers (LAL)",
        points: 14.2,
        rebounds: 2.8,
        assists: 4.2,
        blocks: 0.2,
        turnovers: 1.8
    },
    {
        name: "Kelly Oubre Jr.",
        team: "Philadelphia 76ers (PHI)",
        points: 13.2,
        rebounds: 4,
        assists: 1.7,
        blocks: 1.2,
        turnovers: 1.3
    },
    {
        name: "Jrue Holiday",
        team: "Boston Celtics (BOS)",
        points: 13.2,
        rebounds: 6.1,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    }
];
const $ = (sel) => document.querySelector(sel);

function normalize(str) {
  return String(str ?? "").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function debounce(fn, ms = 250) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

const state = { all: data.slice(), search: "", team: "all", sortKey: null, sortDir: 1 };

function escapeHtml(v) {
  return String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderRows(rows) {
  const tbody = $("#player-rows");
  if (!tbody) return;
  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;opacity:.7">No players found</td></tr>`;
    return;
  }
  const frag = document.createDocumentFragment();
  rows.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(p.name)}</td>
      <td>${escapeHtml(p.team)}</td>
      <td>${p.points}</td>
      <td>${p.rebounds}</td>
      <td>${p.assists}</td>
    `;
    frag.appendChild(tr);
  });
  tbody.replaceChildren(frag);
}

function populateTeamFilter() {
  const select = $("#team-filter");
  if (!select) return;
  const teams = Array.from(new Set(state.all.map((p) => p.team))).sort((a, b) => a.localeCompare(b));
  select.querySelectorAll("option:not([value='all'])").forEach((n) => n.remove());
  for (const t of teams) {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    select.appendChild(opt);
  }
}

function applyFilters() {
  let rows = state.all;
  if (state.team !== "all") {
    const teamN = normalize(state.team);
    rows = rows.filter((p) => normalize(p.team) === teamN);
  }
  if (state.search) {
    const q = normalize(state.search);
    rows = rows.filter((p) => normalize(`${p.name} ${p.team} ${p.points} ${p.rebounds} ${p.assists}`).includes(q));
  }
  if (state.sortKey) {
    const k = state.sortKey;
    const d = state.sortDir;
    rows = [...rows].sort((a, b) => (a[k] - b[k]) * d);
  }
  renderRows(rows);
}

function setupSearch() {
  const input = $("#search");
  if (!input) return;
  input.addEventListener("input", debounce((e) => {
    state.search = e.target.value || "";
    applyFilters();
  }, 200));
}

function setupTeamFilter() {
  const select = $("#team-filter");
  if (!select) return;
  select.addEventListener("change", (e) => {
    state.team = e.target.value || "all";
    applyFilters();
  });
}

const THEME_KEY = "nba-stats-dark";

function setDarkMode(enabled) {
  document.body.classList.toggle("dark-mode", !!enabled);
  const btn = $("#dark-mode-toggle");
  if (btn) btn.setAttribute("aria-pressed", String(!!enabled));
}

function initDarkMode() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  const initial = saved === null ? prefersDark : saved === "true";
  setDarkMode(initial);
  const toggle = $("#dark-mode-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const nowDark = !document.body.classList.contains("dark-mode");
      setDarkMode(nowDark);
      localStorage.setItem(THEME_KEY, String(nowDark));
    });
  }
  const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
  if (mq && mq.addEventListener) {
    mq.addEventListener("change", (e) => {
      const hasChoice = localStorage.getItem(THEME_KEY) !== null;
      if (!hasChoice) setDarkMode(e.matches);
    });
  }
}

function setupSorting() {
  const buttons = document.querySelectorAll(".sort-btn"); // only on points/rebounds/assists
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      if (state.sortKey === key) state.sortDir *= -1;
      else { state.sortKey = key; state.sortDir = 1; }
      buttons.forEach((b) => b.classList.remove("active", "asc", "desc"));
      btn.classList.add("active", state.sortDir === 1 ? "asc" : "desc");
      applyFilters();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateTeamFilter();
  setupSearch();
  setupTeamFilter();
  setupSorting();
  initDarkMode();
  applyFilters();
});