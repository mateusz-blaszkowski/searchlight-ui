/**
 * Copyright 2015, Hewlett-Packard Development Company, L.P.
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

(function () {
  'use strict';

  describe('Searchlight API', function () {
    var testCall, service;
    var apiService = {};
    var toastService = {};

    beforeEach(
      module('horizon.mock.openstack-service-api',
        function ($provide, initServices) {
          testCall = initServices($provide, apiService, toastService);
        })
    );

    beforeEach(module('horizon.app.core.openstack-service-api'));

    beforeEach(
      inject(['horizon.app.core.openstack-service-api.searchlight', function (searchlightAPI) {
        service = searchlightAPI;
      }])
    );

    it('defines the service', function () {
      expect(service).toBeDefined();
    });

    var tests = [
      {
        func: 'postSearch',
        method: 'post',
        path: '/api/searchlight/search/',
        data: {
          "query": {"match_all": {}},
          "limit": 10,
          "offset": 20
        },
        error: 'Unable to execute the search.',
        testInput: [{
          "query": {"match_all": {}},
          "limit": 10,
          "offset": 20
        }]
      }
    ];

    // Iterate through the defined tests and apply as Jasmine specs.
    angular.forEach(tests, function (params) {
      it('defines the ' + params.func + ' call properly', function () {
        var callParams = [apiService, service, toastService, params];
        testCall.apply(this, callParams);
      });
    });

  });

})();
