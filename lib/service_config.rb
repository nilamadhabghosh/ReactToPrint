# frozen_string_literal: true

# Class-based hash used to get a service uri for the current environment (test/dev/prod/etc)
#
# Example usage:
#   client = RegistryServices::Client.new(ServiceConfig[:registry])
class ServiceConfig
  # Public: Returns the value from the given attribute key.
  def self.[](service)
    config.fetch(service) { raise ServiceConfigError, "Error loading config: service '#{service}' not found." }
  end

  # Public: Retrieve the application service config for the current service environment.
  #
  # Returns a Hash of service config.
  # Raises an ServiceConfigError if the config file cannot be found
  def self.config
    services_file = Rails.root.join('config', 'services.yml')
    @config = YAML.safe_load(ERB.new(File.read(services_file)).result, [], [], true)[Rails.env].with_indifferent_access
  rescue Errno::ENOENT
    raise ServiceConfigError, "Error: 'config/services.yml' not found."

  end

  # Public: Returns a hash representation of a ServiceConfig.
  def self.to_h
    {
      open_timeout: ServiceConfig[:open_timeout_default].to_i,
      read_timeout: ServiceConfig[:read_timeout_default].to_i,
      retry_on: ServiceConfig[:retry_on_default],
      retries: ServiceConfig[:retries_default].to_i,
      ca_file: ServiceConfig.config[:ca_file]
    }.merge(OauthConfig.to_h).with_indifferent_access
  end
end

# Public: An error indicating an issue related to an interaction with ServiceConfig.
class ServiceConfigError < StandardError
end
