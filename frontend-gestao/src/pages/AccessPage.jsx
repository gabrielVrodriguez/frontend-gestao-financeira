import React from 'react'
import Dracma from '../assets/images/DracmaSvg.svg'
import DracmaDV from '../assets/images/DracmaC.svg'

export default function AccessPage() {
  return (
    <div className='gridTemplate col-span-12 h-screen gap-0'>
      <div className='col-span-12 flex  p-10 bg-black-900'>
        <div className='w-1/2 flex flex-col gap-3 justify-center items-center'>
          <div className='p-3'>

            <div className='flex justify-start gap-2 mb-3 flex-col'>
              <img src={DracmaDV} alt="" className='w-20 h-auto object-contain ' />
              <h1 className='title'>Conecte-se</h1>
            </div>

            <div className='flex flex-col gap-2 mb-3'>
              <input
                type="text"
                placeholder='Email'
                className='border border-primary-600 text-white big-subtitle
                 placeholder-primary-600 placeholder:text-xs 
                 rounded px-4 py-3 focus:outline-none'
              />
            </div>

            <div className='flex flex-col gap-2 mb-3'>
              <input
                type="password"
                placeholder='Senha'
                className='border text-white placeholder-primary-600 placeholder:text-xs border-primary-600 rounded px-4 py-2 focus:outline-none'

              />
            </div>

            <div className='flex gap-3 items-center mb-3 '>
              <input type="checkbox" />
              <span className='subtitle'>Lembrar de mim</span>

            </div>

            <button className='bg-primary-600 p-2 w-full mb-3 cursor-pointer rounded'>Entrar</button>

            <div className='flex gap-2'>
              <span className='big-subtitle'>Não possui conta?</span>
              <span className='big-subtitle font-bold'>Cadastrar</span>
            </div>

            <span className='big-subtitle'>Esqueci a senha</span>
          </div>
        </div>

        <div className='w-1/2 bg-white-400 rounded'>

        </div>



      </div>


    </div>
  )
}
