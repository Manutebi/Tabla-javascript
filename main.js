$(document).ready(function() {
    // Configurar la solicitud AJAX
    var settings = {
      "url": "https://api.airtable.com/v0/appU7lYsFSoNH4hGO/Productos?view=Grid%20view",
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": "Bearer keykY5YjFxN23izT6",
        "Content-Type": "application/json"
      },
    };
  
    // Hacer la solicitud AJAX
    $.ajax(settings).done(function (response) {
      // Procesar los datos
      var dataArray = [];
      $.each(response.records, function(index, value) {
        var record = value.fields;
        record.id = value.id;
        dataArray.push(record);
      });
  
      // Inicializar DataTables
      $('#myTable').DataTable({
        data: dataArray,
        columns: [
          { title: 'Nombre', data: 'Nombre' },
          { title: 'Descripcion', data: 'Descripcion' },
          { title: 'Precio', data: 'Precio' }
        ]
      });
    });
  });