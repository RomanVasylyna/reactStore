import React, {useContext} from 'react'
import { Button } from 'react-bootstrap';
import ThemeContext from './ThemeContext';

const Theme = () => {
    let {theme, setTheme} = useContext(ThemeContext);

    return (
    <Button variant="danger" onClick={() => setTheme('bg-danger')}>Change Theme</Button>
    )
}

export default Theme
