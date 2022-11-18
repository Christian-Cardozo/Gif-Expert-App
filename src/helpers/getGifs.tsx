export const getGifs = async (category:string) => {
    const url = 'https://api.giphy.com/v1/gifs/search';
    const apiKey = '2JhrJfLZDXUwj95puyVWDprQDXVVGzpC';
    const limit = 10;


    const resp = await fetch(`${url}?api_key=${apiKey}&q=${category}&limit=${limit}`)
    const { data } = await resp.json();

    const gifs = data.map( (img:any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
        
    return gifs;
}
