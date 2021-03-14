

/* *****   useContext    ******* */
// import  React ,{useState,useContext} from "react"

// import { forwardRef } from "react";

// const AppContext = React.createContext({});

// const Messages = () => {
// 	const { username } = useContext(AppContext);
// 	return (
// 		<div className="messages">
//       		<p>1 message for {username}</p>
// 		</div>
// 	)
// }


// export default function  UserInfo()  {

//     return  <AppContext.Provider
//             value={{username:"zhangsan"}}
//             >
//                 <div>
//                     <Messages/>
//                 </div>
//             </AppContext.Provider>
//   }

/* ******* useReducer *********/

// import React, { useReducer } from "react"

// const myReducer = (state, action) => {
//     switch (action.type) {
//         case "countUp":
//              return {count: state.count + 1};
//         default:
//             return state;
//     }
// }

// export default function UserList() {
//     const [state, dispatch] = useReducer(myReducer, { count: 0 })
//     return (
//         <div>
//             <button onClick={() => dispatch({ type: "countUp" })}>点击</button>
//             <p>Count:{state.count}</p>
//         </div>
//     )
// }

/* ******* useRef *********/
// import React, {useEffect, useRef,useState } from 'react';

// export default function UserInfo(props){

//   const [val,setVal] = useState()
//   const InputRef = useRef();

//   const handleChange = (e)=>{
//       console.log(e.target.value)
//       console.log(InputRef.current.value)
//       setVal(InputRef.current.value)
//   }

//   return (
//       <>
//       <input type="text" ref={InputRef} onChange={handleChange}/>
//       value:{val}
//       </>
//   );
// }



/* *******useMemo ************** */
// import React, {useState ,useMemo} from 'react';

// function Button({ name, children }) {
//     function changeName(name) {
//       console.log('11')
//       return name + '改变name的方法'
//     }

//     const otherName = useMemo(()=>changeName(name),[name]) 
//     return (
//         <>
//           <div>{otherName}</div>
//           <div>{children}</div>
//         </>

//     )
//   }

// export default function UserInfo() {
//     const [name, setName] = useState('名称')
//     const [content,setContent] = useState('内容')
//     return (
//         <>
//           <button onClick={() => setName(new Date().getTime())}>name</button>
//           <button onClick={() => setContent(new Date().getTime())}>content</button>
//           <Button name={name}>{content}</Button>
//         </>
//     )
//   }



/* ******useCallback ******** */

// import React, { useState, memo, useCallback } from 'react'

// const Child = memo((props) => {
//   console.log(props);
//   return (
//     <div>
//       <input type="text" onChange={props.onChange}/>
//     </div>
//   )
// })

// export default function UserInfo  () {
//   const [count, setCount] = useState(0)
//   const [text, setText] = useState('')
//   const handleOnChange = useCallback((e) => {
//     setText(e.target.value)
//   },[])

// //   const handleOnChange = (e)=>{
// //       setText(e.target.value)
// //   }

//   return (
//     <div>
//       <div>count: {count}</div>
//       <div>text: {text}</div>
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>+1</button>
//       <Child onChange={handleOnChange} />
//     </div>
//   )
// }


/* ******   useHistory  ******** */

// import {useHistory } from 'react-router-dom'

//  const UserInfo = ()=>{
//     let history = useHistory();
 
//     const handleClick = ()=>{
//       history.push('/user/userList/123')
//     }
 
//     return(
//       <div onClick={handleClick}>跳转</div>
//     )
//   }
 
//  export default UserInfo


/********************   父传子 *********/
/*
*  props
*/

// import React, { useEffect, useRef, useState } from 'react';

//   const Child = (props)=>{
      
//     const {count} = props;
//     return(
//       <div>{count}</div>
//     )
//   }

//  const UserInfo = ()=>{
//   const [count,setCount] = useState(0) ;

//   const handlerChange = ()=>{
//     setCount(1)
//   }
//   return (
//     <div>
//       <Child count={count}/>
//       <button onClick={handlerChange}>click</button>
//     </div>
//   )
// }

// export default UserInfo ;

/*
*  useContext
*/

// import  React ,{useContext} from "react"

// const AppContext = React.createContext({});

// const Messages = () => {
// 	const { username } = useContext(AppContext);
// 	return (
// 		<div className="messages">
//       		<p>1 message for {username}</p>
// 		</div>
// 	)
// }


// export default function  UserInfo()  {

//     return  <AppContext.Provider
//             value={{username:"zhangsan"}}
//             >
//               <Messages/>
//             </AppContext.Provider>
//   }


/********  子组件向父组件传值    *********/

// import React, { useEffect, useRef, useState } from 'react';

// const Child = (props) => {
//   const { setCount } = props;
//   return (
//     <button onClick={() => setCount(1)}>click</button>
//   )
// }

// export default function UserInfo(props) {
//   const [count, setCount] = useState(0);

//   const hanldeCount = (val)=> setCount(val)
  
//   return (
//     <div>
//         <div>{count}</div>
//         <Child counts={count} setCount={hanldeCount} />
//     </div>
//   )
// }

/******** 父组件使用子组件的方法 *********/

// import React, { useRef,useState ,useImperativeHandle,forwardRef} from 'react';

// const Child =(props,ref)=>{
//     const [text,setText] = useState("");
//     // 该 hook 需要定义抛出给父组件的可以使用的 api 方法
//     // 相当于代理了子组件的方法
//     useImperativeHandle(ref,() => ({
//             setTextByParent(text=""){
//                 setText(text)
//             }
//         }))
//     return <p>text:{text}</p>
// }

// const ForwardChild = forwardRef(Child);

// export default function UserInfo(){
//     const ref = useRef();
//     return (
//         <>
//         <ForwardChild ref={ref}/>
//         <button
//         onClick={()=>{
//             ref.current && ref.current.setTextByParent("text updated by parent component")
//         }}
//         >
//           click
//         </button>
//         </>
//     )
// }
 import React from "react"

 const UserInfo = (props)=>{
   const {name} = props.match.params;
   return (
      <div>
        姓名：{name}
      </div>
   ) 
 }
 export default UserInfo ;
