import React from 'react'
import DracmaDV from '../../assets/images/DracmaC.svg'
import Wallpapers from '../../assets/images/WallPaperS.svg'
import FloatingLabelInput from '../../components/UI/inputs/FloatingInputLabel'
import { validateEmail } from '../../utils/validatorUtils'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';


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
    <div className='gridTemplate style-default col-span-12 h-full gap-0'>
      <div className='col-span-12 flex '>
        <div className='w-1/2 flex flex-col gap-3 justify-center items-center'>
          <div className='w-100'>

            <div className='flex w-full justify-start gap-2 mb-3 flex-col'>
              <img src={DracmaDV} alt="" className='w-30 h-auto object-contain ' />
              <h1 className='title dark:text-gray-100 text-gray-700'>Conecte-se</h1>
            </div>

            <div className='flex flex-col gap-6 mb-5'> {/* Aumentei o espaçamento */}
              <FloatingLabelInput
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur} 
                error={emailError}       
              />

              <div className='relative w-full'>
                <FloatingLabelInput
                  id="password"
                  label="Senha"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}


                />

                <button type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

            </div>


            <div className='flex gap-2 items-center mb-3 '>
              <input type="checkbox" className='checkbox-style' />
              <span className='subtitle'>Lembrar de mim</span>

            </div>

            <button className='bg-primary-400 hover:bg-primary-500 subtitle text-gray-900 transition-all duration-200 p-2 w-full mb-3 cursor-pointer rounded'>Entrar</button>

            <div className='flex gap-2 items-center'>
              <span className='big-subtitle'>Não possui conta?</span>
              <span className='cursor-pointer big-subtitle font-bold'>Cadastrar</span>
            </div>

            <span className='cursor-pointer big-subtitle  big-subtitle'>Esqueci a senha</span>
          </div>
        </div>

        <div className='w-1/2'>
          <img src={Wallpapers} alt="" className='w-full opacity-100 h-auto object-contain ' />

        </div>



      </div>


    </div>
  )
}
