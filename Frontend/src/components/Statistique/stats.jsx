import './stats.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import FctContex from '../FctContext'
const Stats = ()=>
{
    const {stats} = useContext(FctContex)
    console.log(stats)
    return(<>
    <motion.div className="StatsParents"
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{delay:0.3,duration:0.5}}>
        <div className="StatsColonne">
            <i className="mdi mdi-check-circle"/>
            <span>
                <h1>{ (stats!=undefined && stats[1])? stats[1].nbr_etat : null}</h1>
                <h2 className='statsColone-title'>EN BON ETAT</h2>
            </span>
        </div>
        <div className="StatsColonne">
            <i className="mdi mdi-alert-circle"/>
            <span>
                <h1>{(stats!=undefined && stats[0])? stats[0].nbr_etat : null }</h1>
                <h2 className='statsColone-title'>A REPARER</h2>
            </span>
        </div>
        <div className="StatsColonne">
            <i className="mdi mdi-close-octagon"/>
            <span>
                <h1>{(stats!=undefined && stats[2])? stats[2].nbr_etat : null}</h1>
                <h2 className='statsColone-title'>EN REPARATION</h2>
            </span>
        </div>
        <div className="StatsColonne">
            <i className="mdi mdi-close-octagon"/>
            <span>
                <h1>{(stats!=undefined && stats[3])? stats[3].nbr_etat : null}</h1>
                <h2 className='statsColone-title'>EN EPAVE</h2>
            </span>
        </div>
    </motion.div>
    </>)
}
export default Stats