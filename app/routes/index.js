import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        console.log("transitions to")
        this.transitionTo('app');
    }
});
