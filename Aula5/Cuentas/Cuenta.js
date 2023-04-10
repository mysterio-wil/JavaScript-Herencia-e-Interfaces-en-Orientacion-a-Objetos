<<<<<<< HEAD:Aula5/Cuentas/Cuenta.js
export class Cuenta {
    #cliente;
    #saldo;

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    constructor(cliente, numero, agencia, saldo) {
        if (this.constructor == Cuenta) {
            throw new Error("No se puede instanciar objetos de la clase Cuenta");
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        //Método abstracto
        throw new Error("Debe impletar el método retirarDeCuenta en su clase");

    }

    _retirarDeCuenta(valor, comision) {
        valor = valor * (1 + comision / 100);
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }

    prueba () {
        console.log("Método padre")
    }
=======
import { Cuenta } from "./cuenta.js";

export class CuentaAhorro extends Cuenta{
    constructor(cliente, numero, agencia, saldo) {
        super(cliente, numero, agencia, saldo);
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 2);
    }

>>>>>>> 0528b1b (aula2 completada):cuentaAhorro.js
}