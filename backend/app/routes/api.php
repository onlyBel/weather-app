<?php

use App\Http\Controllers\WeatherController;
use Illuminate\Support\Facades\Route;

//Define a route for getting weather data
Route::get('/weather', [WeatherController::class, 'getWeather']);
