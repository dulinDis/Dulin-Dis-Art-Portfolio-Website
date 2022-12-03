import {ReactComponent as Sign} from '../../assets/dulin-dis-sign-v-grey.svg'
import HelmetMetaData from '../../components/helmet-meta-data/helmet-meta-data';
const HomePage = () => (
  <div className='home-page'>
    <HelmetMetaData title="Dulin Dís Art"/>

    <div className='sign-container'>
    <Sign className="sign"/>
  </div>
  
  </div>
);

export default HomePage;
