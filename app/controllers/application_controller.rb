class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_filter :verify_authenticity_token

  # set locale
  before_action :set_locale
  def set_locale
  puts "XXX"
  puts I18n.locale
    I18n.locale = params[:locale] || I18n.default_locale
  puts I18n.locale
  puts "XXX"
  end

end
