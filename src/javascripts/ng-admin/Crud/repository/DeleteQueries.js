/*global define*/
define(function (require) {
    'use strict';

    var utils = require('ng-admin/lib/utils'),
        Queries = require('ng-admin/Crud/repository/Queries');

    /**
     * @constructor
     */
    function DeleteQueries() {
        Queries.apply(this, arguments);
    }

    utils.inherits(DeleteQueries, Queries);

    /**
     * Delete an entity
     * Delete the data to the API
     *
     * @param {String} view     the formView related to the entity
     * @param {*}      entityId the entity's id
     *
     * @returns {promise}
     */
    DeleteQueries.prototype.deleteOne = function (view, entityId) {
        var routeUrl = this.config.getRouteFor(view, entityId),
            headers = view.getHeaders();

        return this.Restangular
            .oneUrl(view.name(), routeUrl)
            .customDELETE(null, null, headers);
    };

    DeleteQueries.$inject = ['$q', 'Restangular', 'NgAdminConfiguration'];

    return DeleteQueries;
});
