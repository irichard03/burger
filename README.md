# burger
Exercise Using Handlebars MySQL and express to create a dynamic page.

**Type to add a burger and click continue**

**Click "Eat me!" button to Move the burger to the eaten column.

Burgers will be added to and have their status updated in ySql database table.

Psuedo code:

1. Provide Route to render page using handlebars.

2. Incorporate button submit and post request to server.

3. Provide Route for post request that calls database insert function and returns success/fail.

4. If success is returned in data response update page with burger and button to eat the burger.
       
       ELSE output generic error. 

5. If burger is eaten send modify request to server.

6. Provide route for modify request that calls database insert function and returns success/fail.

7. If success is reutnred in data response update page, moving burger to eaten column.
