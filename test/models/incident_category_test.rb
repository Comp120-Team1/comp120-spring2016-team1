require 'test_helper'

class IncidentCategoryTest < ActiveSupport::TestCase
  setup do
    @incident = incidents(:one)
    @incident_category = incident_categories(:one)
  end

  def invalid_params
    {}
  end

  def valid_params
    {"name": "Quicksand"}
  end

  test "should not validate incident with invalid params" do
    incident_category = IncidentCategory.new invalid_params
    assert incident_category.invalid?
  end
  test "should not save incident with invalid params" do
    incident_category = IncidentCategory.new invalid_params
    assert_not incident_category.save
  end
  test "should validate incident with valid params" do
    incident_category = IncidentCategory.new valid_params
    assert incident_category.valid?
  end
  test "should save incident with valid params" do
    incident_category = IncidentCategory.new valid_params
    assert incident_category.save
  end

end
