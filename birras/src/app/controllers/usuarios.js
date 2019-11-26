const Controller = require('./controller');
const Service = require('../services/usuarios');

class UsuariosController extends Controller {

    constructor(){
        super(Service);
    }

    async login(usuarios, access) {
        try {
            return await this.service.login(usuarios, access);
        } catch (error) {
            return await Promise.reject(error);
        }
    }
}

module.exports = UsuariosController;
