import { Store } from 'pullstate'

export enum EVoucherSections {
    CONTACT = 'CONTACT',
    TRIP_INFO = 'TRIP INFO',
    PAYMENT = 'PAYMENT METHOD',
    QUESTIONARIE = 'QUESTIONARIE'
}

interface IUIEVoucher {
    eVoucher: eVoucher | null
    emergencyPhone: string
    contactPhone: string
    operatorPhone: string
    email: string
    sectionSelected: EVoucherSections
}

export const UIEVoucher = new Store<IUIEVoucher>({
    eVoucher: null,
    emergencyPhone: '',
    contactPhone: '',
    operatorPhone: '',
    email: '',
    sectionSelected: EVoucherSections.CONTACT
})
