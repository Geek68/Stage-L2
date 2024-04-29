import { motion } from 'framer-motion'
import { useContext } from 'react'
import Contextko from '../Context'
import moto from '../../assets/Images/kisspng-ktm-200-duke-bajaj-auto-motorcycle-bajaj-pulsar-ktm-200-duke-motorcycle-racing-bike-5a743eb36c0906.7809377415175676674425.png'
const ApService = ()=>
{
  const {variable} = useContext(Contextko)
 return (<>
  <motion.div className="ApServiceParent"
    initial={{ scale:0}}
    animate={{scale:1}}
    transition={{delay:0.3,duration:0.5}}
  >
    <img src={moto} alt="moto" className="ApServiceMoto"/>
    <h1 className="ApServiceTitle">Service Utilisateur</h1>
    {
        variable != null ?
        (
        <div className="">
            <div className="ApServiceContenu">
              <i className="mdi mdi-account-card-details"/>
              <p>Service: {variable.nomservice}</p>
          </div>
          <div className="ApServiceContenu">
              <i className="mdi mdi-account-check"/>
              <p>Responsable: {variable.responsable}</p>
          </div>
      </div>
        ):
        (
          <div className="">
              <div className="ApServiceContenu">
                <i className="mdi mdi-account-card-details"/>
                <p> Service: ..........</p>
            </div>
            <div className="ApServiceContenu">
                <i className="mdi mdi-account-check"/>
                <p>Responsable: ..........</p>
            </div>
        </div>
        )
    }
  </motion.div>
 </>)
}
export default ApService
