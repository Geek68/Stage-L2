import './ChauffBtn.css'
import { motion } from 'framer-motion'
const ChauffBoutton =({show,showdelete})=>
{
    return(<>
        <div className="ChauffBtnParent">
            <motion.button
                initial={{scale:0}}
                animate={{scale:1}}
                transtion={{ delay:2,duration:0.1}}
             onClick={show}>Modifier</motion.button>
            <motion.button
                initial={{scale:0}}
                animate={{scale:1}}
                transtion={{ delay:2,duration:3.3}}
            onClick={showdelete}>Supprimer</motion.button>
        </div>
    </>)
}
export default ChauffBoutton