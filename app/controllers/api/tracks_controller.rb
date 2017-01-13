class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
  end

  def create
    @track = Track.new(track_params)
    @track.user_id = current_user.id

    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.delete

    @tracks = Track.all
    render :index
  end

  private

  def track_params
    params.require(:track).permit(:name, :track_url, :artwork_url, :user_id)
  end
end
