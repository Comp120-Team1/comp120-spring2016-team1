class Incident < ActiveRecord::Base
    validates :priority, presence: true
    validates :subject, presence: true
    validates :location_of_incident, presence: true
    validates :time_of_incident, presence: true
    validates :progress, presence: true
    validates :public, presence: true
    def getPriority priority
      if priority <= 1
        "!"
      elsif priority == 2
        "!!"
      elsif priority >= 3
        "!!!"
      end
    end

    def getProgress progress
      if progress <= 0
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
