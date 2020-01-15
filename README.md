Site Link: https://leonghh.github.io/Bootcamp-Project-1/index.html

About
Santa's Sack - a fun and interactive website
This Project is designed to create a fun and interactive website for kids to tell Santa what they want for Christmas. Eventually it will also include a functionality for parents (aka the real Santa) to see their child/children's Christmas wishlist at a glance, making it easier for them to decide on the shopping list.

Parents will be able to log in to the website and see what their children's Christmas wishlists are, and each selected item will have a link that directs them to the relevant shopping website for immediate online purchase.

Features
1. A stunning Santa's Christmas ranch as backdrop to create a Christmas-y atmosphere
2. Countdown timer to Christmas
3. By asking for the child to enter their name and age, we create the ability to:
i) create wishlist tied to each child's name, making it easier for parents at a later stage; AND
ii) have bestsellers, recommendations and products per category generated based on the age entered.
4. Navigation will be easy and intuitive for children, and information will be sorted and made visible only to parents, in order to maintain the "Santa" fantasy for their children.

Demo
1. Open website and click on Start
https://github.com/leonghh/Bootcamp-Project-1/tree/master/assets/images/Screenshot1.png
2. Enter name and age and click on Go
https://github.com/leonghh/Bootcamp-Project-1/tree/master/assets/images/Screenshot2.png
3. Child will enter a page with recommended bestsellers. If they want an item, they click on 'I Want This!' button.
https://github.com/leonghh/Bootcamp-Project-1/tree/master/assets/images/Screenshot3.png
4. If child is not interested in recommended bestsellers, they can choose from six categories
https://github.com/leonghh/Bootcamp-Project-1/tree/master/assets/images/Screenshot4.png
5. If child wants an item from the product list generated from the category they clicked on, they click on 'I Want This!' button.
https://github.com/leonghh/Bootcamp-Project-1/tree/master/assets/images/Screenshot5.png
6. Everytime an 'I Want This!' button is clicked, it adds on to the local storage array list.
(Note: this function is not working perfectly as the local storage array list gets refreshed when we click on categories)
https://github.com/leonghh/Bootcamp-Project-1/tree/master/assets/images/Screenshot6.png
7. When child is satisfied, they click on the 'Send to Santa!' icon button.
https://github.com/leonghh/Bootcamp-Project-1/tree/master/assets/images/Screenshot7.png
8. A pop up window containing all they have selected will appear, and child can confirm the list by clicking on the 'Send' button.
(Note: this function is not working well - it only works for 1 SKU AJAX call but does not work for multiple SKU. We suspect it could be the API's problem as we followed their format for multiple SKU AJAX call but does not work.)
https://github.com/leonghh/Bootcamp-Project-1/tree/master/assets/images/Screenshot8.png

Future development
1. Once we can move off local storage and store the data onto a server, the parents will have a list of items chosen by each child, tied to their name that was entered in the beginning of the page.
2. We'd like to include APIs with better and wider selection of products, as well as criterias that can narrow down range of products based on the age entered. This ensures the child will not see items inappropriate for their age.
3. The pop up window will also allow the child to delete a prior selection if they no longer want it, and then go back for more shopping.
4. We may extend this service to occasions other than Christmas, and also to anyone who want to utilise this service for anyone else in their life such as their spouse, parents, friends etc.

Built With:
HTML - the web framework used
Materialize CSS - design of the website
jQuery and AJAX - coding of the website's interactive design 
BestBuy API - generates products
Adobe Stock (https://stock.adobe.com/au/) - supplies images

Authors
Eugene Leong
Rita Pang
James Stringer
