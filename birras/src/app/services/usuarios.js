const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Hash = require('../utils/hash');

const Database = require('../../app/database');
const Model = Database.import('../models/usuarios');
const Service = require('./service');

const Response = require('../routing/response');
const Messages = require('../utils/messages');
const Logger = require('../utils/logger')();

class UsuariosService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_usuario", "nombre_usuario", "contraseña", "mail", "id_roles"]
            },
            one: {
                attributes: ["id_usuario", "nombre_usuario", "contraseña", "mail", "id_roles"]
            },
            all: {
                attributes: ["id_usuario", "nombre_usuario", "contraseña", "mail", "id_roles"]
            },
        };
        super(Model, modelOptions);
    }

    async login(nombre_usuario, access) {
        try {
            const usuarios = await this.model.scope('withPassword').findOne({
                where: {
                    [Op.or]: [{ nombre_usuario: nombre_usuario }, { mail: nombre_usuario }]
                }
            });

            if(usuarios && access) {
                if(usuarios.active){
                    const isValid = await Hash.validateHash(access, usuarios.access);
                    if(isValid){
                        const usuariosData = {
                            id_usuario: usuarios.id_usuario,
                            nombre_usuario: usuarios.nombre_usuario,
                            email: usuarios.email,
                            contraseña: usuarios.contraseña,
                            mail: usuarios.mail,
                            id_roles: usuarios.id_roles,
                        };
                        return Response.success(usuariosData);
                    } else {
                        await Promise.reject(Response.error(Messages('LOGIN_NOT_EXIST'), 404));
                    }
                } else {
                    await Promise.reject(Response.error(Messages('LOGIN_INACTIVE'), 403));
                }
            } else {
                await Promise.reject(Response.error(Messages('LOGIN_NOT_EXIST'), 404));
            }
        } catch (error) {
            Logger.error(`[action: login][msg: ${JSON.stringify(error)}][line:${__line}:${__filename}]`);
            await Promise.reject(Response.error(error.error || Messages('LOGIN_ERROR'), error.status || 500));

        }
    }

}

module.exports = UsuariosService;
