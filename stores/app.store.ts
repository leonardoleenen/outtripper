import { Store } from 'pullstate'

export enum Themes {
    DEFAULT = 'default',
    DARK = 'dark',
    LIGTH = 'light',
    FANTASY = 'fantasy',
    CORPORATE = 'corporate',
    LUXURY = 'luxury',
    DRACULA = 'dracula'
}

interface IUIAppStore {
    sectionSelected: Themes
}

export const UIAppStore = new Store<IUIAppStore>({
    sectionSelected: Themes.DEFAULT
})
