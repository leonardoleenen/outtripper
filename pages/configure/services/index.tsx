import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import Header from '../../../components/Header'
import Container from '../../../components/Container'
import PreviewPage from '../preview'
import BarMenu from '../../../components/Configure/Services/BarMenu'
import {
    ConfigureServiceSections,
    UIConfigureServiceStore
} from '../../../stores/configure.store'
import FormGeneralInfo from '../../../components/Configure/Services/FormGeneralInfo'
import FormPaymentMethods from '../../../components/Configure/Services/FormPaymentMethods'
import FormQuestionarie from '../../../components/Configure/Services/FormQuestionarie'
import FormTripInfo from '../../../components/Configure/Services/FormTripInfo'
import FormContact from '../../../components/Configure/Services/FormContact'
import { UIEVoucher } from '../../../stores/evoucher.store'

const ConfigureServices: NextPage = () => {
    const sectionSelected = UIConfigureServiceStore.useState(
        s => s.sectionSelected
    )

    const serviceSelected = UIConfigureServiceStore.useState(
        s => s.serviceSelected
    )

    useEffect(() => {
        console.log('Ejecutamos el mirror')
        UIEVoucher.update(s => {
            s.eVoucher = {
                ...s.eVoucher,
                service: {
                    ...s.eVoucher?.service,
                    name: serviceSelected?.name
                }
            }
        })
    }, [serviceSelected])

    return (
        <div className="p-4">
            <Header />
            <Container className="flex justify-between w-full p-8">
                <div className="flex w-3/4">
                    <BarMenu />
                    <main className="px-4 pt-8">
                        {sectionSelected ===
                            ConfigureServiceSections.CONTACT && <FormContact />}
                        {sectionSelected ===
                            ConfigureServiceSections.GENERAL_INFO && (
                            <FormGeneralInfo />
                        )}
                        {sectionSelected ===
                            ConfigureServiceSections.PAYMENT_METHOD && (
                            <FormPaymentMethods />
                        )}
                        {sectionSelected ===
                            ConfigureServiceSections.QUESTIONARIE && (
                            <FormQuestionarie />
                        )}
                        {sectionSelected ===
                            ConfigureServiceSections.TRIP_INFO && (
                            <FormTripInfo />
                        )}
                    </main>
                </div>
                <PreviewPage />
            </Container>
        </div>
    )
}

export default ConfigureServices
