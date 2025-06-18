/**
 * Composable to retrieve the configuration for a specific layer section.
 *
 * @param section - The section of the layer configuration to retrieve.
 * @returns The configuration object for the specified section, or undefined if not found.
 */
export function useLayerConfig<T = unknown>(section: string): T | undefined {
    const appConfig = useAppConfig()
    const layer = appConfig.layer as unknown as Record<string, { config?: T }>
    return layer?.[section]?.config
}
