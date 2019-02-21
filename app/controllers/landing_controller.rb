class LandingController < ApplicationController
  def index
    @welcome = cookies[:welcome]
    if @welcome == 'yes'
      redirect_to home_path
    else
      cookies[:welcome] = {value: 'yes', expires: 10.minutes}
    end
  end
end
