const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('registrate', {
    id_registro: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    Nombres: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'nombre es requerido'
            },
            len: {
                args: [5, 40],
                msg: "nombre debe tener minimo 5 y máximo 40 caracteres"
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
    Apellidos: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'apellido es requerido'
            },
            len: {
                args: [5, 40],
                msg: "apellido debe tener minimo 5 y máximo 40 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "apellido debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("apellido no debe estar vacío");
                }
            }            
        }
    },
    Cedula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'cedula de usuario es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("cedula de usuario no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("cedula de usuario debe ser numérico");
                }
            }
        }
    },
    Fecha_nacimiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'fecha de nacimiento de usuario es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("fecha de nacimiento de usuario no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("fecha de nacimiento de usuario debe ser numérico");
                }
            }
        }
    },
    Direccion: {
        type: DataTypes.STRING(90),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'direccion es requerida'
            },
            len: {
                args: [15, 90],
                msg: "direccion debe tener minimo 15 y máximo 90 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "direccion debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("direccion no debe estar vacío");
                }
            }
        }
    },
    id_usuario: {
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
    }
}, {
    underscored: true,
    timestamps: true,
});