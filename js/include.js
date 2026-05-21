// /js/include.js

async function includePartials() {
  const elements = ["header", "footer"];

  for (const id of elements) {
    const el = document.getElementById(id);

    if (el) {
      try {
        // Use RELATIVE path (fixes routing issues)
        const response = await fetch(`partials/${id}.html`);

        if (response.ok) {
          el.innerHTML = await response.text();
        } else {
          console.error(`Failed to load ${id}.html`);
        }

      } catch (err) {
        console.error(`Error loading ${id}:`, err);
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", includePartials);