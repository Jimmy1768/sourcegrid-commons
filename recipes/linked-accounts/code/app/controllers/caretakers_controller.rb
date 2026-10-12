class CaretakersController < ApplicationController
  # POST /dependents/1/caretakers
  def create
    dependent = Current.user.dependents.find(params.expect(:dependent_id))
    user = User.find_by(email_address: params[:email_address])

    if user.nil?
      redirect_to dependent, alert: "No one who can sign in has that email address."
    elsif dependent.users.include?(user)
      redirect_to dependent, alert: "#{user.email_address} already cares for #{dependent.name}."
    else
      dependent.user_dependents.create!(user: user, relationship_label: params[:relationship_label].presence)
      redirect_to dependent, notice: "#{user.email_address} now cares for #{dependent.name}."
    end
  end
end
