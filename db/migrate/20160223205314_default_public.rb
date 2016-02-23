class DefaultPublic < ActiveRecord::Migration
  def change
  	change_column :incidents, :public, :bool, default: true
  end
end
