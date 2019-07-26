UPDATE thing
SET
thing_name =  ${names},
thing_price = ${price},
thing_img = ${img}
WHERE thing_id = ${id};

SELECT * FROM thing;