import { useContext, useState} from "react"
import './ModifService.css'
import MyContext from "../../ListeChausseur/MyContext"
import { motion } from "framer-motion"
import axios from "axios"
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
const ModifService =()=>
{
      const {donnee} =useContext(MyContext)
      console.log(donnee)
    const [nom,changeService]= useState(donnee.nomservice)
    const [responsable,changeResponsable]= useState(donnee.responsable)
    const idservice = donnee.idservice
    const HandleService= (e)=>
    {
       changeService(e.target.value)
    }
     const HandleResponsable= (e)=>
    {
        changeResponsable(e.target.value)
    }

    const ModifService = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:8080/api/services/add',{nom,responsable,idservice})
        .then(()=>{
            toast.success('Modification reussie') 
            location.reload()
        })
        .catch(error=>{alert(error)})
      }
    return(<>
        <motion.div className="ModifServiceParent"
       initial ={{x:'100rem'}}
       animate={{x:0}}
       exit ={{x:'100rem'}}
       transition={{duration:0.5}}>
            <form className="ModifServiceContainer">
                    <h1>Rectifiez-vous ces données</h1>
                <div className="FormServiceModifContenu">
                    <i className="mdi mdi-account-convert"/>
                    <input type="text"  value={nom} onChange={HandleService} placeholder="Nom" className="FormServiceModifInput"/>
                </div>
                <div className="FormServiceModifContenu">
                    <i className="mdi mdi-phone"/>
                    <input type="text"  value={responsable} onChange={HandleResponsable} placeholder="Responsable" className="FormServiceModifInput"/>
                </div>
                <div className="FormServiceModifBtn">
                    <button className="FormServiceModifBoutton" onClick={ModifService}>
                        <i className="mdi mdi-checkbox-multiple-marked-circle-outline"/>
                        <span>OUI</span>
                    </button>
                    <button className="FormServiceModifBoutton" onClick={close}>
                        <i className="mdi mdi-close"/>
                        <span>NON</span>
                    </button>
                </div>
            </form>
            <ToastContainer/>
        </motion.div>
    </>)
}
export default ModifService