import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        doStuff() {
        //    torii.open('facebook'); //-> #open hook on the facebook provider -> returned authorization
            alert('hey');
        }
    }
});
