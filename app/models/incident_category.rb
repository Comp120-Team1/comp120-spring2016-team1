class IncidentCategory < ActiveRecord::Base
  has_many :incident
  validates :name, presence: true

  def self.all_cached
    in_cache = Rails.cache.read("inc_categories")
    if not in_cache
        in_cache = IncidentCategory.all
        Rails.cache.write("inc_categories", in_cache)
    end
    in_cache
   end
end
