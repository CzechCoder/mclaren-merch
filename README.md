# McLaren Merch Store with admin dashboard

## 🟣 Quick start

1.  **Install dependecies**

    - use "pnpm install"

    Use "npm run dev" both in web and server folder to run frontend and backend

    For list of installed packages see dependencies and devDependencies in `package.json` .

2.  **Install your database**

    - use migration and seed to set up tables for your own postgres database
    - use seed to populate your database with demo data
    - you can run "npm run" command on these:
      - migate - creates the database
      - seed - populates the database with mock data
      - resetdb - runs migrate and seed in sequence

3.  **Start using the web**

    You can either use the frontend to shop or go to /admin to log in as admin

    Please keep in mind that seed data has hardcoded timestamps. Selective dashboard functions relying on time - such as the current month revenue - might not show the data appropriately unless you adjust the seed data or make your own.
