import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import actionCable from 'actioncable'


function App() {
  
  const [inputText, setInputText ] = useState("")
  const CableApp = {}
  let consumer = actionCable.createConsumer('ws://localhost:3000/cable')
  

  function createSubscription() {
    register("ConversationsChannel")
    //register("TsChannel")
  }

  consumer.onMessage = function (event) {
    console.log(event.data);
  }

  const register = async (channel) => {
    console.log(channel)
    
    let response = consumer.subscriptions.create({
      channel: channel,
      conversation_id: "555"
    });
    console.log(response)
    
  }

  return (
    <div className="App">
      <h1>
        This is react
      </h1>
      
      <input 
        onChange={(e)=>{
          console.log(e.target.value)
          setInputText(e.target.value)
        }}
      />
        
      
      <button onClick={createSubscription}>
        Create WebSocket
      </button>
    </div>
  );
}

export default App;
