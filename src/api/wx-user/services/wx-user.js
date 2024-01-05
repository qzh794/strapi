'use strict';

/**
 * wx-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wx-user.wx-user');
