import useSWR from 'swr'
import axios from '@/lib/axios'

export const useDatosProducto = () => {
    const data = useSWR('/api/productos_todo', () =>
        axios.get('/api/productos_todo').then(res => res.data),
    )
    const datos = data.data
    return { datos }
}
export const useDatosFiltrados = producto => {
    const { data: datos } = useSWR('/api/productos_todo', () =>
        axios.get('/api/productos_todo').then(res => res.data),
    )

    let filteredDatos = []
    if (datos) {
        filteredDatos = datos.filter(
            destacado => producto === destacado.meta_title_link,
        )
    }
    return { filteredDatos }
}
