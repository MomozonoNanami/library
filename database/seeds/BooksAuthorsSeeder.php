<?php

use App\Models\Books;
use App\Models\Authors;
use Illuminate\Database\Seeder;

class BooksAuthorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $books = Books::get();
        $authors = Authors::get();

        $authors->each(function ($author) use ($books) {
            $author->books()->attach(
                $books->random(rand(1,3))->pluck('id')->toArray()
            );
        });
    }
}
