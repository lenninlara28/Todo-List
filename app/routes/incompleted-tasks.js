import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        this.getTasks();
    },

    getTasks : function(){
        var database = firebase.database();
        var controller = this.controllerFor("incompleted-tasks");
        var tasks = [];
        
        database.ref('/Task').once('value').then(function(snapshot){
            snapshot.forEach(children => {
                tasks.push(children.val());
            } );
            controller.set('tasks', tasks);
        })
    }
});
