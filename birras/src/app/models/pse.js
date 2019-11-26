const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('pse', {
    id_pse: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    banco: {
        type: DataTypes.STRING(90),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'banco es requerido'
            },
            len: {
                args: [5, 90],
                msg: "banco debe tener minimo 5 y máximo 90 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "banco debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("banco no debe estar vacío");
                }
            }
        }
    },
    nombre_titular: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'nombre es requerido'
            },
            len: {
                args: [5, 200],
                msg: "nombre debe tener minimo 5 y máximo 200 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "nombre debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("nombre no debe estar vacío");
                }
            }
        }
    }
}, {
    underscored: true,
    timestamps: true,
});