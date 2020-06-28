<?php

use Illuminate\Database\Seeder;
use App\Models\Categories;



class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Categories::class, 15)->create();
    }
}
