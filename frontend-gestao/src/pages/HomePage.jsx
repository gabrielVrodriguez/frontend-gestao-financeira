import React from 'react'
import CardWithMetric from '../components/layout/CardWithMetric';

export default function HomePage() {

  const hoje = new Date();
  const formattedDate = hoje.toLocaleDateString("pt-BR", {
    day: 'numeric',
    month: 'long',
    year: 'numeric'

  })


  return (
    <div className='gridTemplate gap-2'>
      <div className='col-span-12'>
        <div className='flex gap-1 flex-col'>
          <h1 className='title'>Dashboard</h1>
          <span className='subtitle'>{`Seu dashboard de vendas do mês - ${formattedDate}`}</span>
        </div>
      </div>

      <div className='gridTemplate col-span-12'>
        <div className='flex col-span-6 gap-2'>
          <CardWithMetric
            title={'Pedidos concluídos'}
            value={'10 pedidos'}
            className={'col-span-2'}
          />


          <CardWithMetric
            title={'Pedidos concluídos'}
            value={'10 pedidos'}
            className={'col-span-2'}

          />

          <CardWithMetric
            title={'Pedidos concluídos'}
            value={'10 pedidos'}
            className={'col-span-2'}
          />
        </div>

        <div className='flex  col-span-6 gap-2'>
          <CardWithMetric
            title={'Pedidos concluídos'}
            value={'10 pedidos'}
            className={'col-span-2'}
          />


          <CardWithMetric
            title={'Pedidos concluídos'}
            value={'10 pedidos'}
            className={'col-span-2'}

          />

          <CardWithMetric
            title={'Pedidos concluídos'}
            value={'10 pedidos'}
            className={'col-span-2'}
          />
        </div>
      </div>





    </div>
  )
}
