import React, {useState, useEffect} from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

function ApiDataPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(`https://api.artic.edu/api/v1/artworks`)
            // If response is bad, log error message. Otherwise, return the data.
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })

            // If successful, set the 'state' data to the json formatted version called 'actualData'.
            // If that all works, setError state to null
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })

            // If there are any errors, catch them. Then setError state to the returned error message.
            // If the above occurs, seData in state to null
            .catch((err) => {
                setError(err.message);
                setData(null);
            })

            // Once all that has happened, setLoading in state to false.
            .finally(() => {
                setLoading(false);
            });
    }, []);


    return (

        <Layout>
            <Seo title="API Data"/>

            {loading && <div>A moment please...</div>}

            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}

            <div>
                {data &&
                    data.data.map(({id, title, artwork_type_title, artist_title}) => (
                        <div key={id} style={{display: 'inlineFlex', backgroundColor: 'grey', margin: '20'}}>
                            <h3>{title}</h3>
                            <p>Author: ${artist_title}</p>
                            <p>Type: ${artwork_type_title}</p>
                        </div>
                    ))}
            </div>

            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default ApiDataPage;