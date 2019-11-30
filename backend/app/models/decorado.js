const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('decorado', {
    id_decorado: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    decorado: {
        type: DataTypes.STRING(1000),
        allowNull: false,      
        validate: {
            notNull: {
                msg: 'imagen es requerida'
            },
            len: {
                args: [5, 1000],
                msg: "la url de la imagen debe tener minimo 3 y máximo 1000 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "decorado debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("decorado no debe estar vacío");
                }
            }            
        }  
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        validate: {
            notNull: {
                msg: 'precio es requerido'
            },   
            customValidator(value) {
                if (!value) {
                    throw new Error("precio no debe estar vacío");
                }
            }
        }       
    }
}, {
    underscored: true,
    timestamps: true,
});
