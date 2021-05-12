import React from 'react';

import styles from './App.modules.scss';
import './color.css';
import cn from 'classnames';

const App = () => {
    return (
        <div className={cn(styles.header, ' danger')}>
            This is app component!
        </div>
    )
}

export default App;
