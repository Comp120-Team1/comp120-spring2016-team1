class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :destroy]
  
  swagger_controller :incident, 'Incidents'

  swagger_api :index do
    summary 'Returns all Users'
    notes 'Returns a list of all active users.'
  end

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  swagger_api :create do
    summary 'Create a new user'
    notes 'Creates a new user with given parameters. Select the Model Schema on the right to test the endpoint.'
    param :body, :tag, :userExample, :required, "Define User"
  end

    swagger_api :update do
    summary 'Update a user'
    notes 'Updates a user with given parameters. You MUST choose an integer for an existing user (you can find the user ID from the GET request above.)'
    param :body, :tag, :userExample, :required, "Modifications to the User"
    param :path, :id, :integer, :required, ""
  end

  swagger_model :userExample do
    description "A User Example"
    property :email, :string, :required, "Email", defaultValue:
             "pete.zeria@incidentreporter.edu"
    property :first_name, :string, :required,
             "First Name",defaultValue: "Pete"
    property :last_name, :string, :required, "Last Name", defaultValue: "Zeria"
    property :phone, :string, :required, "Phone Number", defaultValue: "(555)123-4567"
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    user = User.find_by_id(params[:id])
    respond_to do |format|
      if user != nil 
        if user.update(user_params)
          format.html { redirect_to user, notice: 'User was successfully updated.' }
          format.json { render :show, status: :ok, location: user }
        else
          format.html { render :edit }
          format.json { render json: user.errors, status: :unprocessable_entity }
        end
      else 
          format.html { render :index }
          format.json { head :no_content, status: :bad_request }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user

      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.fetch(:user, {})
      params.require(:user).permit(:email, :first_name, :last_name, :phone)
    end
end
