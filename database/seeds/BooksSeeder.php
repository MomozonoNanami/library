<?php

use Illuminate\Database\Seeder;
use App\Models\Books;



class BooksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Books::class, 90)->create();
    }
}
