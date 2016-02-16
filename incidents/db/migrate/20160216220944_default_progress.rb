class DefaultProgress < ActiveRecord::Migration
  def change
    change_column :incidents, :progress, :int, default: 0
  end
end
