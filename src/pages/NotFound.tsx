import { Helmet } from "react-helmet"; // 1. Uvezi Helmet
import { useNavigate } from "react-router-dom";
import not_found from "../images/404_flag.jpg";
import GlobalButton from "../components/GlobalButton";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Helmet>
                <title>404 Not Found</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="flex flex-col items-center justify-center">
                <img src={not_found} className="mx-auto h-44 min-h-full object-cover md:h-46" alt="Not Found Flag" />
                <p style={{fontSize: "1.3rem", marginTop: "0.4rem"}}>
                    Looks like you've stumbled upon the Republic of Not Found. Sadly, this territory doesn't exist on our map.
                </p>
                <GlobalButton 
                    title="<- Deport Back Home" 
                    additionalCss="mt-4" 
                    onClick={() => navigate("/")} 
                />
            </div>
        </div>
    );
}

export default NotFound;