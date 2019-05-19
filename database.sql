-- Cantina_Groove2.0 --
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
	
CREATE TABLE "builder"(
	"id" SERIAL PRIMARY KEY,
	"title_id" INTEGER REFERENCES "user-title",
	"user_type" INTEGER REFERENCES "user_type"
	);
	
CREATE TABLE "fitter" (
	"id" SERIAL PRIMARY KEY,
	"title_id" INTEGER REFERENCES "user-title",
	"user_type" INTEGER REFERENCES "user_type"
	);

-- needs to be completed 
CREATE TABLE "project"(
	"id" SERIAL PRIMARY KEY,
	"client_id" INTEGER REFERENCES "client_contact_info",
	"builder_id" INTEGER REFERENCES "builder",
	"fitter_id" INTEGER REFERENCES "fitter",
	"status_id" INTEGER REFERENCES "project_status",
	"brand" INTEGER REFERENCES "frame_brand",
	"date_due" TEXT
	);
	
CREATE TABLE "project_status" (
	"id" SERIAL PRIMARY KEY,
	"consult" BOOLEAN DEFAULT FALSE,
	"fit" BOOLEAN DEFAULT FALSE,
	"design" BOOLEAN DEFAULT FALSE,
	"waiting_approval" BOOLEAN DEFAULT FALSE,
	"componenets_on_order" BOOLEAN DEFAULT FALSE,
	"tubes_on_order" BOOLEAN DEFAULT FALSE,
	"build" BOOLEAN DEFAULT FALSE,
	"ready_for_paint" BOOLEAN DEFAULT FALSE,
	"at_paint" BOOLEAN DEFAULT FALSE,
	"quality_check" BOOLEAN DEFAULT FALSE,
	"final_fit" BOOLEAN DEFAULT FALSE,
	"assemble" BOOLEAN DEFAULT FALSE,
	"completed" BOOLEAN DEFAULT FALSE,
	"final_transaction" BOOLEAN DEFAULT FALSE	
	);
	
CREATE TABLE "frame_brand" (
	"id" SERIAL PRIMARY KEY,
	"cake" BOOLEAN,
	"peacock_groove" BOOLEAN,
	"other" TEXT
	);

CREATE TABLE "rider_metrix" (
	"id" SERIAL PRIMARY KEY,
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
	"project_id" INTEGER REFERENCES "project"
);

CREATE TABLE "relevant_current_bike" (
	"id" SERIAL PRIMARY KEY,
	"saddle_height" TEXT NOT NULL,
	"saddle_offset" TEXT NOT NULL,
	"reach_sn_hbc" TEXT NOT NULL,
	"reach_sn_grip" TEXT NOT NULL,
	"hb_drop/rise" TEXT NOT NULL,
	"hb_width" TEXT NOT NULL,
	"hb_flare/sweep" TEXT NOT NULL,
	"hb_lever" TEXT NOT NULL,
	"hb_drop_cc" TEXT NOT NULL,
	"saddle_length" TEXT NOT NULL,
	"saddle_nose_width" TEXT NOT NULL,
	"saddle_tail_width" TEXT NOT NULL,
	"saddle_tilt" TEXT NOT NULL,
	"pedal_model/style" TEXT NOT NULL,
	"crank_length" TEXT NOT NULL,
	"q_factor" TEXT NOT NULL,
	"project_id" INTEGER REFERENCES "project"
);

CREATE TABLE "size_cycle_data" (
	"id" SERIAL PRIMARY KEY,
	"saddle_height" TEXT NOT NULL,
	"saddle_offset" TEXT NOT NULL,
	"reach_sn_hbc" TEXT NOT NULL,
	"reach_sn_grip" TEXT NOT NULL,
	"hb_drop/rise" TEXT NOT NULL,
	"grip_drop/rise" TEXT NOT NULL,
	"hb_width" TEXT NOT NULL,
	"hb_flare/sweep" TEXT NOT NULL,
	"hb_lever" TEXT NOT NULL,
	"hb_drop_cc" TEXT NOT NULL,
	"saddle_length" TEXT NOT NULL,
	"saddle_nose_width" TEXT NOT NULL,
	"saddle_tail_width" TEXT NOT NULL,
	"pedal_model/style" TEXT NOT NULL,
	"crank_length" TEXT NOT NULL,
	"q_factor" TEXT NOT NULL,
	"project_id" INTEGER REFERENCES "project"
);