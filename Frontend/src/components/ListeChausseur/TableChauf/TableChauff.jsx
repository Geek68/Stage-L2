import './TableChauff.css'
import { motion } from "framer-motion"
import axios from 'axios'
import { useState,useEffect, useContext } from 'react'
import MyContext from '../MyContext'
import SearchVoit from '../../SearcVoit'
import Contextko from '../../Context'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const TableChauf = ()=>
{
    const [data,setData] =  useState([])
    const{displayed} = useContext(SearchVoit)
    const {setDisplayed} = useContext(SearchVoit)
    const [visible,setVisible]= useState(6)
     const [Active,setActive] = useState()
    const {setDonnee} = useContext(MyContext)
    const {setVariable} = useContext(Contextko)
    console.log(data)
 const HandleActive = (e,para)=>
   {
        setActive(e)
          axios.get(`http://localhost:8080/api/chauffeur/${para}`)
        .then(res=>{
           setVariable(res.data[0])
        })
   }
   
   const Isclicked =(param)=>
   {
        if(param === Active)
        {
            return"TableChauffligne"
        }
        else
        {
            return"TableChauffBody"
        }
   }
    useEffect (()=>{
        axios.get('http://localhost:8080/api/chauffeur')
        .then(res=>{
        setData(res.data)
        setDisplayed(res.data.slice(0,visible)) /// donnée à afficher
        })
    },[])
    // const changeDonne = (e)=>
    // {
    //         setDonnee(e)
    // }

 /// afficher la suite des données
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
      /// afficher l'antécedent des données
    return(<>
    <motion.div
         initial={{scale:0}}
        animate={{scale:1}}
        transition={{delay:0.3,duration:0.5}}
    >
        <table className="TableChaufParent">
            <thead className="TableChaufHeader">
                 <th>CIN</th>
                <th className='TVH1'>Nom</th>
                <th className='TVH3'>Tel</th>
                <th className='TVH2'>Adresse</th>
            </thead>
            <tbody>
                {
                    displayed.map((row,i)=>
                    <tr key={i} className={Isclicked(i)} onClick={()=>{HandleActive(i,row.cin);setDonnee(row)}}>
                        <td className='TVB1'>{row.cin}</td>
                        <td className='TVB2'>{row.nomchauffeur}</td>
                        <td className='TVB3'>{row.numtel}</td>
                        <td>{row.adresse}</td>
                    </tr>)
                }
            </tbody>
     </table>
     <div className="ChauffeurIcon">
            <div className="Prev">
                <i className="mdi mdi-chevron-double-left"  onClick={loadPrevious}/>
            </div>
            <div className="Next">
                <i className="mdi mdi-chevron-double-right" onClick={loadNext}/>
            </div>
    </div>
     <ToastContainer position='bottom-left'/>
    </motion.div>
    </>)
}
export default TableChauf