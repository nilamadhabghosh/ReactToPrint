# frozen_string_literal: true

# Public: A mixin that provides a helper to access the correlation_id.
module Loggable
  extend ActiveSupport::Concern

  CORRELATION_ID_HEADER = 'Cerner-Correlation-ID'

  # Public: Assign the CORRELATION_ID_HEADER to be our identifier.
  def correlation_id
    @correlation_id = request.headers[CORRELATION_ID_HEADER] || request.uuid
  end
end
