import React from 'react'
// import { dataA } from './MovieData'
import Carousel from 'react-grid-carousel'

export const MovieLineup = (props) => {
    const { title } = props
    const { dataName } = props
    return (
        <div className='movie'>
            <h4>{title}</h4>
            <div className='mt-3'>
                <Carousel cols={5} rows={1} gap={5} loop showDots responsiveLayout={
                    [
                        {
                            breakpoint: 1400,
                            cols: 4,
                            rows: 1,
                            gap: 10,
                        },
                        {
                            breakpoint: 1100,
                            cols: 3,
                            rows: 1,
                            gap: 10,
                        }
                    ]
                }>
                    {
                        dataName.map((el, key) => {
                            return (
                                <Carousel.Item key={key}>
                                    <img src={el.link} className='h-36 lg:h-36 sm:h-96' />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}
