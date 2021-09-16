import React from 'react'
import type { NextPage } from 'next'
import styles from './preview.module.scss'
import EVoucher from '../../../components/eVoucher'

const PreviewPage: NextPage = () => {
    return (
        <div className="mockup-phone mt-8">
            <div className="camera"></div>
            <div className="display">
                <div
                    className="artboard phone-1 artboard-demo"
                    style={{ height: '736px', width: '414px' }}
                >
                    <div className="w-full h-full pt-8 px-4">
                        <EVoucher />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewPage
