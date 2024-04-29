import './FormsService.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import  { Link } from 'react-router-dom'
import axios from 'axios'
import {ToastContainer,toast} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const FormService = ()=>
{
    const [NomService,ChangeService] = useState('')
    const [Responsable,changeResponsable] = useState('')

    const HandleService = (e)=>
    {
        ChangeService(e.target.value)
    }
      const HandleResponsable = (e)=>
    {
        changeResponsable(e.target.value)
    }
    console.log(NomService,Responsable)
    const Initial = () =>
    {
        ChangeService('')
        changeResponsable('')
    }
    /// Envoie des données
    const EnvoieDonnee = (e)=>
    {
         e.preventDefault()
        axios.post('http://localhost:8080/api/services/add',{nom:NomService,responsable:Responsable})
        .then(()=>{
            toast.success('Les données sont bien ajoutées')
        })
        .catch(error=>{alert(error)})
        Initial()
       
    }
    /// Envoie des données

    
    return(<>
    <div className="FormServiceRAD">
        <motion.form className="FormServiceParent"
            initial={{y:'-100rem'}}
            animate={{ y:0}}
            transition={{delay:0.4, duration: 3, type:'spring',stiffness: 200}}>
            <div className="FormServiceTitle">
                <h1>Ajout de Service</h1>
            </div>
            <div className="FormServiceContenu">
                <i className="mdi mdi-account-card-details"/>
                <input type="text" value={NomService} onChange={HandleService} placeholder="Nom" className="FormServiceInput"/>
            </div>
             <div className="FormServiceContenu">
                <i className="mdi mdi-account-check"/>
                <input type="text" value={Responsable} onChange={HandleResponsable} placeholder="Responsable" className="FormServiceInput"/>
            </div>
             <div className="FormServiceBtn">
                <input type="submit" value="AJOUT" className="FormServiceAjout" onClick={EnvoieDonnee}/>
               <Link to="/service"><input type="submit" value="ANNULER" className="FormServiceAnnuler"/></Link>
            </div>
        </motion.form>
        <ToastContainer/>
    </div>
    </>)
}
export default FormService