import withCSS from '@zeit/next-css'
import withSass from '@zeit/next-sass'
import withPlugins from 'next-compose-plugins'
import withTypescript from '@zeit/next-typescript'
import withImages from 'next-images'

export default withPlugins([withTypescript, withCSS, withImages, withSass])
