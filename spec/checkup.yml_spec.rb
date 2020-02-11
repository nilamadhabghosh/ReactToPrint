# frozen_string_literal: true

require 'rails_helper'
require 'service_config'

# Note that we only check for entries under "test" section.
# It should be sufficient to detect misses since most of the times we forget the whole thing about checkup.yml
# rather than specific sections.
RSpec.describe 'checkup.yml' do
  let(:service_checkup_entries) do
    config = Rails.application.config_for(:checkup)
    checkup_entries = config['primary'].to_a + config['ancillary'].to_a
    checkup_entries.select { |e| e.is_a?(Hash) && e['type'] == 'service'}
  end

  let(:checkup_entry_lookup) do
    ->(service_name) { service_checkup_entries.find { |sce| service_name == "#{sce['name']}_service_uri" } }
  end

  ServiceConfig.config.keys.select { |key| key =~ /_service_uri$/ }.each do |service_name|
    it "includes #{service_name} from services.yml" do
      expect(checkup_entry_lookup[service_name]).to be_present, "Expected '#{service_name}' to present in checkup.yml."
    end
  end
end
