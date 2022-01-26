<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\conductores;

class ConductorController extends Controller
{
    //
    public function getAll()
    {
        $data = conductores::select('conductores.id as id','conductores.primer_nombre as primer_nombre','conductores.segundo_nombre as segundo_nombre','conductores.apellidos as apellidos','conductores.direccion as direccion','conductores.telefono as telefono','ciudades.nombre as ciudad')
        ->join('ciudades','conductores.id_ciudad','=','ciudades.id')
        ->get();
        return response()->json($data, 200);
    }

    public function create(Request $request)
    {

        conductores::create(
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
            'message' => "Creación de conducto correctamente!",
            'success' => true
        ], 200);
    }
    public function delete($id)
    {
        $res = conductores::find($id)->delete();
        return response()->json([
            'message' => "Eliminación de conductor correctamente!",
            'success' => true
        ], 200);
    }
    public function get($id){
        $data = conductores::find($id);
        return response()->json($data, 200);
      }

    public function update(Request $request,$id){

        conductores::find($id)->update(
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
