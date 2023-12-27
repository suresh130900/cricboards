import axios from "axios";
import React from "react";
const baseUrl = "http://127.0.0.1:8000/";

export default function Api_Exp()
{
    const[post, setPost] = React.useState(null);

    React.useEffect(() =>{
        axios.get(baseUrl).then((response) =>{
          setPost(JSON.parse(JSON.stringify(response.data)))
        });
    }, []);

    if(!post) return null

    return (
        <div>
            {
                post.map((e,i)=>{
                    return (
                        <>
                            <h1>
                                {e.city}
                            </h1>
                            <p>
                                {e.match_date}
                            </p>
                        </>
                    )
                })
            }
        </div>
    );
}