import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        let passwordArray;
        if (passwords) {
            passwordArray = JSON.parse(passwords)
        }
    }, [])


    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("/public/icons/eye.png")) {
            ref.current.src = "/public/icons/eyecross.png"
            passwordRef.current.type = "text"

        }
        else {
            ref.current.src = "/public/icons/eye.png"
            passwordRef.current.type = "password"
        }
    }
    const savePassword = () => {
        console.log(form)
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log(passwordArray)

    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }
    const copyText = (text) => {
        alert("Copied to Clipboard" + text)
        navigator.clipboard.writeText(text)

    }
    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="mycontainer">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center italic'>Your Own Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full py-1 px-4' type="text" name="site" />
                    <div className='flex w-full justify-between gap-8'>
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full px-4 py-1' type="text" name="username" />
                        <div className='relative'>
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full px-4 py-1' type="password" name="password" />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="/public/icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit gap 4  border border-green-900'>
                        <lord-icon class="invert-icon"
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        ADD PASSWORD</button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>YOUR PASSWORDS</h2>
                    {passwordArray.length == 0 && <div>No Passwords to Show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className='bg-purple-800 text-white  '>
                            <tr>
                                <th className='py-2'>SITE</th>
                                <th className='py-2'>USERNAME</th>
                                <th className='py-2'>PASSWORD</th>
                            </tr>
                        </thead>
                        <tbody className='bg-purple-200'>
                            {passwordArray.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className=' py-2 border border-white text-center'>
                                            <div className='flex items-center justify-center'>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div></div>

                                        </td>
                                        <td className='py-2 border border-white text-center'>

                                            <div className='flex items-center justify-center'>
                                                <span>{item.username}</span>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div></div>
                                        </td>

                                        <td className='py-2 border border-white text-center flex items-center justify-center'>
                                            <div className='flex items-center justify-center'><span>{item.password}</span>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div></div>
                                        </td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>}
                </div>
            </div></div>
    )
}

export default Manager;