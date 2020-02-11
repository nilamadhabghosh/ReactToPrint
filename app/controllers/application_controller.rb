# frozen_string_literal: true

# ApplicationController: Provides useful validations for children controllers
class ApplicationController < ActionController::Base
  include Authorizable
  include RenderError
  include Loggable

  protect_from_forgery with: :exception

  before_action :set_user_cloud_session_attributes

  rescue_from ArgumentError, with: :handle_bad_request_error
  rescue_from Hi::ServiceClient::BadRequestError, with: :handle_bad_request_error
  rescue_from Hi::ServiceClient::ResourceNotFoundError, with: :handle_service_client_resource_not_found
  rescue_from ActiveModel::ValidationError, with: :handle_bad_request_error

  # Get user cloud session attributes to calculate session timout details
  def set_user_cloud_session_attributes
    @user_cannot_extend_session = !user_session.extendable?
    # Adding buffer to match CSS timer with local timer
    @inactivity_remaining_seconds = user_session.seconds_until_inactive - 5
  end
end
