import './bouton.css'
import { motion } from 'framer-motion'
const Boutton =({modifvoit,repare})=>
{ return(<>
        <div className="VoitBtnParent">
            <motion.button
                initial={{scale:0}}
                animate={{scale:1}}
                transtion={{ delay:2,duration:0.1}}
             onClick={modifvoit}>Modifier</motion.button>
            <motion.button
                initial={{scale:0}}
                animate={{scale:1}}
                transtion={{ delay:2,duration:3.3}}
            onClick={repare}>Reparation</motion.button>
        </div>

    </>)
}
export default Boutton