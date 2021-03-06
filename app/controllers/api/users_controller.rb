class Api::UsersController < ApplicationController
    def index
      @users = User.all
      render :index
    end

    def show
      @user = User.find(params[:id])
    end

    def create
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end

    end

    def destroy
      @user = User.find(params[:id])
      @user.delete

      @users = User.all
      render :index
    end

    private

    def user_params
      params.require(:user).permit(:username, :password, :email, :profile_photo_url)
    end
  end
