# frozen_string_literal: true

# HomeController: Provides the Home endpoints and their helper methods.
class HomeController < ApplicationController
  # Public: A blank render for our React to attach itself to.
  def index
    render html: '', layout: true
  end
end
