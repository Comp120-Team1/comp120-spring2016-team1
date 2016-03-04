function init_table() {
  highlight_priorities(function() {
    var table = $('#incident-list').DataTable({
      "dom": 'l<"filtering"f>t<"pagination"p>',
      responsive: true,
      "order": [[0, "desc"], [ 3, "desc" ]],
      "oLanguage": { "sSearch": "Filter: " }
    });
  })
}
