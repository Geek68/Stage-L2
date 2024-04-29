import { useState,useContext } from "react"
import"./PopUoModiChauff.css"
import { motion } from "framer-motion"
import MyContext from "../MyContext"
import axios from 'axios'
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
const ModifChauff =({close})=>
{
    const {donnee} = useContext(MyContext)
    const [NomChauffModif,setModifNomChauff]= useState(donnee.nomchauffeur)
    const [TelModif,setTelModif]= useState(donnee.numtel)
    const [AdresseModif,setAdresseModif]= useState(donnee.adresse)
    const [CINModif,setCINModif]= useState(donnee.cin)
    const id = donnee.cin
    const HandleModifChauff= (e)=>
    {
        setModifNomChauff(e.target.value)
    }
     const HandleModifTel= (e)=>
    {
        setTelModif(e.target.value)
    }
     const HandleModifAdresse= (e)=>
    {
        setAdresseModif(e.target.value)
    }
     const HandleModifCIN= (e)=>
    {
        setCINModif(e.target.value)
    }
      const ModifChauffeur = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:8080/api/chauffeur/add',{cin:CINModif,NomChauff:NomChauffModif,Tel:TelModif,Adresse:AdresseModif,id})
        .then(()=>{
            toast.success('Modification reussie') 
            location.reload()
        })
        .catch(error=>{alert(error)})
      }
    console.log(donnee)
    return(<>
        <motion.div className="ModifChauffParent"
        initial={{rotateY:'90deg'}}
        animate={{rotateY:'0deg',transformOrigin:'bottom-right'}}
        transition={{duration:2}}>
            <form className="ModifChaufContainer">
                    <h1>Rectifiez-vous ces données</h1>
                <div className="FormChauffModifContenu">
                    <i className="mdi mdi-account-convert"/>
                    <input type="text"  value={NomChauffModif} onChange={HandleModifChauff} placeholder="Nom" className="FormChaufModifInput"/>
                </div>
                <div className="FormChauffModifContenu">
                    <i className="mdi mdi-phone"/>
                    <input type="number"value={TelModif} onChange={HandleModifTel} placeholder="Tel" className="FormChaufModifInput"/>
                </div>
                <div className="FormChauffModifContenu">
                    <i className="mdi mdi-home-map-marker"/>
                    <input type="text" value={AdresseModif} onChange={HandleModifAdresse} placeholder="Adresse" className="FormChaufModifInput"/>
                </div>
                <div className="FormChauffModifContenu">
                    <i className="mdi mdi-account-card-details"/>
                    <input type="text" value={CINModif} onChange={HandleModifCIN} placeholder="CIN" className="FormChaufModifInput"/>
                </div>
                <div className="FormChaufModifBtn">
                    <button className="FormChaufModifBoutton"  onClick={ModifChauffeur}>
                        <i className="mdi mdi-checkbox-multiple-marked-circle-outline"/>
                        <span>OUI</span>
                    </button>
                    <button className="FormChaufModifBoutton" onClick={close}>
                        <i className="mdi mdi-close"/>
                        <span>NON</span>
                    </button>
                </div>
            </form>
            <ToastContainer/>
        </motion.div>
    </>)
}
export default ModifChauff