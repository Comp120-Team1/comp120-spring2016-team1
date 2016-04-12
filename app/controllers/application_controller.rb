class ApplicationController < ActionController::Base
	before_action :set_locale
	def set_locale
		I18n.locale = params[:lacale] || I18n.default_locale
	end
	
	def default_url_options(options = {})
		{ locale: I18n.locale }.merge options
	end
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_filter :verify_authenticity_token
end
