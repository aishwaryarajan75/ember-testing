import DS from 'ember-data';

export default DS.Model.extend({
  foo: 'bar',
  computedFoo: Ember.computed('foo', function() {
    const foo = this.get('foo');
    return `computed ${foo}`;
  })

});
