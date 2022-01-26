<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ciudades;
use Illuminate\Http\Request;

class CiudadController extends Controller
{
    public function getAll()
    {
        $data = ciudades::get();
        return response()->json($data, 200);
    }
    public function getAll_select()
    {
        $data = ciudades::get();
        return response()->json($data, 200);
    }
    public function create(Request $request)
    {

        ciudades::create(
            [
                'nombre'=>$request->nombre,
            ]
            );
        return response()->json([
            'message' => "Creación de ciudad correctamente!",
            'success' => true
        ], 200);
    }
    public function delete($id)
    {
        $res = ciudades::find($id)->delete();
        return response()->json([
            'message' => "Eliminación de ciudad correctamente!",
            'success' => true
        ], 200);
    }
    public function get($id){
        $data = ciudades::find($id);
        return response()->json($data, 200);
      }

    public function update(Request $request,$id){

        ciudades::find($id)->update(
            [
                'nombre'=>$request->nombre, 
            ]
        );
        return response()->json([
            'message' => "Ciudad actualizada correctamente!",
            'success' => true
        ], 200);
      }
}
