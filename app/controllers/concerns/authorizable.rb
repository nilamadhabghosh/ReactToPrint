# frozen_string_literal: true

# Authorizable: Provides a mixin for controller that can be authorized.
module Authorizable
  extend ActiveSupport::Concern

  # Public: Log and render the appropriate error.
  def fail_authorization
    render json: { error: 'Unauthorized' }, status: :unauthorized
  end

  # Public: Redirect to the sign_in_url, or log and render an error if there is none.
  def fail_authentication
    if sign_in_url
      redirect_to sign_in_url
    else
      render json: { error: 'Forbidden' }, status: :forbidden
    end
  end
end
