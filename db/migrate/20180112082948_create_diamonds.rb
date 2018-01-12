class CreateDiamonds < ActiveRecord::Migration[5.1]
  def change
    create_table :diamonds do |t|
      t.string :shape
      t.decimal :weight
      t.string :color
      t.string :clarity
      t.decimal :length
      t.decimal :width
      t.string :lab
      t.decimal :price
      t.string :polish

      t.timestamps
    end
  end
end
