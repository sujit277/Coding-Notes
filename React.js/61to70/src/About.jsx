import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';

/* Simple Way */

/* const About = ({match}) =>
{
    return <h1>About {match.params.Name} Page</h1>;
}
export default About;
 */

// Using UseParams
/* const About = () =>{
    const {Name} = useParams();
    return <h1> Name is {Name}</h1>
} */
const About = () =>
{
    const location = useLocation();
    console.log(location.pathname);
    const history = useHistory();
    
    const {Name} = useParams();
    return(
    <>
    <h1>About {Name} Page</h1>;
    <button onClick={()=>history.goBack()}>Click Me</button>
    </>);
}
export default About;