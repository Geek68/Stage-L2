import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import './OriginPopUp.css'
const OriginePopUp = ({Fermeture})=>
{
    return(
    <>
        <motion.div className="OrgPopUpParent"
        initial={{y:"-100rem"}}
        animate={{y:0}}
        exit={{y:"-100rem"}}
        transition={{type:"spring",stiffness:100}}>
         <div className="OrgPopUpContenu">
             <div className="OrgPopUpTitle">
                <i className="mdi mdi-close-octagon" onClick={Fermeture}/>
                <h1 className="OrgPopUpTitleH1"> Quelle action voulez-vous faire?</h1>
           </div>
            <div className="OrgPopIpBoutton">
                <Link to="/formReparation"><button><span className="OrgPopUpSpan">Faire réparer une voiture</span></button></Link> 
                <Link to="/contenuRepare"><button><span className="OrgPopUpSpan">Voir les voitures en Réparition</span></button></Link> 
            </div>
         </div>
        </motion.div>
    </>)
}
export default OriginePopUp