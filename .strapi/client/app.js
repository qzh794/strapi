/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import googleMaps from "@amicaldo/strapi-google-maps/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import commentManager from "strapi-plugin-comment-manager/strapi-admin";
import comments from "strapi-plugin-comments/strapi-admin";
import entityRelationshipChart from "strapi-plugin-entity-relationship-chart/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import multiSelect from "strapi-plugin-multi-select/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.js";

renderAdmin(document.getElementById("strapi"), {
  customisations,
  plugins: {
    "google-maps": googleMaps,
    "strapi-cloud": strapiCloud,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "comment-manager": commentManager,
    comments: comments,
    "entity-relationship-chart": entityRelationshipChart,
    "import-export-entries": importExportEntries,
    "multi-select": multiSelect,
  },
});
