import { useEffect, useCallback } from "react";
import useQuiosco from "../hooks/useQuiosco";
import Layout from "../layout/Layout"
useEffect
import { formatearDinero } from "../helpers";

export default function Total() {
    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '';
    }, [pedido, nombre]);

    useEffect(() => {
        comprobarPedido();
    }, [pedido, comprobarPedido]);

    return (
        <Layout pagina='Total'>
            <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

            <form 
                onSubmit={colocarOrden}
            >
                <div>
                    <label htmlFor="nombre" className="uppercase text-slate-800 font-bold text-xl">Nombre: 
                    </label>
                </div>
                <input
                        id="nombre"
                        type="text" 
                        className="bg-gray-200 w-2/3 p-2 mt-3 rounded-md xl:w-1/4"
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                />
                <div className="mt-10">
                    <p className="text-2xl">
                        Total a pagar: {''} <span className="font-bold">{formatearDinero(total)}</span>
                    </p>
                </div>
                <div className="mt-5">
                    <input
                        value="Confirmar pedido"
                        type="submit"
                        className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800 cursor-pointer'} w-full uppercase font-bold text-white  lg:w-auto px-5 py-2 rounded text-center`}
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </Layout>
    )
}