const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('motivo', {
    id_motivo: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    motivo: {
        type: DataTypes.STRING(90),
        allowNull: false,      
        validate: {
            notNull: {
                msg: 'motivo es requerida'
            },
            len: {
                args: [5, 90],
                msg: "motivo debe tener minimo 5 y máximo 90 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "motivo debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("motivo no debe estar vacío");
                }
            }            
        }  
    }
}, {
    underscored: true,
    timestamps: true,
});
