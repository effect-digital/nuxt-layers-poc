import { tv, type VariantProps } from 'tailwind-variants'
import { useAppConfig } from '#app'
import type { AppConfig } from 'nuxt/schema'

type ComponentKey = keyof AppConfig['layer']

/**
 * Composable to get component styles based on the app configuration.
 *
 * @param component - The component key to retrieve styles for.
 * @param preset - The Tailwind Variants preset to extend.
 * @param params - Optional parameters to pass to the styles function.
 * @returns The computed styles for the component.
 */
export function useComponentStyles<T extends ComponentKey>(
    component: T,
    preset: ReturnType<typeof tv>,
    params?: VariantProps<typeof tv>
) {
    const config = useAppConfig().layer?.[component] || {}

    return tv({
        extend: preset,
        ...config
    })({
        ...params
    })
}
