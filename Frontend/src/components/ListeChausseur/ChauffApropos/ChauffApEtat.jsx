import{motion} from 'framer-motion'
import { useContext } from 'react'
import Contextko from '../../Context'
const ChauffApEtat = ()=>
{
    const {variable} = useContext(Contextko)
    return(<>
        <motion.div className="ChauffApEtatParent"
            initial={{scale:0}}
            animate={{scale:1}}
            transition ={{delay:0.3,duration:0.5}}
        >
            <h1 className="ChauffApEtatTitle">Etat du Véhicule</h1>
          {
            variable != null ?
            ( 
                <div className="ChauffApEtatContenue">
                    <i className="mdi mdi-thermometer-lines"/>
                    <p>{variable.statut}</p>
                </div>
            ):
            (  
                <div className="ChauffApEtatContenue">
                    <i className="mdi mdi-thermometer-lines"/>
                    <p>..............</p>
                </div>
            )
          }
        </motion.div>
    </>)
}
export default ChauffApEtat