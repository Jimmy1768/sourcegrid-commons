module Api
  module V1
    # The current person: GET /api/v1/me answers the person the token belongs
    # to. A client calls it to find out whether the token it holds still works:
    # a revoked or unknown token gets the base controller's 401.
    class MeController < BaseController
      def show
        render json: { user: current_user.as_api_json }
      end
    end
  end
end
