import React from 'react'
import Dracma from '../assets/images/DracmaSvg.svg'
import DracmaDV from '../assets/images/DracmaC.svg'
import FloatingLabelInput from '../components/UI/inputs/FloatingInputLabel'
import { validateEmail } from '../utils/validatorUtils'
import { useState } from 'react'


export default function AccessPage() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null); 
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('')
 

  function handleEmailBlur() {
    const errorMessage = validateEmail(email);
    setEmailError(errorMessage);
  }


  return (
    <div className='gridTemplate style-default col-span-12 h-screen gap-0'>
      <div className='col-span-12 flex '>
        <div className='w-1/2 flex flex-col gap-3 justify-center items-center'>
          <div className='w-100'>

            <div className='flex w-full justify-start gap-2 mb-3 flex-col'>
              <img src={DracmaDV} alt="" className='w-20 h-auto object-contain ' />
              <h1 className='title text-white-500'>Conecte-se</h1>
            </div>

            <div className='flex flex-col gap-6 mb-5'> {/* Aumentei o espaçamento */}
              <FloatingLabelInput
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur} // Adicionamos o evento onBlur
                error={emailError}       // Passamos o erro como prop
              />
              <FloatingLabelInput
                id="password"
                label="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>


            <div className='flex gap-3 items-center mb-3 '>
              <input type="checkbox" />
              <span className='subtitle'>Lembrar de mim</span>

            </div>

            <button className='bg-primary-600 hover:bg-primary-400 transition-all duration-200 p-2 w-full mb-3 cursor-pointer rounded'>Entrar</button>

            <div className='flex gap-2'>
              <span className='big-subtitle'>Não possui conta?</span>
              <span className='big-subtitle font-bold'>Cadastrar</span>
            </div>

            <span className='big-subtitle'>Esqueci a senha</span>
          </div>
        </div>

        <div className='w-3/6 bg-white-600 rounded-3xl'>
              <img src={Dracma} alt="" className='w-100 opacity-50 h-auto object-contain ' />

        </div>



      </div>


    </div>
  )
}
