Rails.application.routes.draw do
  resources :diamonds do
    collection do
      get :search
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'
  get '*path', to: 'application#index'
end
