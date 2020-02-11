# frozen_string_literal: true

# Public: This is a mixin that provides helper methods for rendering error pages.
module RenderError
  extend ActiveSupport::Concern

  # Public: Log and render a generic error.
  #
  # code - The status code of the error.
  # msg - The associated message of the error.
  def render_error(code, msg)
    logger.fatal message: "status code: #{code}, error_message: #{msg}" # , correlation_id: #{correlation_id}"
    render status: code, plain: msg
  end

  # Public: Render a 500 error.
  #
  # error - The 500 error object.
  def handle_fatal_error(error)
    render_error :internal_server_error, error.message
  end

  # Public: Render a 400 error.
  #
  # error - The 400 error object.
  def handle_bad_request_error(error)
    render_error :bad_request, error.message
  end

  # Public: Render a 404 error.
  #
  # error - The 404 error object.
  def handle_service_client_resource_not_found(error)
    render_error :not_found, error.message
  end
end
