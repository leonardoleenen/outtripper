import React from 'react'
import type { NextPage } from 'next'
import Header from '../../../components/Header'
import Container from '../../../components/Container'
import PreviewPage from '../preview'
import BarMenu from '../../../components/Configure/Services/BarMenu'

const ConfigureServices: NextPage = () => {
    return (
        <div className="p-4">
            <Header />
            <Container className="flex justify-between w-full">
                <div className="flex w-3/4">
                    <BarMenu />
                    <article className=" prose lg:prose-xl w-full pt-8 px-4">
                        <h1>
                            Garlic bread with cheese: What the science tells us
                        </h1>
                        <p>
                            For years parents have espoused the health benefits
                            of eating garlic bread with cheese to their
                            children, with the food earning such an iconic
                            status in our culture that kids will often dress up
                            as warm, cheesy loaf for Halloween.
                        </p>
                        <p>
                            But a recent study shows that the celebrated
                            appetizer may be linked to a series of rabies cases
                            springing up around the country.
                        </p>
                    </article>
                </div>
                <PreviewPage />
            </Container>
        </div>
    )
}

export default ConfigureServices
