require 'test_helper'

class IncidentsControllerTest < ActionController::TestCase
  setup do
    @incident = incidents(:one)
    @incident_category = incident_categories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:incidents)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create incident" do
    assert_difference('Incident.count') do
      post :create, incident: {
          additional_details: @incident.additional_details,
          incident_category_id: @incident.incident_category_id,
          location_of_incident: @incident.location_of_incident,
          user_id: @incident.user_id,
          picture_url: @incident.picture_url,
          priority: @incident.priority,
          progress: @incident.progress,
          public: @incident.public,
          subject: @incident.subject,
          time_of_incident: @incident.time_of_incident,
          video_url: @incident.video_url
      }
    end

    assert_redirected_to incident_path(assigns(:incident))
  end


  test "should create incident with correct params" do
    assert_difference('Incident.count') do
      post :create, incident: {
          additional_details: @incident.additional_details,
          location_of_incident: @incident.location_of_incident,
          incident_category_id: @incident.incident_category_id,
          priority: @incident.priority,
          progress: @incident.progress,
          public: @incident.public,
          subject: @incident.subject,
          time_of_incident: @incident.time_of_incident
      }
    end

    assert_redirected_to incident_path(assigns(:incident))
  end

  test "should fail to create incident with wrong params" do
    assert_no_difference('Incident.count') do
      post :create, incident: {
          priority: @incident.priority,
      }
    end
  end

  test "should fail to create incident with invalid category" do
    assert_no_difference('Incident.count') do
      post :create, incident: {
        additional_details: @incident.additional_details,
        location_of_incident: @incident.location_of_incident,
        incident_category_id: "Invalid Category",
        priority: @incident.priority,
        progress: @incident.progress,
        public: @incident.public,
        subject: @incident.subject,
        time_of_incident: @incident.time_of_incident
      }
    end
  end

  test "should show incident" do
    get :show, id: @incident
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @incident
    assert_response :success
  end

  test "should update incident" do
    patch :update, id: @incident, incident: {
        additional_details: @incident.additional_details,
        incident_category_id: @incident_category,
        location_of_incident: @incident.location_of_incident,
        user_id: @incident.user_id,
        picture_url: @incident.picture_url,
        priority: @incident.priority,
        progress: @incident.progress,
        public: @incident.public,
        subject: @incident.subject,
        time_of_incident: @incident.time_of_incident,
        video_url: @incident.video_url
    }
    assert_redirected_to incident_path(assigns(:incident))
  end

  test "should destroy incident" do
    assert_difference('Incident.count', -1) do
      delete :destroy, id: @incident
    end

    assert_redirected_to incidents_path
  end

  test "should have title" do
    get :index
    assert_select 'title', "Incidents"
  end

  test "index page should have the incident table" do
    get :index
    assert_select 'div.col-md-10' do
      assert_select 'table#incident-list'
    end
  end

  test "incident table has 8 columns" do
    get :index
    assert_select "div.col-md-10" do
      assert_select 'table#incident-list' do
        assert_select 'tr' do
          assert_select 'td', 16
        end
      end
    end
  end

  test "should show current incident" do
    get :show, id: @incident
    assert_select "div.col-md-6" do
      assert_select "div.panel"
    end
  end

  test "should render form" do
    get :edit, id: @incident
    assert_select "div.container" do
      assert_select "div.col-md-10" do 
        assert_select "div.field"
      end
    end
  end  

end
