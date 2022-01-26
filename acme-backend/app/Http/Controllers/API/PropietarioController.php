<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\propietarios;

class PropietarioController extends Controller
{
    //
    public function getAll()
    {
        $data = propietarios::select('propietarios.id as id','propietarios.primer_nombre as primer_nombre','propietarios.segundo_nombre as segundo_nombre','propietarios.apellidos as apellidos','propietarios.direccion as direccion','propietarios.telefono as telefono','ciudades.nombre as ciudad')
        ->join('ciudades','propietarios.id_ciudad','=','ciudades.id')
        ->get();
        return response()->json($data, 200);
    }

    public function create(Request $request)
    {

        propietarios::create(
            [
                'id'=>$request->id,
                'primer_nombre'=>$request->primer_nombre,
                'segundo_nombre'=>$request->segundo_nombre,
                'apellidos'=>$request->apellidos,
                'direccion'=>$request->direccion,
                'telefono'=>$request->telefono,
                'id_ciudad'=>$request->id_ciudad,
            ]
            );
        return response()->json([
            'message' => "Creación de propietario correctamente!",
            'success' => true
        ], 200);
    }
    public function delete($id)
    {
        $res = propietarios::find($id)->delete();
        return response()->json([
            'message' => "Eliminación de propietario correctamente!",
            'success' => true
        ], 200);
    }
    public function get($id){
        $data = propietarios::find($id);
        return response()->json($data, 200);
      }

    public function update(Request $request,$id){

        propietarios::find($id)->update(
            [
                'primer_nombre'=>$request->primer_nombre,
                'segundo_nombre'=>$request->segundo_nombre,
                'apellidos'=>$request->apellidos,
                'direccion'=>$request->direccion,
                'telefono'=>$request->telefono,
                'id_ciudad'=>$request->id_ciudad, 
            ]
        );
        return response()->json([
            'message' => "Conductor actualizada correctamente!",
            'success' => true
        ], 200);
      }
}
