import App from "../App";
import NavBar from "../pages/NavBar"

export default function PowerBi(){
    return(
        <div>
            <NavBar />
            <iframe title="capstone_final_project_IPL_DashBoard" width="1500" height="700"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMGE3M2E3NTktMWI5OC00YzI2LTgzODktNWQ4Mjc2Y2Y5ZmE4IiwidCI6ImQxZjE0MzQ4LWYxYjUtNGEwOS1hYzk5LTdlYmYyMTNjYmM4MSIsImMiOjEwfQ%3D%3D"
                    frameBorder="0" allowFullScreen="true"></iframe>
        </div>
    );
}
