require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Forumtest
  class Application < Rails::Application
    config.assets.paths << Rails.root.join("bower_components")
        config.assets.paths << Rails.root.join("bower_components","angular-material")

        config.assets.precompile << %r(.*.(?:eot|svg|ttf|woff|woff2)$)
    config.active_record.raise_in_transactional_callbacks = true
  end
end
