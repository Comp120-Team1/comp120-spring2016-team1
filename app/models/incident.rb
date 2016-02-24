class Incident < ActiveRecord::Base
    def new
      response.headers['X-Csrf-Token'] = form_authenticity_token
    end
    belongs_to :incident_category
    validates :priority, presence: true
    validates :subject, presence: true
    validates :location_of_incident, presence: true
    validates :time_of_incident, presence: true
    validates :progress, presence: true
    validates :public, presence: true
    validates :incident_category, presence: true
    def getPriority priority
      if !priority.is_a? Numeric
        "Unknown"
      elsif priority <= 1
        "!"
      elsif priority == 2
        "!!"
      elsif priority >= 3
        "!!!"
      end
    end

    def getProgress progress
      if !progress.is_a? Numeric
        "Unknown"
      elsif progress <= 0
        "Reported"
      elsif progress == 1
        "Processing"
      elsif progress == 2
        "In Progress"
      elsif progress >= 3
        "Resolved"
      end
    end
end
