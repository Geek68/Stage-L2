import './Menu.css'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import IMG1 from '../../assets/Images/5a38812b9c77e0.5163651215136525236409.png'
import IMG2 from '../../assets/Images/Chauffeur1.png'
import IMG3 from '../../assets/Images/kisspng-scooter-car-motorcycle-hero-motocorp-hero-honda-pa-hero-passion-xpro-motorcycle-bike-5a77acd255d5b3.1519999415177924663516.png'
import IMG4 from '../../assets/Images/kisspng-toyota-hilux-car-pickup-truck-toyota-hiace-pickup-truck-5ad7ca18978313.0114260315240914166206.png'
const Menu =()=>{
    const tabImage = [IMG1,IMG2,IMG3,IMG4]
return(<>
        <motion.div className="MenuMenu"
            initial={{scaleY:0}}
            animate={{scaleY:1,transformOrigin:'top'}}
            transition={{ delay:0.3,duration:0.5}}
        >
           
           <div className="MenuTitre">
                <h1 className="MenuTitre1">
                    GARAGE <br/>
                </h1>
                <h2 className="MenuTitre2">
                    JIRAMA <br/>
                    Mahajanga Ampasika
                </h2>
           </div>
            <nav className="MenuVoitureBoutton">
                <Link to="/" className="MenuVoitureLink"><button>Acceuil</button></Link>
                <Link to="/service" className="MenuVoitureLink"> <button>Service</button></Link>
                <Link to="/chauffeur" className="MenuVoitureLink"><button>Chauffeur</button></Link>
            </nav>
            <div className="MenuSlide">
                <Carousel 
                autoPlay infiniteLoop 
                interval={5000}
                showIndicators={false} 
                showStatus={false}
                showThumbs={false}
                >
                    {
                        tabImage.map((image, index) => 
                        (
                            <div key={index} className="C" >
                                <img src={image} alt={`IMG${index + 1}`} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </motion.div>
    </>)
}
export default Menu