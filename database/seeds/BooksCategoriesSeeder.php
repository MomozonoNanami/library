<?php

use App\Models\Books;
use App\Models\Categories;
use Illuminate\Database\Seeder;

class BooksCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $books = Books::get();
        $categories = Categories::get();

        $categories->each(function ($category) use ($books){
            $category->books()->attach(
                $books->random(rand(1,3))->pluck('id')->toArray()
            );
        });
    }
}
