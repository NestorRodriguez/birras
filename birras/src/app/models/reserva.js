const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('reserva', {
    id_reserva: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    id_bares: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'bar es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("bar no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("bar debe ser numérico");
                }
            }
        }
    },
    Numero_personas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Numero de personas es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("Numero de personas no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("Numero de personas debe ser numérico");
                }
            }
        }
    },
    id_motivo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'motivo es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("motivo no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("motivo debe ser numérico");
                }
            }
        }
    },
    Horario_ingreso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'horario ingreso es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("horario ingreso no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("horario ingreso debe ser numérico");
                }
            }
        }
    },
    Horario_salida: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'horario salida es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("horario salida no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("horario salida debe ser numérico");
                }
            }
        }
    },
    Dedicatoria: {
        type: DataTypes.STRING(900),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Dedicatoria es requerido'
            },
            len: {
                args: [5, 900],
                msg: "Dedicatoria debe tener minimo 5 y máximo 900 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "Dedicatoria debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("Dedicatoria no debe estar vacío");
                }
            }            
        }
    },
    id_decorado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'decorado es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("decorado no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("decorado debe ser numérico");
                }
            }
        }
    },
    id_adicionales: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'adicionales es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("adicionales no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("adicionales debe ser numérico");
                }
            }
        }
    },
    Nombre_festejado: {
        type: DataTypes.STRING(140),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Nombre festejado es requerida'
            },
            len: {
                args: [5, 140],
                msg: "Nombre festejado debe tener minimo 5 y máximo 140 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "Nombre festejado debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("Nombre festejado no debe estar vacío");
                }
            }
        }
    },
    id_metodos_pago: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'metodos de pago es requerido'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("metodos de pago no debe estar vacío");
                } else if (isNaN(value)) {
                    throw new Error("metodos de pago debe ser numérico");
                }
            }
        }
    }
}, {
    underscored: true,
    timestamps: true,
});