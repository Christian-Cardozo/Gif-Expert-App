import { useState } from 'react';

type Props = {
    onNewCategory: Function
}

export const AddCategory = ({onNewCategory}:Props) => {

    const [InputValue, setInputValue] = useState('')
    
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
                        
        if(InputValue.trim().length <= 1) return;        

        onNewCategory(InputValue.trim());
        setInputValue('')    
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
            placeholder="Buscar gifs"
            onChange={(e) => setInputValue(e.target.value)} />
        </form>        
    )
}
