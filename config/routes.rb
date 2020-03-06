Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :tops do
    collection do 
      get 'account'
      get 'furima'
      get 'chat_space'
    end
  end

  root 'tops#index'
    
end
