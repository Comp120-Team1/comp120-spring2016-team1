# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
IncidentCategory.delete_all
open("db/incident_categories.txt") do |categories|
  categories.read.each_line do |category|
    IncidentCategory.create!(:name => category)
  end
end
Incident.delete_all
User.delete_all


derek = User.create(first_name:"Derek", last_name: "Benson")

Incident.create(priority: 1, dept_id:1, user_id: derek.id, subject: "This is a test message", additional_details:"")
