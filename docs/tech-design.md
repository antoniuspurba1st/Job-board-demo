# Phase 1 — Technical Design

## Job Feed with Server-Side Filtering

---

# Backend

## 1) Endpoint Design

Endpoint:

GET /jobs

Query parameters:

- page (default: 1)
- limit (default: 10)
- category (optional)
- type (optional)

Filtering will be handled in the service layer.

Pagination will use offset-based pagination:

offset = (page - 1) × limit

---

## 2) DTO Definitions

Request:

GetJobsQueryDto

- page?: number = 1
- limit?: number = 10
- category?: string
- type?: string

Response:

JobsResponseDto

data: Job[]

meta:

- total
- page
- limit
- totalPages

---

## 3) Filtering Strategy

Filtering logic will be implemented inside the service layer.

The service will:

- apply filters based on query parameters
- apply pagination
- return structured response

The structure simulates a production database query.

---

## 4) Edge Cases

- page exceeds total pages → return empty result
- invalid parameters → return 400 Bad Request
- no results → return empty list

---

# Frontend

## 1) Component Structure

JobsPage
├── FiltersSidebar
├── JobsList
└── Pagination

---

## 2) URL Synchronization

The URL will be the single source of truth.

Example:

/jobs?category=engineering&type=contract&page=2

UI state will be derived from query parameters and updated when filters change.

---

## 3) Fetching Strategy

Data will be fetched using a custom hook.

To avoid UI flickering:

- keep previous data while loading
- show loading indicator

Error state:

Display a simple error message.

---

## 4) Reusability

Filter components will be implemented as reusable controlled components that accept value and onChange props.
