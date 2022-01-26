<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vehiculo extends Model
{
    use HasFactory;

    protected $fillable = [
        'placa',
        'color',
        'marca',
        'id_tipo_vehiculo',
        'id_conductor',
        'id_propietario',
      ];
}
