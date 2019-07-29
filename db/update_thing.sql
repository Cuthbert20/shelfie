UPDATE thing
SET
thing_name =  ${thing_name},
thing_price = ${thing_price},
thing_img = ${thing_img}
WHERE thing_id = ${id};

SELECT * FROM thing;