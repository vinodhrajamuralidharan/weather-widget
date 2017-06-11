import Ember from 'ember';
export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  init() {
    this._super(...arguments);
    let report = this.get('ajax').request('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6abc934e4f0ae1a25db0a39ff02fc276');
    this.set('report', report);
    debugger;
  }
});
