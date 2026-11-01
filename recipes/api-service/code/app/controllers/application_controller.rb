class ApplicationController < ActionController::API
  # The API's one error shape, for every error the API answers:
  #
  #   { "error": { "code": "not_found", "message": "Not found" } }
  #
  # `code` is a short word a client can switch on; `message` is for a person.
  rescue_from ActiveRecord::RecordNotFound do
    render_error :not_found, "not_found", "Not found"
  end

  rescue_from ActionController::ParameterMissing do |error|
    render_error :bad_request, "bad_request", "Missing parameter: #{error.param}"
  end

  # A request body that is not valid JSON answers in the error shape, never
  # with the framework's own exception page.
  rescue_from ActionDispatch::Http::Parameters::ParseError do
    render_error :bad_request, "bad_request", "Malformed request body"
  end

  # Where config/routes.rb sends every route no other route matches, so an
  # unknown route answers in the error shape and never with a page.
  def route_not_found
    render_error :not_found, "not_found", "No route matches #{request.request_method} #{request.path}"
  end

  private
    def render_error(status, code, message)
      render json: { error: { code: code, message: message } }, status: status
    end
end
