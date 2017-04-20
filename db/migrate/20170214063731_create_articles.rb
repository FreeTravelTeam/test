class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.text :body
      t.string :image
      t.integer :price
      t.datetime :from_date
      t.datetime :to_date
      t.string :country
      t.string :region
      t.text :safety_info
      t.text :travel_item
      t.integer :user_id

      t.timestamps
    end
  end
end
