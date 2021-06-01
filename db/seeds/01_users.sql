-- Users table seeds here (Example)
INSERT INTO users (name, email, phone, password, address) VALUES ('Alice', 'example@lhl.com', '6041111111', 'password', '111 1st avenue W, Vancouver, BC V5Z 0B9');
INSERT INTO users (name, email, phone, password, address) VALUES ('Bob', 'example2@lhl.com', '6041111112', 'password', '112 1st avenue W, Vancouver, BC V5Z 0B9');
INSERT INTO users (name, email, phone, password, address) VALUES ('Charlie', 'example3@lhl.com', '6041111113', 'password', '113 1st avenue W, Vancouver, BC V5Z 0B9');
INSERT INTO users (name, email, phone, password, address) VALUES ('Dalcy', 'example4@lhl.com', '6041111114', 'password', '114 1st avenue W, Vancouver, BC V5Z 0B9');
INSERT INTO users (name, email, phone, password, address) VALUES ('Ethan', 'example5@lhl.com', '6041111115', 'password', '115 1st avenue W, Vancouver, BC V5Z 0B9');

-- Products table seeds
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('Echeveria', 'https://cdn11.bigcommerce.com/s-ca41wpfzci/images/stencil/1280x1280/products/611/1360/Canadian-IMG_3928__58465.1589493969.jpg', 'outdoor', 'description here', 20, 2000, 1);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('name2', 'url', 'indoor', 'description here', 10, 3000, 2);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('name3', 'url', 'outdoor', 'description here', 8, 2500, 2);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('name4', 'url', 'indoor', 'description here', 15, 2000, 4);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('name5', 'url', 'indoor', 'description here', 4, 4000, 5);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('name6', 'url', 'outdoor', 'description here', 3, 6000, 5);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('name7', 'url', 'outdoor', 'description here', 5, 8000, 5);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('name8', 'url', 'outdoor', 'description here', 7, 3000, 5);

-- transactions table seeds
INSERT INTO transactions (buyer_id, seller_id, date, balance) VALUES (1, 2, '2021-05-28', 5500);
INSERT INTO transactions (buyer_id, seller_id, date, balance) VALUES (3, 2, '2020-04-05', 6000);
INSERT INTO transactions (buyer_id, seller_id, date, balance) VALUES (1, 4, '2021-01-19', 2000);

-- product_on_sales
INSERT INTO product_on_sales (product_id, price, date_of_listing, seller_id, is_available) VALUES (1, 3000, '2021-05-25', 2, true);
INSERT INTO product_on_sales (product_id, price, date_of_listing, seller_id, is_available) VALUES (2, 2500, '2020-03-31', 2, true);
INSERT INTO product_on_sales (product_id, price, date_of_listing, seller_id, is_available) VALUES (4, 2000, '2020-12-20', 4, true);

-- favourites
INSERT INTO favourites (user_id, product_id) VALUES (1, 5);
INSERT INTO favourites (user_id, product_id) VALUES (1, 4);
INSERT INTO favourites (user_id, product_id) VALUES (3, 1);
INSERT INTO favourites (user_id, product_id) VALUES (4, 2);
INSERT INTO favourites (user_id, product_id) VALUES (4, 5);

-- message_master
INSERT INTO message_master (sender_id, receiver_id, date_time) VALUES (1, 2, '2021-05-27');

-- message_details
INSERT INTO message_details (sender_id, receiver_id, date_time, message_text) VALUES (1, 2, '2021-05-27', 'Hello I''m interested in your name2! Do you do meet ups by chance?');
INSERT INTO message_details (sender_id, receiver_id, date_time, message_text) VALUES (2, 1, '2021-05-27', 'Sure! Do you want to meet up at Water-front station at 2pm tomorrow?');
INSERT INTO message_details (sender_id, receiver_id, date_time, message_text) VALUES (1, 2, '2021-05-27', 'Okay sounds good! see you then!');
