import TableRepare from "./TableReparation/TableRepare"
import './ContenuRepare.css'
import { useState } from "react"
import  axios  from "axios"
import { AnimatePresence } from "framer-motion"
import {ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import MenuReparation from "./ContenuReparationMenu/ReparationMenu"
// import FctContex from "../FctContext"
const ContenuRepare = ()=>
{
    const [showMenu,setShowMenu] = useState(false)
    const[jirama,setjirama] = useState() 
    const[Pmatriculaire,setPmatriculaire] = useState()
    const [Dommage,setDommage] = useState()
    const [Materiel,setMateriel] = useState()
    const [NumDemande,setNumDemmande] = useState()
    const [NumFacture,setNumFacture] = useState()
    const [Prix,setPrix] = useState()
    const [date,setDate] = useState()
    const [niveau,setNiveau] = useState()
    console.log(niveau)
    const ChangePmatricle = (e)=>
    {
        setPmatriculaire(e.target.value)
    }
    const Changejirama = (e)=>
    {
        setjirama(e.target.value)
    }
    const ChangeDommage=(e)=>
    {
        setDommage(e.target.value)
    }
    const ChangeMateriel =(e)=>
    {
        setMateriel(e.target.value)
    }
    const ChangeNumDemmande = (e)=>
    {
        setNumDemmande(e.target.value)
    }
    const ChangeNumFacture = (e)=>
    {
        setNumFacture(e.target.value)
    }
    const ChangePrix = (e)=>
    {
        setPrix(e.target.value)
    }
    const ChangeDate= (e)=>
    {
        setDate(e.target.value)
    }
    const FctShowMenu = ()=>
    {
        setShowMenu(true)
    }
    const FctCloseMenu = ()=>
    {
        setShowMenu(false)
    }
    const ChangeNiveau = (e)=>
    {
        setNiveau(e.target.value)
    }
    const ValeurInit = (param)=> 
    {
        setjirama(param.centre)
        setPmatriculaire(param.plaque)
        setDommage(param.dommage)
        setMateriel(param.materiel)
        setNumDemmande(param.demande)
        setNumFacture(param.facture)
        setPrix(param.prix)
        setDate(`${( new Date(param.date)).getUTCFullYear()}-${( new Date(param.date)).getUTCMonth()+1}-${parseInt(( new Date(param.date)).getUTCDate()+1)<10? "0"+( new Date(param.date)).getUTCDate()+1:( new Date(param.date)).getUTCDate()+1}`)
        setNiveau(param.niveau)
    }
    const Initialisation =()=>
    {
        
        setjirama('')
        setPmatriculaire('')
        setDommage('')
        setMateriel('')
        setNumDemmande('')
        setNumFacture('')
        setPrix('')
        setDate('')
        setNiveau('')
    }
     const Reparation= (e)=>
    {
        e.preventDefault()
        axios.post('http://localhost:8080/api/vehicules/add/reparation',{jirama,Pmatriculaire,Dommage,Materiel,NumDemande,NumFacture,Prix,date,niveau})
        .then(()=>{
            toast.success("Mise à jour réussie")
            Initialisation()
            location.reload()
        })
        .catch(error=>alert(error))
        
    }
    console.log(date)
    return(<>
        <div className="ContenuRepareParent">
          <div className="ContenuRepareRAD">
             <div>
                <h1 className="ContenuRepareTitle">Les Voitures en Cours de Réparation</h1>
               <form className="ContenuRepareForm">
                    <div>
                        <i className="mdi mdi-magnify"/>
                        <input type="text"    placeholder="rechercher" className="ContenuReparesearch" />
                    </div>
                </form>
                 <TableRepare Valeur={ValeurInit}/>
           </div>
          <div className="formContenuReparationDiv2">
             <div className="ContenuRepareBox">
                    <form className="ContenuRepareFormulaire">
                        <h1 className="ContenuRepareFormTitle">Mêttre à jour</h1>
                        <div className="FormContenuReparationContenu">
                            <i className="mdi mdi-lightbulb-outline"/>
                            <input type="text"  value={jirama} onChange={Changejirama} placeholder="CENTRE JIRAMA" className="formContenuReparationInput"/>
                        </div>
                        <div className="FormContenuReparationContenu">
                                <i className="mdi mdi-tag-text-outline"/>
                                <input type="text"  value={Pmatriculaire} onChange={ChangePmatricle} placeholder="P.Matriculaire" className="formContenuReparationInput"/>
                        </div>
                        <div className="FormContenuReparationContenu">
                            <i className="mdi mdi-sticker"/>
                            <textarea value={Dommage} onChange={ChangeDommage} placeholder="Dommage" className="formContenuReparationTextarea"></textarea>
                        </div>
                        <div className="FormContenuReparationContenu">
                            <i className="mdi mdi-steam"/>
                            <input type="text" value={Materiel} onChange={ ChangeMateriel} placeholder="Materiel" className="formContenuReparationInput"/>
                        </div>
                        <div className="FormContenuReparationContenu">
                            <i className="mdi mdi-file-outline"/>
                            <input type="text" value={NumDemande} onChange={ChangeNumDemmande} placeholder="N° Demande" className="formContenuReparationInput"/>
                        </div>
                        <div className="FormContenuReparationContenu">
                            <i className="mdi mdi-file-outline"/>
                            <input type="text" value={NumFacture} onChange={ChangeNumFacture} placeholder="N° Facture Proformat" className="formContenuReparationInput"/>
                        </div>
                        <div className="FormContenuReparationContenu">
                            <i className="mdi mdi-cards-playing-outline"/>
                            <input type="number" value={Prix} onChange={ChangePrix} placeholder="Prix du Materiel" className="formContenuReparationInput"/>
                        </div>
                        <div className="FormContenuReparationContenu">
                            <input type="date" value={date}  onChange={ChangeDate} className="formContenuReparationInput"/>
                        </div>
                         <div className="FormContenuReparationContenu">
                            <select className="formContenuReparationSelect"  value={niveau} onChange={ChangeNiveau}>
                                <option value="MA">MA (1er  niveau)</option>
                                <option value="MB">MB (2em niveau)  </option>
                                <option value="MC">MC (3em  niveau)</option>
                                <option value="MD">MD (4em  niveau)</option>
                                <option value="ME">ME (5em  niveau)</option>
                            </select>
                        </div>
                        <input type="submit" value="METTRE A JOUR" className="formContenuReparationBtn" onClick={Reparation}/>
                    </form>
           </div>
             <div className="formContenuReparation" onClick={FctShowMenu}>
                  <i className="mdi mdi-chevron-double-left"/>
            </div>
          </div>
          <AnimatePresence>
            {
             showMenu== true && (<MenuReparation closeMenu={FctCloseMenu}/>)
            }
          </AnimatePresence>
          </div>
        </div>
        <ToastContainer></ToastContainer>
    </>)
}
export default ContenuRepare