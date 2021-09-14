import React from 'react'
import type { NextPage } from 'next'
import Header from '../../../components/Header'
import Container from '../../../components/Container'
import PreviewPage from '../preview'
import BarMenu from '../../../components/Configure/Services/BarMenu'

const ConfigureServices: NextPage = () => {
    return (
        <div>
            <Header />
            <Container className="flex justify-between w-full">
                <div className="flex w-3/4">
                    <BarMenu />
                    <main className="bg-red-300 w-full">maestro</main>
                </div>
                <PreviewPage />
            </Container>
        </div>
    )
}

export default ConfigureServices
