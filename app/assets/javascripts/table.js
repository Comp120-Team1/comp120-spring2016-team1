function init_table() {
  highlight_priorities(function() {
    console.log("HELLO")
    var table = $('#incident-list').DataTable({
      "dom": 'l<"filtering"f>t<"pagination"p>',
      responsive: true,
      "order": [[0, "desc"], [ 3, "desc" ]],
      "oLanguage": { "sSearch": "Filter: " },
      ajax: $('#incident-list').data('source'),
      "order": [[ 3, 'desc' ]],
      columns: [
                {
                    title: 'Priority',
                    data:  'priority.name'
                }, {
                    title: 'Subject',
                    data:  'subject'
                }, {
                    title: 'Location of Incident',
                    data:  'location_of_incident'
                }, {
                    title:  'Time Submitted',
                    data: 'created_at'
                },
                {
                    title:  'Time of Incident',
                    data: 'time_of_incident'
                },
                {
                    title:  'Category',
                    data: 'incident_category.name'
                },
                {
                    title:  'Category',
                    data: 'incident_category.name'
                },
                {
                    title:  'Actions',
                    data: 'id',
                      "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                          $(nTd).html("<a class='btn btn-default' href="+ "incidents/" + oData.id+'/edit' + ">Edit</a>" +
                                      "<a class='btn btn-default' href="+ "incidents/" + oData.id + ">Show</a>");
                      }
                },
                {
                    title:  'Progress',
                    data: 'progress.name'
                }

            ],
      rowId: 'id',
      liveAjax: true

    });
  })
}
