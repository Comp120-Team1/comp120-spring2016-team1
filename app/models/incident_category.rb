class IncidentCategory < ActiveRecord::Base
  has_many :incident
end
