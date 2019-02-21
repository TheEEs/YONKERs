class LandingController < ApplicationController
  def index
    @welcome = cookies[:welcome]
    if @welcome == 'yes'
      redirect_to home_path
    else
      cookies[:welcome] = 'yes'
    end
  end
end
