# shoes.com

## Mock up screen
https://www.figma.com/file/FKWYLrVP4mFCWZDMqFRAl0/shoes.com?node-id=0%3A1
<br><br>

## Resources information
### Icons use
https://feathericons.com

### Images link
1. https://unsplash.com/photos/SxAXphIPWeg
2. https://unsplash.com/photos/PqbL_mxmaUE
3. https://unsplash.com/photos/a-QH9MAAVNI
4. https://unsplash.com/photos/6zO5VKogoZE
5.  https://unsplash.com/photos/4Scx2VEv6C0
6. https://unsplash.com/photos/1BI-ar91C7U
7. https://unsplash.com/photos/55PEl8GQ-zU
8. https://unsplash.com/photos/164_6wVEHfI
<br><br>

## Requirements
### Dashboard
- ReactJS 
- Typescript
- React Context
- React router
- Tailwind css

### API
- ExpressJS
- Typescript

<br>

## Features
### Feature 1: Navigation header
Display navigation bar header.
- Display user's name as Mike
  - When click on user's name, it will display pop over container, with a button "View order history"
- Display cart button
  - When there is no item added to the cart, it will display 0
  - When there are items addeded to the cart, it will display the total number of items in the cart
  - When you click the cart button, you will see the cart item details and checkout button


### Feature 2: Shoes listing
- Shoes have to be listed in alphabetical order
- If shoes are out of stock, they will be shown at the last and order in alphabetical order
- Out of stock shoes are grayed out and cannot be added to the shopping cart
- When you hover the exclamation icon, it will display "Out of stock"

### Feature 3: Checkout
- Shoes can be added to the shopping cart
- When you refresh your browser, the items added to the shopping cart must remain
- When you click '-' in the shopping cart, 
  - if quantity is 1, it will be removed from the cart
  - if quantity is more than 1, it will remove 1 from the quantity
- Total price will be displayed and will update upon changes to the shopping cart items
- When you click 'Checkout', the items in the shopping cart will be removed and the page will be redirected to 'Your order is confirmed!' page
- When you click 'Continue shoppping' button in order confirmation page, it will be brought back to the home screen


### Feature 4: View order history
- When you click on the user's name, it will display 'View order history' button
- When you click on this button, it will redirect to order history page
- All your order history will be listed in this page and ordered by the latest date time (Not required to use pagination)
- In the individual table, the item details will be listed in alphabetical order

