import './MenuPrinc.css'
import { Link } from 'react-router-dom'
import '../../assets/illustration.svg'
import { motion } from 'framer-motion'
const MenuPrinc = ()=>
{
    return(<>
    <div className="MenuPrincParent">
        <header className="MenuPrincHeader">
            <h1 className="MenuPrincTitle">MENU</h1>
			<div></div>
            <button className="MenuPrincBtn"><span>Fermer</span>
                <i className="mdi mdi-backburger"/>
            </button>
        </header>
         <div>
                <div className="MenuPrincNav1">
                    <motion.p
                        initial={{ x:'-100rem'}}
                        animate ={{x:0}}
                        transition={{type:'spring',stiffness:50}}
                    ><Link to="/formVehicule" className="NavLink">
                        <i className="mdi mdi-arrow-right"/>
                        <span className="NavSpan">Ajout de Véhicule</span>
                    </Link></motion.p>
                    <motion.p
                        initial={{ x:'-100rem'}}
                        animate ={{x:0}}
                        transition={{delay:0.5,type:'spring',stiffness:50}}
                    ><Link to="/formService" className="NavLink">
                            <i className="mdi mdi-arrow-right"/><span className="NavSpan">Ajout de Service</span>
                    </Link></motion.p>
                    <motion.p 
                        initial={{ x:'-100rem'}}
                        animate ={{x:0}}
                        transition={{delay:1,type:'spring',stiffness:50}}
                    ><Link to="/formChauff" className="NavLink">
                        <i className="mdi mdi-arrow-right"/><span className="NavSpan">Ajout de Chauffeur</span>
                    </Link></motion.p>
                </div>
            <div className="MenuPrincNav2">
                <motion.p
                    initial={{x:-500,y:-500}}
                    animate={{x:0,y:0}}
                    transition={{ delay:1.5,type:'spring',stiffness:120}}
                ><Link to="/voiture" className="NavLink">
                    <i className="mdi mdi-arrow-bottom-right"/><span className="NavSpan">Liste des Véhicules</span>
                </Link></motion.p>
                <motion.p
                    initial={{x:-1000,y:-1000}}
                    animate={{x:0,y:0}}
                    transition={{ delay:1.5,type:'spring',stiffness:120}}
                ><Link to="/service" className="NavLink"><i className="mdi mdi-arrow-bottom-right"/><span className="NavSpan">Liste des Services</span></Link></motion.p>
                <motion.p
                    initial={{x:-1000,y:-1000}}
                    animate={{x:0,y:0}}
                    transition={{ delay:1.5,type:'spring',stiffness:120}}
                ><Link  to="/chauffeur" className="NavLink"><i className="mdi mdi-arrow-bottom-right"/><span className="NavSpan">Liste des Chauffeurs</span></Link></motion.p>
            </div>
        </div>   
    </div>
   
    </>)
}
export default MenuPrinc