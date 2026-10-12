module UserKinds
  extend ActiveSupport::Concern

  class_methods do
    # Lets only signed-in users of the given kinds into this controller's
    # actions; everyone else goes back to the home page with a message. Takes
    # before_action's options, such as only: and except:. Naming a kind the
    # app does not have fails when the controller loads, so a renamed kind
    # cannot quietly shut everyone out.
    def allow_kinds(*kinds, **options)
      kinds = kinds.map(&:to_s)
      raise ArgumentError, "allow_kinds names no kind" if kinds.empty?
      unknown = kinds - User.kinds.keys
      if unknown.any?
        raise ArgumentError, "allow_kinds: #{unknown.join(', ')} is not a kind of user; the kinds are #{User.kinds.keys.join(', ')}"
      end

      before_action(**options) { require_kind(kinds) }
    end
  end

  private
    def require_kind(kinds)
      unless kinds.include?(Current.user&.kind)
        redirect_to root_path, alert: "You may not open that page."
      end
    end
end
