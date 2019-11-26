const Hash = require('../utils/hash');
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    mail: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg: "correo electrónico no es válido"
            },
            notNull: {
                msg: 'correo electrónico es requerido'
            },
            len: {
                args: [5, 250],
                msg: "correo electrónico debe tener minimo 5 y máximo 60 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("correo electrónico no debe estar vacío");
                }
            },
            isUnique: function (mail, next) {
                const self = this;
                return Validator.isUnique('../models/usuarios.js', self, next, {mail}, 'correo electrónico está asociado a otro usuario');
            }
        }
    },
    nombre_usuario: {
        type: DataTypes.STRING(80),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'usuario es requerido'
            },
            len: {
                args: [5, 30],
                msg: "usuario debe tener minimo 5 y máximo 80 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("usuario no debe estar vacío");
                }
            },
            isUnique: function (nombre_usuario, next) {
                const self = this;
                return Validator.isUnique('../models/user.js', self, next, {nombre_usuario}, 'nombre de usuario está asociado a otro usuario');
            }
        },
        unique: {
            args: true,
            msg: 'nombre de usuario en uso'
        }
    },
    contraseña: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'contraseña es requerida'
            },
            len: {
                args: [6, 12],
                msg: "contraseña debe tener minimo 6 y máximo 40 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("contraseña no debe estar vacía");
                }
            }
        }
    },
    id_roles: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'perfil de usuario es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("perfil de usuario no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("perfil de usuario debe ser numérico");
                }
            }
        }
    },
}, {
    underscored: true,
    timestamps: true,
    defaultScope: {
        attributes: { exclude: ['access'] },
    },
    scopes: {
        withPassword: {
            attributes: { include: ['access'], exclude: ['createdAt', 'updatedAt', 'token'] },
        }
    },
    hooks: {
        beforeCreate: (usuarios, options) => {
            return Hash.createHash(usuarios.access).then(encrypted => {
                usuarios.access = encrypted;
            });
        }
    }
});
