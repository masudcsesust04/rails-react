class DiamondsController < ApplicationController
  def index
    @diamonds = Diamond.all
    render json: {status: :ok, data: @diamonds}
  end

  def show
  end

  def search
    @diamonds = Diamond.where(shape: params[:shape], color: params[:color], clarity: params[:clarity], lab: params[:lab], polish: params[:polish])
    render json: {status: :ok, data: @diamonds}
  end

  private
  def diamond_params
    params.require(:diamond).permit(:shape, :weight, :color, :clarity, :length, :width, :lab, :price, :polish)
  end
end
