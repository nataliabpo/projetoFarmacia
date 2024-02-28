import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { buscar, deletar } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";

function DeletarCategoria() {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    {/** useParams é um Hook do React Router que permite acessar parâmatros passados na URL */}
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert("Erro ao buscar pela Categoria")
            console.log(error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/")
    }

    async function deletarCategoria() {

        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
            alert('A categoria foi excluída com sucesso!')
        } catch (error: any) {
            alert('Erro ao excluir a categoria.')
        }

        setIsLoading(false)
        retornar()
    }

    return (
        
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center'
                                   onClick={deletarCategoria}>
                         {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>Sim</span>
                        
                    }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria