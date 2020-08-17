# Dewey

## What is Dewey?

Dewey is an application that allows a user to run their own personal library and interact with other users' libraries.  Users can compile a collection of items which they would like to make available for other users to borrow and can checkout items from other users' libraries.  Dewey allows the user to keep track of items they are lending as well as items they are borrowing; it sets a due date for borrowed items, records who is borrowing the item, and allows messaging between borrowers and owners.

## Getting Started

- Clone this repository.

- From the application's main directory, run ```npm install``` to install react.

- JSON setup:

  - Included in this repository is a file named ```example.JSON```; copy the contents of this file.  From the API directory, create a new JSON file (i.e. ```database.json```) and paste into it the contents of the example JSON file.

  - From the API directory, run the following command: ```json-server -p 5002 -w database.json```
(Note: the application is currently set to run from port 5002; however, if the port is changed, change the value of the ```remoteURL``` variable in ```ApiManager.js``` file in the "modules" directory to match the desired value) 

- From the application's main directory, run ```npm start``` to run the application.  This should open a browser automatically, however if this is not the case, than paste ```http://localhost:3000/``` into your browser.


## Using the Application

- Note:
    - This application is currently only for demonstration and testing purposes and is therefore not secure.  DO NOT enter any sensitive information into the application.

- signing in or registering an account:
  - If you are not already logged into Dewey, then you should be navigated to a login page.  From there, if you have already registered, enter your credentials and click submit.  If you are a new user, click the "register new user" button and enter the requested information.  Upon clicking sign up (or "sign in" if you've already registered), you will be taken to a home view.  The home view will contain all other views and a navigation bar to go to individual views.

- Note: 
    - To see the full functionality of the application, it will be necssary to have at least two accounts running.  Open a new window and repeat the sign in or registration process.

<!-- - Navigating the Application

  - The  -->

##### Public Library:

<!-- need to add screneshots -->

The "Public Library" view contains a list of items that are available for checkout.  In this section, users will only be able to see items that do not belong to them.  Users can search for items by category, geographic location, owner, or item name.  Items can have three different statuses.

  - Available items:
    - These item cards contain basic information about the item an can be checked out.

  - Checked-out items:
    - These items contain basic infromation about the item as well as a due date for the item.  The appearance will be "faded out" and the items are not able to be checked out.

  - Items awaiting checkout approval:
    - These items are essentially the same as Checked-out items, except the due date is replaced with "Awaiting owner approval".

##### Your Library

The "Your Library" view contains a list of items that only the owner user can see.  The item cards are essentially the same as those of the public Library, except they can be edited or deleted.  

- Adding a new item:
  - This view contains a form to add a new item.
  - Fill in as much information as possible for the item.
  - Item Name and category are required.
  - Click the "submit" button at the bottom of the form.

##### Other Views

- Home:
  - The home view is a consolidation of all other views.

- Items you're currently Lending:
  - This is a list of all items that a user is currently lending to other users.  Items in this view contain a due date as well as basic information about the borrower.  Items in this view also contain a message field whereby the owner can contact the borrower.

- Requests:
  - This is a sub-section of "Items you're currently lending".  These item cards contain buttons for the owner to either approve or decline a request to borrow the item.  If the owner clicks approve, a checkout and due date will be generated and the item will be marked as "checked-out" in the public library.  If the user clicks the declind button, the borrower will be notified and the item will be made available again in the public library.

- Items you're currently borrowing:
  - Once the user clicks the "request checkout" button on an item in the public library, they will be navigated to this view.  These items are essentially the inverse of "Items you're currently lending".  There are two types of items here and an affordance to message the owner.
  - If an item is awaiting approval, it will be marked as such.  There is a button to cancel the request.  If the owner has declined the request, the item will be marked as Declined here and the user can hide the item from view.
  - If the checkout has been approved by the owner, then the item will contain a due date and a "return" button.  Once the borrower clicks the return button, the item will be marked as available in the "public library" view.


<!-- #### Checking an item out -->

<!-- ## Data Flow

## ERD -->


## Author

- Brendan Abernethy


<!-- ## Checkout flow:

A user clicks checkout affordance on item. 


A checkout object is posted to the database.


```checkedOut``` is set to ```true``` in checkouts table.


```available``` is set to ```false``` in items table.


```userId``` in checkouts table is the user to whom the object is assigned (checked out to. i.e. the borrower)


The owner is the ```userId``` in the items table.

The item will be displayed in the borrowing user’s main view under “item’s you’re currently borrowing”


The item will be displayed in the owning user’s main view under “item’s you’re currently lending”


When the user clicks “return item”, ```checkedOut``` in the checkouts table will be marked as ```false``` and ```available``` will be marked as true in the items table.


the item will no longer be displayed in the borrowing user’s main view under “item’s you’re currently borrowing”


the item will no longer be displayed in the owning user’s main view under “item’s you’re currently lending”



## ERD:

![image](https://user-images.githubusercontent.com/61983527/88423752-e5692480-cdb1-11ea-86b1-d8de7c9d6736.png)


## Wireframe - Main view:

![image](https://user-images.githubusercontent.com/61983527/88423773-f154e680-cdb1-11ea-89df-2a83aa0390f2.png) -->
