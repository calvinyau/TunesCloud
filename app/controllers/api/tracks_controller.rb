class Api::TracksController < ApplicationController
  def index
    @tracks = Tracks.all
  end

  def show
    @track = Track.find(params[:id])
  end

  def create
  end

  private

  def track_params
    params.require(:track).permit(:name, :track_url, :artwork_url, :user_id)
  end
end
