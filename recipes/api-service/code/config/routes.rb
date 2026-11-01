Rails.application.routes.draw do
  # Everything the API answers lives under /api/v1. A new version is a new
  # namespace beside this one.
  namespace :api do
    namespace :v1 do
      get "status", to: "status#show"
      get "items", to: "items#index"
    end
  end

  # /up, the path Rails' health checks and the production log silence expect,
  # answers with the status call. Rails' own health controller is left out: it
  # renders a page, and this base has no views.
  get "up", to: "api/v1/status#show"

  # Any other route answers in the API's one error shape, never a page.
  match "*unmatched", to: "application#route_not_found", via: :all
end
