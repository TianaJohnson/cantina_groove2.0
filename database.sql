
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

	-- may need to be edited 
	CREATE TABLE "project"(
	"id" SERIAL PRIMARY KEY,
	"client_id" INTEGER REFERENCES "client_contact_info",
	
	);

CREATE TABLE "rider_metrix" (
	"id" BINARY NOT NULL AUTO_INCREMENT,
	"rider_height" TEXT NOT NULL,
	"pubic_bone_height/inseam" TEXT NOT NULL,
	"method_for_inseam_measurement" TEXT NOT NULL,
	"sternal_notch_height/body Length" TEXT NOT NULL,
	"arm_length_right_ac_cf" TEXT NOT NULL,
	"arm_length_left_ac_cf" TEXT NOT NULL,
	"forearm_length_right_bl_cf" TEXT NOT NULL,
	"forearm_length_left_bl_cf" TEXT NOT NULL,
	"lower_leg_length_right" TEXT NOT NULL,
	"lower_leg_length_left" TEXT NOT NULL,
	"shoulder_width_ac_to_ac" TEXT NOT NULL,
	"shoulder_width_os_to_os" TEXT NOT NULL,
	"cycling_shoe_size" TEXT NOT NULL,
	"distance_toe_to_center_of_cleat" TEXT NOT NULL,
	"project_id" NTEGER REFERENCES "project"
);