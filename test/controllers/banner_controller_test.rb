require 'test_helper'

class BannerControllerTest < ActionDispatch::IntegrationTest
  test "should get upload" do
    get banner_upload_url
    assert_response :success
  end

end
