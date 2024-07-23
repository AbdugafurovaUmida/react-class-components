import ResponseApi from '../../types/api'
import { Products } from '../../types/products'
import './Results.css'
import Pagination from '../../components/pagination/Pagination'
import List from '../../components/list/List'

type Props = {
  data: ResponseApi<Products> | undefined
}

export default function Results(props: Props) {
  const { data } = props

  return (
    <section className='results-container' style={{ position: 'relative' }}>
      {data?.products.length ? (
        <div className='results-container'>
          <List data={data} />
          <Pagination data={data} />
        </div>
      ) : (
        <div>Sorry, I didn't find anything</div>
      )}
    </section>
  )
}
