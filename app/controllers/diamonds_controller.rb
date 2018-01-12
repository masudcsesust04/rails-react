class DiamondsController < ApplicationController
  def index
    @diamonds = Diamond.all
    render json: {status: :ok, data: @diamonds}
  end

  def show
  end

  def search
  end
end
