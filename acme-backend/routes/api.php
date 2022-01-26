<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\VehiculoController;
use App\Http\Controllers\API\CiudadController;
use App\Http\Controllers\API\ConductorController;
use App\Http\Controllers\API\PropietarioController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('vehiculo')->group(function () {
    Route::get('/',[ VehiculoController::class, 'getAll']);
    Route::post('/',[ VehiculoController::class, 'create']);
    Route::delete('/{id}',[ VehiculoController::class, 'delete']);
    Route::get('/{id}',[ VehiculoController::class, 'get']);
    Route::put('/{id}',[ VehiculoController::class, 'update']);
});
Route::prefix('ciudad')->group(function () {
    Route::get('/',[ CiudadController::class, 'getAll']);
    Route::post('/',[ CiudadController::class, 'create']);
    Route::delete('/{id}',[ CiudadController::class, 'delete']);
    Route::get('/{id}',[ CiudadController::class, 'get']);
    Route::put('/{id}',[ CiudadController::class, 'update']);
});
Route::prefix('conductor')->group(function () {
    Route::get('/',[ ConductorController::class, 'getAll']);
    Route::post('/',[ ConductorController::class, 'create']);
    Route::delete('/{id}',[ ConductorController::class, 'delete']);
    Route::get('/{id}',[ ConductorController::class, 'get']);
    Route::put('/{id}',[ ConductorController::class, 'update']);
});
Route::prefix('propietario')->group(function () {
    Route::get('/',[ PropietarioController::class, 'getAll']);
    Route::post('/',[ PropietarioController::class, 'create']);
    Route::delete('/{id}',[ PropietarioController::class, 'delete']);
    Route::get('/{id}',[ PropietarioController::class, 'get']);
    Route::put('/{id}',[ PropietarioController::class, 'update']);
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
