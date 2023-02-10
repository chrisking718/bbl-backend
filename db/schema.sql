DROP DATABASE IF EXISTS b_b_l;
CREATE DATABASE b_b_l;

\c b_b_l;

DROP TABLE IF EXISTS sites;

CREATE TABLE sites(
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
website TEXT NOT NULL,
address TEXT,
description TEXT,
price TEXT,
picture TEXT DEFAULT'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
);
