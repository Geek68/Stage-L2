import img1 from '../../assets/Images/Chauffeur2.png'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import Contextko from '../Context'
const ApChauffeur = ()=>
{
    const {variable} = useContext(Contextko)
    return(<>
    <motion.div className="ApChauffeurParent"
        initial={{scale:0}}
        animate={{scale:1}}
        transtion={{delay:0.3,duration:0.5}}
    >
        <img src={img1} alt="img1" className="ImgChf"/>
        {
            variable !=null ?
            (
                <div className="ApChauffeurPhase">
                    <h1 className="ApChauffeurTitle">A propos du Chauffeur</h1>
                    <p className="ApChauffeurPara1">
                        <i className="mdi mdi-account-convert"/>
                            <span className='ApChfSpan'>Nom:{variable.nomchauffeur}</span>
                    </p>
                    <p className="ApChauffeurPara2">
                        <i className="mdi mdi-phone"/>
                        <span className='ApChfSpan'> Tel:{variable.numtel}</span>
                    </p>
                    <p className="ApChauffeurPara3">
                        <i className="mdi mdi-home-map-marker"/>
                        <span className='ApChfSpan'>Addresse: {variable.adresse}</span>
                    </p>
                </div>
            ) : 
            (
                <div className="ApChauffeurPhase">
                    <h1 className="ApChauffeurTitle">A propos du Chauffeur</h1>
                    <p className="ApChauffeurPara1">
                        <i className="mdi mdi-account-convert"/>
                            <span className='ApChfSpan'>Nom:  ...........</span>
                    </p>
                    <p className="ApChauffeurPara2">
                        <i className="mdi mdi-phone"/>
                        <span className='ApChfSpan'> Tel: ...........</span>
                    </p>
                    <p className="ApChauffeurPara3">
                        <i className="mdi mdi-home-map-marker"/>
                        <span className='ApChfSpan'>Addresse: ...........</span>
                    </p>
                </div>
            )
        }
    </motion.div>
    </>)
}
export default ApChauffeur  