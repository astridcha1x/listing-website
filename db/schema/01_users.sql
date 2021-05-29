-- Drop and recreate Users table (Example)

-- users table
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);

-- products table
DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  price INTEGER NOT NULL,
  user_id INTEGER
);

-- transactions table
DROP TABLE IF EXISTS transactions CASCADE;
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY NOT NULL,
  buyer_id INTEGER NOT NULL,
  seller_id INTEGER NOT NULL,
  date DATE NOT NULL,
  balance INTEGER NOT NULL
);

-- product_on_sales
DROP TABLE IF EXISTS product_on_sales CASCADE;
CREATE TABLE product_on_sales (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INTEGER NOT NULL,
  date_of_lisitng DATE NOT NULL,
  buyer_id INTEGER NOT NULL,
  is_available BOOLEAN DEFAULT TRUE
);

-- favourites
DROP TABLE IF EXISTS favourites CASCADE;
CREATE TABLE favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL
);

-- message_master
DROP TABLE IF EXISTS message_master CASCADE;
CREATE TABLE message_master (
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER NOT NULL,
  receiver_id INTEGER NOT NULL,
  date_time DATE
);

-- message_details
DROP TABLE IF EXISTS message_details CASCADE;
CREATE TABLE message_details (
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER NOT NULL,
  receiver_id INTEGER NOT NULL,
  date_time DATE NOT NULL,
  message_text TEXT NOT NULL,
);
