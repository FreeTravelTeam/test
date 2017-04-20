Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users
    resources :users, only: [:index, :show] do
    get :likes, on: :member
  end

  resources :articles do
  	 resource :likes, only: [:create, :destroy]
  end
  resources :comments, only:[:create]

  get 'search/index' => 'articles#index', as: :search
  root 'articles#top'
end
