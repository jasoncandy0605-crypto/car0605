# CAR0605

Mobile-first AI Car Ledger — in-repo prototype.

This commit adds a minimal Next.js App Router skeleton, server-side file-based persistence, an AI proxy endpoint (requires OPENAI_API_KEY), and basic dashboard UI.

Security and notes:
- AI requests are proxied server-side and rate-limited.
- No API keys are exposed to the frontend in code.
- Amounts are stored as integer cents using decimal arithmetic to avoid floating point errors.

Run locally:

1. npm install
2. copy .env.example to .env and set OPENAI_API_KEY if you want AI parsing
3. npm run dev

