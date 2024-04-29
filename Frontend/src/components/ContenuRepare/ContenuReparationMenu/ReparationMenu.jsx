import { Link } from 'react-router-dom'
import './ReparationMenu.css'
import { motion } from 'framer-motion'
const MenuReparation =({closeMenu})=>
{
 return(
 <>
       < motion.div className="MenuReparationParent"
       initial={{ x:'40rem'}}
       animate={{x:0}}
       exit={{x:'40rem'}}
       transition={{duration:0.5}}>
        <div className="MenuReparationNext" onClick={closeMenu}>
            <i className="mdi mdi-chevron-double-right"/>
        </div>
        <div className="MenuReparatioRAD">
            <h1>Menu</h1>
                <div className="MenuReparationBoutton">
                    <Link to="/service" className="MenuReparationLink"><button>Service</button></Link>
                    <Link to="/voiture" className="MenuReparationLink"><button>Voiture</button></Link>
                    <Link to="/chauffeur" className="MenuReparationLink"><button>Chauffeur</button></Link>
                </div>
        </div>
        </motion.div>
 </>)
}
export default MenuReparation