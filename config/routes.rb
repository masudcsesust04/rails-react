Rails.application.routes.draw do
  resources :diamonds

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'
  get '*path', to: 'application#index'
end
