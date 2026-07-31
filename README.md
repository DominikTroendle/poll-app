# Poll App

A responsive survey application built with **Angular**, **TypeScript**, **SCSS**, and **Supabase**.

The project allows users to create surveys, participate in active polls, and follow results as answers are selected. It focuses on reusable Angular components, typed reactive forms, and a clear separation between UI, application logic, and database access.

---

## Live Demo

[View PollApp](https://pollapp.dominik-troendle.de)

---

## About the Project

Poll App provides a central overview of active and expired surveys. Users can filter surveys by category, open an active survey to vote, and create new surveys with multiple questions and answer options.

Survey data, questions, answer options, responses, and submitted answers are stored in related Supabase tables. Draft selections are included in the live result display before they are committed to the database.

---

## Getting Started

### Prerequisites

- Node.js 24
- npm
- A Supabase project with the required database tables and policies

### Installation

```bash
npm install
```

### Run the development server

```bash
npm start
```

Open `http://localhost:4200/` in your browser. The application reloads automatically when source files change.

### Create a production build

```bash
npm run build
```

---

## Project Structure

```text
src/
├── app/
│   ├── create-survey/   # Survey creation and dynamic reactive form fields
│   ├── home/            # Hero, ending-soon section, and survey overview
│   ├── shared/          # Reusable UI, interfaces, services, and utilities
│   └── survey/          # Survey form, questions, inputs, and live results
├── styles/
│   ├── abstract/        # Variables, mixins, and responsive breakpoints
│   └── base/            # Global font definitions
└── styles.scss          # Global stylesheet entry point

public/
├── fonts/               # Local font files
├── png/                 # Assets
└── svg/                 # Logos, icons, and visual elements
```

---

## Features

- Browse and filter active and expired surveys
- Answer single-choice and multiple-choice questions
- View live results while completing a survey
- Create dynamic surveys with multiple questions and answers
- Store surveys and responses with Supabase
- Responsive design for mobile and desktop

---

## Tech Stack

- **Angular 21**, **TypeScript**, **SCSS**
- **Supabase**
- **Vitest**
- **Prettier**
- **GitHub Actions**

---

## Data Model

The application uses related Supabase tables for its survey data:

- `surveys` stores survey metadata such as title, description, category, and end date
- `questions` stores the questions belonging to a survey
- `answer_options` stores the selectable answers for each question
- `survey_responses` represents a completed participation in a survey
- `response_answers` connects a response with its selected answer options

---

## Key Concepts

- **Feature-based standalone components** for a modular architecture
- **Typed reactive forms** for dynamic survey creation and validation
- **Signals and computed state** for selections and live results
- **Relational Supabase data** accessed through a dedicated service

---

## Author

Dominik Tröndle,
Frontend Developer based in Munich

---

## Preview

![Poll App Preview](public/png/app-preview-github.png)
![Survey Preview](public/png/survey-preview-github.png)
![Form Preview](public/png/form-preview-github.png)
