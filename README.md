# Bob-AI — Whisky Discovery Prototype

An experimental web interface for a proposed whisky discovery assistant.

## Current functionality
- Takes a whisky/bottle name.
- Displays a clearly labelled sample response.
- Handles user input using safe DOM text methods.

## Limitations
This is **not** a live AI agent. There is no model, live BAXUS API, price feed, inventory lookup, database or verified tasting data. Sample responses are mock data.

## Run
Open `index.html` in a browser. No dependencies.

## Next milestones
1. Find a permitted and documented bottle data source.
2. Connect the data source securely (use a backend if API keys are needed).
3. Add loading, error, no-results and rate-limit handling.
4. Build a transparent recommendation algorithm and test it.
5. Document the architecture and add screenshots.
