import { useState, useEffect } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../service/Service";
import { Dna } from "react-loader-spinner";
import CardCategoria from "../cardCategoria/CardCategoria";

function ListaCategoria() {

    const [categories, setCategories] = useState<Categoria[]>([])

    {/* Função assincrona para buscar Categorias */ }
    async function buscarCategorias() {
        try {

            await buscar('/categoria', setCategories)

        } catch (error: any) {
            alert("Erro ao buscar Categorias")
            console.log(error);
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categories.length])

    return (
        <>
            {/** Animação de busca */}
            {categories.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <>
                            {categories.map((category) => (
                                <>
                                    <CardCategoria key={category.id} categoria={category} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ListaCategoria