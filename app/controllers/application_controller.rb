class ApplicationController < ActionController::Base
	before_action :set_locale
	def set_locale
		I18n.locale = params[:lacale] || I18n.default_locale
	end
	
	def extract_locale_from_tld
		parsed_locale = request.host.split('.').last
		I18n.available_locales.map(&:to_s).include?(parsed_locale) ?
	parsed_locale : nil
	end

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_filter :verify_authenticity_token
end
