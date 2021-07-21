import React from 'lib_app/react';
import { Button } from 'lib_app/antd';
// import Button from 'component-app/Button'
// import Dialog from 'component-app/Dialog'
// import ToolTip from "component-app/ToolTip"
export default class App extends React.Component{
 
    render(){
      
      return (<div>
        <h1>Open Dev Tool And Focus On Network,checkout resources details</h1>
        <p>react、react-dom js files hosted on <strong>lib-app</strong></p>
        <h4>
          Buttons:
        </h4>
        <Button type="primary"> Pri BTN</Button>
        <Button danger>Warn BTN </Button>
        <h4>
          Dialog:
        </h4>
      </div>)
    }
  }