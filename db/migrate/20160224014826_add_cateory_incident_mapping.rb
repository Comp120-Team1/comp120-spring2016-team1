class AddCateoryIncidentMapping < ActiveRecord::Migration
  def change
    add_reference :incidents, :incident_categories, index: true
    add_reference :incident_categories, :incidents, index: true
  end
end
