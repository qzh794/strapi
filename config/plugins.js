// file: config/plugins.js
"use strict";
module.exports = ({ env }) => ({ 
  // 上传插件
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
    },
  },

  // jwt配置
  'users-permissions': {
    config: {
      jwt: {
        //过期时间
        expiresIn: '7d',
      },
    },
  },
  // sql文件快捷导出导入
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  // 数据表链接与排除视图
  "entity-relationship-chart": {
    enabled: true,
    config: {
      // By default all contentTypes and components are included.
      // To exlclude strapi's internal models, use:
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
        "plugin::upload.folder",
        "plugin::users-permissions.user"
      ],
    },
  },
  // ...
});