class Api::IdeasController < Api::BaseController
  def index
    session[:seed] ||= rand()
    seed = session[:seed]

    Idea.select("setseed(#{seed})").first
    render json: Idea.order('random()').limit(10).offset(params[:offset] || 0)
  end
end