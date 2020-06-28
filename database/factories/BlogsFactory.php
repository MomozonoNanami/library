<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Blogs;
use Faker\Generator as Faker;

$factory->define(Blogs::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'body' => $faker->text(30),
        'img' => $faker->imageUrl(640, 480),
        'data' => $faker->date,
    ];
});
