# Jobs Board Demo

This repository contains a small full-stack job browsing system with:

- NestJS backend for job data, filtering, validation, and pagination
- React + Vite frontend for browsing jobs with URL-synced filters

## Tech Stack

- Backend: NestJS, TypeScript
- Frontend: React, Vite, TypeScript

## Status

Phase 1 - Technical Design (Completed)
Phase 2 - Implementation (Completed)

## Project Structure

```text
jobs-board-demo/
|
|-- backend/
|   |-- src/
|   |   `-- jobs/
|   |       |-- dto/
|   |       |   `-- get-jobs-query.dto.ts
|   |       |-- jobs.controller.ts
|   |       |-- jobs.service.ts
|   |       `-- mock-data.ts
|   `-- main.ts
|
|-- frontend/
|   |-- src/
|   |   |-- pages/
|   |   |   `-- JobsPage.tsx
|   |   |-- components/
|   |   |   |-- FiltersSidebar.tsx
|   |   |   |-- JobsList.tsx
|   |   |   `-- Pagination.tsx
|   |   |-- types/
|   |   |   `-- jobs.ts
|   |   `-- main.tsx
|   |
|   `-- index.css
|
`-- docs/
    `-- technical-design.md
```

## Run Backend

```bash
cd backend
npm install
npm run start:dev
```

Backend runs on `http://localhost:3000`.

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on the Vite dev server, usually `http://localhost:5173`.

## Features

- Server-side filtering by `category` and `type`
- Offset-based pagination
- Query validation with NestJS DTOs
- URL synchronization with `useSearchParams`
- Loading, empty, and error states in the UI

## Example URLs

- `/jobs`
- `/jobs?category=Engineering`
- `/jobs?type=Contract&page=2`
- `/jobs?category=Design&type=Full-time`
