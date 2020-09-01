document.addEventListener('turbolinks:load',()=>{
	$('#datetimepicker7').datetimepicker({
		format: 'YYYY/MM/DD',
	});
	$('#datetimepicker8').datetimepicker({
		format: 'YYYY/MM/DD',
		useCurrent: false,
	});
	$("#datetimepicker7").on("change.datetimepicker", function (e) {
			$('#datetimepicker8').datetimepicker('minDate', e.date);
	});
	$("#datetimepicker8").on("change.datetimepicker", function (e) {
			$('#datetimepicker7').datetimepicker('maxDate', e.date);
	});
})