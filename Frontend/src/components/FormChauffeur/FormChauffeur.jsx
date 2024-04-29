import './FormChauffeur.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import {ToastContainer,toast} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
const FormChauf=()=>
{ 
    const [NomChauff,ChangeChauff]= useState('')
    const [Tel,ChangeTel]= useState(null)
    const [Adresse,ChangeAdresse]= useState('')
    const [cin,ChangeCIN] =  useState('')

    const HandleChauff = (e)=>{
        ChangeChauff(e.target.value)
    }
     const HandleTel = (e)=>{
        ChangeTel(e.target.value)
    }
     const HandleAdresse = (e)=>{
        ChangeAdresse(e.target.value)
    }
    const HandleCIN = (e)=>
    {
        ChangeCIN(e.target.value)
    }
    ///Envoie de données
    
    const Initialisation = ()=>{
        ChangeAdresse('')
        ChangeCIN('')
        ChangeTel('')
        ChangeChauff('')
    }
    const EnvoieDonnee =(e)=>
    {     e.preventDefault()
        
         axios.post('http://localhost:8080/api/chauffeur/add',{NomChauff,Tel,Adresse,cin,taille:cin.trim().length})
        .then((res)=>{
            if(res.data.less)
            {
                toast.error(res.data.less)
            }
            else{
            toast.success("Ajout reussi")
            Initialisation()
            }
            
        })
        .cath((error)=>{
            toast.error(error)
        })
    }

    
    return(<>
 <motion.div 
        initial={{scaleX:0,scaleY:0}}
        animate={{scaleX:1,scaleY:1}}
        transition={{delay:0.3, duration:1}}
        className="FormChaufParent">
    <motion.div className="FormChaufTitle"
        initial={{scaleX:0,scaleY:0}}
        animate={{scaleX:1,scaleY:1,transformOrigin:'right'}}
        transition={{delay:0.5, duration:2}}
    >
        <header className="FormChauffHeader">
            <h1>Ajout du Chauffeur</h1>
            <div className="FormChauffIcon">
                    <i className="mdi mdi-account-plus"/>
                    <i className="mdi mdi-account-plus"/>
                    <i className="mdi mdi-account-plus"/>
                    <i className="mdi mdi-account-plus"/>
                    <i className="mdi mdi-account-plus"/>
            </div>
        </header>
        <form className="FormChauffRAD">
            <div className="FormChauffContenu">
                <i className="mdi mdi-account-convert"/>
                <input type="text"  value={NomChauff} onChange={HandleChauff} placeholder="Nom" className="FormChaufInput"/>
            </div>
            <div className="FormChauffContenu">
                <i className="mdi mdi-phone"/>
                <input type="number"value={Tel} onChange={HandleTel} placeholder="Tel" className="FormChaufInput"/>
            </div>
            <div className="FormChauffContenu">
                <i className="mdi mdi-home-map-marker"/>
                <input type="text" value={Adresse} onChange={HandleAdresse} placeholder="Adresse" className="FormChaufInput"/>
            </div>
            <div className="FormChauffContenu">
                 <i className="mdi mdi-account-card-details"/>
                <input type="text" value={cin} onChange={HandleCIN} placeholder="CIN" className="FormChaufInput"/>
            </div>
             <div className="FormChaufBtn">
                <input type="submit" value="AJOUT" className="FormChauffAjout" onClick={EnvoieDonnee}/>
                <Link to="/chauffeur" ><input type="submit" value="ANNULER" className="FormChauffAnnuler"/></Link>
            </div>
        </form>
        <ToastContainer position={"top-right"}/>
    </motion.div>
 </motion.div>
</>)
}
export default FormChauf