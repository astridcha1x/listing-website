-- Users table seeds here (Example)
INSERT INTO users (name, email, phone, password, address) VALUES ('Felicia Okta', 'example@lhl.com', '6041111111', 'password', '111 1st avenue W, Vancouver, BC V5Z 0B9');
INSERT INTO users (name, email, phone, password, address) VALUES ('Bradley Fung', 'example2@lhl.com', '6041111112', 'password', '112 1st avenue W, Vancouver, BC V5Z 0B9');
INSERT INTO users (name, email, phone, password, address) VALUES ('Andy Lindsay', 'example3@lhl.com', '6041111113', 'password', '113 1st avenue W, Vancouver, BC V5Z 0B9');
INSERT INTO users (name, email, phone, password, address) VALUES ('Nick Azurin', 'example4@lhl.com', '6041111114', 'password', '114 1st avenue W, Vancouver, BC V5Z 0B9');
INSERT INTO users (name, email, phone, password, address) VALUES ('Sura Jeon', 'example5@lhl.com', '6041111115', 'password', '115 1st avenue W, Vancouver, BC V5Z 0B9');

-- Products table seeds
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('Zebra Plant', 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80', 'indoor', 'This Zebra Plant, also known as the Haworthiopsis Fasciata, is a common household succulent that is perfect for beginners. It is easy to care for and only needs partial sunlight to grow, and require water every two to three weeks when their soil dries out. ', 20, 2000, 1);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('Mini Cactus', 'https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'indoor', 'This Mini Cactus is the perfect addition to your home! They would look and grow well in areas close to windows for sunlight exposure. Best to water when the top half inch of the soil is feeling dry, and at least once a week!', 10, 3000, 2);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('Potted Succulents', 'https://images.unsplash.com/photo-1508022240297-e87369353901?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'outdoor', 'An assortment of quality succulents that is sure to spice up your garden! This product comes with two succulents along with a cactus, and the soil is covered with rocks. Please be sure to check the soil every 1-2 weeks in order to water this arrangement. The pot itself is a metal styled to imitate gold, for a more regal feel.', 8, 6000, 2);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('Shell Potted Succulents', 'https://images.unsplash.com/photo-1508021837634-3917692f66ba?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'indoor', 'Featuring 2 succulents and a cactus, these plants are potted in a ceramic planter shaped in a sea shell. They require a minimal amount of sunlight, and as an arrangement, are light enough to place at taller heights of a home interior.', 15, 8000, 4);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('Selma Cactus', 'https://images.unsplash.com/photo-1508022057371-4f937727f440?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTR8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'indoor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 4, 4000, 5);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('Kaya Cactus', 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'outdoor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 3, 2000, 1);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('Zella Cactus', 'https://images.unsplash.com/photo-1509222413196-40eb6b6b96e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2178&q=80', 'outdoor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 5, 2500, 5);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('Leighton Cactus', 'https://images.unsplash.com/photo-1509221047594-b87944387edf?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDZ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'outdoor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 7, 3000, 5);
INSERT INTO products (name, image, type, description, quantity, price, user_id) VALUES ('Spectra Succulent Mini', 'https://images.unsplash.com/photo-1508022463381-46d2f3d3f84a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80', 'outdoor', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 5, 1500, 5);

-- transactions table seeds
INSERT INTO transactions (buyer_id, seller_id, date, balance) VALUES (1, 2, '2021-05-28', 5500);
INSERT INTO transactions (buyer_id, seller_id, date, balance) VALUES (3, 2, '2020-04-05', 6000);
INSERT INTO transactions (buyer_id, seller_id, date, balance) VALUES (1, 4, '2021-01-19', 2000);

-- product_on_sales
-- INSERT INTO product_on_sales (product_id, image, price, date_of_listing, seller_id, is_available) VALUES (1, 'url', 3000, '2021-05-25', 1, true);
-- INSERT INTO product_on_sales (product_id, image, price, date_of_listing, seller_id, is_available) VALUES (2, 'url', 2500, '2020-03-31', 2, true);
-- INSERT INTO product_on_sales (product_id, image, price, date_of_listing, seller_id, is_available) VALUES (4, 'url', 2000, '2020-12-20', 4, true);

-- favourites
INSERT INTO favourites (user_id, product_id) VALUES (1, 5);
INSERT INTO favourites (user_id, product_id) VALUES (1, 4);
INSERT INTO favourites (user_id, product_id) VALUES (2, 6);
INSERT INTO favourites (user_id, product_id) VALUES (2, 7);
INSERT INTO favourites (user_id, product_id) VALUES (4, 2);
INSERT INTO favourites (user_id, product_id) VALUES (4, 5);
INSERT INTO favourites (user_id, product_id) VALUES (1, 9);
INSERT INTO favourites (user_id, product_id) VALUES (1, 7);
INSERT INTO favourites (user_id, product_id) VALUES (2, 5);
INSERT INTO favourites (user_id, product_id) VALUES (2, 8);
INSERT INTO favourites (user_id, product_id) VALUES (4, 2);
INSERT INTO favourites (user_id, product_id) VALUES (4, 5);

-- message_master
INSERT INTO message_master (sender_id, receiver_id, date_time) VALUES (1, 2, '2021-06-04');

-- message_details
INSERT INTO message_details (sender_id, date_time, message_text, message_master_id) VALUES (1, '2021-06-04', 'Started conversation', 1);
