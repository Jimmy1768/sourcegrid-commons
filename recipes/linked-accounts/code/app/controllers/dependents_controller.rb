class DependentsController < ApplicationController
  before_action :set_dependent, only: %i[ show edit update leave ]

  # GET /dependents
  def index
    @dependents = Current.user.dependents.order(:name)
  end

  # GET /dependents/1
  def show
    @links = @dependent.user_dependents.includes(:user).order(:created_at)
  end

  # GET /dependents/new
  def new
    @dependent = Dependent.new
  end

  # GET /dependents/1/edit
  def edit
    @relationship_label = own_link.relationship_label
  end

  # POST /dependents
  def create
    @relationship_label = params[:relationship_label]
    @dependent = Dependent.new(dependent_params)
    @dependent.user_dependents.build(user: Current.user, relationship_label: @relationship_label.presence)

    if @dependent.save
      redirect_to @dependent, notice: "Dependent was successfully created."
    else
      render :new, status: :unprocessable_content
    end
  end

  # PATCH/PUT /dependents/1
  def update
    @relationship_label = params[:relationship_label]

    if update_dependent_and_own_label
      redirect_to @dependent, notice: "Dependent was successfully updated.", status: :see_other
    else
      render :edit, status: :unprocessable_content
    end
  end

  # DELETE /dependents/1/leave
  def leave
    own_link.destroy!

    if Dependent.exists?(@dependent.id)
      redirect_to dependents_path, notice: "You no longer care for #{@dependent.name}.", status: :see_other
    else
      redirect_to dependents_path, notice: "You were #{@dependent.name}'s last caretaker, so #{@dependent.name} was removed.", status: :see_other
    end
  end

  private
    # Only the signed-in user's own dependents are found; any other is not
    # found, whatever the action.
    def set_dependent
      @dependent = Current.user.dependents.find(params.expect(:id))
    end

    def own_link
      Current.user.user_dependents.find_by!(dependent: @dependent)
    end

    # The dependent's details, and what the dependent is to the signed-in
    # caretaker, are saved together or not at all. Each caretaker changes only
    # their own label.
    def update_dependent_and_own_label
      Dependent.transaction do
        raise ActiveRecord::Rollback unless @dependent.update(dependent_params)

        own_link.update!(relationship_label: @relationship_label.presence) if params.key?(:relationship_label)
        true
      end
    end

    # Only allow a list of trusted parameters through.
    def dependent_params
      params.expect(dependent: [ :name, :birthdate ])
    end
end
