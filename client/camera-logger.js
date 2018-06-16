console.log('good for a start');
const entityEl = document.querySelector('#cloud');
entityEl.emit('physicscollided'/*, {collidingEntity: anotherEntityEl}, false*/);
entityEl.addEventListener('physicscollided', function (event) {
    console.log('Entity collided with', event.detail.collidingEntity);
  });