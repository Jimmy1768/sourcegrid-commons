module Api
  module V1
    # Every call under /api/v1 inherits from this controller, and every call
    # needs a valid API token unless its controller says otherwise with
    # allow_unauthenticated_access. This file replaces the api-service base's,
    # which checks nothing.
    #
    # The client sends its token in the Authorization header:
    #
    #   Authorization: Bearer <token>
    #
    # A call with no token, an unknown token or a revoked one answers 401 in the
    # API's one error shape. A token that is found has its last_used_at set.
    class BaseController < ApplicationController
      before_action :require_authentication

      # Opens a controller, or some of its actions, to a caller with no token:
      # the status call, sign in. Takes the same only: and except: options as
      # any callback.
      def self.allow_unauthenticated_access(**options)
        skip_before_action :require_authentication, **options
      end

      private
        def require_authentication
          return if current_api_token

          render_error :unauthorized, "unauthorized", "A valid token is needed"
        end

        # The token record the call came with, or nil.
        def current_api_token
          return @current_api_token if defined?(@current_api_token)

          @current_api_token = ApiToken.authenticate(bearer_token)
        end

        def current_user
          current_api_token&.user
        end

        def bearer_token
          request.authorization.to_s[/\ABearer\s+(\S+)\z/i, 1]
        end
    end
  end
end
