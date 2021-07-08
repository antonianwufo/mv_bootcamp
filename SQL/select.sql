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