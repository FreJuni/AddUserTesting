import React,{useState,useRef} from 'react'

const Form = ({getUserInfo}) => {

    const nameRef = useRef(null);
    const liveRef = useRef(null);
    const emailRef = useRef(null);

    const handle = (e) => {
        e.preventDefault();

        if(nameRef.current.value.trim().length === 0 || liveRef.current.value.trim().length === 0 ||emailRef.current.value.trim().length === 0) {
            alert("Please enter all of the box.")
            return;
        }
        const data = {
            name : nameRef.current.value,
            live : liveRef.current.value,
            email : emailRef.current.value,
        }
        getUserInfo(data);

        nameRef.current.value = "";
        liveRef.current.value = "";
        emailRef.current.value = "";
    }


  return (
   <section className='cart-con'>
    <form onSubmit={handle}>
        <div  className='form-in'>
            <label htmlFor=''>Name</label>
            <input type='text' name='text' ref={nameRef} placeholder='Name'></input>
        </div>
        <div  className='form-in'>
            <label htmlFor=''>Live</label>
            <input type='text' name='text' ref={liveRef} placeholder='Live'></input>
        </div >
        <div  className='form-in'>
            <label htmlFor=''>Name</label>
            <input type='text' name='text' ref={emailRef} placeholder='Email'></input>
        </div>
        <button className='submit-btn'>Add Person</button>
    </form>
   </section>
  )
}

export default Form