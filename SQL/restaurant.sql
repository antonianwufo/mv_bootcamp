CREATE TABLE restaurant(
   id Integer Primary Key Autoincrement
  ,name String
  ,imagelink String
);

CREATE TABLE menu(
   id Integer Primary Key Autoincrement
  ,title Text
  ,restaurant_id Integer
  ,FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
);

CREATE TABLE menuitem(
   id Integer Primary Key Autoincrement
  ,name String
  ,price Integer
  ,menu_id Integer
  ,FOREIGN KEY (menu_id) REFERENCES menu(id)
);

INSERT INTO restaurant VALUES (1,"Banyan on the Thames","x");
INSERT INTO menu VALUES (1,"Al Fresco",1);
INSERT INTO menuitem VALUES (1,"Pasta al Pomodoro", 20.00, 1);

INSERT INTO restaurant VALUES (2,"Roku","x");
INSERT INTO menu VALUES (2,"Dinner",2);
INSERT INTO menuitem VALUES (2,"Sweet chilli vegan 'chicken'", 25.00, 2);
INSERT INTO menuitem VALUES (3,"Edamame", 7.00, 2);
INSERT INTO menuitem VALUES (4,"Roasted 'Tofurkey'", 35.00, 2);
INSERT INTO menuitem VALUES (5,"Lemon and herb skewers (vg)", 15.00, 2);
INSERT INTO menu VALUES (3,"Brunch",2);
INSERT INTO menuitem VALUES (6,"Coconut & banana pancakes (vg)", 9.00, 3);
INSERT INTO menuitem VALUES (7,"Vegan fry-up (vg)", 27.00, 3);

-- SELECT r.name, m.title, mi.name, mi.price
-- FROM restaurant r
-- JOIN menu m
-- ON r.id = m.restaurant_id
-- JOIN menuitem mi
-- ON m.id = mi.menu_id
-- WHERE r.id = '2'
-- AND m.id = '2'

-- SELECT r.name, count(m.id)
-- FROM restaurant r
-- JOIN menu m
-- ON r.id = m.restaurant_id
-- GROUP BY r.id

SELECT m.title, sum(price) as price
FROM menu m
JOIN menuitem mi
ON m.id = mi.menu_id
GROUP BY m.id
ORDER BY price DESC

-- SELECT * FROM restaurant;
-- SELECT * FROM menu;
-- SELECT * FROM menuitem;