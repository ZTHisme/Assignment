$(document).ready(function () {
  const checkboxes = $('td .emp-chkbox input');
  const checkall = $('#emp-ttl-chkbox');
  const edit = $('#edit-btn');
  const sidebar = $('.sidebar-sub');

  checkboxes.on('click', function () {
    var checkedCount = $('td .emp-chkbox input:checked').length;
    checkall.prop('checked', checkedCount > 0);
    var td = $(this).closest('td');
    var row = $(this).closest('tr');
    if (this.checked) {
      td.addClass('cell-active');
      row.css('backgroundColor', "#f6fefb");
      edit.addClass("active");
    } else {
      td.removeClass('cell-active');
      row.css('backgroundColor', "");
      if (checkedCount === 0) {
        edit.removeClass("active");
      }
    }
  });

  checkall.on('click', function () {
    checkboxes.prop('checked', this.checked);
    var td = checkboxes.closest('td');
    var row = checkboxes.closest('tr');
    if (this.checked) {
      td.addClass('cell-active');
      row.css('backgroundColor', "#f6fefb");
      edit.addClass("active");
    } else {
      td.removeClass('cell-active');
      row.css('backgroundColor', "");
      edit.removeClass("active");
    }
  });

  $('.menu-list li a').click(function() {
    sidebar.toggleClass("active");
  })
});
