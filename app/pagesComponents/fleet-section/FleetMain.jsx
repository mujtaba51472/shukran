import Container from '@/app/components/common/Container'
import Heading from '@/app/components/common/Heading'
import React from 'react'

const FleetMain = () => {
  return (
    <div className='bg-[#000000] py-12'>
        <Container>
            <div>
                <Heading color='text-white'>
                    Fleet
                </Heading>
                <div className='flex items-center gap-4 text-white'>
                    <div>Home&nbsp;&nbsp;-</div>
                    <div>Fleet</div>
                </div>
            </div>
        </Container>

    </div>
  )
}

export default FleetMain