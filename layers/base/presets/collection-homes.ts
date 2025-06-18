import { tv } from 'tailwind-variants'
import type { ButtonProps } from '@nuxt/ui'

export const collectionHomes = tv({
    slots: {
        root: '3xl:py-32 relative py-20 xl:py-24',
        container: 'container space-y-10',
        header: 'flex justify-between items-end',
        body: '',
        carouselContainer: 'p-px',
        carouselItem: '3xl:basis-1/4 basis-1/3'
    }
})

type Slots = typeof collectionHomes.slots

export type CollectionHomesProps = {
    ui?: Partial<Slots>
}

export type CollectionHomesConfig = {
    brow: string
    title: string
    buttonLabel?: string
    buttonVariant?: ButtonProps['variant']
    buttonColor?: ButtonProps['color']
    buttonPath?: string
    card: {
        variant: string
        buttonLabel: string
        buttonVariant: ButtonProps['variant']
        buttonColor: ButtonProps['color']
        buttonPath: string
        allowFavourite: boolean
    }
}

export type CollectionHomes = typeof collectionHomes
