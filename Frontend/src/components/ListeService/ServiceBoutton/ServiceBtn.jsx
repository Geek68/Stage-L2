import './ServiceBtn.css'
import { motion } from 'framer-motion'
const ServiceBoutton =({supp,modif})=>
{
    return(<>
        <div className="ChauffBtnParent">
            <motion.button
                initial={{scale:0}}
                animate={{scale:1}}
                transtion={{ delay:2,duration:0.1}}
             onClick={modif}>Modifier</motion.button>
            <motion.button
                initial={{scale:0}}
                animate={{scale:1}}
                transtion={{ delay:2,duration:3.3}}
             onClick={supp}>Supprimer</motion.button>
        </div>
    </>)
}
export default ServiceBoutton