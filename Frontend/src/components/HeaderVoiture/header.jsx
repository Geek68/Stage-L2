import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import logo from '../../assets/Images/jiro-sy-rano-malagasy-logo.jpg'
import './header.css'
import { useContext } from 'react';
import SearchVoit from '../SearcVoit';
import axios from 'axios';
const Header =()=>{
    const {setDisplayed} = useContext(SearchVoit)
    const ChangeSearch= (e)=>
    {
        e.preventDefault()
        axios.post("http://localhost:8080/api/vehicules/search",{matricule:e.target.value})
        .then(res=>{setDisplayed(res.data.slice(0,6))})
        .catch(error=>{console.log(error)})
    }
return(<>
     <motion.div className="HeaderParent" 
        initial={{scaleX:0}}
        animate={{scaleX:1,transformOrigin:'left'}}
        transition={{delay:0.3,duration:0.5}}
     >
        <form className="HeaderForm">
            <div>
                <i className="mdi mdi-magnify"/>
                <input type="text"   onChange={ChangeSearch} placeholder="rechercher" className="Headersearch"/>
            </div>
        </form>
        <div className="HeaderImg">
            <Link to="/formVehicule"><button><i className="mdi mdi-plus-circle-outline"/></button></Link>
            <img src={logo} alt="logo" className="logo"/>
        </div>
     </motion.div>
</>)
}
export default Header