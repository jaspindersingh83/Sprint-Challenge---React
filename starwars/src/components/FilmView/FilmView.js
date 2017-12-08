import React,{Component} from 'react'
import './FilmView.css'

class FilmView extends Component{
    constructor(props){
        super(props);
        this.state={
            filmurl:props.filmurl,
            filmname:''
        }
        // console.log(this.state)
    }
    componentDidMount() {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        fetch(this.state.filmurl)
          .then(res => {
            return res.json();
          })
        
          .then(data => {
            this.setState({ filmname: data.title });
          })
          .catch(err => {
            throw new Error(err);
          });
          console.log(this.state)
      }

    render(){
        return (
            <div>{this.state.filmname},</div>
        )
    }

}

export default FilmView;