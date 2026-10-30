```javascript
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const result = document.getElementById("result");

const bottles = [
  {
    name: "Glenfiddich 12 Year Old",
    region: "Speyside, Scotland",
    type: "Single Malt Scotch",
    flavours: ["pear", "apple", "fruit", "oak", "fresh"],
    notes: "Fresh pear, apple and mellow oak.",
    recommendation: "A starting point for exploring single malt Scotch."
  },
  {
    name: "The Glenlivet 12 Year Old",
    region: "Speyside, Scotland",
    type: "Single Malt Scotch",
    flavours: ["fruit", "citrus", "vanilla", "smooth"],
    notes: "Orchard fruit, citrus and soft vanilla.",
    recommendation: "For drinkers who prefer a fruit-forward whisky."
  },
  {
    name: "The Macallan 12 Year Old Sherry Oak",
    region: "Speyside, Scotland",
    type: "Single Malt Scotch",
    flavours: ["sherry", "dried fruit", "spice", "oak", "rich"],
    notes: "Dried fruit, warm spice and oak.",
    recommendation: "For those exploring richer, sherry-influenced Scotch."
  },
  {
    name: "Lagavulin 16 Year Old",
    region: "Islay, Scotland",
    type: "Single Malt Scotch",
    flavours: ["smoke", "peat", "rich", "dried fruit"],
    notes: "Pronounced peat smoke and a rich, lingering character.",
    recommendation: "For drinkers seeking an intensely smoky whisky."
  },
  {
    name: "Laphroaig 10 Year Old",
    region: "Islay, Scotland",
    type: "Single Malt Scotch",
    flavours: ["smoke", "peat", "coastal", "bold"],
    notes: "Powerful peat smoke with distinctive coastal notes.",
    recommendation: "For those who enjoy bold, heavily peated Scotch."
  },
  {
    name: "Ardbeg 10 Year Old",
    region: "Islay, Scotland",
    type: "Single Malt Scotch",
    flavours: ["smoke", "peat", "citrus", "pepper"],
    notes: "Strong peat smoke with citrus and pepper.",
    recommendation: "For smoky whisky fans who enjoy a punchy profile."
  },
  {
    name: "Talisker 10 Year Old",
    region: "Isle of Skye, Scotland",
    type: "Single Malt Scotch",
    flavours: ["smoke", "pepper", "coastal", "spice"],
    notes: "Peppery spice, smoke and maritime character.",
    recommendation: "For people exploring coastal Scotch whisky."
  },
  {
    name: "Highland Park 12 Year Old",
    region: "Orkney, Scotland",
    type: "Single Malt Scotch",
    flavours: ["honey", "smoke", "spice", "sweet"],
    notes: "Honeyed sweetness, gentle smoke and spice.",
    recommendation: "For drinkers seeking a balance of sweetness and smoke."
  },
  {
    name: "Buffalo Trace Bourbon",
    region: "Kentucky, United States",
    type: "Bourbon Whiskey",
    flavours: ["bourbon", "vanilla", "caramel", "oak", "sweet"],
    notes: "Vanilla, caramel and oak-associated flavours.",
    recommendation: "For people exploring American bourbon."
  },
  {
    name: "Jameson Irish Whiskey",
    region: "Ireland",
    type: "Blended Irish Whiskey",
    flavours: ["irish", "vanilla", "spice", "fruit", "smooth"],
    notes: "Vanilla, spice and orchard-fruit notes.",
    recommendation: "For people exploring blended Irish whiskey."
  }
];

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

function searchBottles(query) {
  const terms = query.toLowerCase().trim().split(/\s+/);

  return bottles
    .map((bottle) => {
      const name = bottle.name.toLowerCase();
      const region = bottle.region.toLowerCase();
      const type = bottle.type.toLowerCase();

      const searchable = [
        name,
        region,
        type,
        bottle.notes,
        bottle.recommendation,
        ...bottle.flavours
      ].join(" ").toLowerCase();

      let score = 0;

      if (name.includes(query.toLowerCase())) {
        score += 10;
      }

      if (region.includes(query.toLowerCase())) {
        score += 6;
      }

      if (type.includes(query.toLowerCase())) {
        score += 5;
      }

      for (const term of terms) {
        if (searchable.includes(term)) {
          score += 1;
        }
      }

      return { bottle, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.bottle);
}

function displayBottle(bottle) {
  const card = createElement("article", "bottle-card");

  card.append(
    createElement("p", "badge", "CATALOGUE MATCH"),
    createElement("h2", "", bottle.name),
    createElement("p", "bottle-meta", bottle.region),
    createElement("p", "", `Type: ${bottle.type}`),
    createElement("p", "", `Profile: ${bottle.flavours.join(", ")}`),
    createElement("p", "", `Notes: ${bottle.notes}`),
    createElement("p", "", `Why explore it: ${bottle.recommendation}`)
  );

  return card;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = input.value.trim();

  result.replaceChildren();

  if (!query) {
    result.append(
      createElement("p", "", "Enter a bottle name, region, style or flavour.")
    );
    return;
  }

  const matches = searchBottles(query);

  if (matches.length === 0) {
    result.append(
      createElement("h2", "", "No matches found"),
      createElement(
        "p",
        "",
        "Try Glenfiddich, Islay, Speyside, bourbon, smoke, vanilla or fruit."
      )
    );

    return;
  }

  result.append(
    createElement(
      "h2",
      "",
      `Found ${matches.length} matching ${matches.length === 1 ? "bottle" : "bottles"}`
    ),
    createElement(
      "p",
      "catalogue-note",
      "Results use a built-in reference catalogue. Prices and live availability are not provided."
    )
  );

  matches.forEach((bottle) => {
    result.append(displayBottle(bottle));
  });
});
```
