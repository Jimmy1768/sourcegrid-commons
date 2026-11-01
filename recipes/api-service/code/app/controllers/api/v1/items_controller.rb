module Api
  module V1
    # The paged list call: GET /api/v1/items?page=2&size=10. It shows how a list
    # call uses the Paginatable concern, and it is the call that, once the
    # api-sign-in feature is laid on, needs a valid token. The base has no
    # tables, so the list is a fixed set of sample items. A project's own list
    # replaces ITEMS with a model's relation: render_page takes either.
    class ItemsController < BaseController
      include Paginatable

      ITEMS = Array.new(250) { |index| { id: index + 1, name: "Item #{index + 1}" } }.freeze

      def index
        render_page ITEMS
      end
    end
  end
end
