# Local-First Auth & Engine

A logic-first React application that demonstrates **authentication, authorization, protected routing, and session persistence** using **Context API**, **custom hooks**, and **localStorage** — without any backend.

This project focuses on **data flow, permission logic, and application architecture**, not UI styling.

---

## Project Overview

**Local-First Auth & Engine** is a permission-based system manager where:

- Users log in with a role (**Admin / Editor / Viewer**)
- Resources are displayed based on authorization level
- Unauthorized access is explicitly handled
- Routes are protected from manual URL access
- Login state persists across page refresh
- Session lifecycle is handled correctly

This project simulates how **real-world dashboards** handle authentication and authorization on the frontend.

---

## Core Concepts Implemented

### Authentication
- Role-based login (no backend)
- Global auth state using **Context API**
- Logout clears session cleanly

### Authorization
- Role hierarchy (`Viewer < Editor < Admin`)
- Permission-based resource visibility
- Locked resources for insufficient roles
- Centralized permission logic via a **custom hook**

### Protected Routing
- Unauthorized users cannot access protected routes
- Manual URL access is blocked
- Dedicated **Unauthorized** page

### Persistence
- Auth state saved to `localStorage`
- Session restored on refresh (rehydration)
- Loading state prevents redirect race conditions

### Clean Architecture
- Separation of concerns (context, hooks, data, UI)
- Reusable components
- Immutable state handling

---

### Role & Permission Logic
Each resource defines a minimum required role.
Role hierarchy: Viewer < Editor < Admin
A resource is:

- Accessible if user role ≥ required role

- Locked or hidden otherwise

### Custom Authorization Hook

Authorization logic is centralized using a custom hook:
- useAuthorizedResources(resources, user)
Benefits:

- Reusable permission logic

- Cleaner components

- Easy to extend for future rules

---

### Application Flow

1. User opens the app → Login page

2. User selects a role

3. Role is stored in Context and localStorage

4. Protected routes become accessible

5. Dashboard renders resources based on role

6. Refresh → session persists

7. Logout → session cleared and redirected

--- 

### Tech Stack

- React (Vite)

- React Router DOM

- Context API

- Custom Hooks

- localStorage

- JavaScript (ES6+)

---

### Why This Project Matters
This project demonstrates:

- Real authentication lifecycle handling

- Clear separation of authentication vs authorization

- Production-style protected routing

- State rehydration patterns used in real applications

- Clean and scalable frontend architecture

It goes beyond basic CRUD and focuses on how frontend systems actually work. 

---

### Possible Enhancements

- Admin-only Edit/Delete actions

- Resource status updates with immutable state handling

- Cross-tab logout synchronization

- Backend integration (JWT, API)

---

### Author

Built as a logic-focused React project to strengthen understanding of authentication, authorization, and state management.