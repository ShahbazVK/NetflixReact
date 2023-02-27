import React from 'react'

export const TheFooter = () => {
    return (
        <div className='mt-16'>
            <div className='flex justify-evenly items-center text-zinc-400 fst-italic' style={{ fontSize: "14px" }}>
                <ul className='flex flex-column justify-start'>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li style={{ marginBottom: '12px' }}>Legal Notices</li>
                    <li>&copy;1997-2023 Netflix Inc</li>
                </ul>
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                </ul>
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                </ul>
                <ul>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}
