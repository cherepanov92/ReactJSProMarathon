import React from 'react';
import cn from 'classnames';

import styles from './App.module.scss';

const App = () => {
    return (
        <div className={cn(styles.header)}>
            This is app component!
        </div>
    )
}

export default App;
