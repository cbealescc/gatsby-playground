import React, {useState, useEffect} from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

function ApiDataPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await fetch(`https://api.artic.edu/api/v1/artworks`);
                if (!response.ok) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false)
            }
        }
        getData();

    }, []);


    return (

        <Layout>
            <Seo title="API Data"/>

            {loading && <div>Loading...</div>}

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