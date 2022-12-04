
import './App.css';
import ClickCounter from './Render Props/ClickCounter';
import HoverCounter from './Render Props/HoverCounter';
// import ClickCounter from './Render Props/ClickCounter';
import Counter from './Render Props/Counter';
// import HoverCounter from './Render Props/HoverCounter';
// import User from './Render Props/User';
// import ParentComponent from './Pure component demo/ParentComponent';
// import LifecycleMethods from './LifeCycleMethods';
// import EventBinding from './EventBinding';
// import IncreDecre from './IncreDecre';
// import SetState from './SetState';
// import ParentComponent from './Methods as Props/ParentComponent';
// import ParentComponentOne from './Methods as Props/ParentComponentOne';
// import UseRefs from './UseRefs';
// import BindEvents from './BindEvents';
// import EventHandlers from './EventHandlers';
// import Change from './Change';
// import Message from './Message';

// import Greetings from './Greetings';

function App() {
  return (
    <div className="App">
      {/* <Greetings name="Rutuja" lastName="Gaikwad" />
      <Greetings name="Ayesha" lastName="Shaikh"  update="Latest Series"/>
      <Greetings name="Sukriti" lastName="Sinha" /> */}
      {/* <Message/> */}
      {/* <Change/> */}
      {/* <EventHandlers/> */}
      {/* <BindEvents/> */}
      {/* <ParentComponent/> */}
      {/* <UseRefs/>  */}
      {/* <ParentComponentOne/> */}
      {/* <SetState/> */}
      {/* <IncreDecre/> */}
      {/* <EventBinding/> */}
      {/* <LifecycleMethods/> */}
      {/* <ParentComponent/> */}
      {/* <ClickCounter/> */}
      {/* <HoverCounter/> */}
      {/* <User render={(isLoggedIn) => isLoggedIn? 'Rootu' : 'Guest'}/> */}
      <Counter name={(count,incrementCount) => <ClickCounter count={count} incrementCount={incrementCount}/> }/>
      <Counter name={(count,incrementCount) => <HoverCounter count={count} incrementCount={incrementCount}/>}/>
      {/* we passed name as props to both the components and all the common code is written in counter component  */}
      {/* we can also pass it by removing the props name and simply passing the function as a children prop */}
      {/* add closing tag and pass the function as a children prop */}
      {/* in counter component write -- this.props.children(this.state.count,this.incrementCount)
      e.g. <Counter>{(count,incrementCount) => <ClickCounter count={count} incrementCount={incrementCount}/> } </Counter>
      <Counter>{(count,incrementCount) => <HoverCounter count={count} incrementCount={incrementCount}/>} </Counter> */}
      
    </div>
  );
}

export default App;
