## Dewey

Dewey will be an application that allows users to set up their own personal library.  The application will allow users to list any kind of item in their library (not just books) and keep track of it when another user checks the item out.

## Checkout flow:

user clicks checkout affordance on item 
checkout object is posted to db
checkedOut is set to true in checkouts table
available is set to false in items table
UserId in checkouts table is the user to whom the object is assigned (checked out to. i.e. the borrower)
the owner is the userId in the items table

the item will be displayed in the borrowing user’s main view under “item’s you’re currently borrowing”
the item will be displayed in the owning user’s main view under “item’s you’re currently lending”

when the user clicks “return item” “checkedOut” in the checkouts table will be marked as false and available will be marked as true in the items table.

the item will no longer be displayed in the borrowing user’s main view under “item’s you’re currently borrowing”
the item will no longer be displayed in the owning user’s main view under “item’s you’re currently lending”



## ERD:

![image](https://user-images.githubusercontent.com/61983527/88423752-e5692480-cdb1-11ea-86b1-d8de7c9d6736.png)


## Wireframe - Main view:

![image](https://user-images.githubusercontent.com/61983527/88423773-f154e680-cdb1-11ea-89df-2a83aa0390f2.png)
