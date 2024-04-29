import './TableRepare.css'
import { motion } from 'framer-motion'
import {useEffect,useState,useContext} from'react'
import MyContext from '../../ListeChausseur/MyContext'
import Contextko from '../../Context'
import SearchVoit from '../../SearcVoit'
import axios from 'axios'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const TableRepare = ({Valeur})=>
{
    const [data,setData] =  useState([])
   const {displayed} = useContext(SearchVoit)
   const {setDisplayed} = useContext(SearchVoit)
    const [visible,setVisible]= useState(6)
    const [Active,setActive] = useState()
    const {setVariable} =  useContext(Contextko)
    // const []
    useEffect (()=>{
        axios.get('http://localhost:8080/api/vehicules/reparation')
        .then(res=>{
        setData(res.data)
        setDisplayed(res.data.slice(0,visible)) /// donnée à afficher
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
            return"TableRepareligne"
        }
        else
        {
            return"TableRepareBody"
        }
   }
   // afficher la suite des données
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
    const Evaluation =(param)=>
    {
        switch(param)
        {
            case "MA":
            {
                return"niveau1"
            }
             case "MB":
            {
                return"niveau2"
            }
             case "MC":
            {
                return"niveau3"
            }
             case "MD":
            {
                return"niveau4"
            }
             case "ME":
            {
                return"niveau5"
            }
        }
    }
  
 /// afficher la suite des données

   /// afficher l'antécedent des données
    return(<>
     <motion.table className="TableRepareParent"
         initial={{scale:0}}
            animate={{scale:1}}>
        <thead className="TableRepareHeader">
            <th className='TVH1'>P.Matriculaire</th>
            <th className='TVH2'>CENTRE JIRAMA</th>
            <th className='TVH3'>N° Demande</th>
            <th className='TVH4'>Date</th>
            <th>Niveau</th>
        </thead>
        <tbody>
            {
                displayed.map((row,i)=>
                <tr key={i} className={Isclicked(i)} onClick={()=>{HandleActive(i,row.matricule);setDonnee(row);Valeur(row)}}>
                    <td className='TVB1'>{row.plaque}</td>
                    <td className='TVB2'>{row.centre}</td>
                    <td className='TVB3'>{row.demande}</td>
                    <td>{`${( new Date(row.date)).getUTCDate()+1}/${( new Date(row.date)).getUTCMonth()+1}/${( new Date(row.date)).getUTCFullYear()}`}</td>
                    <td>{row.niveau}
                    <div className='niveauParent'>
                        <div className={Evaluation(row.niveau)}></div>
                    </div>
                    </td>
                </tr>)
            }
        </tbody>
         <div className="RepareDiv1">
              
              <div className="RepareIcon">
                <div className="Prev" onClick={loadPrevious}>
                  <i className="mdi mdi-chevron-double-left"/>
                </div>
                <div className="Next" onClick={loadNext}>
                  <i className="mdi mdi-chevron-double-right"/>
                </div>
              </div>
           </div>
             <ToastContainer />
     </motion.table>
    </>)
}
export default TableRepare