class CreateIdeas < ActiveRecord::Migration[5.0]
  def change
    create_table :ideas do |t|
      t.string :title
      t.text :description
      t.string :image
      t.integer :grade
      t.integer :views
      t.string :note

      t.timestamps
    end
  end
end
