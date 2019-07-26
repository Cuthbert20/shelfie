--things table schema
CREATE TABLE thing (
thing_id SERIAL PRIMARY KEY,
thing_name VARCHAR(100),
thing_price INT,
thing_img VARCHAR(255)
)

--adding to table
INSERT INTO thing (thing_name, thing_price, thing_img)
VALUES
('Optimus Prime', '200', 'null'),
('Megatron', '199', 'null')