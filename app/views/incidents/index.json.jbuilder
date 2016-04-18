json.data do
  json.array!(@incidents) do |incident|
    json.extract! incident, :id, :dept_id, :user_id, :subject, :location_of_incident, :created_at, :incident_category, :time_of_incident, :additional_details, :public, :picture_url, :video_url
    json.url incident_url(incident, format: :json)
    json.priority do
      if incident.priority == 1
        json.name "Low"
      elsif incident.priority == 2
        json.name "Medium"
      elsif incident.priority == 3
        json.name "High"
      else
        json.name "Unknown"
      end
    end
    json.progress do
      if incident.progress <= 0
        json.name "Reported"
      elsif incident.progress == 1
        json.name "Processing"
      elsif incident.progress == 2
        json.name "In Progress"
      elsif incident.progress >= 3
        json.name "Resolved"
      else
        json.name "Unknown"
      end
    end
  end
end
