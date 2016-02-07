class CreateIncidents < ActiveRecord::Migration
  def change
    create_table :incidents do |t|
      t.integer :priority
      t.integer :dept_id
      t.integer :person_id
      t.string :subject, limit: 100
      t.string :location_of_incident, limit: 100
      t.datetime :time_of_incident
      t.string :additional_details, limit: 1000
      t.integer :progress
      t.boolean :public
      t.string :picture_url, limit: 200
      t.string :video_url, limit: 200

      t.timestamps null: false
    end
  end
end
