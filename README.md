# Money Tools by Xai

A lightweight, responsive set of money utilities built with Bootstrap 5. Includes a Percentage Calculator and a Basic Calculator. The app supports light/dark themes with a persistent toggle and works entirely offline using static HTML.

## Features
- **Percentage Calculator** (`index.html`): Quickly compute X% of an amount.
- **Basic Calculator** (`basic-calculator.html`): Add, subtract, multiply, and divide two numbers.
- **Theme Toggle**: Dark/Light mode persisted via `localStorage` using the `data-bs-theme` attribute.
- **Modern UI**: Gradient background, glassy navbar, subtle animations, and polished form inputs.
- **No Build Step**: Plain HTML + Bootstrap CDN.

## File Structure
```
moneycalc/
├─ index.html               # Percentage Calculator (default entry)
├─ basic-calculator.html    # Basic Calculator
└─ README.md                # Project documentation
```

## Getting Started
You can run this project by simply opening the HTML file(s) in a browser:
- Double-click `index.html` (recommended entry point), or
- Open `basic-calculator.html` directly for the basic calculator.

Optionally, serve locally to match production-like behavior (helpful for relative links):
- Python 3: `python -m http.server 8000`
- Node (npx): `npx serve .`

Then open `http://localhost:8000/` in your browser.

## Usage
- Use the **Tools** dropdown in the navbar to switch between calculators.
- Toggle **Dark Mode** using the switch in the navbar. The preference is saved to `localStorage` and applied on next visit.
- Inputs support decimals. Validation prevents calculations when fields are empty or invalid.

## Tech Stack
- **Bootstrap 5.3** (via CDN) for layout, components, and theme variables
- **Vanilla JavaScript** for calculations and theme persistence
- **Static HTML/CSS** only—no framework or bundler required

## Implementation Notes
- Theme is controlled by `data-bs-theme` on `<html>` along with custom CSS overrides for dark mode.
- The dropdown menu uses a higher stacking context (`z-index`) on the navbar and menu to ensure it overlays content.
- All interactive elements keep stable IDs (`amount`, `percent`, `num1`, `num2`, `operation`, `result`, `output`) to preserve UX and logic.

## Contributing
1. Fork and clone the repo.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Make changes and commit (`git commit -m "feat: describe your change"`).
4. Push and open a PR.

## Roadmap Ideas
- Add reverse percentage tools (e.g., "What percent is A of B?")
- Add sales tax/VAT calculators
- Shareable result links (URL params)
- Extract shared CSS to a separate file to reduce duplication

## License
This project is open-source. If you need a specific license (e.g., MIT), let me know and I’ll add it.

DARK MODE

![moneycalc](https://github.com/user-attachments/assets/7e2c3400-1f1a-4de2-9202-8edac06ac78f)

LIGHT MODE

![moneycalc2](https://github.com/user-attachments/assets/1f6b6931-3b85-4fb0-9de9-5ca4c5f95333)

