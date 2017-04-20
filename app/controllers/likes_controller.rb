class LikesController < ApplicationController
	def create
		# いいねを押されたarticleを探してくる
		@article = Article.find(params[:article_id])
		# いいねされたarticle.idといいねを押した（ログインしているユーザー）user.idそれぞれカラムにセットしてテーブルへ保存
		Like.create(user_id: current_user.id, article_id: @article.id)
		# @likes = Like.where(article_id: params[:article_id])
		# -----------------------
		# いいねをカウントしたいのであれば
		# @article.likes.count  or  @article.likes.size
		# で計測可能
		# ビューで表示するときは
		# <%= @article.likes.count %>
		# でおけ
		# ------------------------
		# @articles = Article.all
  	end

	def destroy
		@article = Article.find(params[:article_id])
	    like = Like.find_by(user_id: current_user.id, article_id: @article.id)
	    like.destroy
	    # 上に同じく不要なコード
	    # @likes = Like.where(article_id: params[:article_id])
	    # @articles = Article.all
	end
end
