# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :printrecord
    end 
  end
   # This line must stay as the last route to be a catch all for any client-side route.
   get '*path', to: 'home#index', via: :all, constraints: ->(req) { req.format.html? }
end
