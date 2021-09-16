import { Store } from 'pullstate'

export enum ConfigureServiceSections {
    GENERAL_INFO = 'GENERAL INFO',
    TRIP_INFO = 'TRIP INFO',
    PAYMENT_METHOD = 'PAYMENT METHOD',
    QUESTIONARIE = 'QUESTIONARIE',
    CONTACT = 'CONTACT'
}

interface IUIConfigureServiceStore {
    sectionSelected: ConfigureServiceSections
    serviceSelected: TripServices | null
}

export const UIConfigureServiceStore = new Store<IUIConfigureServiceStore>({
    sectionSelected: ConfigureServiceSections.GENERAL_INFO,
    serviceSelected: null
})
