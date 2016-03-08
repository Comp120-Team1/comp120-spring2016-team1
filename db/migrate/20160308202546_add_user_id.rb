class AddUserId < ActiveRecord::Migration
  def change
      rename_column :incidents, :person_id, :user_id
  end
end
