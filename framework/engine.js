/* ============================================================
   RENDERING ENGINE — Multi-trip Travel Guide Framework (Brut)
   Reads a global `TRIP` object and generates the full page DOM.
   ============================================================ */

/* ── Utilities ── */

function slugify(str) {
  return 'place-' + str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function esc(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* Mapbox uses [lng, lat], TRIP data uses [lat, lng] */
function toLngLat(p) { return [p[1], p[0]]; }

/* MapLibre GL — free, no token needed */

/* ── Dynamic page indices ── */

function getFullmapPageIndex() {
  return TRIP.pages.findIndex(function(p) { return p.type === 'fullmap'; });
}

function getAddressesPageIndex() {
  return TRIP.pages.findIndex(function(p) { return p.type === 'addresses'; });
}

/* ── Hero — Brut ── */

function renderHero() {
  var meta = TRIP.meta;

  // Build right-side metadata from chips
  var metaHtml = '<div class="hero-meta">';
  if (meta.chips && meta.chips.length) {
    meta.chips.forEach(function(chip) {
      metaHtml += '<span>' + chip.text + '</span>';
    });
  }
  metaHtml += '</div>';

  // Title: uppercase with period
  var title = meta.title.toUpperCase();
  if (title.charAt(title.length - 1) !== '.') title += '.';

  // Date line from first highlight chip or subtitle
  var dateLine = meta.subtitle || '';
  if (meta.chips) {
    var hl = meta.chips.find(function(c) { return c.highlight; });
    if (hl) dateLine = hl.text;
  }

  return '<div class="hero">' +
    '<div class="hero-top">' +
      '<h1>' + title + '</h1>' +
      metaHtml +
    '</div>' +
    '<span class="hero-sub">' + dateLine + '</span>' +
  '</div>';
}

/* ── Tabs ── */

function renderTabs() {
  var html = '<div class="tabs-wrap"><div class="tabs">';
  TRIP.pages.forEach(function(page, i) {
    html += '<div class="tab' + (i === 0 ? ' active' : '') + '" onclick="showPage(' + i + ')">' + page.tab + '</div>';
  });
  html += '</div></div>';
  return html;
}

/* ── Card rendering ── */

function renderCard(card) {
  var id = card.mapsQuery ? slugify(card.name) : '';
  var personTag = TRIP.meta.personTag || '♥';

  var html = '<div class="card ' + (card.color || '') + '"' + (id ? ' id="' + id + '"' : '') + '>';

  // card-top
  html += '<div class="card-top">';
  html += '<span class="card-emoji">' + (card.emoji || '') + '</span>';
  html += '<div class="card-info">';
  if (card.mapsQuery) {
    html += '<div class="card-name"><a class="card-name-link" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(card.mapsQuery) + '" target="_blank">' + card.name + '</a></div>';
  } else {
    html += '<div class="card-name">' + card.name + '</div>';
  }
  if (card.addr) {
    html += '<div class="card-addr">' + card.addr + '</div>';
  }
  html += '</div>';
  if (card.price) {
    html += '<div class="card-price">' + card.price + '</div>';
  }
  if (card.person) {
    html += '<span class="wife-tag">' + personTag + ' ' + card.person + '</span>';
  }
  html += '</div>';

  if (card.body) {
    html += '<div class="card-body">' + card.body + '</div>';
  }
  if (card.verdict) {
    html += '<div class="card-verdict">' + card.verdict + '</div>';
  }
  if (card.warn) {
    html += '<div class="card-warn-note">' + card.warn + '</div>';
  }
  if (card.mapsQuery) {
    var q = encodeURIComponent(card.mapsQuery);
    var n = encodeURIComponent(card.name);
    html += '<div class="cta-group">';
    html += '<a class="card-cta" href="https://maps.google.com/?q=' + q + '" target="_blank">🗺 Google</a>';
    html += '<a class="card-cta" href="https://maps.apple.com/?q=' + q + '" target="_blank">🍎 Apple</a>';
    html += '<a class="card-cta" href="https://citymapper.com/directions?endaddress=' + q + '&endname=' + n + '" target="_blank">🚇 City</a>';
    html += '</div>';
  }

  html += '</div>';
  return html;
}

function renderCards(items) {
  var html = '<div class="cards">';
  items.forEach(function(card) {
    html += renderCard(card);
  });
  html += '</div>';
  return html;
}

/* ── Infobox rendering ── */

function renderInfobox(box) {
  var html = '<div class="infobox ' + (box.color || '') + '">';
  html += '<div class="infobox-title">' + box.title + '</div>';
  if (box.items && box.items.length) {
    html += '<ul>';
    box.items.forEach(function(item) {
      html += '<li>' + item + '</li>';
    });
    html += '</ul>';
  }
  html += '</div>';
  return html;
}

function renderInfoboxGroup(group) {
  var html = '<div style="padding:0 16px; display:flex; flex-direction:column; gap:10px;">';
  group.items.forEach(function(box) {
    html += renderInfobox(box);
  });
  html += '</div>';
  return html;
}

/* ── Apps grid ── */

function renderApps(section) {
  var html = '';
  if (section.label) {
    html += '<div class="sec-label">' + section.label + '</div>';
  }
  html += '<div class="apps-grid">';
  section.items.forEach(function(app) {
    html += '<div class="app-card">';
    html += '<div class="app-icon">' + app.icon + '</div>';
    html += '<div class="app-name">' + app.name + '</div>';
    html += '<div class="app-desc">' + app.desc + '</div>';
    if (app.tag) {
      html += '<span class="app-tag ' + app.tag + '">' + (app.tagLabel || '') + '</span>';
    }
    html += '</div>';
  });
  html += '</div>';
  return html;
}

/* ── Section rendering ── */

function renderSection(section) {
  switch (section.type) {
    case 'label':
      return '<div class="sec-label">' + section.text + '</div>';
    case 'cards':
      return renderCards(section.items);
    case 'infobox':
      return '<div style="margin:0 16px">' + renderInfobox(section) + '</div>';
    case 'infoboxGroup':
      return renderInfoboxGroup(section);
    case 'apps':
      return renderApps(section);
    case 'collapsible':
      return renderCollapsible(section);
    case 'divider':
      return '<div class="divider"></div>';
    case 'spacer':
      return '<div class="spacer"></div>';
    default:
      return '';
  }
}

function renderCollapsible(section) {
  var html = '<details class="collapsible"' + (section.open ? ' open' : '') + '>';
  html += '<summary>';
  html += '<span class="coll-title">' + section.title + '</span>';
  if (section.summary) {
    html += '<span class="coll-sub">' + section.summary + '</span>';
  }
  html += '</summary>';
  html += '<div class="coll-content">' + (section.content || '') + '</div>';
  html += '</details>';
  return html;
}

/* ── Banner rendering ── */

function renderBanner(banner) {
  if (!banner) return '';
  var html = '<div class="day-banner' + (banner.accent ? ' accent-' + banner.accent : '') + '">';
  html += '<div class="day-badge">' + banner.badge + '</div>';
  html += '<h2>' + banner.title + '</h2>';
  if (banner.sub) {
    html += '<p>' + banner.sub + '</p>';
  }
  html += '</div>';
  return html;
}

/* ── Timeline rendering — Brut (no t-line) ── */

function renderTimeline(timeline, accent) {
  var html = '<div class="sec-label">Planning du jour</div>';
  html += '<div class="timeline' + (accent ? ' accent-' + accent : '') + '">';
  timeline.forEach(function(slot) {
    html += '<div class="tslot">';
    html += '<div class="t-time">' + slot.time.replace(/\n/g, ' – ') + '</div>';
    html += '<div class="t-body">';
    html += '<div class="t-title">' + slot.title + '</div>';
    if (slot.items && slot.items.length) {
      html += '<ul class="t-items">';
      slot.items.forEach(function(item) {
        var prefix = '';
        if (item.type === 'tip') prefix = '✦ ';
        else if (item.type === 'sub') prefix = '↳ ';
        else if (item.type === 'warn') prefix = '⚠ ';
        else if (item.type === 'move') prefix = '🚇 ';
        var cls = item.type ? ' class="' + item.type + '"' : '';
        html += '<li' + cls + '>' + prefix + item.text + '</li>';
      });
      html += '</ul>';
    }
    html += '</div></div>';
  });
  html += '</div>';
  return html;
}

/* ── Rain plans rendering ── */

function renderRainPlans(rainPlans) {
  if (!rainPlans || !rainPlans.length) return '';
  var html = '<div class="divider"></div>';
  html += '<div class="sec-label">☔ Plan B — Si la météo est catastrophique</div>';
  html += '<div class="rain-grid">';
  rainPlans.forEach(function(plan) {
    html += '<div class="rain-card">';
    html += '<div class="rain-if">' + plan.if + '</div>';
    html += '<div class="rain-then">' + plan.then + '</div>';
    html += '</div>';
  });
  html += '</div>';
  html += '<div class="spacer" style="margin-top:20px"></div>';
  return html;
}

/* ── Page renderers ── */

function renderCustomPage(page, pageIndex) {
  var html = '<div class="page' + (pageIndex === 0 ? ' active' : '') + '" id="page' + pageIndex + '">';
  html += renderBanner(page.banner);
  if (page.sections) {
    page.sections.forEach(function(section) {
      html += renderSection(section);
    });
  }
  html += '</div>';
  return html;
}

function renderDayPage(page, pageIndex) {
  var html = '<div class="page' + (pageIndex === 0 ? ' active' : '') + '" id="page' + pageIndex + '">';
  html += renderBanner(page.banner);
  html += '<div class="map-wrap" id="map' + pageIndex + '"></div>';
  html += renderTimeline(page.timeline, page.banner ? page.banner.accent : '');
  html += renderRainPlans(page.rainPlans);
  html += '</div>';
  return html;
}

function renderAddressesPage(page, pageIndex) {
  var html = '<div class="page' + (pageIndex === 0 ? ' active' : '') + '" id="page' + pageIndex + '">';
  html += renderBanner(page.banner);

  if (page.zones && page.zones.length) {
    html += '<div class="filter-wrap">';
    page.zones.forEach(function(zone, i) {
      html += '<div class="filter-btn' + (i === 0 ? ' active' : '') + '" onclick="showZone(' + i + ')">' + zone.label + '</div>';
    });
    html += '</div>';

    page.zones.forEach(function(zone, i) {
      html += '<div class="zone-pane' + (i === 0 ? ' active' : '') + '" id="zone' + i + '">';
      if (zone.sections) {
        zone.sections.forEach(function(section) {
          if (section.label) {
            html += '<div class="sec-label">' + section.label + '</div>';
          }
          if (section.cards && section.cards.length) {
            html += renderCards(section.cards);
          }
          if (section.infobox) {
            html += '<div style="margin:12px 16px 0">' + renderInfobox(section.infobox) + '</div>';
          }
          if (section.infoboxes) {
            html += '<div style="padding:0 16px; display:flex; flex-direction:column; gap:10px;">';
            section.infoboxes.forEach(function(box) {
              html += renderInfobox(box);
            });
            html += '</div>';
          }
        });
      }
      if (zone.infoboxes) {
        zone.infoboxes.forEach(function(box) {
          html += '<div style="margin:12px 16px 0">' + renderInfobox(box) + '</div>';
        });
      }
      html += '</div>';
    });
  }

  html += '</div>';
  return html;
}

function renderFullmapPage(page, pageIndex) {
  var dayColors = TRIP.dayColors;
  var dayKeys = Object.keys(dayColors);
  var catColors = TRIP.catColors || {};
  var catLabels = TRIP.catLabels || {};

  var html = '<div class="page' + (pageIndex === 0 ? ' active' : '') + '" id="page' + pageIndex + '" style="padding-bottom:0">';
  html += '<div style="position:relative">';
  html += '<div id="map-full"></div>';

  html += '<div class="map-toggles">';
  html += '<div class="tog-row">';
  dayKeys.forEach(function(day) {
    html += '<button class="tog" id="tog' + day + '" onclick="toggleDay(' + day + ')"><span class="dot" style="background:' + dayColors[day] + '"></span>J' + day + '</button>';
  });
  html += '</div>';
  html += '<div class="tog-sep"></div>';
  html += '<div class="tog-row tog-row-wrap">';
  Object.keys(catColors).forEach(function(cat) {
    html += '<button class="tog" id="togcat-' + cat + '" onclick="toggleCat(\'' + cat + '\')"><span class="dot" style="background:' + catColors[cat] + '"></span>' + (catLabels[cat] || cat) + '</button>';
  });
  html += '</div>';
  html += '</div>';

  html += '</div></div>';
  return html;
}

function renderBudgetPage(page, pageIndex) {
  var html = '<div class="page' + (pageIndex === 0 ? ' active' : '') + '" id="page' + pageIndex + '">';
  html += renderBanner(page.banner);

  if (page.tables) {
    page.tables.forEach(function(table, ti) {
      html += '<div class="sec-label"' + (ti > 0 ? ' style="margin-top:16px"' : '') + '>' + table.label + '</div>';
      html += '<div style="padding:0 16px; overflow-x:auto">';
      html += '<table class="btable">';
      html += '<thead><tr>';
      table.headers.forEach(function(h) {
        html += '<th>' + h + '</th>';
      });
      html += '</tr></thead>';
      html += '<tbody>';
      table.rows.forEach(function(row) {
        html += '<tr>';
        row.forEach(function(cell, ci) {
          var isNum = ci > 0 && cell !== '—';
          html += '<td' + (isNum ? ' class="num"' : '') + '>' + cell + '</td>';
        });
        html += '</tr>';
      });
      html += '</tbody>';
      if (table.footer) {
        html += '<tfoot><tr>';
        table.footer.forEach(function(cell) {
          html += '<td>' + cell + '</td>';
        });
        html += '</tr></tfoot>';
      }
      html += '</table></div>';
    });
  }

  if (page.note) {
    html += '<div style="padding:8px 16px; font-size:0.72rem; color:var(--ink-3)">' + page.note + '</div>';
  }
  html += '<div class="spacer" style="margin-top:16px"></div>';
  html += '</div>';
  return html;
}

/* ── Page dispatcher ── */

function renderPage(page, index) {
  switch (page.type) {
    case 'custom':    return renderCustomPage(page, index);
    case 'day':       return renderDayPage(page, index);
    case 'addresses': return renderAddressesPage(page, index);
    case 'fullmap':   return renderFullmapPage(page, index);
    case 'budget':    return renderBudgetPage(page, index);
    default:
      return '<div class="page" id="page' + index + '"><div class="day-banner"><h2>Page inconnue</h2></div></div>';
  }
}

/* ── Navigation state ── */

var curPage = 0;
var pagesWrap;
var mapsLoaded = {};
var TOTAL_PAGES = 0;
var pageScroll = {};
var _skipScroll = false;

/* ── Scroll helper — iOS Safari needs rAF + setTimeout ── */

function scrollPastHero(isMap) {
  if (isMap) {
    window.scrollTo(0, 0);
    return;
  }
  var tabs = document.querySelector('.tabs-wrap');
  if (!tabs) return;
  var go = function() { tabs.scrollIntoView({ block: 'start', behavior: 'instant' }); };
  go();
  requestAnimationFrame(go);
  setTimeout(go, 80);
  setTimeout(go, 200);
}

/* ── Show page — with View Transitions ── */

function showPage(n, animate, isSwipe) {
  if (animate === undefined) animate = true;
  if (isSwipe === undefined) isSwipe = false;

  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(t, i) { t.classList.toggle('active', i === n); });

  // Save scroll position of current page before leaving
  pageScroll[curPage] = window.scrollY;

  var oldPage = curPage;
  curPage = n;

  var shouldRestore = _skipScroll;
  _skipScroll = false;

  // Direction class for View Transitions
  document.documentElement.classList.toggle('nav-back', n < oldPage);

  function handleScroll(isMap) {
    if (shouldRestore && !isMap) return; // bottom bar handles scroll
    scrollPastHero(isMap);
  }

  function applyPageChange() {
    var fullmapIdx = getFullmapPageIndex();
    var isMap = n === fullmapIdx;

    if (pagesWrap) {
      pagesWrap.style.transition = 'none';
      pagesWrap.style.transform = 'translateX(' + (-n * 100) + 'vw)';
    }

    document.querySelector('.hero').classList.toggle('map-mode', isMap);
    handleScroll(isMap);
    document.body.classList.toggle('fullmap-mode', isMap);

    if (!mapsLoaded[n]) { initMap(n); mapsLoaded[n] = true; }

    // Resize map when entering fullmap (fixes stale dimensions)
    if (isMap && mapState.map) {
      setTimeout(function() { mapState.map.resize(); }, 50);
    }
  }

  // Use View Transitions for tab clicks (not swipe)
  if (animate && !isSwipe && document.startViewTransition) {
    document.startViewTransition(function() {
      applyPageChange();
    });
  } else if (animate && isSwipe && pagesWrap) {
    // Swipe release: use CSS transition (smooth slide)
    var fullmapIdx = getFullmapPageIndex();
    var isMap = n === fullmapIdx;

    pagesWrap.style.transition = 'transform 0.32s cubic-bezier(0.25, 0.1, 0.25, 1)';
    pagesWrap.style.transform = 'translateX(' + (-n * 100) + 'vw)';

    document.querySelector('.hero').classList.toggle('map-mode', isMap);
    handleScroll(isMap);
    document.body.classList.toggle('fullmap-mode', isMap);
    if (!mapsLoaded[n]) { initMap(n); mapsLoaded[n] = true; }
    if (isMap && mapState.map) {
      setTimeout(function() { mapState.map.resize(); }, 350);
    }
  } else {
    applyPageChange();
  }

  if (tabs[n]) tabs[n].scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
  bbUpdateActive(n);
}

/* ── Zone filter ── */

function showZone(n) {
  document.querySelectorAll('.filter-btn').forEach(function(b, i) { b.classList.toggle('active', i === n); });
  document.querySelectorAll('.zone-pane').forEach(function(p, i) { p.classList.toggle('active', i === n); });
}

/* ── Deep links: Day → Addresses ── */

function goToPlace(cardId) {
  var card = document.getElementById(cardId);
  if (!card) return;
  var pane = card.closest('.zone-pane');
  if (pane) {
    var zoneIdx = parseInt(pane.id.replace('zone', ''));
    showZone(zoneIdx);
  }
  showPage(getAddressesPageIndex());
  setTimeout(function() { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 420);
}

/* ── Map state (fullmap) ── */

var mapState = { map: null, markers: [], days: {}, cats: {} };

function updateMapVis() {
  mapState.markers.forEach(function(entry) {
    var dayOk = mapState.days[entry.day];
    var catOk = mapState.cats[entry.cat] !== false;
    var show = dayOk && catOk;
    if (show && !entry.marker.getElement().parentNode) entry.marker.addTo(mapState.map);
    else if (!show) entry.marker.remove();
  });
}

function toggleDay(day) {
  mapState.days[day] = !mapState.days[day];
  document.getElementById('tog' + day).classList.toggle('off', !mapState.days[day]);
  updateMapVis();
}

function toggleCat(cat) {
  mapState.cats[cat] = mapState.cats[cat] === false ? true : false;
  var el = document.getElementById('togcat-' + cat);
  if (el) el.classList.toggle('off', mapState.cats[cat] === false);
  updateMapVis();
}

/* ── Mapbox marker helper ── */

function createPillEl(label, color) {
  var el = document.createElement('div');
  el.style.cssText = 'background:' + color + ';color:#fff;padding:3px 9px;border-radius:30px;font-size:11px;font-weight:700;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.25);border:2px solid #fff;font-family:Inter,-apple-system,sans-serif;cursor:pointer';
  el.textContent = label;
  return el;
}

/* ── Mapbox map initialization ── */

function initMap(pageNum) {
  if (typeof maplibregl === 'undefined') return;

  var fullmapIdx = getFullmapPageIndex();
  var catColors = TRIP.catColors || {};
  var MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';

  /* ── Full map ── */
  if (pageNum === fullmapIdx) {
    var el = document.getElementById('map-full');
    if (!el || el.dataset.mapInit) return;
    el.dataset.mapInit = '1';
    var center = TRIP.meta.mapCenter || [51.508, -0.130];
    var zoom = TRIP.meta.mapZoom || 12;

    var map = new maplibregl.Map({
      container: 'map-full',
      style: MAP_STYLE,
      center: toLngLat(center),
      zoom: zoom,
      attributionControl: false
    });
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    mapState.map = map;
    mapState.markers = [];

    var dayKeys = Object.keys(TRIP.dayColors);
    dayKeys.forEach(function(day) { mapState.days[parseInt(day)] = true; });

    map.on('load', function() {
      dayKeys.forEach(function(dayStr) {
        var day = parseInt(dayStr);
        var d = TRIP.mapData[day];
        if (!d) return;
        var fallbackColor = TRIP.dayColors[day];
        d.pts.forEach(function(m) {
          var color = (m.cat && catColors[m.cat]) ? catColors[m.cat] : fallbackColor;
          var pillEl = createPillEl(m.label, color);

          var lat = m.p[0], lng = m.p[1];
          var gUrl = 'https://maps.google.com/?q=' + lat + ',' + lng;
          var aUrl = 'https://maps.apple.com/?ll=' + lat + ',' + lng + '&q=' + encodeURIComponent(m.label);
          var cUrl = 'https://citymapper.com/directions?endcoord=' + lat + ',' + lng + '&endname=' + encodeURIComponent(m.label);
          var gSearch = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(m.label + ' London');

          var popupHtml = '<div class="mp">' +
            '<div class="mp-name"><a href="' + gSearch + '" target="_blank" style="color:inherit;text-decoration:none;border-bottom:1.5px solid rgba(0,0,0,0.2)">J' + day + ' · ' + m.label + '</a></div>' +
            '<div class="mp-links">' +
              '<a class="mp-btn" href="' + gUrl + '" target="_blank">🗺 Google</a>' +
              '<a class="mp-btn" href="' + aUrl + '" target="_blank">🍎 Apple</a>' +
              '<a class="mp-btn" href="' + cUrl + '" target="_blank">🚇 City</a>' +
            '</div></div>';

          var popup = new maplibregl.Popup({ maxWidth: '220px', offset: 10 }).setHTML(popupHtml);
          var marker = new maplibregl.Marker({ element: pillEl, anchor: 'bottom-left' })
            .setLngLat(toLngLat(m.p))
            .setPopup(popup)
            .addTo(map);

          mapState.markers.push({ marker: marker, day: day, cat: m.cat || 'other' });
        });
      });
    });

    // Geolocation
    map.addControl(new maplibregl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: false,
      showUserHeading: false
    }), 'top-right');

    return;
  }

  /* ── Day page map ── */
  var page = TRIP.pages[pageNum];
  if (!page || page.type !== 'day') return;
  var dayNum = page.dayNumber;
  var d = TRIP.mapData[dayNum];
  if (!d) return;
  var el2 = document.getElementById('map' + pageNum);
  if (!el2 || el2.dataset.mapInit) return;
  el2.dataset.mapInit = '1';
  var fallbackColor = TRIP.dayColors[dayNum] || '#333';
  var catColorsDay = TRIP.catColors || {};

  var dayMap = new maplibregl.Map({
    container: 'map' + pageNum,
    style: MAP_STYLE,
    center: toLngLat(d.center),
    zoom: d.zoom,
    attributionControl: false,
    interactive: true
  });

  dayMap.on('load', function() {
    d.pts.forEach(function(m) {
      var color = (m.cat && catColorsDay[m.cat]) ? catColorsDay[m.cat] : fallbackColor;
      var pillEl = createPillEl(m.label, color);
      var popup = new maplibregl.Popup({ maxWidth: '200px', offset: 10 }).setHTML('<b>' + m.label + '</b>');
      new maplibregl.Marker({ element: pillEl, anchor: 'bottom-left' })
        .setLngLat(toLngLat(m.p))
        .setPopup(popup)
        .addTo(dayMap);
    });
  });

  // Geolocation
  dayMap.addControl(new maplibregl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: false,
    showUserHeading: false
  }), 'top-right');
}

/* ── Swipe handling — improved ── */

function initSwipe() {
  var _tx = 0, _ty = 0, _dragging = false, _startPage = 0, _decided = false;
  var _startTime = 0;
  var fullmapIdx = getFullmapPageIndex();

  document.addEventListener('touchstart', function(e) {
    if (curPage === fullmapIdx) { _dragging = false; return; }
    if (e.touches.length > 1) { _dragging = false; return; }
    if (e.target.closest('.map-wrap, .filter-wrap, .tabs-wrap')) { _dragging = false; return; }
    _tx = e.touches[0].clientX;
    _ty = e.touches[0].clientY;
    _startPage = curPage;
    _dragging = true;
    _decided = false;
    _startTime = Date.now();
    if (pagesWrap) pagesWrap.style.transition = 'none';
  }, { passive: true });

  document.addEventListener('touchmove', function(e) {
    if (!_dragging || e.touches.length > 1) { _dragging = false; return; }
    var dx = e.touches[0].clientX - _tx;
    var dy = e.touches[0].clientY - _ty;
    if (!_decided) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      if (Math.abs(dy) > Math.abs(dx)) { _dragging = false; return; }
      _decided = true;
    }
    var W = window.innerWidth;
    var raw = -_startPage * W + dx;
    var min = -(TOTAL_PAGES - 1) * W;
    if (raw > 0)   raw = raw * 0.18;
    if (raw < min) raw = min + (raw - min) * 0.18;
    if (pagesWrap) pagesWrap.style.transform = 'translateX(' + raw + 'px)';
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    if (!_dragging) return;
    _dragging = false;
    var dx = e.changedTouches[0].clientX - _tx;
    var dy = Math.abs(e.changedTouches[0].clientY - _ty);
    var elapsed = Date.now() - _startTime;
    var velocity = Math.abs(dx) / elapsed; // px/ms
    var target = _startPage;

    if (_decided) {
      // Velocity-based or distance-based decision
      var threshold = velocity > 0.4 ? 20 : 48;
      if (Math.abs(dx) > threshold && Math.abs(dx) > dy) {
        if (dx < 0 && _startPage < TOTAL_PAGES - 1) target = _startPage + 1;
        if (dx > 0 && _startPage > 0) target = _startPage - 1;
      }
    }
    showPage(target, true, true);
  }, { passive: true });
}

/* ── Keyboard navigation ── */

function initKeyboard() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' && curPage < TOTAL_PAGES - 1) showPage(curPage + 1);
    if (e.key === 'ArrowLeft' && curPage > 0) showPage(curPage - 1);
  });
}

/* ── Bottom bar — terrain shortcuts ── */

function getTodayDayNumber() {
  if (!TRIP.meta.startDate) return 1;
  var tz = TRIP.meta.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  var todayStr = new Intl.DateTimeFormat('en-CA', { timeZone: tz }).format(new Date());
  var diff = Math.round((new Date(todayStr + 'T00:00:00Z') - new Date(TRIP.meta.startDate + 'T00:00:00Z')) / 86400000) + 1;
  var dayPages = TRIP.pages.filter(function(p) { return p.type === 'day'; });
  if (diff < 1) return dayPages.length > 0 ? dayPages[0].dayNumber : 1;
  if (diff > dayPages.length) return dayPages.length > 0 ? dayPages[dayPages.length - 1].dayNumber : 1;
  return diff;
}

function getDayPageIndex(dayNumber) {
  return TRIP.pages.findIndex(function(p) { return p.type === 'day' && p.dayNumber === dayNumber; });
}

var bbCurrentDay = 1;

function renderBottomBar() {
  var dayPages = TRIP.pages.filter(function(p) { return p.type === 'day'; });
  if (dayPages.length === 0) return '';
  bbCurrentDay = getTodayDayNumber();
  var html = '<div class="bottom-bar">';
  html += '<button class="bb-btn" id="bb-jour" onclick="bbGoJour()">📋 J' + bbCurrentDay + '</button>';
  html += '<button class="bb-btn" id="bb-carte" onclick="bbGoCarte()">🗺 Carte</button>';
  html += '<button class="bb-btn" id="bb-addr" onclick="bbGoAddr()">🍽 Adresses</button>';
  html += '</div>';
  return html;
}

function bbUpdateActive(pageIdx) {
  var dayIdx = getDayPageIndex(bbCurrentDay);
  var mapIdx = getFullmapPageIndex();
  var addrIdx = getAddressesPageIndex();
  var bj = document.getElementById('bb-jour');
  var bc = document.getElementById('bb-carte');
  var ba = document.getElementById('bb-addr');
  if (bj) bj.classList.toggle('active', pageIdx === dayIdx);
  if (bc) bc.classList.toggle('active', pageIdx === mapIdx);
  if (ba) ba.classList.toggle('active', pageIdx === addrIdx);
}

function bbNav(idx) {
  if (idx < 0) return;
  pageScroll[curPage] = window.scrollY;
  _skipScroll = true;
  showPage(idx);
  var y = pageScroll[idx];
  if (y !== undefined) {
    var go = function() { window.scrollTo(0, y); };
    go();
    requestAnimationFrame(go);
    setTimeout(go, 80);
    setTimeout(go, 200);
  }
}
function bbGoJour() { bbNav(getDayPageIndex(bbCurrentDay)); }
function bbGoCarte() { bbNav(getFullmapPageIndex()); }
function bbGoAddr() { bbNav(getAddressesPageIndex()); }

/* ── Main init ── */

window.addEventListener('load', function() {
  var app = document.getElementById('app');
  app.innerHTML = renderHero() + renderTabs();

  var pagesHtml = TRIP.pages.map(function(page, i) { return renderPage(page, i); }).join('');
  app.innerHTML += '<div class="pages-outer"><div class="pages-wrap">' + pagesHtml + '</div></div>';

  // Bottom bar
  var hasDays = TRIP.pages.some(function(p) { return p.type === 'day'; });
  if (hasDays) {
    app.insertAdjacentHTML('beforeend', renderBottomBar());
    document.body.classList.add('has-bottom-bar');
    var bb = document.querySelector('.bottom-bar');
    if (bb) document.documentElement.style.setProperty('--bb-h', bb.offsetHeight + 'px');
  }

  document.title = TRIP.meta.flag + ' ' + TRIP.meta.title;

  pagesWrap = document.querySelector('.pages-wrap');
  TOTAL_PAGES = TRIP.pages.length;

  // Measure tabs height for dynamic fullmap sizing
  var tabsWrap = document.querySelector('.tabs-wrap');
  if (tabsWrap) {
    document.documentElement.style.setProperty('--tabs-h', tabsWrap.offsetHeight + 'px');
  }

  var firstDay = TRIP.pages.find(function(p) { return p.type === 'day'; });
  if (firstDay) {
    var firstDayIdx = TRIP.pages.indexOf(firstDay);
    initMap(firstDayIdx);
    mapsLoaded[firstDayIdx] = true;
  }

  // Scroll past hero on initial load
  scrollPastHero(false);

  initSwipe();
  initKeyboard();
});
