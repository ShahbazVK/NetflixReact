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
                    <source src="https://rr5---sn-npoe7nsk.googlevideo.com/videoplayback?expire=1677470513&ei=0db7Y-D5HMHnigS-9pqIBw&ip=216.131.79.147&id=o-ANyFUKxIYhsSEiME-1prCIUn4XiG_z1jWy-Kh4s0jNh7&itag=18&source=youtube&requiressl=yes&spc=H3gIhhGb9t1Ol4NcW7BfbOSnKn2UqT-rmFvuiM_yRJ40oF1k7Q&vprv=1&mime=video%2Fmp4&ns=8gKVfocIIO1GXQnww9mnY0UL&cnr=14&ratebypass=yes&dur=117.144&lmt=1652364600550993&fexp=24007246&c=WEB&txp=2218224&n=xNE31YVDx1kL_Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIga0zrY7Dwg5mO3R5j1IiUiEJaNQKddO9GUae4cY1BZUMCIEeFYiWcCiGcGCMWcmapoAQk3b2txJUJbcN7ZOFEJFZu&redirect_counter=1&cm2rm=sn-q4fes77e&req_id=cb54309103d3a3ee&cms_redirect=yes&cmsv=e&mh=t2&mip=2400:adc1:137:b900:b196:8ea0:6:db40&mm=34&mn=sn-npoe7nsk&ms=ltu&mt=1677448851&mv=m&mvi=5&pl=41&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgFZ_pZY7jN6wE1ZfVyXryCsOYn7I3Jx3xaeFV8svy2FACIQCHd2ovc0Xs7JDU2LlBsjLYilea71l39DuMn3YXzsh_HQ%3D%3D" type="video/mp4" />
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
