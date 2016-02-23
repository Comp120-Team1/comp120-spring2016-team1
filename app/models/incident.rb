class Incident < ActiveRecord::Base
    validates :priority, presence: true
    validates :subject, presence: true
    validates :location_of_incident, presence: true
    validates :time_of_incident, presence: true
    validates :additional_details, presence: true
    validates :progress, presence: true
    validates :public, presence: true
end
