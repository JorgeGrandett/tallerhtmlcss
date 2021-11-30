let values = [], values_analyzed = [];
var analyzed_location = document.getElementById('analyzed-location').value;

onload = function() {
    changeLocation();
} 

function newData() {
    fixDataYears(false);
    const location = document.getElementById('location').value;
    const genere = document.getElementById('genere').value;
    const years = document.getElementById('years').value;
    if (years.length < 1 || years < 1) {
        fixDataYears(true);
        return;
    }
    const couse = document.getElementById('couse').value;
    const drive = document.getElementById('drive').value;
    const newObject = {
        location,
        genere,
        years,
        couse,
        drive,
    };
    value.push(newObject);
    resetFields();
    updateTables();
}

function recover() {
    
}

function dead() {
    
}

function next() {
}

function changeLocation() {
    analyzed_location = document.getElementById('analyzed-location').value;
    updateTables();
}

function updateTables() {
    document.getElementById('analisis-label').innerHTML = 'Actualmente Estas Analizando: ' + analyzed_location;
    // Genral Data
    const srtGeneralData = '<h2>valores</h2>' +
        '<table>' +
        '<tr>' +
            '<td>Casos totales</td>' +
            '<td>Recuperados</td>' +
            '<td>Decesos</td>' +
            '<td>Antioquia</td>' +
            '<td>Atlantico</td>' +
            '<td>Bogota</td>' +
            '<td>Bolivar</td>' +
            '<td>Boyacá</td>' +
            '<td>Caldas</td>' +
            '<td>Cauca</td>' +
            '<td>Cesar</td>' +
            '<td>Cundinamarca</td>' +
            '<td>Huila</td>' +
            '<td>Magdalena</td>' +
            '<td>Meta</td>' +
            '<td>Nariño</td>' +
            '<td>Nte de Sant</td>' +
            '<td>Quindio</td>' +
            '<td>Risaralda</td>' +
            '<td>Santander</td>' +
            '<td>Tolima</td>' +
            '<td>Valle del Cauca</td>' +
            '<td>Casanare</td>' +
            '<td>San Andrés</td>' +
            '<td>Hombre</td>' +
            '<td>Mujer</td>' +
            '<td>Mayores de 50</td>' +
            '<td>Menores de 49</td>' +
            '<td>Importado</td>' +
            '<td>Relacionado</td>' +
            '<td>En estudio</td>' +
            '<td>Casa</td>' +
            '<td>Hospital</td>' +
            '<td>UCI</td>' +
        '</tr>' +
        '</table>';
    document.getElementById('general-data').innerHTML = srtGeneralData;
    // Values Data
    const srtValuesData = '<h2>valores</h2>' +
        '<table>' +
        '<tr>' +
            '<td>Ubicación</td>' +
            '<td>Genero</td>' +
            '<td>Edad</td>' +
            '<td>Causa</td>' +
            '<td>Manejo</td>' +
        '</tr>' +
        '</table>';
    document.getElementById('values-data').innerHTML = srtValuesData;
}

function fixDataYears(val) {
    if (val) {
        document.getElementById('years-label').style = 'color: red;';
    } else {
        document.getElementById('years-label').style = 'color: black;';
    }
}

function resetFields() {
    //document.getElementById('location');
    //document.getElementById('genere');
    document.getElementById('years').value = '';
    //document.getElementById('couse');
    //document.getElementById('drive');
    document.getElementById('recover').value = '';
    document.getElementById('dead').value = '';
}