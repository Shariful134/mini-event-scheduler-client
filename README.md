# 🏋️ Gym Class Scheduling and Membership Management System

## 📘 Project Overview

The **Mini Event Scheduler** is a FrontEnd web application that enables users to manage events efficiently through a clean and responsive interface. Built with React, Tailwind CSS, and TypeScript, the system supports creating, viewing, updating, and deleting events, along with a smart AI-based categorization feature..

---

## 🔗 Live Server URL

[👉 https://gym-scheduler-six.vercel.app](https://gym-scheduler-six.vercel.app/)

---

## 🛠️ Technology Stack

- **FrontEnd:** React, TypeScript, Tailwind CSS
- **Other:** Vite, RESTful API, AI-like logic

## Clone Repository

```bash
git clone https://github.com/Shariful134/mini-event-scheduler-client.git
cd mini-event-scheduler-client
npm install
npm run dev

```

## Install Dependencies

```ts
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Run Development

step-1:

```ts
npm run build
```

step-2:

```ts
npm run dev
```

## AI Categorization Logic

Events are automatically categorized into one of three types using a simple keyword-matching algorithm:

- **Work**: Keywords like meeting, project, client
- **Personal**: Keywords like birthday, family
- **Other**: Any event that doesn't match the above

---

## Key Features

- In-memory data store for simplicity
- Create, Read, Update, Delete Events
- Display events with date, time, and notes
- Auto-categorization into Work / Personal / Other
- Archive events(Toaggle)
- Sorted events (ascending by date and time)

---

## 🚀 API Endpoints

### 🔐 Event Routes (`/api/v1/events`)

| Method | Endpoint        | Description    |
| ------ | --------------- | -------------- |
| POST   | `/create`       | create Eventes |
| DELETE | `/delete/:id`   | delete Eventes |
| PUT    | `/archived/:id` | archived Event |
| GET    | `/get`          | Get all Events |

---
