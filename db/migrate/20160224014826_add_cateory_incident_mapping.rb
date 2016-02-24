class AddCateoryIncidentMapping < ActiveRecord::Migration
  def change
    add_column :incidents, :incident_category_id, :int
  end
end
