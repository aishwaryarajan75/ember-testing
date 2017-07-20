import { test } from 'qunit';
import moduleForAcceptance from 'ember-test-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new post appears first');

test('visiting /new-post-appears-first', function(assert) {
  visit('/posts/new');
  fillIn('input.title', 'My new post');
  click('button.submit');
andThen(() => assert.equal(find('ul.posts li:first').text(), 'My new post'));
});
