# Local Clinic Booking System

Solving the real-world problem of disorganized clinic scheduling and long patient wait times.

## Project Brief

- **Target User:** Patients seeking medical care.
- **Core Functionality:** Browsing available doctors by specialty, viewing schedules, and booking open time slots.
- **Scope:** Designed as a focused application aiming for 4–6 meaningful screens, avoiding overly complex user roles.

## Screens & Route Map

| Screen              | Route           | Description                                                                |
| :------------------ | :-------------- | :------------------------------------------------------------------------- |
| **Home**            | `/`             | Welcome screen with featured specialties and search.                       |
| **Doctor List**     | `/doctors`      | Catalog of available doctors with specialty filters.                       |
| **Doctor Profile**  | `/doctors/:id`  | Dynamic route for doctor details and time-slot selection.                  |
| **My Appointments** | `/appointments` | Route for upcoming and past bookings (eventually requires authentication). |
| **Login**           | `/login`        | Patient authentication screen.                                             |

## Current Status

React Project Scaffold completed.

- Vite + React project initialized.
- React Router set up with a persistent layout and navigation menu.
- Base placeholder screens created and verified to be reachable.
