# AI Event Management System

## Overview
This is a B2B SaaS platform designed to automate the event planning lifecycle. By leveraging an AI routing layer, event organizers can input unstructured text prompts to instantly generate structured schedules, budgets, and actionable dashboards.

## Business Value
Reduces the initial event planning phase from hours to seconds, minimizing human error in scheduling and ensuring clean data ingestion.

## Architecture
- **Frontend:** Next.js (App Router), React, Tailwind CSS.
- **State Management:** Zustand
- **Backend:** Go (Golang) serverless functions natively compiled on Vercel.
- **Database:** PostgreSQL for strictly structured, ACID-compliant event storage.
- **CI/CD:** Fully automated via GitHub Actions (`deploy.yml`).

## Local Setup
1. Clone the repository.
2. Run `npm install` to install frontend dependencies.
3. Provision a local PostgreSQL database and add `POSTGRES_URL` to a `.env` file.
4. Run `vercel dev` to start the Next.js frontend and compile the Go backend locally.