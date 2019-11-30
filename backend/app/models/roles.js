const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('roles', {
    id_roles: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    roles: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'nombre es requerido'
            },
            len: {
                args: [5, 30],
                msg: "nombre debe tener minimo 3 y máximo 30 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "nombre debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("nombre no debe estar vacío");
                }
            },
            isUnique: function (roles, next) {
                const self = this;
                return Validator.isUnique('../models/roles.js', self, next, {roles}, 'nombre está asociado a otro perfil');
            }
        }
    }
}, {
    underscored: true,
    timestamps: true,
});
