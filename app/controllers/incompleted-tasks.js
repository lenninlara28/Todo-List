import Ember from 'ember';

export default Ember.Controller.extend({
    tasks: [
        {name: "Meeting", date: "2019-03-27T07:22:13", completed: false, dscp: "description"},
        {name: "Drink Water", date: "2019-06-12T07:22:13", completed: false, dscp: "description"},
        {name: "Another Task", date: "2019-03-27T07:22:13", completed: false, dscp: "description"},
        {name: "This Is a Task", date: "2019-06-12T07:22:13", completed: false, dscp: "description"}
    ]
});
