const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('tarjeta_debito', {
    id_tarjeta_debito: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },    
    Nombre_titular: {
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
    },
    Numero_tarjeta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'numero de tarjeta es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("numero de tarjetano debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("numero de tarjeta debe ser numérico");
                }
            }
        }
    },
    Codigo_seguridad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'codigo de seguridad es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("codigo de seguridad no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("codigo de seguridad debe ser numérico");
                }
            }
        }
    },
    Fecha_vencimiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'fecha de vencimiento es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("fecha de vencimiento no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("fecha de vencimiento debe ser numérico");
                }
            }
        }
    }
}, {
    underscored: true,
    timestamps: true,
});