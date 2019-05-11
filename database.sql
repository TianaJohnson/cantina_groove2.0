
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

CREATE TABLE "user-title" (
	"id" SERIAL PRIMARY KEY,
	"builder" BOOLEAN DEFAULT false,
	"fitter" BOOLEAN DEFAULT false,
	"client" BOOLEAN DEFAULT false
	);
	
CREATE TABLE "user_info" (
	"id" SERIAL PRIMARY KEY,
	"user-name" VARCHAR NOT NULL,
	"user-pronouns" TEXT,
	"user-title" INTEGER REFERENCES "user-title",
	"user-type-id" INTEGER REFERENCES "user_type"
	);

CREATE TABLE "client_contact_info" (
	"id" SERIAL PRIMARY KEY,
	"full_name" VARCHAR (100) NOT NULL,
	"pro_nouns" TEXT,
	"email" VARCHAR (200),
	"phone_number" VARCHAR (20) NOT NULL,
	"cust_notes" VARCHAR (1000),
	"is_active" BOOLEAN DEFAULT TRUE,
	"date_activated" DATE NOT NULL DEFAULT CURRENT_DATE);