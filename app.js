let trips = [
  {
    trailName: "Cirque of the Towers (Wind River Range)",
    mileage: "23.7 mi",
    elevation: "3,871 ft gain",
    state: "Wyoming",
    links: [
      {
        label: "Alltrails (Cirque of the Towers Loop)",
        url: "https://www.alltrails.com/trail/us/wyoming/cirque-of-the-towers-to-fremont-trail-loop"
      },
      {
        label: "Blog 1 (Cirque de Towers)",
        url: "https://operation-adventure.com/backpacking-cirque-of-the-towers-in-the-wind-river-range/"
      },
      {
        label: "Blog 2 (Cirque de Towers)",
        url: "https://www.cleverhiker.com/backpacking/cirque-of-the-towers-3-day-backpacking-loop-wind-river-wy/"
      }
    ],
    conditions: "Trail seems like dirt/sand. One trail is named BIG SANDY TRAIL - but my initial research doesn't see anyone complaining its too sandy, and the pics look like hardpacked dirt at times.",
    mapImage: "https://i.postimg.cc/x8G5svJt/cirquemap.png",
    trailPhotos: [
      "https://i.postimg.cc/TwDCbMRv/cirque1.jpg",
      "https://i.postimg.cc/MH05s7fz/cirque2.png",
      "https://i.postimg.cc/6qVcHr4X/cirque3.png",
      "https://i.postimg.cc/wM52WXRz/cirque4.png"
    ],
    warnings: "Will update if I find anything I'm worried about (i.e. trail too sandy? not enough water sources? grizzly bears?",
    comments: "- Full loop \u2705\\n\\n Trail(s)\\n- Big Sandy Trail\\n- Shadow Lake Trail\\n- Hailey Pass Trail",
    permits: "No permits needed!"
  },
  {
    trailName: "Alice-Toxaway Loop (Sawtooths)",
    mileage: "18.9 mi",
    elevation: "3,139 ft gain",
    state: "Idaho",
    links: [
      {
        label: "Alltrails (Alice-Toxaway Loop)",
        url: "https://www.alltrails.com/trail/us/idaho/tin-cup-hiker"
      },
      {
        label: "Blog 1 (Alice Toxaway Loop)",
        url: "https://www.skyestoury.com/blog/backpacking-the-idaho-sawtooth-mountains"
      },
      {
        label: "Blog 2 (Alice Toxaway Loop)",
        url: "https://voyageswithval.com/alice-toxaway-loop/"
      }
    ],
    conditions: "Trail looks like very good dirt. Will check more photos or videos to confirm this.",
    mapImage: "https://i.postimg.cc/zDkTcX22/alicemap.png",
    trailPhotos: [
      "https://i.postimg.cc/VsFXVLZx/alice1.png",
      "https://i.postimg.cc/SQGcvN13/alice2.jpg",
      "https://i.postimg.cc/tRzFMCvf/alice3.jpg",
      "https://i.postimg.cc/J7Qj24Y9/alice4.jpg"
    ],
    warnings: "Will update if I find anything I'm worried about (i.e. trail too sandy? not enough water sources? grizzly bears?)",
    comments: "- Full loop \u2705\\n\\n Trail(s)\\n- Petit Creek Trail\\n- Yellowbelly Trail",
    permits: "Free, self-issued permit at trailhead (no need to reserve early). Basically no permit needed!"
  },
  {
    trailName: "Zirkel Circle Loop (Mt Zirkel Wilderness)",
    mileage: "18.5 mi",
    elevation: "4,000 ft gain",
    state: "Colorado",
    links: [
      {
        label: "Alltrails (Mount Zirkel Loop Trail)",
        url: "https://www.alltrails.com/trail/us/colorado/mount-zirkel-loop-trail"
      },
      {
        label: "Blog 1 (Zirkel Circle Loop)",
        url: "https://www.coloradohikesandhops.com/blog/hiking-in-steamboat-springs-zirkel-circle"
      }
    ],
    conditions: "Trail looks like very good dirt. Will check more photos or videos to confirm this.",
    mapImage: "https://i.postimg.cc/vmR1mpS3/zirkelmap.png",
    trailPhotos: [
      "https://i.postimg.cc/MGynfdhD/zirkel1.png",
      "https://i.postimg.cc/rp6dpvYZ/zirkel2.jpg",
      "https://i.postimg.cc/vmW4x3pr/zirkel3.jpg",
      "https://i.postimg.cc/JhbsHP9K/zirkel4.png"
    ],
    warnings: "Will update if I find anything I'm worried about (i.e. trail too sandy? not enough water sources? grizzly bears?)",
    comments: "- Full loop \u2705\\n\\n Trail(s)\\n- Gilpin Trail\\n- Gold Creek Trail\\n- Three Island Lake Trail",
    permits: "Free, self-issued permit at trailhead (no need to reserve early). Basically no permit needed!"
  },
  {
    trailName: "Needle Creek/Vallecito Creek Loop (San Juans)",
    mileage: "23.7 mi",
    elevation: "4,778 ft gain",
    state: "Colorado",
    links: [
      {
        label: "Alltrails (Needle Creek Trail)",
        url: "https://www.alltrails.com/trail/us/colorado/sunlight-peak-via-needle-creek-trail"
      },
      {
        label: "Alltrails (Johson/Vallecito)",
        url: "https://www.alltrails.com/trail/us/colorado/vallecito-lake-to-purgatory-via-chicago-and-johnson-basins"
      },
      {
        label: "Blog 1 (Needle Creek Loop)",
        url: "https://valhikes.blogspot.com/2019/08/vallecito-to-windom-johnson-creek-and.html"
      }
    ],
    conditions: "Trail looks like very good dirt. Will check more photos or videos to confirm this.",
    mapImage: "https://i.postimg.cc/5tqt2jCP/elkmap.png",
    trailPhotos: [
      "https://i.postimg.cc/YCJhnJ6G/needle1.jpg",
      "https://i.postimg.cc/FH27W2y3/needle2.png",
      "https://i.postimg.cc/CxWzPWGj/needle3.png",
      "https://i.postimg.cc/7Zpfsp3P/needle4.jpg"
    ],
    warnings: "Will update if I find anything I'm worried about (i.e. trail too sandy? not enough water sources? grizzly bears?)",
    comments: "- We take a TRAIN into the wilderness to start!! \uD83D\uDE82\\n\\n- Not a full loop \u274C (shuttle seems easy back to train)\\n\\n Trail(s)\\n- Needle Creek Trail\\n- Johnson Creek Trail\\n- Vallecito Creek Trail",
    permits: "No permits needed!"
  }
];

const REQUIRED_HEADERS = [
  "trailName",
  "mileage",
  "elevation",
  "conditions",
  "mapImage",
  "trailPhotos",
  "warnings",
  "comments",
  "links"
];

const CSV_HEADERS = [
  "trailName",
  "mileage",
  "elevation",
  "state",
  "conditions",
  "mapImage",
  "trailPhotos",
  "warnings",
  "comments",
  "permits",
  "links"
];

const grid = document.getElementById("trip-grid");
const template = document.getElementById("trip-card-template");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");
const csvUpload = document.getElementById("csv-upload");
const exportButton = document.getElementById("export-csv");
const importStatus = document.getElementById("import-status");
const viewButtons = Array.from(document.querySelectorAll(".view-button"));
const VIEW_STORAGE_KEY = "trip-grid-view";

function getImgurCandidates(url) {
  const rawUrl = String(url || "").trim();
  if (!rawUrl) {
    return [];
  }

  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return [rawUrl];
  }

  const host = parsed.hostname.replace(/^www\./, "").toLowerCase();
  const pathParts = parsed.pathname.split("/").filter(Boolean);
  const filePart = pathParts[pathParts.length - 1] || "";

  if (host === "imgur.com" || host === "i.imgur.com") {
    const idMatch = filePart.match(/^([a-zA-Z0-9]+)(?:\.[a-zA-Z0-9]+)?$/);
    if (idMatch) {
      const imageId = idMatch[1];
      if (/\.[a-zA-Z0-9]+$/.test(filePart) && host === "i.imgur.com") {
        return [rawUrl];
      }

      return [
        `https://i.imgur.com/${imageId}.jpg`,
        `https://i.imgur.com/${imageId}.png`,
        `https://i.imgur.com/${imageId}.jpeg`,
        `https://i.imgur.com/${imageId}.webp`,
        rawUrl
      ];
    }
  }

  return [rawUrl];
}

function applyImageWithFallback(imageElement, sourceUrl, altText) {
  const candidates = getImgurCandidates(sourceUrl);
  imageElement.alt = altText;

  if (!candidates.length) {
    imageElement.removeAttribute("src");
    return;
  }

  let attemptIndex = 0;
  imageElement.src = candidates[attemptIndex];
  imageElement.onerror = () => {
    attemptIndex += 1;
    if (attemptIndex < candidates.length) {
      imageElement.src = candidates[attemptIndex];
    } else {
      imageElement.onerror = null;
    }
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function normalizeDisplayText(value) {
  return String(value ?? "").replace(/\\n/g, "\n").trim();
}

function renderTextBlock(element, value) {
  const normalized = normalizeDisplayText(value);
  if (!normalized) {
    element.textContent = "";
    return;
  }

  const blocks = normalized
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const htmlBlocks = blocks.map((block) => {
    const lines = block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const allBullets = lines.length > 0 && lines.every((line) => /^[-*]\s+/.test(line));
    if (allBullets) {
      const listItems = lines
        .map((line) => line.replace(/^[-*]\s+/, ""))
        .map((line) => `<li>${escapeHtml(line)}</li>`)
        .join("");
      return `<ul>${listItems}</ul>`;
    }

    return `<p>${lines.map((line) => escapeHtml(line)).join("<br>")}</p>`;
  });

  element.innerHTML = htmlBlocks.join("<br>");
}

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
}

function splitPipeValues(value) {
  return String(value || "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseLinks(value) {
  return splitPipeValues(value).map((item) => {
    const parts = item.split("::");
    if (parts.length >= 2) {
      return {
        label: parts[0].trim() || "Link",
        url: parts.slice(1).join("::").trim()
      };
    }

    return {
      label: "Link",
      url: item
    };
  });
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      current += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current.trim());
  return values;
}

function parseCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) {
    throw new Error("The CSV is empty.");
  }

  const headers = parseCsvLine(lines[0]);
  const missingHeaders = REQUIRED_HEADERS.filter((header) => !headers.includes(header));

  if (missingHeaders.length) {
    throw new Error(`Missing required column(s): ${missingHeaders.join(", ")}`);
  }

  const rows = lines.slice(1).map((line) => parseCsvLine(line));

  const parsedTrips = rows.map((row, rowIndex) => {
    const rowData = {};
    headers.forEach((header, index) => {
      rowData[header] = row[index] || "";
    });

    const tripName = rowData.trailName.trim();
    if (!tripName) {
      throw new Error(`Row ${rowIndex + 2}: trailName is required.`);
    }

    const trailPhotos = splitPipeValues(rowData.trailPhotos);
    if (!trailPhotos.length) {
      throw new Error(`Row ${rowIndex + 2}: trailPhotos needs at least 1 URL.`);
    }

    return {
      trailName: tripName,
      mileage: rowData.mileage,
      elevation: rowData.elevation,
      state: rowData.state || "",
      conditions: rowData.conditions,
      mapImage: rowData.mapImage,
      trailPhotos,
      warnings: rowData.warnings,
      comments: rowData.comments,
      permits: rowData.permits || "",
      links: parseLinks(rowData.links)
    };
  });

  if (!parsedTrips.length) {
    throw new Error("No trip rows found below the header row.");
  }

  return parsedTrips;
}

function escapeCsvValue(value) {
  const stringValue = String(value ?? "");
  if (stringValue.includes('"') || stringValue.includes(",") || stringValue.includes("\n")) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }

  return stringValue;
}

function tripsToCsvRows(tripsToExport) {
  const headerRow = CSV_HEADERS.join(",");
  const dataRows = tripsToExport.map((trip) => {
    const rowData = {
      trailName: trip.trailName,
      mileage: trip.mileage,
      elevation: trip.elevation,
      state: trip.state || "",
      conditions: trip.conditions,
      mapImage: trip.mapImage,
      trailPhotos: (trip.trailPhotos || []).join("|"),
      warnings: trip.warnings,
      comments: trip.comments,
      permits: trip.permits || "",
      links: (trip.links || []).map((link) => `${link.label}::${link.url}`).join("|")
    };

    return CSV_HEADERS.map((header) => escapeCsvValue(rowData[header])).join(",");
  });

  return [headerRow, ...dataRows].join("\n");
}

function downloadCsv() {
  if (!trips.length) {
    importStatus.textContent = "Export failed: there are no trips to export.";
    return;
  }

  const csvText = tripsToCsvRows(trips);
  const blob = new Blob([csvText], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const dateStamp = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `backpacking-trips-${dateStamp}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  importStatus.textContent = `Exported ${trips.length} trip(s) to CSV.`;
}

function setGridView(viewMode) {
  const normalizedView = viewMode === "double" ? "double" : "single";
  grid.classList.remove("view-single", "view-double");
  grid.classList.add(`view-${normalizedView}`);

  viewButtons.forEach((button) => {
    const isActive = button.dataset.view === normalizedView;
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  localStorage.setItem(VIEW_STORAGE_KEY, normalizedView);
  scheduleEqualizeSections();
}

function getCardSections(card) {
  return [
    card.querySelector(".stats"),
    card.querySelector(".gallery")?.closest(".block"),
    card.querySelector(".conditions")?.closest(".block"),
    card.querySelector(".map-image")?.closest(".block"),
    card.querySelector(".warnings")?.closest(".block"),
    card.querySelector(".comments")?.closest(".block"),
    card.querySelector(".permits")?.closest(".block"),
    card.querySelector(".trip-links")?.closest(".block")
  ];
}

function clearSectionHeights(cards) {
  cards.forEach((card) => {
    getCardSections(card).forEach((section) => {
      if (section) {
        section.style.minHeight = "";
      }
    });
  });
}

function equalizeSectionsForTwoUp() {
  const cards = Array.from(grid.querySelectorAll(".card"));
  if (!cards.length) {
    return;
  }

  clearSectionHeights(cards);
  if (!grid.classList.contains("view-double")) {
    return;
  }

  const rows = new Map();
  cards.forEach((card) => {
    const rowKey = card.offsetTop;
    const list = rows.get(rowKey) || [];
    list.push(card);
    rows.set(rowKey, list);
  });

  rows.forEach((rowCards) => {
    if (rowCards.length < 2) {
      return;
    }

    for (let sectionIndex = 0; sectionIndex < 8; sectionIndex += 1) {
      const rowSections = rowCards
        .map((card) => getCardSections(card)[sectionIndex])
        .filter(Boolean);

      if (!rowSections.length) {
        continue;
      }

      const maxHeight = Math.max(...rowSections.map((section) => section.offsetHeight));
      rowSections.forEach((section) => {
        section.style.minHeight = `${maxHeight}px`;
      });
    }
  });
}

let equalizeTimerId = null;
function scheduleEqualizeSections() {
  if (equalizeTimerId) {
    clearTimeout(equalizeTimerId);
  }

  equalizeTimerId = setTimeout(() => {
    equalizeSectionsForTwoUp();
    equalizeTimerId = null;
  }, 40);
}

function renderTrips() {
  grid.innerHTML = "";

  trips.forEach((trip) => {
    const node = template.content.cloneNode(true);

    node.querySelector(".trail-name").textContent = trip.trailName;
    node.querySelector(".mileage").textContent = trip.mileage;
    node.querySelector(".elevation").textContent = trip.elevation;
    node.querySelector(".state").textContent = trip.state || "-";
    renderTextBlock(node.querySelector(".conditions"), trip.conditions);
    renderTextBlock(node.querySelector(".warnings"), trip.warnings);
    renderTextBlock(node.querySelector(".comments"), trip.comments);
    renderTextBlock(node.querySelector(".permits"), trip.permits);

    const linksList = node.querySelector(".trip-links");
    if (!trip.links.length) {
      const li = document.createElement("li");
      li.textContent = "No links added yet.";
      linksList.appendChild(li);
    } else {
      trip.links.forEach((link) => {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.label;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        li.appendChild(anchor);
        linksList.appendChild(li);
      });
    }

    const mapImage = node.querySelector(".map-image");
    applyImageWithFallback(mapImage, trip.mapImage, `${trip.trailName} loop map`);

    const gallery = node.querySelector(".gallery");
    trip.trailPhotos.slice(0, 4).forEach((photoUrl, index) => {
      const img = document.createElement("img");
      img.loading = "lazy";
      img.classList.add("zoomable");
      img.addEventListener("load", scheduleEqualizeSections, { once: true });
      applyImageWithFallback(img, photoUrl, `${trip.trailName} photo ${index + 1}`);
      gallery.appendChild(img);
    });

    grid.appendChild(node);
  });

  scheduleEqualizeSections();
}

csvUpload.addEventListener("change", async (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    return;
  }

  try {
    const csvText = await file.text();
    trips = parseCsv(csvText);
    renderTrips();
    importStatus.textContent = `Imported ${trips.length} trip(s) from ${file.name}.`;
  } catch (error) {
    importStatus.textContent = `Import failed: ${error.message}`;
  }
});

exportButton.addEventListener("click", downloadCsv);
viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setGridView(button.dataset.view);
  });
});

grid.addEventListener("click", (event) => {
  const clickedImage = event.target.closest("img.zoomable");
  if (!clickedImage) {
    return;
  }

  openLightbox(clickedImage.src, clickedImage.alt || "Expanded trail image");
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

window.addEventListener("resize", scheduleEqualizeSections);

setGridView(localStorage.getItem(VIEW_STORAGE_KEY) || "single");
renderTrips();
