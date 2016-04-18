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
      json.name incident.getProgress incident.progress
    end
  end
end
