class TranslateController < ApplicationController
  def getTranslation
    translator = BingTranslator.new(ENV['BING_CLIENT_ID'], ENV['BING_SECRET_ACCESS_KEY'])
      respond_to do |format|
        format.html { render :text => translator.translate(params[:id], :to => I18n.locale) }
      end
    end
end
