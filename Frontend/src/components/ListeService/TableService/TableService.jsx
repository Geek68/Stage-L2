import './TableService.css'
import { motion } from "framer-motion"
import axios from 'axios'
import {useEffect,useState,useContext} from 'react' 
import MyContext from '../../ListeChausseur/MyContext'
import Contextko from '../../Context'
import SearchVoit from '../../SearcVoit'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const TableService = ()=>
{
    const [data,setData] =  useState([])
    const {displayed} = useContext(SearchVoit)
    const {setDisplayed} = useContext(SearchVoit)
    const [visible,setVisible]= useState(6)
    const [Active,setActive] = useState()
    const {setVariable} = useContext(Contextko)
    useEffect (()=>{
         axios.get('http://localhost:8080/api/services')
        .then(res=>{
        setData(res.data)
        setDisplayed(res.data.slice(0,visible)) /// donnée à afficher
        })
    },[])
  
    useEffect (()=>{
       
    },[])
    const {setDonnee} = useContext(MyContext)
 const HandleActive = (e,para)=>
   {
        setActive(e) 
          axios.get(`http://localhost:8080/api/service/${para}`)
        .then(res=>{
           setVariable(res.data[0])
        })
   }
   const Isclicked =(param)=>
   {
        if(param===Active)
        {
            return"TableServiceligne"
        }
        else
        {
            return"TableServiceBody"
        }
   }

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
    <motion.div
         initial={{scale:0}}
        animate={{scale:1}}
        transition={{durtion:0.5,delay:1}}
    >
        <table className="TableServiceParent">
            <thead className="TableServiceHeader">
                <th className='TVH1'>NomService</th>
                <th className='TVH2'>Responsable</th>
            </thead>
            <tbody>
                {
                    displayed.map((row,i)=>
                    <tr key={i} className={Isclicked(i)} onClick={()=>{setDonnee(row);HandleActive(i,row.idservice)}}>
                        <td className='TVB1'>{row.nomservice}</td>
                        <td className='TVB2'>{row.responsable}</td>
                    </tr>)
                }
            </tbody>
     </table>
     <div className="ServiceIcon">
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
export default TableService