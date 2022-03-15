// Esta clase la hemos creado manualmente, las siguientes las haremos con el comando del angular cli para crear pipes personalizadas
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayus'
})
export class MayusculasPipe implements PipeTransform {
    
    // El primer parámetro de la función es el valor al que le aplicamos la pipe,
    // 
    // El segundo y siguientes parámetros representan los parámetros que esa pipe puede recibir (:algo).
    //  
    // Podemos definir tantos como queremos y hacerlos opcionales u obligatorios. Este segundo por ejemplo es de tipo booleano y opcional: 
    // Si no le pasamos nada me devuelve el valor en mayúsculas porque enMayus por defecto ya es true. 
    // Si me pasa un :false entonces devolvemos el texto en minúsculas 
    transform(value: string, enMayus: boolean = true): string 
    {
        return ( enMayus ) ? value.toUpperCase() : value.toLowerCase();
    }
}