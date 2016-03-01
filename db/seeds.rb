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
