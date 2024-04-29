import img1 from '../../../assets/Images/Chauffeur2.png'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import Contextko from '../../Context'
const ApService = ()=>
{
    const {variable} = useContext(Contextko)
    return(<>
    <motion.div className="ApServiceChauffeurParent"
        initial={{scale:0}}
        animate={{scale:1}}
        transtion={{duration:0.5,delay:4.3}}
    >
        <img src={img1} alt="img1" className="ImgChf"/>
       {
        variable!=null ? (
        <div className="ApServiceChauffeurPhase">
            <h1 className="ApServiceChauffeurTitle">A propos du Chauffeur</h1>
            <p className="ApServiceChauffeurPara1">
                <i className="mdi mdi-account-convert"/>
                    <span className='ApChChauffeurfSpan'>Nom:   {variable.nomchauffeur}</span>
            </p>
            <p className="ApServiceChauffeurPara2">
                <i className="mdi mdi-phone"/>
                  <span className='ApServiceChauffeurSpan'> Tel: {variable.numtel}</span>
            </p>
             <p className="ApServiceChauffeurPara3">
                <i className="mdi mdi-home-map-marker"/>
                  <span className='ApServiceChauffeurSpan'>Addresse:  {variable.adresse}</span>
            </p>
        </div>) : 
        (
        <div className="ApServiceChauffeurPhase">
            <h1 className="ApServiceChauffeurTitle">A propos du Chauffeur</h1>
            <p className="ApServiceChauffeurPara1">
                <i className="mdi mdi-account-convert"/>
                    <span className='ApChChauffeurfSpan'>Nom: .........</span>
            </p>
            <p className="ApServiceChauffeurPara2">
                <i className="mdi mdi-phone"/>
                  <span className='ApServiceChauffeurSpan'> Tel: .......</span>
            </p>
             <p className="ApServiceChauffeurPara3">
                <i className="mdi mdi-home-map-marker"/>
                  <span className='ApServiceChauffeurSpan'>Addresse: ..........</span>
            </p>
        </div>)
       }
    </motion.div>
    </>)
}
export default ApService