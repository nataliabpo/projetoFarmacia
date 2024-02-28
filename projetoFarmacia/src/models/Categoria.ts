import Produtos from "./Produtos";

interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    produto?: Produtos | null;
  }
  
  export default Categoria;