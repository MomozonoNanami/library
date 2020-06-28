<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Books;
use Faker\Generator as Faker;

$factory->define(Books::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'annotation' => $faker->text(30),
        'img' => $faker->imageUrl(640, 480)
    ];
});
