$(window).load( function() {
  var table = $('#incident-list').DataTable({
     "dom": 'l<"filtering"f>t<"pagination"p>',
      retrieve:true,
      responsive: true,
      "oLanguage": { "sSearch": "Filter: " }
  });
});
