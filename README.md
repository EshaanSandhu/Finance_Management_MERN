# Finance_Management

This project currently contains frontend only in React

## Project Structure

public/
├── favicon.ico         # Website favicon
├── index.html         # Main HTML file
├── logo192.png        # Logo for manifest (192x192)
├── logo512.png        # Logo for manifest (512x512)
├── manifest.json      # Web app manifest for PWA
└── robots.txt         # Robots.txt for search engine crawlers

src/
├── pages/             # Contains different pages/components of the application
│   ├── ExpenseDetails.css        # Styles for the Expense Details component
│   ├── ExpenseDetails.js         # Component to display details of a expense such as income,expense and balance
│   ├── ExpensesTable.css         # Styles for the Expenses Table component
│   ├── ExpensesTable.js          # Component to display a table of expenses
│   ├── ExpenseTrackerForm.css    # Styles for the Expense Tracker Form component
│   ├── ExpenseTrackerForm.js     # Component for adding expenses
│   ├── Home.css                  # Styles for the Home page
│   ├── Home.js                   # Home page component
│   ├── Login.css                 # Styles for the Login page
│   ├── Login.js                  # Login page component
│   ├── Signup.css                # Styles for the Signup page
│   ├── Signup.js                 # Signup page component
│── App.css                   # Styles for the main App component
│── App.js                    # Main App component
│── App.test.js               # Unit tests for App component
│── index.css                 # Global styles or styles for the index page
│── index.js                  # Entry point for the application
├── logo.svg           # SVG logo
├── RefrshHandler.js   # (Description of what this file does - e.g., handles token refresh)
├── reportWebVitals.js # Reports performance metrics
├── setupTests.js      # Setup for testing environment
└── utils.js           # Utility functions

package-lock.json      # Dependency lock file
package.json           # Project dependencies and scripts
README.md              # This file
vercel.json           # Configuration for Vercel deployment

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/EshaanSandhu/Finance_Management_MERN>
   ```

   Replace `<https://github.com/EshaanSandhu/Finance_Management_MERN>` with the actual URL of your Git repository. For example:

   ```bash
   git clone [https://github.com/EshaanSandhu/expense-tracker.git](https://github.com/EshaanSandhu/expense-tracker.git)
   ```

2. **Navigate to the project directory:**

   ```bash
   cd expense-tracker
   ```

3. **Install dependencies:**

   ```bash
   npm install  # or yarn install
   ```

4. **Run the development server:**

   ```bash
   npm start  # or yarn start
   ```

   This will start the application in development mode. Open [http://localhost:8080](http://localhost:8080) to view it in your browser.
