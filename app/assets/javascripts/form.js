function init_form() {
  $(document).ready( function() {
    $('.datetimepicker').datetimepicker({
      sideBySide: true,
    });
    $('input:checkbox').bootstrapSwitch();
    $('.datetimepicker').val(moment().format("YYYY-MM-DD hh:mm A"));
    $('.selectpicker').selectpicker();
  });
}
