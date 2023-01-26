
import { Category } from '@mui/icons-material';
import {product} from '../../data/data'
import { ContainerFilter, CategoryTitle, CategoryButton, SortLabel, FilterCategory } from './style';


const Filtros = ({setProduto, sortPrice, setSortPrice }) => {

  const filterResult = (catItem) => {
    const result = product.filter((curDate) => {
      return curDate.category === catItem;
    });
    setProduto(result);
  }

    
  return (
    <ContainerFilter>
    <FilterCategory>
    <CategoryTitle>
      <h3>Categorias</h3>
    </CategoryTitle>
      
        <CategoryButton onClick={() => setProduto(product)}>Todos os Produtos</CategoryButton>
        <CategoryButton onClick={() => filterResult('blusa')}>Blusas</CategoryButton>
        <CategoryButton onClick={() => filterResult('casaco')}>Casacos</CategoryButton>
    
    </FilterCategory>

     <div>
     <SortLabel>
     <label>Classificar por</label>
     </SortLabel>
      <select value={sortPrice} onChange={e => {setSortPrice(e.target.value)}}>
        <option value={"title"}>Mais Vendidos</option>
        <option value="#" disabled></option>
        <option value={"price"}>Preço de Baixo para Alto</option>
        <option value="#" disabled></option>
        <option value={"dueDate"}>Preço de Alto para Baixo</option>
      </select>
</div>
    </ContainerFilter>


  )
}

export default Filtros
