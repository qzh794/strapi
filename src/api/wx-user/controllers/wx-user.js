"use strict";

/**
 * wx-user controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const bcrypt = require("bcryptjs");

module.exports = createCoreController("api::wx-user.wx-user", ({ strapi }) => ({
  async register(ctx) {
    // 获取该数据表的实例
    const wxUsersModel = strapi.db.query("api::wx-user.wx-user");
    // 获取请求体里的数据
    const { name, password, email, repassword } = ctx.request.body;

    // 检查 name 是否存在且不为空
    if (!name || name.trim().length === 0) {
      return {
        msg: "用户名不能为空",
        code: 4000,
        data: null,
      };
    }
    // 用数据表的实例调用findOne方法
    const user = await wxUsersModel.findOne({
      // 查询到name与email
      where: {
        $and: [
          {
            name,
          },
          {
            email,
          },
        ],
      },
    });
    // 如果用户已经存在了就提示已经注册
    if (user) {
      return {
        msg: "用户已经注册过了",
        code: 4000,
        data: null,
      };
    }
    if (password != repassword) {
      return {
        msg: "两次密码不一致",
        code: 4000,
        data: null,
      };
    }
    // 调用create方法创建数据
    const result = await wxUsersModel.create({
      // 只返回这些字段
      // select: ["name", "email","blocked"],
      // 插入的数据并返回，如果有select，则返回值只有select里的，否则返回全部字段
      data: {
        name,
        email,
        password: bcrypt.hashSync(password, 10)
      },
    });

    return {
      msg: "注册成功",
      data: result,
      code: 2000,
    };
  },
  // 登录
  async login(ctx) {
    // 获取该数据表的实例
    const wxUsersModel = strapi.db.query("api::wx-user.wx-user");
    // 获取请求体里的数据
    const { name, password, email } = ctx.request.body;
    // 用数据表的实例调用findOne方法
    const result = await wxUsersModel.findOne({
      // 查询到name或者email
      where: {
        $and: [
          {
            name,
          },
          {
            email,
          },
        ],
      },
    });
    if (result) {
      if (!bcrypt.compareSync(password, result.password)) {
        return {
          msg: "密码错误",
          code: 4000,
          data: null,
        };
      }
      if (result.blocked) {
        return {
          msg: "用户已被封禁",
          code: 4000,
          data: null,
        };
      }
      const token =
        "6e9801682e1c89e076de79ed1b8cbf72dad8b37b2e3634531650a22c6ae9206d61deef6f8b62498264fc305dbc312774cd9ff7ae5a505dee101f24492a08e43f0d99dbe68dec9a20b671e298afb2e92ddb07705ff94fd8b2ec726e77b56a18c79302030d977224bb8c314a2d6e99bd5d11188e93968ad00f7507f7af1bf4d6f0";
      return {
        msg: "登录成功",
        token: token,
        data: {
          name,
          email,
          id: result.id,
          blocked: result.blocked,
        },
        code: 2000,
      };
    }
    return {
      msg: "用户不存在",
      code: 4000,
      data: null,
    };
  },
}));
