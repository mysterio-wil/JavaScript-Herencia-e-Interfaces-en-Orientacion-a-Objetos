export class SistemaAutenticacion {
    static login(usuario, clave) {
        return usuario.autenticable(clave);
        // return usuario.clave == clave;

    }
}