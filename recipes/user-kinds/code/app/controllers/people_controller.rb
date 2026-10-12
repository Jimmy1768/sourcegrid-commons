class PeopleController < ApplicationController
  allow_kinds :admin

  def index
    @people = User.order(:email_address)
  end
end
