angular.module('schoolPlannerApp')
  .service('CalendarService', function () {
    this.getEvents = function () {
    	var date = new Date();
    	var d = date.getDate();
		var m = date.getMonth();
   		var y = date.getFullYear();
		return ([
		      {title: 'All Day Event',start: new Date(y, m, 1)},
		      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
		      {id: 999,title: 'wdwdRepeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
		      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
		      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      ])
    };
  });