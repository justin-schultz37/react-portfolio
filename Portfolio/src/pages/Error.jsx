import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError();

    if (!error) {
        return <div>No error found.</div>;
    }

    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>
                    {error.statusText || error.message}
                    {error.stack && (
                        <>
                            <br />
                            <code>{error.stack}</code>
                        </>
                    )}
                </i>
            </p>
        </div>
    );
}
