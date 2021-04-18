import React from 'react';
import './../css/Home.css';
import CircularProgress from '@material-ui/core/CircularProgress';

class Home extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         isLoadingWebsite: false
      }
   }

   componentDidMount(){
   }

   render() {
      return (
         <div className='home-container'>
            <div className="page-spinner-container" hidden={!this.state.isLoadingWebsite}>
               <CircularProgress></CircularProgress>
            </div>
            <div hidden={this.state.isLoadingWebsite}>
               Hello World
            </div>
         </div>
      );
   }
}

export default Home;