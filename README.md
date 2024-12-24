# Food Delivery Website
This is a full-stack project for a food delivery website. The project includes a user-facing frontend, an admin frontend, a backend, and payment integration using Stripe. The admin has full authority to manage food items, delivery information, and payment details.

## Features

- User registration and authentication
- Browse and search for food items
- Add food items to the cart
- Checkout and payment using Stripe
- Admin dashboard to manage food items, delivery information, and payment details


## Tech Stack

**Frontend:** React, Redux, HTML, CSS, JavaScript

**Backend:** Node.js, Express.js, MongoDB, Mongoose

**Payment:** Integration: Stripe

**Authentication:** JWT (JSON Web Tokens)

**Other Tools:** Dotenv for environment variables, Nodemon for development


## Installation

Install dependencies for the backend:

```bash
 cd backend
 npm install

```
Install dependencies for the frontend:

```bash
 cd frontend
 npm install

```
Install dependencies for the admin:

```bash
 cd admin
 npm install

```    

## Running Tests

Start the backend server:

```bash
  npm run server
```

Start the frontend/admin server:

```bash
  npm run dev
```

## Admin Functionality

- Add Food Items: Admin can add new food items to the website.
- Manage Orders: Admin can view and manage orders, including delivery information and payment details.
- Update/Delete Food Items: Admin can update or delete existing food items.

## User Functionality

- Browse Food Items: Users can browse and search for food items.
- Add to Cart: Users can add food items to their cart.
- Checkout: Users can proceed to checkout and make payments using Stripe.
- Order History: Users can view their order history.

## Payment Integration

- Stripe: The project integrates Stripe for handling payments securely. Ensure you have set up your Stripe secret key in the .env file.
## License

This project is licensed under the MIT License. See the LICENSE file for details.

