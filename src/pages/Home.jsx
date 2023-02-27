import React from 'react'
import { MovieLineup } from '../components/MovieLineup'
import { TheFooter } from '../components/TheFooter'
import { BsFillPlayFill } from 'react-icons/bs'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { dataA, dataB, dataC } from '../components/MovieData'

export const Home = () => {
    return (
        <div className='bg-stone-900 text-white'>
            <div className='relative sm:hidden'>
                <video className='opacity-60' width="100%" autoPlay loop muted>
                    <source src="https://media.istockphoto.com/id/1394787914/video/dark-glass-wall-explosion.mp4?s=mp4-640x640-is&k=20&c=rmte6eNA1E8DB6mvnv4OzSOuKWqSv-t7K4fhBQrX5Xk=" type="video/mp4" />
                </video>
                <div className='absolute sm:top-44 md:top-1/2 lg:top-2/3 xl:top-2/3 left-8'>
                    <img className='w-2/4' src="https://occ-0-2794-2433.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABe78tNxuj1dKvIOA5NWkWgpgMmY5E1hdwwU9pmnsdVohmPrXNdPKNb2slx_eOSMu3NqNJ6YFNzcUE2txEm9UlDlK7bIexNHik5b_gHrKOXaQH2-zqxdzwILKWZFQeWh8oci4Dttx_1M3qTEf2iHF8r3a-SQzMJ1n-smcOcIRIG5IOqKXJJj7jA.png?r=871" alt="" />
                    <div className='mt-3'>
                        <button className='bg-white text-black pl-4 pr-4 pt-2 pb-2 mr-2 rounded-lg fw-semibold sm:w-32 md:w-32 lg:w-32'><BsFillPlayFill className='inline-block mr-1' style={{ fontSize: '36px' }} />Play</button>
                        <button className='bg-gray-600 text-white pl-4 pr-4 pt-2 pb-2 rounded-lg fw-semibold w-40'><IoIosInformationCircleOutline className='inline-block mr-1' style={{ fontSize: '36px' }} />More Info</button>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <br />
                <MovieLineup title='Continue watching for Shahzad' dataName={dataA} />
                <MovieLineup title='New Releases' dataName={dataB} />
                <MovieLineup title='Trending in Pakistan' dataName={dataC} />
                <MovieLineup title='Bingeworthy TV Dramas' dataName={dataA} />
                <MovieLineup title='Hindi Comedies' dataName={dataB} />
                <MovieLineup title='Action Hollywood' dataName={dataC} />
                <MovieLineup title='Mind Hunters' dataName={dataA} />
                <MovieLineup title='Horror Shows' dataName={dataB} />
                <MovieLineup title='Limited Series' dataName={dataC} />
            </div>
            <TheFooter />
            <br />
            <br />
        </div>
    )
}
