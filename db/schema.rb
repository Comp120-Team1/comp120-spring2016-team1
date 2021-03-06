# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160308202546) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "incident_categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "incidents", force: :cascade do |t|
    t.integer  "priority"
    t.integer  "dept_id"
    t.integer  "user_id"
    t.string   "subject",              limit: 100
    t.string   "location_of_incident", limit: 100
    t.datetime "time_of_incident"
    t.string   "additional_details",   limit: 1000
    t.integer  "progress",                          default: 0
    t.boolean  "public",                            default: true
    t.string   "picture_url",          limit: 200
    t.string   "video_url",            limit: 200
    t.datetime "created_at",                                       null: false
    t.datetime "updated_at",                                       null: false
    t.integer  "incident_category_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "phone"
    t.string   "first_name"
    t.string   "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
