import useSWR from 'swr'
import axios from '@/lib/axios'
export const useDatosMarca = () => {
    const data = useSWR('/api/clientes_marcas', () =>
        axios.get('/api/clientes_marcas').then(res => res.data),
    )
    const datos = data.data
    return { datos }
}
