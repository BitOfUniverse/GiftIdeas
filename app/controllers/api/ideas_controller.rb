class Api::IdeasController < Api::BaseController
  def index
    session[:seed] ||= rand()
    seed = session[:seed]


    Idea.select("setseed(#{seed})").first

    relation = Idea.all
    total_count = relation.count
    records = relation.order('random()').limit(10).offset(params[:offset] || 0)

    render json: {total_count: total_count, records: records}
  end
end