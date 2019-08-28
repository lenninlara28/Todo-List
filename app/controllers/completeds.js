import Ember from 'ember';

export default Ember.Controller.extend({
    tasks: [
        {name: "Client Meeting", date: "08 May 2019", completed: false, dscp: "description"},
        {name: "Design App Interface", date: "15 May 2019", completed: false, dscp: "description"},
        {name: "Learn Node.Js", date: "03 Sep 2019", completed: false, dscp: "description"},
        {name: "Bring the puppy out XD", date: "24 Jul 2019", completed: false, dscp: "description"}
    ]
});
