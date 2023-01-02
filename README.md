**Magnolia Marketplace Ecommerce App**

An ECommerce app which users can browse products and add selected products to their cart. Users have the ability to create orders, add items, update quantities and delete items. The cart page features totals displayed to the user to include a calculated tax amount.

Live Site- https://magnolia-marketplace.vercel.app/home

![gif](https://user-images.githubusercontent.com/71289948/205520432-422ed9f1-ebb7-477f-923c-ae57c93c15b5.gif)

**How It's Made:**

Tech used: HTML, CSS, JavaScript, React.js

The app is created with React and makes use of React routing for page changes and React Transitions Groups, CSSTransitions library for the state change animations. When a user selects a product to add to their cart, an onject with that products info is pushed into an array which is more or less transient across all the components. Think of it as a "master array" which holds all selected products and quantities. When the cart page is rendered, this array is parsed with a forEach method to render each item in the cart. 

**Lessons Learned:**

How important a backend really is! Up until this project I had been primarily focused solely on front-end development and found a few issues crop up (namely with product info storage) with this project and having it all contained to the front-end. This led me to look into BaaS like Firebase but in the end, chose to learn Node.js instead to fill this gap in skill.

**Examples:**

Take a look at these couple examples that I have in my own portfolio:

**Bulletin Board:** 
https://github.com/jcintron82/Bulletin-Board

**Inventory Management System**: 
https://github.com/jcintron82/Inventory-System
