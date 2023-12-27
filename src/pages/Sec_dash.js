import App from "../App";
import NavBar from "../pages/NavBar"

export default function Sec_dash(){
    return(
        <div>
            <NavBar />
                <iframe className="responsive-iframe" width="1500" height="700"
                        src="https://app.powerbi.com/view?r=eyJrIjoiNmNlOWJkMGUtMjFlZi00YWVlLTkxODAtY2RjZTgwMGQ1MDNlIiwidCI6IjRlN2MwYzcxLTQ0NzUtNDJmNS1iNmFhLTkzNzE5NDJlMzM0MyJ9"
                        frameBorder="0" allowFullScreen="true">

                </iframe>
        </div>
    );
}
