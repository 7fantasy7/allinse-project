$(document).ready(function() {

// Переменные
var event_start = $('#event-start');
var event_end = $('#event-end');
var event_type = $('#event-type');
var event_title = $('#event-title');
var event_id = $('#event_id');

var calendar = $('#calendar');
var form = $('#dialog');
var format = "MM/dd/yyyy HH:mm";


// Function for get cell with
function getDateFromCell(td, calInstance){
	var cellPos = {
		row: td.parents('tbody').children().index(td.parent()),
		col: td.parent().children().index(td)
	};

	return calInstance.fullCalendar('getView').cellDate(cellPos);
	}
// Сортировка
$('ol#sortable-events').sortable({
	helper: 'clone',        
	placeholder: 'placeholder',
		start: function(ev, ui) {
		// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
		var eventObject = {
			id:    				$.trim($(ui.item).attr('id')),  // use the element's id as the event id
			title: 				$.trim($(ui.item).text()), 		// use the element's text as the event title
			start: 				new Date("2013-02-18T18:00:00"),//"2013-02-18T18:00:00", //day,
			end: 				new Date("2013-02-18T18:00:00"),//"2013-02-18T18:00:00",//day,
				borderColor: 		$(ui.item).css('background-color'),
				textColor: 			$(ui.item).css('color'),
			allDay: true 
			};
	
		// store the Event Object in the DOM element so we can get to it later
		$(ui.item).data('eventObject', eventObject);
		$(ui.item).data('dropped', false);

				return  true;      
				},
		stop: function(ev, ui) {
			// Restore place of Event Object if dropped
		if ( $(ui.draggable).data('dropped') == true ) {
			$('ol#sortable-events').nestedSortable('cancel'); 
			$(ui.draggable).data('dropped') = false ;
			}
			}
	}).disableSelection();


/* функция очистки формы */
function emptyForm() {
	event_id.val('');
	event_type.val('');
	event_title.val('');
	event_start.val('');
	event_end.val('');
}
/* режимы открытия формы */
function formOpen(mode) {
	if(mode == 'add') {
		/* скрываем кнопки Удалить, Изменить и отображаем Добавить*/
		$('#add').show();
		$('#edit').hide();
		$("#delete").hide();
	}
	else if(mode == 'edit') {
		/* скрываем кнопку Добавить, отображаем Изменить и Удалить*/
		$('#edit').show();
		$('#add').hide();
		$("#delete").button("option", "enabled", true);
	}
	form.dialog('open');
}


/* Инициализация календаря
-----------------------------------------------------------------*/
calendar.fullCalendar({
	header: {
		left: 'prev,next today',
		center: 'title',
		right: 'month,agendaWeek,agendaDay'
		},
		locale: 'ru',
		timeFormat: 'H:mm',
		cache: true,
	// Добавить мероприятие по клику или выделению области
		eventMouseover: function(event, jsEvent, view) {
			if (view.name !== 'agendaDay') {
				$(jsEvent.target).attr('title', event.title);
			}
		},
		eventClick: function(calEvent, jsEvent, view, event, element, date) //jsEvent, view, event, element
		{
					var moment = $('#calendar').fullCalendar('getDate');
					event_id.val(calEvent.id);
					event_type.val(calEvent.type);
					event_title.val(calEvent.title);
					event_start.val(moment.format(), 'getView');
					event_end.val(moment.format(), 'getView');
					$('.datepicker').datepicker({
						dateFormat: "yy-mm-dd"
					});
					formOpen('edit');

			// var r=confirm("Удалить мероприятие?");
			// if (r===true){
			// 	$('#calendar').fullCalendar('removeEvents');
			// }
		},
		dayClick: function(date, jsEvent, view) {
			var clickDate = date.format();
			event_start.val(clickDate);
			$('.datepicker').datepicker({
				dateFormat: "yy-mm-dd"
			});
			formOpen('add');
		},
		selectable: true,
		selectHelper: true,
		theme: true,
		editable: true,
		droppable: true, // this allows things to be dropped onto the calendar !!!
		dropAccept: '#sortable-events li.sortable-event',
		drop: function(date, allDay) { // this function is called when something is dropped
			// retrieve the dropped element's stored Event Object
			var originalEventObject = $(this).data('eventObject');
			// we need to copy it, so that multiple events don't have a reference to the same object
			var copiedEventObject = $.extend({}, originalEventObject);
			// assign it the date that was reported
			copiedEventObject.start = date;
			copiedEventObject.allDay = allDay;
		// render the event on the calendar
		// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
			calendar.fullCalendar('renderEvent', copiedEventObject, true);
		
		// is the "remove after drop" checkbox checked?
		if ($('#drop-remove').is(':checked')) {
			// if so, remove the element from the "Draggable Events" list
			$(this).remove();
		}
	}
});
/* Инициализация календаря
-----------------------------------------------------------------*/

/* обработчик формы добавления */
form.dialog({ 
	autoOpen: false,
	buttons: [{
		id: 'add',
		text: 'Добавить',
		click: function() {
			$.ajax({
					type: "POST",
					url: "ajax.php",
					data: {
							type: event_type.val(),
							title: event_title.val(),
							start: event_start.val(),
							end: event_end.val(),
							op: 'add'
					},
					success: function(id){
						calendar.fullCalendar('renderEvent', {
						id: id,
						type: event_type.val(),
						title: event_title.val(),
						start: event_start.val(),
						end: event_end.val(),
						allDay: false
					});
							
					}
			}); $(this).dialog('close');
		}
},
{
	id: 'edit',
	text: 'Изменить',
	click: function() {
		$.ajax({
			type: "POST",
			url: "ajax.php",
			data: {
					id: event_id.val(),
					start: event_start.val(),
					end: event_end.val(),
					type: event_type.val(),
					title: event_title.val(),
					op: 'edit'
			},
			success: function(id){
					calendar.fullCalendar('refetchEvents');
					
			}
		});
		$(this).dialog('close');
	}
},
{
	id: 'cancel',
	text: 'Отмена',
	click: function() { 
			$(this).dialog('close');
			emptyForm();
	}
},
{
	id: 'delete',
	text: 'Удалить',
	click: function() { 
			$.ajax({
					type: "POST",
					url: "ajax.php",
					data: {
							id: event_id.val(),
							op: 'delete'
					},
					success: function(id){
							calendar.fullCalendar('removeEvents', id);
					}
			});
			$(this).dialog('close');
			emptyForm();
	},
	disabled: true
},
{
	id: 'clear',
	text: 'Очистить',
	click: function() { 
		emptyForm();
	}
}]
});
/* конец обработчика формы добавления */

});