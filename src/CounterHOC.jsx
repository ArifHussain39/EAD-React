import React from 'react';

function withCounter(WrappedComponent) {
    return function (props) {
        const [count, setCount] = React.useState(0);
        const increment = () => setCount(count + 1);
        return <WrappedComponent count={count} increment={increment} {...props} />;
    }
}

export default withCounter;