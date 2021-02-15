// write code for Welcome component here
import React from "react"
function Welcome(props){
return (
  <>
    <h2>{"Welcome to Newton School."}</h2>
    <h1>{`Hey ! ${props.name}`}</h1>
  </>
)
}
export default Welcome;
