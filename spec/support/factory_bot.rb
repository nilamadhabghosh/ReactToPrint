# frozen_string_literal: true

# RSpec with Rails
RSpec.configure do |config|
  # https://github.com/thoughtbot/factory_bot/blob/master/GETTING_STARTED.md#rspec
  config.include FactoryBot::Syntax::Methods
end
