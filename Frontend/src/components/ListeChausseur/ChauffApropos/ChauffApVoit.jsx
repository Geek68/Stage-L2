import './ChauffApropos.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import Contextko from '../../Context'
import image from '../../../assets/Images/kisspng-toyota-hilux-car-pickup-truck-toyota-hiace-pickup-truck-5ad7ca18978313.0114260315240914166206.png'
const ChauffApVoit = ()=>
{
    const {variable} = useContext(Contextko)
    return(<>
    <motion.div className='ChauffApvoitParent'
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{delay:0.3,duration:0.5}}
    >
   <img src={image} alt='image' className="apvoitImage"/>
   <div className='ChauffApvoitTitle'>
    <p>V</p>
    <p>O</p>
    <p>I</p>
    <p>T</p>
    <p>U</p>
    <p>R</p>
    <p>E</p>
    <h1>à sa disposition</h1>
    
   </div>
   {
        variable != null ?
        ( 
        <div className='ChauffApvoitDonn'>
            <div className="ChauffApvoitContenu">
                <i className="mdi mdi-tag-text-outline"/>
                <h3>Plaque Matriculaire: {variable.matricule}</h3>
            </div>
            <div className="ChauffApvoitContenu">
                <i className="mdi mdi-bookmark"/>
                <h3>Marque: {variable.marque}</h3>
            </div>
            <div className="ChauffApvoitContenu">
                <i className="mdi mdi-bookmark"/>
                <h3>Modèle: {variable.model}</h3>
            </div>
            <div className="ChauffApvoitContenu">
                <i className="mdi mdi-format-size"/>
                <h3>Type:  {variable.type}</h3>
            </div>
            <div className="ChauffApvoitContenu">
                <i className="mdi mdi-glass-mug"/>
                <h3>Carburant: {variable.carburant}</h3>
            </div>
        </div>
        ):
        ( 
        <div className='ChauffApvoitDonn'>
            <div className="ChauffApvoitContenu">
                <i className="mdi mdi-tag-text-outline"/>
                <h3>Plaque Matriculaire:<br/>............</h3>
            </div>
            <div className="ChauffApvoitContenu">
                <i className="mdi mdi-bookmark"/>
                <h3>Marque:<br/>............</h3>
            </div>
            <div className="ChauffApvoitContenu">
                <i className="mdi mdi-bookmark"/>
                <h3>Modèle:<br/>............</h3>
            </div>
            <div className="ChauffApvoitContenu">
                <i className="mdi mdi-format-size"/>
                <h3>Type: <br/>............</h3>
            </div>
            <div className="ChauffApvoitContenu">
                <i className="mdi mdi-glass-mug"/>
                <h3>Carburant:<br/>............</h3>
            </div>
        </div>
        )
   }
    </motion.div>
    </>)
}
export default ChauffApVoit