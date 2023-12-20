import "./banner.scss"
import { bannerData } from "./data"
import bgImage from "../../../public/image/banner.png"

let cssStyle = {
    // backgroundImage: `url(${bgImage})`
}

function Banner() {

    return (
        <>
            {
                bannerData.map((item, index) => {
                    return <section key={index} className="banner" style={{ backgroundImage: item.image }}>
                        <div className="container">
                            <div className="banner-content">
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    </section >
                })
            }
        </>
    )
}

export default Banner
