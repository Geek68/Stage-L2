import './Apropos.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import Contextko from '../Context'
import image from '../../assets/Images/kisspng-toyota-hilux-car-pickup-truck-toyota-hiace-pickup-truck-5ad7ca18978313.0114260315240914166206.png'
const ApVoit = ()=>
{
    const {variable} = useContext(Contextko)
    console.log(variable)
    return(<>
    <motion.div className='ApvoitParent'
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{delay:0.3,duration:0.5}}
    >
   <img src={image} alt='image' className="apvoitImage"/>
   <div className='ApvoitTitle'>
    <p>A</p>
    <p></p>
    <p>P</p>
    <p>R</p>
    <p>O</p>
    <p>P</p>
    <p>O</p>
    <p>S</p>
    <h1>Du voiture</h1>
    
   </div>
    <>
    {
       variable != null?
        (
        <div className='ApvoitDonn'>
            <div className="ApvoitContenu">
                <i className="mdi mdi-tag-text-outline"/>
                <h3>Plaque Matriculaire:<br/>{variable.matricule}</h3>
            </div>
            <div className="ApvoitContenu">
                <i className="mdi mdi-bookmark"/>
                <h3>Marque:<br/>{variable.marque}</h3>
            </div>
            <div className="ApvoitContenu">
                <i className="mdi mdi-bookmark"/>
                <h3>Modèle:<br/>{variable.model}</h3>
            </div>
            <div className="ApvoitContenu">
                <i className="mdi mdi-format-size"/>
                <h3>Type: {variable.type}</h3>
            </div>
            <div className="ApvoitContenu">
                <i className="mdi mdi-glass-mug"/>
                <h3>Carburant:<br/>{variable.carburant}</h3>
            </div>
        </div>
        ):
        (
        <div className='ApvoitDonn'>
            <div className="ApvoitContenu">
                <i className="mdi mdi-tag-text-outline"/>
                <h3>Plaque Matriculaire:<br/>................</h3>
            </div>
            <div className="ApvoitContenu">
                <i className="mdi mdi-bookmark"/>
                <h3>Marque:<br/>..........</h3>
            </div>
            <div className="ApvoitContenu">
                <i className="mdi mdi-bookmark"/>
                <h3>Modèle:<br/>.........</h3>
            </div>
            <div className="ApvoitContenu">
                <i className="mdi mdi-format-size"/>
                <h3>Type:<br/>.........</h3>
            </div>
            <div className="ApvoitContenu">
                <i className="mdi mdi-glass-mug"/>
                <h3>Carburant:<br/>.......</h3>
            </div>
         </div>
        )
    }
    </>
    </motion.div>
    </>)
}
export default ApVoit