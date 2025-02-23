// import logo from './logo.svg';
import { createContext } from 'react';
import './App.css';
import Accordion from './Accordion';
import IncrementDecrement from './IncrementDecrement';
import StopWatch from './StopWatch';
import Debouncing from './Debouncing';
// import InfiniteScroll from './InfiniteScroll';
import TodoList1 from './TodoList/TodoList1'
import TodoList from './TodoList/TodoList'
import NavBar from './NavBar/NavBar';
// import Carosual from './Carosual';
import Star from './Star';
import Boxes from './Boxes/Boxes';
// import Counter from './HOC/Counter';
import Hover from './HOC/Hover';
import TodoAPI from './TodoAPI';
import CreateMockAPI from './CreateMockAPI';
import Toast from './Toast/Toast';
import RadioButton from './RadioButton';
import ContextApi from './ContextApi';
import Calculater from './Calculater';
import TodoList2 from './TodoList/TodoList2';
import Progressbar from './Revision/Progressbar';
import StarRating from './Revision/StarRating';
import SnakeAndLadder from './SnackLadder/SnakeAndLadder';
import Layout from './Revision/Layout/Layout';
import DragAndDrop from './DragAndDrop';
// import Counters from './Revision/Counters';
import AutoScrollingTextBox from './Revision/AutoScrollingTextBox';
import AutoSaveForm from './Revision/AutoSaveForm';
import Counter from './Practice/Counter';
import Tab from './Practice/Tab';
import Accordian from './Practice/Accordian';
// import TicTocToe from './TicTocToe';
import Them, { ThemeProviderValue } from './Practice/Them';
import ApiPractice from './Practice/ApiPractice';
import MultiSelcet from './Practice/MultiSelcet';
import Carousal from './Practice/Carousal';
import InfiniteScroll from './Practice/InfiniteScroll';
import FormValidation from './Practice/FormValidation';
import JiraBoard from './Practice/JiraBoard';
import NestedObject from './NestedObject/NestedObject';
import AgeObjectManuplation from './NestedObject/AgeObjectManuplation';
import TicTocToe from './Practice/TicTocToe';
import SnackLadder from './Practice/SnackLadder';
import NestedCheckBox from './NestedCheckBox';
import Paginations from './Paginations';
import AutoComplete from './AutoComplete';
import MultiSelect from './MultiSelect';
import FileExplorer from './FileExplorer';
// import IntervalPactice from './Practice/IntervalPactice';

// const myInfo={
//   name:'Rahul',
//   surName:'Deshmukh'
// }

// function infoFunction(city,country,ii){
//   console.log("infoFunction",this.name +' '+  this.surName+' '+ city+' '+country+' '+ii)
// }

// const infoFun=infoFunction.bind(myInfo);

// infoFun('betul','india');

// Function.prototype.myBind=function(...args){
//   const obj=this;
//   const [arg0,...rest]=args
//   console.log(rest,'rest')
//   return function(...args1){
//     obj.apply(arg0,[...rest,...args1])
//   }
// }

// const infoFun1=infoFunction.myBind(myInfo,'betul','mai hu');
// infoFun1('india')

export const themeContext=createContext();
function App() {
  const accordionItems = [
    {
        title: 'Section 1',
        content: 'Content for section 1'
    },
    {
        title: 'Section 2',
        content: 'Content for section 2'
    },
    {
        title: 'Section 3',
        content: 'Content for section 3'
    }
];
  return (
    <ThemeProviderValue>
    {/* <div className="App"> */}
    {/* <TicTocToe/> */}
    {/* <NestedCheckBox/> */}
    <FileExplorer/>
    {/* <MultiSelect/> */}
    {/* <Paginations/> */}
    {/* <SnackLadder/> */}
    {/* <NestedObject/> */}
    {/* <AgeObjectManuplation/> */}
      {/* <Counter/> */}
      {/* <Counter/> */}
      {/* <TicTocToe/> */}

      {/* <Counters/> */}
      {/* <AutoScrollingTextBox/> */}
      {/* <AutoSaveForm/> */}
      {/* <SnakeAndLadder/> */}
      {/* <DragAndDrop/> */}
      {/* <Layout/> */}
      {/* <Hover/>
      <Counter/> */}
      {/* <Toast/> */}
      {/* <themeContext.Provider value='red'>  */}
     {/* <Accordion items={accordionItems}/>
     */}
     {/* <Calculater /> 
      */}
      {/* <Progressbar/> */}
      {/* <StarRating/> */}
     {/* <Boxes /> */}
     {/* <TodoList/> */}
    {/* <Debouncing/> */}
    {/* <InfiniteScroll/> */}
    {/* <NavBar/> */}
    {/* <Carosual/> */}
    
    {/* <main>
      <section id='home'>{"Home page"}</section>
      <section id='products'>{"Product Page"}</section>
      <section id='service'>{"Service page"}</section>
    </main> */}
    {/* <Counter/> */}
    {/* <TodoAPI/> */}
    {/* <CreateMockAPI/> */}
    {/* <Toast/> */}
    {/* <RadioButton/> */}
    {/* <TodoList/> */}
    {/* <ContextApi/> */}
    {/* </themeContext.Provider> */}
    {/* </div> */}
    </ThemeProviderValue>
  );
}

export default App;
