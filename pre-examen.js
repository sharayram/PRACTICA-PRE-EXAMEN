var nAlumnos = parseInt(prompt("¿Cuantos alumnos desea registrar?"));

alumnos();


function alumnos() {
    var alumnos = [];
    var alumnos2 = [];
    var matri = [];
    var h = 0;
    var m = 0;
    var ptotal = 0;
    var sexo1 = [];
    var calificacionM = [];
    var grupos = [];

    for (let i = 0; i < nAlumnos; i++) {
        var nombre = prompt("Ingrese el nombre del estudiante No." + (i + 1));
        alumnos2[i] = nombre;
        var matricula = prompt("Ingrese su matricula del Alumn@ " + nombre);
        matri[i] = matricula;
        var grupo = prompt("Ingrese su grupo del alumn@:");
        grupos[i] = grupo;
        var sexo = prompt("Ingrese su sexo Masculino o Femenino del alumn@:");
        sexo1[i] = sexo;
        var promedio = parseFloat(prompt("Ingrese su promedio del alumn@: " + nombre));
        calificacionM[i] = promedio;

        switch (sexo) {
            case "masculino":
                h += 1;
                break;
            case "femenino":
                m += 1;
                break;
        
        }
        ptotal += promedio;

        var alumno = {
            "Nombre": nombre,
            "Matricula": matricula,
            "Grupo": grupo,
            "Sexo": sexo,
            "Promedio" : promedio
        }
        alumnos.push(alumno);
    }
    do {
        var t = "si";
        if (t == "si") {
            var pregunta1 = parseInt(prompt("Que deseas calcular?" + "\n" + "Presiona:" + "\n" + "1: Para la Cantidad de alumnos" + "\n" + "2: Para saber la cantidad de alumnos por genero" + "\n" + "3: Para la media de calificaciones" + "\n" + "4: Para saber la informacion de un alumno" + "\n" + "5: Para un conjunto de alumnos" + "\n" + "6: Para la informacion de un grupo" + "\n" + "7: Para salir"));

            switch (pregunta1) {
                case 1:
                    console.log("El total de alumnos es: " + nAlumnos);
                    break;
                case 2:
                    console.log("Masculino: " + h + "\n" + "Femenino: " + m);
                    break;
                case 3:
                    ptotal = ptotal / nAlumnos;
                    console.log("La media de calificaciones de los alumnos es: " + ptotal);
                    break;
                case 4:
                    var alumnop = prompt("Tecle el nombre del alumno o su matricula");
                    for (var l = 0; l <= nAlumnos; l++) {
                        if (alumnop == alumnos2[l] || alumnop == matri[l]) {
                            console.log(alumnos[l]);
                        }
                    }
                    break;
                case 5:
                    h = 0;
                    m = 0;
                    var c = parseInt(prompt("Cuantos alumnos deseas consultar?"));
                    var alumnok = [];
                    var alumnos12 = "";
                    var cali = 0;
                    for (var j = 0; j < c; j++) {
                        alumnok[j] = prompt("Ingresa el nombre del alumno No. " + (j + 1));
                        alumnos12 += alumnok[j] + ", ";

                    }
                    for (var z = 0; z < c; z++) {
                        for (var n = 0; n <= c; n++) {
                            if (alumnok[z] == alumnos2[n] || alumnok[z] == matri[n]) {
                                switch (sexo1[z]) {
                                    case "masculino":
                                        h += 1;
                                        break;
                                    case "femenino":
                                        m += 1;
                                        break;
                                }
                                cali += calificacionM[n];
                            }
                        }
                    }
                    cali = cali / c;
                    console.log("Alumnos:" + "\n" + alumnos12);
                    console.log("El total de alumnos es: " + c);
                    console.log("Masculino: " + h + "\n" + "Femenino: " + m);
                    console.log("La media de calificaciones es: " + cali);
                    break;

                case 6:
                    var g = prompt("Que grupo deseas consultar?");
                    var p = 0;
                    h = 0;
                    m = 0;
                    cali = 0;
                    for (var s = 0; s <= nAlumnos; s++) {
                        if (g == grupos[s]) {
                            console.log(alumnos[s]);
                            p += 1;
                            switch (sexo1[s]) {
                                case "masculino":
                                    h += 1;
                                    break;
                                case "femenino":
                                    m += 1;
                                    break;
                            }
                            cali += calificacionM[s];
                        }
                    }
                    cali = cali / p;
                    console.log("La cantidad de alumnos del grupo " + g + " es: " + p);
                    console.log("Masculino: " + h + "\n" + "Femenino: " + m);
                    console.log("La media de calificaciones es: " + cali);
                case 7:
                    break;
            }
        }
        if (pregunta1 == 7) {
            t = "no";
        } else {
            t = prompt("Deseas consultar otra opcion?");
        }
    } while (t == "si");
    alert("Gracias por usar este programa, Porfa saquenos 10" + "\n" + "Buenas gracias y Muchas tardes!");
}