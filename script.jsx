class Tweets extends React.Component{
     render(){

         return(
             <div className="main">

                  <div className="shape"><h6 style={{color: 'grey'}}>{this.props.details.created_at}</h6>

                  <img src="https://pbs.twimg.com/profile_images/3482019714/1a4eedb7d18f0e534cd696ebaa551c6a_400x400.jpeg" className="image-cropper"/>

                  <p> <h3 style={{color: 'white'}}>{this.props.details.text}</h3>
                  </p>
                  <p style={{color: 'white'}}><span>Retweets: {this.props.details.retweet_count}  | </span><span>Liked: {this.props.details.favorite_count}</span></p>
                  </div>
             </div>
         );
     }
 }


 class Container extends React.Component{
     render(){

         let listTweets = this.props.items.map(items => {
             return <Tweets details={items}/>
         })
         return (
             <div className="wrapper">

                 <ul>
                     {listTweets}
                 </ul>
             </div>
         );
     }
 }
 ReactDOM.render(
     <Container items={tweets}/>,
     document.getElementById('root')
 );