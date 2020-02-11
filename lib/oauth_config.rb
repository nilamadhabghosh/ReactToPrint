# frozen_string_literal: true

# A class for retrieving and caching oauth config.
class OauthConfig

  class << self
    # Public: Return a Hash representation of oauth config.
    def to_h
      config.dup
    end

    # Public: Returns the value from the given attribute key.
    def [](attribute)
      config.fetch(attribute) { raise OauthConfigError, "Error loading config: attribute '#{attribute}' not found." }
    end

    # Public: Retrieve the application oauth config for the current service environment and
    # cache it in a private instance variable. If no config exists for the current service
    # environment, defaults to an empty hash.
    #
    # Returns a Hash of oauth config.
    # Raises an OauthConfigError if the config file cannot be found.
    def config
      oauth_file = Rails.root.join('config', 'oauth.yml')
      @config = YAML.safe_load(ERB.new(File.read(oauth_file)).result, [], [], true).with_indifferent_access[Rails.env] \
                || {}
    rescue Errno::ENOENT
      raise OauthConfigError, "Error: 'config/oauth.yml' not found."

    end
  end
end

# Public: An error indicating an issue related to an interaction with OAuthConfig.
class OauthConfigError < StandardError
end