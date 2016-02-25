require 'test_helper'

class IncidentTest < ActiveSupport::TestCase
    setup do
      @incident = incidents(:one)
      @incident_category = incident_categories(:one)
    end

    def invalid_params
      {"priority":1, "subject":"asdf" }
    end

    def valid_params
      {"priority":1, "subject":"asdf", "location_of_incident":"adsf","time_of_incident":"2016-02-24T14:54:00.000Z","additional_details":"adsf","progress":0,"public":true }
    end

    test "should not validate incident with invalid params" do
      incident = Incident.new invalid_params
      assert incident.invalid?
    end
    test "should not save incident with invalid params" do
      incident = Incident.new invalid_params
      assert_not incident.save
    end
    test "should validate incident with valid params" do
      incident = Incident.new valid_params
      assert incident.valid?
    end
    test "should save incident with valid params" do
      incident = Incident.new valid_params
      assert incident.save
    end
end
