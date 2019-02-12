Rails.application.routes.draw do
  filter :locale
  root 'home#index'
  get 'home/index'
  mount Spree::Core::Engine, at: '/'
# DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
