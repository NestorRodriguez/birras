const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('bares', {
    id_bares: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    Nombre_establecimiento: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'nombre es requerido'
            },
            len: {
                args: [5, 200],
                msg: "nombre debe tener minimo 3 y máximo 200 caracteres"
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
    Nit: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Nit es requerido'
            },
            len: {
                args: [5, 20],
                msg: "Nit debe tener minimo 3 y máximo 20 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("Nit no debe estar vacío");
                }
            }
        }
    },
    Horarios: {
        type: DataTypes.STRING(500),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Horario es requerido'
            },
            len: {
                args: [5, 500],
                msg: "Horario debe tener minimo 5 y máximo 500 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("Horarios no debe estar vacío");
                }
            }
        }
    },
    Descripcion: {
        type: DataTypes.STRING(500),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Descripcion es requerido'
            },
            len: {
                args: [5, 500],
                msg: "Descripcion debe tener minimo 5 y máximo 500 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "Descripcion debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("Descripcion no debe estar vacío");
                }
            }
        }
    },
    Plano_mesa: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Plano mesa es requerido'
            },
            len: {
                args: [5, 1000],
                msg: "Url del plano mesa debe tener minimo 5 y máximo 1000 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "Plano mesa debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("Plano mesa no debe estar vacío");
                }
            }
        }
    },
    Fotos: {
        type: DataTypes.STRING(1500),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Fotos es requerido'
            },
            len: {
                args: [5, 1500],
                msg: "Url de fotos debe tener minimo 5 y máximo 1500 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "Fotos debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("Fotos no debe estar vacío");
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