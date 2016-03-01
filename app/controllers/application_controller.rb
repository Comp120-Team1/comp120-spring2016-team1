class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # REMOVE THIS BEFORE PRODUCTION. THIS IS FOR STRESS TESTINGS
  skip_before_filter :verify_authenticity_token, :if =>lambda{ params[:authenticity_token].present? && params[:authenticity_token] == 'thisisahack' }
end
