//================ ORDENANZAS MUNICIPALES ===============
var text, ordenanzas;
ordenanzas = [
    ["Ordenanza Municipal N°011-2020", "Ordenanza que aprueba la separación voluntaria de la Municipalidad Provincial de Carabaya de la mancomunidad municipal de la Cuenca del Inambari.", "13/07/2020", ""],
    ["Ordenanza Municipal N°010-2020", "Ordenanza Municipal para regular las disposiciones orientadas y garantizar la seguridad sanitaria en el abastecimiento y expendio de alimentos y productos de primera necesidad para prevenir el COVID-19 en los mercados de abasto en el distrito de Macusani, Provincial de Carabaya.", "19/06/2020", ""],
    ["Ordenanza Municipal N°009-2020", "Ordenanza Municipal que dicta medidas complementarias para prevenir el contagio y propagación del corona virus (covid-19) en la provincia de Carabaya, en observancia al Decreto Supremo N°044-2020-PCM.", "19/06/2020", ""],
    ["Ordenanza Municipal N°008-2020", "Ordenanza Municipal que reglamenta el horario de funcionamiento y atención al público de los establecimientos comerciales mayoristas y minoristas de alimentos, mercados, centros comerciales, tiendas de abarrotes que expenden productos de primera necesidad que, expenden en el distrito de Macusani, Provincia de Carabaya, en cumplimiento al Decreto Supremo N°051-2020-PCM, Decreto Supremo N°044-2020-PCM, Decreto Supremo N°046-2020-PCM y Disposiciones Complementarias.", "01/04/2020", ""],
    ["Ordenanza Municipal N°007-2020", "Ordenanza Municipal que crea el Registro Único de Organizaciones Sociales – RUOS de la Municipalidad Provincial de Carabaya – Macusani.", "11/03/2020", ""],
    ["Ordenanza Municipal N°006-2020", "Ordenanza Municipal de creación, implementación y funcionamiento del centro integral de atención del adulto mayor – CIAM de la Municipalidad Provincial de Carabaya – Macusani.", "11/03/2020", ""],
    ["Ordenanza Municipal N°005-2020", "Ordenanza Municipal que aprueba el Reglamento del Proceso del Presupuesto Participativo por el Resultado de la Municipalidad Provincial de Carabaya-Macusani para el año 2021.", "11/03/2020", ""],
    ["Ordenanza Municipal N°004-2020", "Ordenanza que aprueba el Reglamento de Atención de Denuncias Ambientales de la Municipalidad Provincial de Carabaya-Macusani.", "27/02/2020", ""],
    ["Ordenanza Municipal N°003-2020", "Ordenanza que aprueba el Reglamento de Supervisión Ambiental de la Municipalidad Provincial de Carabaya-Macusani.", "27/02/2020", ""],
    ["Ordenanza Municipal N°002-2020", "Ordenanza que aprueba el Reglamento de Aplicación de Sanciones Administrativas (RAS) y el cuadro único de infracciones y sanciones (CUIS) de la Municipalidad Provincial de Carabaya-Macusani.", "27/02/2020", ""],
    ["Ordenanza Municipal N°001-2020", "Ordenanza que dispone el Embanderamiento por Aniversario de Capitalización de la Provincia de Carabaya, Día de la Bandera y Fiestas Patrias, en la jurisdicción del distrito de Macusani, Provincia de Carabaya, departamento de Puno.", "29/01/2020", ""],
    ["Ordenanza Municipal N°006-2019", "Reordenamiento de Transporte y Tránsito dentro de la ciudad de Macusani", "2/12/2019", ""],
    ["Ordenanza Municipal N°005-2019", "Que regula el Comercio Ambulatorio en Macusani", "2/12/2019", ""]
];

ordLen = ordenanzas.length;
tamanioFila = 4;
text = "";
for (i = 0; i < ordLen; i++) {
    text += "<tr>";
    for (j = 0; j < tamanioFila; j++) {
        if (j != 3) {
            text += "<td class=\"align-middle\">" + ordenanzas[i][j] + "</td>";
        } else {
            text += "<td class=\"align-middle\">" + "<a href=\"" + ordenanzas[i][j] + "\" class=\"d-flex justify-content-center\"><i class=\"icofont-file-pdf\"></i></a>" + "</td>";
        }

    }
    text += "</tr>";
}

document.getElementById("ordenanzas").innerHTML = text;

//================ RESOLUCIONES DE ALCALDIA===============
var text2, resoluciones;

resoluciones = [
    ["Res. Alc. N°259-2020 FE DE ERRATAS", "DESIGNAR, como responsable del Área Técnica Municipal (ATM) de los servicios de agua saneamiento al Señor Máximo Eusebio Tristán Colque, identificado con DNI N° 01682250, con retención al cargo de origen y las atribuciones y responsabilidades que el cargo amerita a partir del 10 de setiembre del año 2020...", "11-set-2020", ""],
    ["Res. Alc. N°259-2020", "DESIGNAR, como responsable del Área Técnica Municipal (ATM) de los servicios de agua saneamiento al Señor Máximo Eusebio Tristán Colque, identificado con DNI N° 01682250, con las atribuciones y responsabilidades que el cargo amerita a partir del 10 de setiembre del año 2020...", "10-set-2020", ""],
    ["Res. Alc. N°244-2020", "Se resuelve: SUSPENDER todas LAS LABORES ADMINISTRATIVAS dentro de la Municipalidad Provincial de Carabaya – Macusani, a partir del día jueves 20 de agosto del presente año hasta el día viernes 28 de agosto de 2020; por las grandes circunstancias que viene afectando el brote del COVID-19...", "19-ago-2020", ""],
    ["Res. Alc. N°367-2019", "Se resuelve: APROBAR, el Plan Operativo Institucional – POI para el Ejercicio Fiscal 2020, Consistente con el Presupuesto Institucional de Apertura (PIA), de la Municipalidad Provincial de Carabaya – Macusani...", "31-dic-2019", ""],
    ["Res. Alc. N°305-2019", "Se resuelve: APROBAR, la reducción de prestaciones de los Contratos de Mantenimiento de Caminos Vecinales...", "17-oct-2019", ""],
    ["Res. Alc. N°112-2019", "Se resuelve: ARTÍCULO PRIMERO: DESIGNAR a partir de la fecha a la Abg. Virginia Apaza Coila; Secretaria General de la Municipalidad de Carabaya, como responsable de Atención de Solicitudes de Acceso a la Información Pública...", "18-mar-2019", ""]
];

ordLen = resoluciones.length;
text2 = "";
for (i = 0; i < ordLen; i++) {
    text2 += "<tr>";
    for (j = 0; j < tamanioFila; j++) {
        if (j != 3) {
            text2 += "<td class=\"align-middle\">" + resoluciones[i][j] + "</td>";
        } else {
            text2 += "<td class=\"align-middle\">" + "<a href=\"" + resoluciones[i][j] + "\" class=\"d-flex justify-content-center\"><i class=\"icofont-file-pdf\"></i></a>" + "</td>";
        }

    }
    text2 += "</tr>";
}

document.getElementById("resoluciones").innerHTML = text2;

//================ RESOLUCIONES GERENCIALES==============
var text3, resoluciongeren;

resoluciongeren = [
    ["Res. Ger. N°004-2020", "Se resuelve: ARTÍCULO PRIMERO: APROBAR el Plan Anual de Contrataciones PAC-2020, de la Municipalidad Provincial de Carabaya, de acuerdo a la programación de los siguientes Procedimientos...", "15-ene-2020", ""]
];

ordLen = resoluciongeren.length;
text3 = "";
for (i = 0; i < ordLen; i++) {
    text3 += "<tr>";
    for (j = 0; j < tamanioFila; j++) {
        if (j != 3) {
            text3 += "<td class=\"align-middle\">" + resoluciongeren[i][j] + "</td>";
        } else {
            text3 += "<td class=\"align-middle\">" + "<a href=\"" + resoluciongeren[i][j] + "\" class=\"d-flex justify-content-center\"><i class=\"icofont-file-pdf\"></i></a>" + "</td>";
        }

    }
    text3 += "</tr>";
}

document.getElementById("resoluciongeren").innerHTML = text3;

//================ RECOMENDACIONES OCI ===============
var text4, recomendaciones;

recomendaciones = [
    ["01", "INFORME N°028-2019-MPC-M/OCI <br> SERVICIO DE CONTROL N° 02-0458-2019-012 <br>«VERIFICACIÓN DE CUMPLIMIENTO DEL CUMPLIMIENTO DE LA NORMATIVA EXPRESA: LEY DE TRANSPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA»", "15/01/2020", ""],
    ["02", "Enero, Febrero del 2019 <br>«ESTADO DE IMPLEMENTACION DE LAS RECOMENDACIONES DEL INFORME DEL AUDITORIA ORIENTADAS ALA MEJORA DE LA GESTION»", "01 de ENERO al 28 de FEBRERO del 2019", ""],
    ["03", "Marzo, Abril del 2019 <br>«ESTADO DE IMPLEMENTACION DE LAS RECOMENDACIONES DEL INFORME DEL AUDITORIA ORIENTADAS ALA MEJORA DE LA GESTION»", "01 de MARZO al 30 de ABRIL del 2019", ""],
    ["04", "Mayo, Junio del 2019 <br>«ESTADO DE IMPLEMENTACION DE LAS RECOMENDACIONES DEL INFORME DEL AUDITORIA ORIENTADAS ALA MEJORA DE LA GESTION»", "01 de MAYO al 28 de JUNIO del 2019", ""],
    ["05", "Julio, Agosto del 2019 <br>«ESTADO DE IMPLEMENTACION DE LAS RECOMENDACIONES DEL INFORME DEL AUDITORIA ORIENTADAS ALA MEJORA DE LA GESTION»", "01 de JULIO al 28 de AGOSTO del 2019", ""],
    ["06", "Setiembre, Octubre del 2019 <br>«ESTADO DE IMPLEMENTACION DE LAS RECOMENDACIONES DEL INFORME DEL AUDITORIA ORIENTADAS ALA MEJORA DE LA GESTION»", "02 de SETIEMBRE al 30 de OCTUBRE del 2019", ""],
    ["07", "Noviembre, Diciembre del 2019 <br>«ESTADO DE IMPLEMENTACION DE LAS RECOMENDACIONES DEL INFORME DEL AUDITORIA ORIENTADAS ALA MEJORA DE LA GESTION»", "01 de NOVIEMBRE al 30 de DICIEMBRE del 2019", ""]
];

ordLen = recomendaciones.length;
text4 = "";
for (i = 0; i < ordLen; i++) {
    text4 += "<tr>";
    for (j = 0; j < tamanioFila; j++) {
        if (j != 3) {
            text4 += "<td class=\"align-middle\">" + recomendaciones[i][j] + "</td>";
        } else {
            text4 += "<td class=\"align-middle\">" + "<a href=\"" + recomendaciones[i][j] + "\" class=\"d-flex justify-content-center\"><i class=\"icofont-file-pdf\"></i></a>" + "</td>";
        }

    }
    text4 += "</tr>";
}

document.getElementById("recomendaciones").innerHTML = text4;