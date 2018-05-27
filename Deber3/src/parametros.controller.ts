import {Controller, Get, Headers, Post, Req, Res} from "@nestjs/common";
import {LogMiddleware} from "./log.middleware";

@Controller('nivelDeLog')
export class ParametrosController{
    @Get('console')
    nivelDeLogConsola(@Req() request,
               @Res() response,
               @Headers() headers
    ) {

        console.log(LogMiddleware);
    }
    @Get('archivo')
    nivelDeLogArchivo(@Req() request,
               @Res() response,
               @Headers() headers
    ) {
    var fs = require("fs");
        var path = "logs.txt";
        var datos = LogMiddleware;
        fs.writeFile(path, datos, function(error) {
            if (error) {
                console.error("write error:  " + error.message);
            } else {
                console.log("Successful Write to " + path);
            }
        });


    }
    @Get('todo')
    todo(@Req() request,
                      @Res() response,
                      @Headers() headers
    ) {
        var fs = require("fs");
        var path = "logs.txt";
        var datos = LogMiddleware.toString();
        console.log(datos);
        fs.writeFile(path, datos, function(error) {
            if (error) {
                console.error("Error al escribir el archivo " + error.message);
            } else {
                console.log("Archivo Guardado " + path);
            }
        });
    }
}