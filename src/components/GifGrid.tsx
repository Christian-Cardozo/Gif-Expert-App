import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

type Props = {
    category: string
}

interface Image {
    id:string,
    title: string,
    url: string,
}

export const GifGrid = ({ category }: Props) => {

    const { images, isLoading } = useFetchGifs(category);    



    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando ...</h2>)                
            }

            <div className='card-grid'>
            {
                images.map(( img:Image ) =>
                    <GifGridItem key={img.id} {...img}/>
                )
            }
            </div>

        </>
    )
}
