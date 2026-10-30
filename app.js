const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const bottle = input.value.trim();
  if (!bottle) return;
  // Use DOM textContent instead of injecting untrusted user input into HTML.
  result.replaceChildren();
  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = "MOCK RESPONSE";
  const heading = document.createElement("h2");
  heading.textContent = `Sample result: ${bottle}`;
  const source = document.createElement("p");
  source.textContent = "Data source: Demo only (no live API connected).";
  const price = document.createElement("p");
  price.textContent = "Price: Unavailable.";
  const detail = document.createElement("p");
  detail.textContent = "This is a placeholder response. Real recommendations require verified bottle data and a working recommendation system.";
  result.append(badge, heading, source, price, detail);
});
