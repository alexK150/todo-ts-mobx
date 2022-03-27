import React, {useState} from 'react';

interface InputFormProps {
    onAdd(title: string): void
}

export const InputForm: React.FC<InputFormProps> = ({onAdd}) => {
    const [title, setTitle] = useState<string>('');

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    };

    const onKeyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(title);
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