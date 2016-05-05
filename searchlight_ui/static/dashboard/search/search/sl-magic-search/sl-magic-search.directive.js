/*
 *    (c) Copyright 2015 Hewlett-Packard Development Company, L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
  'use strict';
/**
 * @fileOverview Magic Search JS
 * @requires AngularJS
 *
 */

  angular.module('searchlight-ui.dashboard.search.search.sl-magic-search')
    .directive('slMagicSearch', slMagicSearch);

  slMagicSearch.$inject = [
    'searchlight-ui.dashboard.search.search.basePath'
  ];

  function slMagicSearch(basePath) {
    return {
      restrict: 'E',
      scope: {
        strings: '=',
        availableFacets: '=',
        currentSearchText: '=',
        currentSearchFacets: '='
      },
      templateUrl: basePath + 'sl-magic-search/magic-search.html',
      controller: 'searchlight-ui.dashboard.search.search.sl-magic-search.MagicSearchController as ctrl',
      bindToController: true
    };
  }

})();