import React from 'react'
import type { NextPage } from 'next'
import styles from './preview.module.scss'

const PreviewPage: NextPage = () => {
    return (
        <div className={styles.iphoneX}>
            <i>Speaker</i>
            <b>Camera</b>
        </div>
    )
}

export default PreviewPage
