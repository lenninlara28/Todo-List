import Ember from 'ember';

export function dateFormat(params/*, hash*/) {
  var date = new Date(params[0]);
  var day =  date.getDate().toString();
  var dayName = date.getDay();
  var month = date.getMonth() + 1;
  var year = date.getFullYear().toString();
  return DayName(dayName) + " " + day + 
        ", " + monthName(month) + " " + year;
}


function DayName(x){
  switch(x){
    case 1:
      return "Monday"
    case 2:
     return "Tuesday"
    case 3:
     return "Wednesday"
    case 4:
     return "Thursday"
    case 5:
     return "Friday"
    case 6:
     return "Saturday"
    case 7:
     return "Sunday"
  }
}


function monthName (x) {
  switch (x) {
    case 1:
     return "January"
    case 2:
     return "February"
    case 3:
     return "March"
    case 4:
     return "April"
    case 5:
     return "April"
    case 6:
     return "June"
    case 7:
     return "July"
    case 8:
     return "August"
    case 9:
     return "September"
    case 10:
     return "October"
    case 11:
     return "November"
    case 12:
     return "December"
  }
}

export default Ember.Helper.helper(dateFormat);
