const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('metodos_pago', {
    id_metodos_pago: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    metodo: {
        type: DataTypes.STRING(20),
        allowNull: false,      
        validate: {
            notNull: {
                msg: 'metodo es requerida'
            },
            len: {
                args: [5, 20],
                msg: "metodo debe tener minimo 5 y máximo 20 caracteres"
            },
            is: {
                args: ["^[a-z ]+$", 'i'],
                msg: "metodo debe contener solo letras"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("metodo no debe estar vacío");
                }
            }            
        }  
    }
}, {
    underscored: true,
    timestamps: true,
});
