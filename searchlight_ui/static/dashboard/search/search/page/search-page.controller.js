/**
 * (c) Copyright 2016 Hewlett-Packard Development Company, L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

(function () {
  'use strict';

  /**
   * @ngdoc controller
   * @name SearchPageController
   *
   * @description
   * Controller for search page
   */
  angular
    .module('horizon.dashboard.project.search')
    .controller('horizon.dashboard.project.search.SearchPageController', SearchPageController);

  SearchPageController.$inject = [
  ];

  function SearchPageController()
  {
    var ctrl = this;
    ctrl.query = '';
  }

})();