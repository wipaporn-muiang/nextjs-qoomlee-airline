# Qoomlee Airline - Next.js Check-in System

A modern, responsive airline check-in application built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

- **Flight Retrieval**: Search and retrieve bookings using booking reference and last name.
- **Passenger Selection**: Manage and select passengers for the check-in process.
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing.
- **Modern UI Components**: Built with reusable React components and Lucide icons.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nextjs-qoomlee-airline
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router pages and layouts.
  - `checkin/`: Check-in flow implementation.
- `components/`: Reusable UI components (Navbar, Hero, Forms, etc.).
- `public/`: Static assets.

## Scripts

- `npm run dev`: Runs the app in development mode with Turbopack.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
