import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"

interface CardTemasProps {
    categoria: Categoria
}

function CardTemas({ categoria }: CardTemasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#5A1F21] text-white font-bold text-2xl'>
                Categoria
            </header>

            <p className='p-8 text-3xl bg-slate-200 h-full'>
                {categoria.nome}
            </p>

            <div className="flex">
                <Link to={`/editarCategory/${categoria.id}`}
                    className='w-full text-slate-100 bg-[#c19e9f] hover:bg-[#f67b7f] 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarCategory/${categoria.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas