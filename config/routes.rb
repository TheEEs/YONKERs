Rails.application.routes.draw do
  filter :locale
  root 'home#index'
  get 'home', to: 'home#index', as: 'home'
  get 'welcome', to: 'landing#index', as: 'landing'
  mount Spree::Core::Engine, at: '/'
# DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
