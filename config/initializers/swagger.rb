class Swagger::Docs::Config
  def self.transform_path(path, api_version)
    # Make a distinction between the APIs and API documentation paths.
    "apidocs/#{path}"
  end
end

Swagger::Docs::Config.register_apis({
  '1.0' => {
    controller_base_path: '',
    api_file_path: 'public/apidocs',
    base_path: ENV['HOST_URL'] || 'http://localhost:3000',
    clean_directory: true,
    camelize_model_properties: false
  }
})

GrapeSwaggerRails.options.before_filter_proc = proc {
  GrapeSwaggerRails.options.app_url = request.protocol + request.host_with_port
}
GrapeSwaggerRails.options.url      = '/apidocs/api-docs.json'
GrapeSwaggerRails.options.app_name = 'Incident Reporter'
GrapeSwaggerRails.options.validator_url = nil
