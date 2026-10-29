# ShopSphere

A cleaner way to shop.

## Features
- Public product catalogue with search and category filters
- JWT accounts and user profile
- Persistent client cart and checkout to create orders
- Order history; admin product create/update/delete
- Checkout is simulated and does not process real payments


## Run locally
1. Start MongoDB or create an Atlas database.
2. In `server`, copy `.env.example` to `.env`, set `MONGO_URI` and `JWT_SECRET`, then run `npm install && npm run dev`.
3. In `client`, copy `.env.example` to `.env`, then run `npm install && npm run dev`.
4. Open the Vite URL and register. API port: `5002`.

For shopsphere admin features, set `ADMIN_EMAIL` in the backend environment to the email address you register with. The server marks that matching account as admin on registration; do not expose this setting to untrusted users.

## Add demo catalogue products
Run `npm run seed` from the `server` folder after setting `.env`. This inserts sample products for the storefront.

## API overview
- `GET /api/health` — health check
- `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`
- `GET /api/products`, admin `POST/PATCH/DELETE /api/products`
- `POST /api/orders`, `GET /api/orders/mine`


## Deployment
Deploy `server` to Render and `client` to Vercel. Configure `MONGO_URI`, `JWT_SECRET`, `CLIENT_ORIGIN`, `ADMIN_EMAIL` if applicable, and `VITE_API_URL` (deployed backend URL plus `/api`). Do not commit `.env` files.
