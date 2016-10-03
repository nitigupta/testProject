(function() {
  'use strict';

  angular
    .module('datacoApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
