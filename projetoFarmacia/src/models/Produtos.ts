import Categoria from "./Categoria";
interface Produtos {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  laboratorio: string;
  preco: number;
  quantidade: number;
  categoria: Categoria | null;
}

export default Produtos;