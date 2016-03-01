class IncidentCategory < ActiveRecord::Base
  has_many :incident
  validates :name, presence: true
end
