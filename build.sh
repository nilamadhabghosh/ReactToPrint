set -e
bin/setup
bundle exec bin/rubocop
bundle exec rspec
