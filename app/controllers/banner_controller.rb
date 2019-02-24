class BannerController < ApplicationController
  def upload
    if current_spree_user&.has_spree_role?("admin") then
      if request.method.upcase == 'POST'
        @uploader =  BannerUploader.new
        @uploader.store!(params[:banner][:image])
        redirect_to root_path
      end
    else
      redirect_to root_path
    end
  end
end
