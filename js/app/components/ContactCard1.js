var ContactCard = {
    template: [
      '<div>',
        '<h4>Contact Card</h4>',
        '<label>Name:</label>',
        '{{ ctrl.name }}',
        '<label>Email:</label>',
        '{{ ctrl.email }}',
        '<label>Phone:</label>',
        '{{ ctrl.phone }}',
      '</div>'
    ].join(''),
    bindings: {
      name: '=',
      email: '=',
      phone: '='
    },
    controllerAs: 'ctrl'

  };
}

angular
  .module('app')
  .component('contactCard', ContactCard);