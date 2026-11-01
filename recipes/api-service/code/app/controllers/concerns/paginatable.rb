# Paging for any call that lists. A controller includes it and ends its list
# action with render_page:
#
#   include Paginatable
#
#   def index
#     render_page Widget.order(:id)
#   end
#
# The caller asks for a page with `page` (from 1) and a size with `size`. A
# missing, zero or negative size is DEFAULT_SIZE; a size above MAX_SIZE is held
# to MAX_SIZE, the ceiling. A page past the last answers with no items. The
# answer is always this shape, and says how many pages there are:
#
#   { "items": [ ... ], "page": 1, "size": 25, "total": 120, "pages": 5 }
#
# The collection may be an Active Record relation or an array. A block given
# to render_page turns each item into what the caller sees.
module Paginatable
  extend ActiveSupport::Concern

  DEFAULT_SIZE = 25
  MAX_SIZE = 100

  private
    def page_number
      [ params[:page].to_s.to_i, 1 ].max
    end

    def page_size
      size = params[:size].to_s.to_i
      size = DEFAULT_SIZE if size < 1
      [ size, MAX_SIZE ].min
    end

    def render_page(collection, &serializer)
      page = page_number
      size = page_size
      total = collection.count
      pages = (total / size.to_f).ceil

      records = page > pages ? [] : page_of(collection, (page - 1) * size, size)
      items = serializer ? records.map(&serializer) : records.to_a

      render json: { items: items, page: page, size: size, total: total, pages: pages }
    end

    def page_of(collection, offset, size)
      if collection.respond_to?(:offset)
        collection.offset(offset).limit(size)
      else
        collection.drop(offset).first(size)
      end
    end
end
