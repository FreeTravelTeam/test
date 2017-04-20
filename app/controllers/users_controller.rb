class UsersController < ApplicationController
    def show
      @user = User.find(params[:id])
      @artcles = @user.articles
    end
end
