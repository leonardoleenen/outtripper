import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import PreviewPage from './preview'
import { firebaseManager } from '../../services/firebase.service'

const Page: NextPage = () => {
    useEffect(() => {
        console.log(process.env.FIREBASE_CONFIG)
        const db = firebaseManager.getDB()
    }, [])
    return (
        <div>
            <aside>Aside</aside>
            <main> asdfasd</main>

            <PreviewPage />
        </div>
    )
}

export default Page
