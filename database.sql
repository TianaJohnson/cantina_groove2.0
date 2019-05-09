
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user_type" (
    "id" SERIAL PRIMARY KEY,
    "primary_user" BOOLEAN DEFAULT false, 
    "seconday_user" BOOLEAN DEFAULT false,
    "passive_user" BOOLEAN DEFAULT false,
	"user_id" INTEGER REFERENCES "user"
    );