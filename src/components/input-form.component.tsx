import React, {useState} from 'react';

export const InputForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    };

    const onKeyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(title);
            setTitle('');
        }
    };

    return (
        <div className='input-field mt2'>
            <input
                onChange={changeTitle}
                value={title}
                type='text'
                id='title'
                onKeyPress={onKeyPressHandler}
            />
            <label htmlFor='title' className='active'>
                What I need todo:
            </label>
        </div>
    )
};