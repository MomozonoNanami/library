<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(BooksSeeder::class);
        $this->call(BlogsSeeder::class);        
        $this->call(CategoriesSeeder::class);
        $this->call(AuthorsSeeder::class);           
        $this->call(BooksCategoriesSeeder::class);        
        $this->call(BooksAuthorsSeeder::class);    
        $this->call(UsersSeeder::class);    
    }
}
