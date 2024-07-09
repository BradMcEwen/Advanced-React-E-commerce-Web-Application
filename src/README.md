# E-commerce Application

This is a simple e-commerce application built with React, Redux Toolkit, and TypeScript. The application includes user management, a product catalog, a shopping cart, and a checkout feature. It uses `axios` for data fetching and `redux-thunk` for handling asynchronous operations.

## Features

- **User Management**: Register, login, update, and delete users.
- **Product Catalog**: View a list of products fetched from an external API.
- **Shopping Cart**: Add products to the cart, update quantities, and remove products.
- **Checkout**: Clear the cart upon successful checkout.
- **State Persistence**: Cart data is stored in local storage, and user session data is stored in session storage.
- **Optimized Performance**: Utilizes React hooks (`useMemo`, `useCallback`) for optimized performance.


## API

The application uses the [Fake Store API](https://fakestoreapi.com/docs) for fetching products and managing users.


## Usage

- **Home Page**: Displays the product catalog. You can add products to the cart by clicking "Add to Cart".
- **Cart Page**: View the products in your cart, update quantities, remove products, and proceed to checkout.
- **User Management**: Register, login, update, and delete user accounts.

## Errors

- **Tests**: At the moment, the tests come back failed as I am still working on the proper syntax for my project.
- **Display**: when logged in, the user's username should be displaying but is not. I will work on that as well.