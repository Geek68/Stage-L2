import { useEffect, useState } from "react"
import './FormReparation.css'
import axios from "axios"
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Link } from "react-router-dom"
const FormReparation = ()=>
{
    
    const[jirama,setjirama] = useState('') 
    const [matricules,setmatricules] = useState([])
    const[Pmatriculaire,setPmatriculaire] = useState()
    const [Dommage,setDommage] = useState('')
    const [Materiel,setMateriel] = useState('')
    const [NumDemande,setNumDemmande] = useState('')
    const [NumFacture,setNumFacture] = useState('')
    const [Prix,setPrix] = useState()
    const [date,setDate] = useState()
    useEffect(()=>{
        axios.get('http://localhost:8080/api/vehicules/torepare')
        .then(res=>{
            setmatricules(res.data)
        
        })
    },[])
    console.log(Pmatriculaire)
    const ChangePmatricle = (e)=>
    {
        setPmatriculaire(e.target.value)
    }
    const Changejirama = (e)=>
    {
        setjirama(e.target.value)
        if (e.target.value === "MAHAJANGA")
        {
            setPmatriculaire(matricules[0].matricule)
        }
        else{
            setPmatriculaire(null)
        }
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
    const Initialiation = ()=>
    {
        setjirama('')
        setmatricules('')
        setPmatriculaire('')
        setDommage('')
        setMateriel('')
        setNumDemmande('')
        setNumFacture('')
        setPrix('')
        setDate('')
    }
    const Reparation= (e)=>
    {
        e.preventDefault()
        axios.post('http://localhost:8080/api/vehicules/add/reparation',{jirama,Pmatriculaire,Dommage,Materiel,NumDemande,NumFacture,Prix,date})
        .then(toast.success("Reparation en Marche"))
        .catch(error=>{alert(error)})
        Initialiation()
    }
    
    return(<>
      <div className="FormReparationRAD">
            <form className="FormReparationParent">
                <div className="FormReparationTitle">
                    <h1>Formulaire d'une réparation</h1>
                    <div className="FormReparationIcon">
                        <i className="mdi mdi-screwdriver"/>
                        <i className="mdi mdi-screwdriver"/>
                        <i className="mdi mdi-screwdriver"/>
                        <i className="mdi mdi-screwdriver"/>
                    </div>
                </div>
                <div className="FormReparationContenu">
                    <i className="mdi mdi-lightbulb-outline"/>
                    <input type="text" value={jirama} onChange={Changejirama}placeholder="CENTRE JIRAMA" className="formReparationInput"/>
                </div>
                <>
                {
                    jirama != "MAHAJANGA" ? 
                    (
                    <div className="FormReparationContenu">
                        <i className="mdi mdi-tag-text-outline"/>
                        <input type="text"  value={Pmatriculaire} onChange={ChangePmatricle} placeholder="P.Matriculaire" className="formReparationInput"/>
                     </div>
                    )
                    :
                    (
                    <div className="FormReparationContenu">
                       <select  className="formReparationInput" value={Pmatriculaire} onChange={ChangePmatricle} >
                           {
                            matricules.map((ligne,index)=>
                            <option key={index} value={ligne.matricule}>{ligne.matricule}</option>)
                           }
                       </select>
                    </div>
                    )
                }
                </>
                <div className="FormReparationContenu">
                    <i className="mdi mdi-sticker"/>
                    <textarea value={Dommage} onChange={ChangeDommage} placeholder="Dommage" className="formReparationTextarea"></textarea>
                </div>
                <div className="FormReparationContenu">
                    <i className="mdi mdi-steam"/>
                    <input type="text" value={Materiel} onChange={ChangeMateriel} placeholder="Materiel" className="formReparationInput"/>
                </div>
                <div className="FormReparationContenu">
                    <i className="mdi mdi-file-outline"/>
                    <input type="text" value={NumDemande} onChange={ChangeNumDemmande} placeholder="N° Demande" className="formReparationInput"/>
                </div>
                <div className="FormReparationContenu">
                    <i className="mdi mdi-file-outline"/>
                    <input type="text" value={NumFacture} onChange={ChangeNumFacture} placeholder="N° Facture Proformat" className="formReparationInput"/>
                </div>
                <div className="FormReparationContenu">
                    <i className="mdi mdi-cards-playing-outline"/>
                    <input type="number" value={Prix} onChange={ChangePrix} placeholder="Prix du Materiel" className="formReparationInput"/>
                </div>
                <div className="FormReparationContenu">
                    <input type="date" value={date} onChange={ChangeDate}  className="formReparationInput"/>
                </div>
                <div className="formReperationboutton">
                    <Link to="/contenuRepare"><input type="submit" value="REPARER" className="formReparationBtn" onClick={Reparation}/></Link>
                    <Link to="/voiture"><input type="submit" value="RETOUR" className="formReparationBtn2"/></Link>
                </div>
            </form>
            <ToastContainer/>
      </div>
    </>)
}
export default FormReparation