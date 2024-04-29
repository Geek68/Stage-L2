import { motion } from 'framer-motion'
import { useContext } from 'react'
import Contextko from '../../Context'
import moto from '../../../assets/Images/kisspng-ktm-200-duke-bajaj-auto-motorcycle-bajaj-pulsar-ktm-200-duke-motorcycle-racing-bike-5a743eb36c0906.7809377415175676674425.png'
const ChauffApService = ()=>
{
  const {variable} =  useContext(Contextko)
 return (<>
  <motion.div className="ChauffApServiceParent"
    initial={{ scale:0}}
    animate={{scale:1}}
    transition={{delay:0.3,duration:0.5}}
  >
    <img src={moto} alt="moto" className="ChauffApServiceMoto"/>
    <h1 className="ChauffApServiceTitle">Service Utilisateur</h1>
    {
      variable !=null?
      (
        <div>
          <div className="ChauffApServiceContenu">
              <i className="mdi mdi-account-card-details"/>
              <p> Service: {variable.nomservice}</p>
          </div>
          <div className="ChauffApServiceContenu">
              <i className="mdi mdi-account-check"/>
              <p>Responsable: {variable.responsable}</p>
          </div>
        </div>
      ) :
      (
        <div>
          <div className="ChauffApServiceContenu">
              <i className="mdi mdi-account-card-details"/>
              <p> Service: ..........</p>
          </div>
          <div className="ChauffApServiceContenu">
              <i className="mdi mdi-account-check"/>
              <p>Responsable:..........</p>
          </div>
        </div>
      )
    }
  </motion.div>
 </>)
}
export default ChauffApService
