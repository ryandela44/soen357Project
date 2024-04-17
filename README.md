# Discount Finder

## Introduction

Discount Finder is a web application designed to help users locate discounts in their vicinity and on items of interest. The platform leverages geographical data to present the most relevant discounts, ensuring users can access savings effortlessly.

## Team Members

- **Bilal Yattou** - 40110820
- **Ferdous Hasnat** - 40112912
- **Aman Nihaal Nuckchady** - 40249877
- **Yvon Ryan Wetie Mougang** - 40129382
- **Sabari Krishna Orakkan** - 40079144
- **Philippe Bertrand** - 40157540

## Key Features

- **User Authentication**: Secure login and signup to access personalized features.
- **Geolocation**: Find discounts based on your current location.
- **Personalized Settings**: Customize the app settings to enhance user experience.
- **Responsive Design**: Accessible on both desktop and mobile devices.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB/PostgreSQL (based on project requirements)
- **APIs**: Google Maps for geolocating stores

## How to Run the Project

### Prerequisites

- Node.js installed
- npm (Node Package Manager)

### Steps to Run

1. Clone the repository to your local machine
`git clone https://github.com/ryandela44/soen357Project.git`
2. Navigate to the project directory.

   ```bash
   cd /soen357
   cd soen357/backend
   npm install
   node index.js
   ```
- The Node server runs on http://localhost:3000.

```bash cd soen357/frontend
npm install
npm start
```


- Runs the app in the development mode.
  Open http://localhost:3001 to view it in your browser. The page will reload if you make edits.

### API Endpoints

- /login: Endpoint for user login
- /signup: Endpoint for user registration
- /home: Home page displaying available discounts
- /settings: User settings page

