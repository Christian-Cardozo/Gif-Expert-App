interface Image {
    id:string,
    title: string,
    url: string,
}

export const GifGridItem = ({title, url}:Image) => {
  return (
    <div className="card">
        <img src={url} alt={title} width={200} height={200}/>
        <p>{title}</p>
    </div>
  )
}
