import './tableVoit.css'
import { motion } from 'framer-motion'
import {useEffect,useState,useContext} from'react'
import MyContext from '../ListeChausseur/MyContext'
import Contextko from '../Context'
import FctContex from '../FctContext'
import SearchVoit from '../SearcVoit'
import axios from 'axios'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const TableVoit = ()=>
{
    const [data,setData] =  useState([])
   const {displayed} = useContext(SearchVoit)
   const {setDisplayed} = useContext(SearchVoit)
    const [visible,setVisible]= useState(6)
    const [Active,setActive] = useState()
    const {setVariable} =  useContext(Contextko)
    const {setStats} = useContext(FctContex)

    // const []
    useEffect (()=>{
        axios.get('http://localhost:8080/api/vehicules')
        .then(res=>{
         setStats(res.data.statV)
        setData(res.data.allVehicules)
        setDisplayed(res.data.allVehicules.slice(0,visible)) /// donnée à afficher
        })
    },[])

const {setDonnee} = useContext(MyContext)
 const HandleActive = (e,para)=>
   {
        setActive(e)
          axios.get(`http://localhost:8080/api/vehicule/${para}`)
        .then(res=>{
           setVariable(res.data[0])
        })
   }
   
   const Isclicked =(param)=>
   {
        if(param===Active)
        {
            return"TableVoitligne"
        }
        else
        {
            return"TableVoitBody"
        }
   }
   // afficher la suite des données
    const loadNext= ()=>
    {
        const newVisible = visible+6;
        setDisplayed(data.slice(visible,newVisible))
        if(visible>data.length)
        {
            toast.info("Fin de la liste")
        }
        else
        {
            setVisible(newVisible)
        }          
    }

        console.log(visible)
 /// afficher la suite des données

   /// afficher l'antécedent des données
    const loadPrevious = ()=>
    {
        const newVisible = visible-6
        setDisplayed(data.slice(newVisible-6,newVisible))
        
        if(newVisible<=0)
        {
            toast.info("Fin de la liste")
        }
        else
        {
            setVisible(newVisible)
        }
    }
    return(<>
     <motion.table className="TableVoitParent"
         initial={{scale:0}}
            animate={{scale:1}}
            transition={{delay:0.3,duration:0.5}}
     >
        <thead className="TableVoitHeader">
            <th className='TVH1'>P.Matriculaire</th>
            <th className='TVH2'>Service</th>
            <th className='TVH3'>Chauffeur</th>
            <th className='TVH4'>Etat</th>
        </thead>
        <tbody>
            {
                displayed.map((row,i)=>
                <tr key={i} className={Isclicked(i)} onClick={()=>{HandleActive(i,row.matricule);setDonnee(row)}}>
                    <td className='TVB1'>{row.matricule}</td>
                    <td className='TVB2'>{row.cinchauffeur}</td>
                    <td className='TVB3'>{row.idservice}</td>
                    <td className='TVB4'>{row.statut}</td>
                </tr>)
            }
        </tbody>
         <div className="VoitureDiv1">
              
              <div className="VoitureIcon">
                <div className="Prev" onClick={loadPrevious}>
                  <i className="mdi mdi-chevron-double-left"/>
                </div>
                <div className="Next" onClick={loadNext}>
                  <i className="mdi mdi-chevron-double-right"/>
                </div>
              </div>
           </div>
           <ToastContainer position='bottom-left'/>
     </motion.table>
    </>)
}
export default TableVoit