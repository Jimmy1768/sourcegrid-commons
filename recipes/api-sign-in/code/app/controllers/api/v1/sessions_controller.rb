module Api
  module V1
    # Sign in and sign out.
    #
    #   POST   /api/v1/sessions   sign in: email_address, password, and an
    #                             optional device_name; answers a token
    #   DELETE /api/v1/sessions   sign out: revokes the token the call came with
    #
    # Sign in is the only call here that needs no token. Signing out needs one,
    # since it is the token that is revoked. The client keeps the token and
    # sends it as `Authorization: Bearer <token>` on every other call.
    class SessionsController < BaseController
      allow_unauthenticated_access only: :create

      # Rails' own limit for sign-in: 10 tries in 3 minutes from one address.
      rate_limit to: 10, within: 3.minutes, only: :create, with: -> {
        render_error :too_many_requests, "rate_limited", "Too many sign-in attempts. Try again later."
      }

      def create
        user = User.authenticate_by(email_address: email_param, password: params[:password].to_s)

        if user
          _record, token = ApiToken.issue(user: user, device_name: params[:device_name])
          render json: { token: token, user: user.as_api_json }
        else
          render_error :unauthorized, "invalid_credentials", "Wrong email address or password"
        end
      end

      # Deleting the row revokes the token: the same token then gets a 401.
      def destroy
        current_api_token.destroy
        head :no_content
      end

      private
        # `email_address` is the name the API documents; `email` is accepted too.
        def email_param
          (params[:email_address].presence || params[:email]).to_s
        end
    end
  end
end
