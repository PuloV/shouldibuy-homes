# ShouldIBuy.homes

This is a Single Page Application (SPA) built with React to help users evaluate whether buying a property is a sound financial decision based on several metrics.

## Features

- User inputs:
  - Property Price
  - Salary per Month
  - Mortgage per Month
  - Rent per Month
- Output categorizations based on financial ratios:
  - **Price / Rent**
    - < 100: Undervalued
    - 100 - 150: Normal
    - 150 - 250: Overvalued
    - > 250: Bubble
  - **Price / Annual Income**
    - < 1.5: Undervalued
    - 1.5 - 3.0: Normal
    - 3.0 - 5.0: Overvalued
    - > 5.0: Bubble
  - **Mortgage / Rent**
    - < 0.5: Undervalued
    - 0.5 - 1.0: Normal
    - 1.0 - 1.5: Overvalued
    - > 1.5: Bubble

## How to Run

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/shouldibuy-homes.git
cd shouldibuy-homes
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the application
```bash
npm run dev
```

This will start the development server, and you can access the app at `http://localhost:5173` (Vite default).

## Build for Production
```bash
npm run build
```

## Preview Production Build
```bash
npm run preview
```

## Tech Stack
- React
- Vite
- Tailwind CSS
- shadcn/ui components

---

> This project is for educational and estimation purposes. Actual financial decisions should be made in consultation with a financial advisor.
