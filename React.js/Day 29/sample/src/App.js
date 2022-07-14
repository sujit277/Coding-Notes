import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[
        {"Id":101,"Name":"Sujit","Dept":"IT","Designation":"Full Stack Developer"},
        {"Id":102,"Name":"Aman","Dept":"IT","Designation":"Full Stack Developer"},
        {"Id":103,"Name":"Ashish","Dept":"IT","Designation":"Full Stack Developer"}
      ]
    }
  }
  render(){
    return(
      <div>
        <DisplayName/>
        <ul>
          {this.state.data.map((item)=><DisplayData data ={item} />)}
        </ul>
      </div>
    )
  }
}

class DisplayName extends React.Component{
  render(){
    return (
      <div>
        <h2>Employee Information Table</h2>
      </div>
    )
  }
}

class DisplayData extends React.Component{
  render(){
    return(
      <div>
        <table border="1">
          <tr>
            <td>{this.props.data.Id}</td>
            <td>{this.props.data.Name}</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default App;