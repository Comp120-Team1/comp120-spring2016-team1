class IncidentsController < ApplicationController
  before_action :set_incident, only: [:show, :edit, :update, :destroy]
  before_action :set_s3_direct_post, only: [:new, :edit, :create, :update]

  swagger_controller :incident, 'Incidents'

  swagger_api :index do
    summary 'Returns all Incidents'
    notes 'Returns a list of all incidents reported.'
  end
  # GET /incidents
  # GET /incidents.json
  def index
    @incidents = Incident.all
  end

  # GET /incidents/1
  # GET /incidents/1.json
  def show
  end

  swagger_api :create do
    summary 'Create a new incident'
    notes 'Creates a new incident with given parameters.'
    param :body, :tag, :incidentExample, :required, "Subject of Incident"
  end

  swagger_model :incidentExample do
    description "An incident example"
    property :subject, :string, :required, "Incident subject", default_value:
             "Fire"
    property :location_of_incident, :string, :required,
             "Location",default_value: "Building 1, Room 207"
    property :priority, :integer, :required, "Priority", default_value: 2
    property :time_of_incident, :string, :required, "Date and Time",
             default_value: "2016-02-23T23:25:00.000Z"
    property :progress, :integer, :required, "Progress", default_value: 0
  end
  # GET /incidents/new
  def new
    @incident = Incident.new
  end

  # GET /incidents/1/edit
  def edit
  end

  # POST /incidents
  # POST /incidents.json
  def create
    @incident = Incident.new(incident_params)
    respond_to do |format|
      if @incident.save
        format.html { redirect_to @incident, notice: 'Incident was successfully created.' }
        format.json { render :show, status: :created, location: @incident }
      else
        format.html { render :new }
        format.json { render json: @incident.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /incidents/1
  # PATCH/PUT /incidents/1.json
  def update
    respond_to do |format|
      if @incident.update(incident_params)
        format.html { redirect_to @incident, notice: 'Incident was successfully updated.' }
        format.json { render :show, status: :ok, location: @incident }
      else
        format.html { render :edit }
        format.json { render json: @incident.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /incidents/1
  # DELETE /incidents/1.json
  def destroy
    @incident.destroy
    respond_to do |format|
      format.html { redirect_to incidents_url, notice: 'Incident was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_s3_direct_post
      @s3_direct_post = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/${filename}", success_action_status: '201', acl: 'public-read')
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_incident
      @incident = Incident.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def incident_params
      params.require(:incident).permit(:priority, :dept_id, :user_id, :subject, :location_of_incident, :time_of_incident, :additional_details, :progress, :public, :picture_url, :video_url, :incident_category_id)
    end
end
