import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import logo from '../../../assets/Images/jiro-sy-rano-malagasy-logo.jpg'
import './HeaderChauff.css'
import { useContext } from 'react'
import SearchVoit from '../../SearcVoit';
import axios from 'axios';
const HeaderChauff =()=>{
   const {setDisplayed} = useContext(SearchVoit)
    const ChangeSearch= (e)=>
    {
        axios.post("http://localhost:8080/api/chauffeur/search",{sData:e.target.value})
        .then(res=>{setDisplayed(res.data.slice(0,6))})
        .catch(error=>{console.log(error)})
    }
return(<>
     <motion.div className="HeaderChauffParent" 
        initial={{scaleX:0}}
        animate={{scaleX:1,transformOrigin:'left'}}
        transition={{delay:0.3,duration:0.5}}
     >
        <form className="HeaderChauffForm">
            <div>
                <i className="mdi mdi-magnify"/>
                <input type="text"   onChange={ChangeSearch} placeholder="rechercher" className="Headersearch"/>
            </div>
        </form>
        <div className="HeaderChauffImg">
            <Link to="/formChauff"><button><i className="mdi mdi-plus-circle-outline"/></button></Link>
            <img src={logo} alt="logo" className="logo"/>
        </div>
     </motion.div>
</>)
}
export default HeaderChauff