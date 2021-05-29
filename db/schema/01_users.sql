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
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

-- transactions table
DROP TABLE IF EXISTS transactions CASCADE;
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY NOT NULL,
  buyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  seller_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  balance INTEGER NOT NULL
);

-- product_on_sales
DROP TABLE IF EXISTS product_on_sales CASCADE;
CREATE TABLE product_on_sales (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  date_of_lisitng DATE NOT NULL,
  buyer_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  is_available BOOLEAN DEFAULT TRUE
);

-- favourites
DROP TABLE IF EXISTS favourites CASCADE;
CREATE TABLE favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE
);

-- message_master
DROP TABLE IF EXISTS message_master CASCADE;
CREATE TABLE message_master (
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  receiver_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date_time DATE
);

-- message_details
DROP TABLE IF EXISTS message_details CASCADE;
CREATE TABLE message_details (
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  receiver_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date_time DATE NOT NULL,
  message_text TEXT NOT NULL
);
