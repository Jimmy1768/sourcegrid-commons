module Api
  module V1
    # The status call: GET /api/v1/status, and /up, which answers with it. It
    # needs no sign-in, so a client, a monitor or a load balancer can ask it
    # whether the API is up. allow_unauthenticated_access keeps it open once
    # the api-sign-in feature makes every other call need a token.
    class StatusController < BaseController
      allow_unauthenticated_access

      def show
        render json: { status: "ok", version: "v1" }
      end
    end
  end
end
