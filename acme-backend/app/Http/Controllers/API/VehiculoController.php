<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\vehiculo;
use Illuminate\Http\Request;
Use Log;

class VehiculoController extends Controller
{

    public function getAll()
    {
        $data = vehiculo::select('vehiculos.id as id','vehiculos.placa as placa','vehiculos.color as color','vehiculos.marca as marca','tipo_vehiculos.nombre as tipo','conductores.primer_nombre as primer_nombre','conductores.segundo_nombre as segundo_nombre','conductores.apellidos as apellidos','propietarios.primer_nombre as primer_nombre_pro','propietarios.segundo_nombre as segundo_nombre_pro','propietarios.apellidos as apellidos_pro')
        ->join('tipo_vehiculos','vehiculos.id_tipo_vehiculo','=','tipo_vehiculos.id')
        ->join('conductores','vehiculos.id_conductor','=','conductores.id')
        ->join('propietarios','vehiculos.id_propietario','=','propietarios.id')
        ->get();
        return response()->json($data, 200);
    }

    public function create(Request $request)
    {

        vehiculo::create(
            [
                'placa'=>$request->placa,
                'color'=>$request->color,
                'marca'=>$request->marca,
                'id_tipo_vehiculo'=>$request->id_tipo_vehiculo,
                'id_conductor'=>$request->id_conductor,
                'id_propietario'=>$request->id_propietario,
            ]
            );
        return response()->json([
            'message' => "Creación de vehiculo correctamente!",
            'success' => true
        ], 200);
    }
    public function delete($id)
    {
        $res = vehiculo::find($id)->delete();
        return response()->json([
            'message' => "Eliminación de vehiculo correctamente!",
            'success' => true
        ], 200);
    }
    public function get($id){
        $data = vehiculo::find($id);
        return response()->json($data, 200);
      }

    public function update(Request $request,$id){

        vehiculo::find($id)->update(
            [
                'placa'=>$request->placa,
                'color'=>$request->color,
                'marca'=>$request->marca,
                'id_tipo_vehiculo'=>$request->id_tipo_vehiculo,
                'id_conductor'=>$request->id_conductor,
                'id_propietario'=>$request->id_propietario, 
            ]
        );
        return response()->json([
            'message' => "Vehiculo actualizado correctamente!",
            'success' => true
        ], 200);
      }
}
