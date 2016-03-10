json.array!(@incidents) do |incident|
  json.extract! incident, :id, :priority, :dept_id, :user_id, :subject, :location_of_incident, :incident_category_id, :time_of_incident, :additional_details, :progress, :public, :picture_url, :video_url
  json.url incident_url(incident, format: :json)
end
