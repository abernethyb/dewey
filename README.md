# Dewey

Dewey is an application that allows a user to run their own personal library and interact with other users' libraries.  Users can compile a collection of items which they would like to make available for other users to borrow and can checkout items from other users' libraries.  Dewey allows the user to keep track of items they are lending as well as items they are borrowing; it sets a due date for borrowed items, records who is borrowing the item, and allows messaging between borrowers and owners.

## Getting Started

- Clone this repository.

- From the application's main directory, run ```npm install``` to install react.

- JSON setup

  - Included in this repository is a file named "example.JSON"; copy the contents of this file.  From the API directory, create a new JSON file (i.e. ```database.json```) and paste the contents of the example JSON file.

  - From the API directory, run the following command: ```json-server -p 5002 -w database.json```
(Note: the application is currently set to run from port 5002; however, if the port is changed, change the ```remoteURL``` variable in ```ApiManager.js``` file in the "modules" directory to match the desired value) 

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
