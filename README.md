# Volvo Cars (Global Online Digital) - Front-end Coding Test

## Overview

This project is a front-end coding test for Volvo Cars, developed using React and TypeScript within a Next.js framework.

## Features

- **Responsive Design:** The layout is fully responsive, optimized for both desktop and mobile devices.
- **Dynamic Routing:** Links to "Learn" and "Shop" pages are generated dynamically based on the car's ID.
- **Data Fetching:** Car data is fetched from a local JSON file located in the `public/api/cars.json` folder.
- **Accessibility:** Careful consideration was given to ensure the application is accessible.
- **Code Structure:** The project is organized with a focus on maintainability and reusability.
- **Bonus Feature:** A filter bar is included to filter cars by body type.

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd volvo-cars-frontend-test
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the project in the browser.

## Screenshots

### Desktop View

**Home page:**
![Screenshot 2024-08-25 at 12-21-04 ](https://github.com/user-attachments/assets/12b28016-24ec-4be3-8642-6114095a0e6a)

**Filter Bar:**
![Screenshot 2024-08-25 at 12-21-41 ](https://github.com/user-attachments/assets/7fe852d6-7257-4699-9cec-9b3532b358ff)

**Learn page:**
![Screenshot 2024-08-25 at 12-22-02 ](https://github.com/user-attachments/assets/5cd47352-a000-48c8-86ad-f76c283e2d03)

**Shop page:**
![Screenshot 2024-08-25 at 12-22-17 ](https://github.com/user-attachments/assets/837d78c5-2686-42eb-a226-09a399e48078)


### Mobile View
**Home page:**
![Screen Shot 2024-08-25 at 12 23 03](https://github.com/user-attachments/assets/3baa99dc-2e6c-4abc-8ee2-2c1bd7455aaa)

**Filter Bar:**
![Screen Shot 2024-08-25 at 12 23 45](https://github.com/user-attachments/assets/af44a753-b79f-40ae-9b43-540df3a8d176)


### Tab View

**Home page:**
![Screen Shot 2024-08-25 at 12 23 28](https://github.com/user-attachments/assets/ff4cdd5e-06d9-44d8-958c-5c176fbe09fb)



## Tech Stack

- **React.js**
- **Next.js**
- **TypeScript**
- **VCC-UI (Volvo Cars Component Library)**


Note: For Carousel, used react-multi-carousel NPM package

## Project Structure

```
├── docs
│   ├── chevron-circled.svg
│   ├── chevron-small.svg
│   ├── ProductList-Desktop.png
│   └── ProductList-Mobile.png
├── next-env.d.ts
├── package.json
├── package-lock.json
├── pages
│   ├── _app.tsx
│   ├── index.tsx
│   ├── learn
│   │   └── [id].js // learn page dynamic route
│   └── shop
│       └── [id].js // shop page dynamic route
├── public
│   ├── api
│   │   └── cars.json // cars data
│   ├── css
│   │   └── styles.css // global styles
│   └── images  // car images
│       ├── s60_recharge.jpg
│       ├── s90_recharge.jpg
│       ├── v60_recharge.jpg
│       ├── v90_recharge.jpg
│       ├── xc40_bev.jpg
│       ├── xc40_recharge.jpg
│       ├── xc60_recharge.jpg
│       └── xc90_recharge.jpg
├── README.md
├── src
│   └── components
│       ├── body
│       │   └── Body.jsx // body component
│       ├── contents
│       │   ├── carCard // car card component
│       │   │   ├── CarCard.jsx
│       │   │   └── CarCard.module.scss
│       │   └── carList // car list component carousel
│       │       └── CarList.jsx
│       ├── generic
│       │   └── header // header component
│       │       ├── Header.jsx
│       │       └── Header.module.scss
│       ├── HelloWorld.tsx
│       └── Home.tsx // home component
├── tsconfig.json
└── yarn.lock

```

This project demonstrates my ability to develop a responsive and accessible front-end application using React, TypeScript, and Next.js. I ensured that the code is well-structured and easy to maintain, while also meeting the specific requirements of the test.
