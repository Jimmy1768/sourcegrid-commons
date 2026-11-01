module Api
  module V1
    # Every call under /api/v1 inherits from this controller. It is the one
    # place a feature lays a check that every call must pass: the api-sign-in
    # feature replaces this file with one that needs a valid token.
    #
    # This base answers every call, to anyone, so nothing here needs a person
    # signed in. A controller that must stay open once a feature adds that
    # check says so with allow_unauthenticated_access, the name Rails' own
    # authentication generator uses. Here it does nothing, so the same
    # controllers run on the base alone and with the feature laid on it.
    class BaseController < ApplicationController
      def self.allow_unauthenticated_access(**)
      end
    end
  end
end
