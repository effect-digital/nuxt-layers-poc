import { tv } from 'tailwind-variants'
import type { ButtonProps } from '@nuxt/ui'

export const singleUnitCard = tv({
    slots: {
        root: 'overflow-hidden bg-gray-100 rounded-sm relative',
        header: 'relative',
        imageWrapper: 'relative',
        image: 'rounded-lg w-full h-full object-cover',
        tag: 'inline-block',
        body: 'space-y-4',
        title: 'text-3xl font-semibold',
        subTitle: 'text-sm',
        details: '',
        footer: '',
        buttonWrapper: 'flex items-center gap-1 justify-between',
        dots: 'absolute left-3 bottom-3 gap-1 justify-start',
        dot: 'size-1.5',
        arrows: 'flex items-center justify-center absolute right-3 bottom-3 gap-1',
        prev: 'static translate-y-0 ',
        next: 'static translate-y-0'
    },
    variants: {
        variant: {
            list: {
                root: '',
                details: ''
            },
            inline: {
                root: '',
                details: 'flex flex-wrap items-center gap-2'
            }
        }
    }
})

type Slots = typeof singleUnitCard.slots

export interface SingleUnitCardProps {
    ui?: Partial<Slots>
    to: string
    tag?: string | null
    title?: string | null
    subTitle?: string | null
    images?: string[] | undefined
    variant?: 'list' | 'inline'
    bedrooms?: string | null
    furnished?: string | null
    bathrooms?: string | null
    price?: string | null
    sqft?: string | null
    level?: string | null
    buttonLabel?: string | null
    buttonVariant?: ButtonProps['variant']
    buttonColor?: ButtonProps['color']
}

export type SingleUnitCardConfig = {
    carousel?: {
        prev?: {
            color?: ButtonProps['color']
            variant?: ButtonProps['variant']
        }
        next?: {
            color?: ButtonProps['color']
            variant?: ButtonProps['variant']
        }
    }
}

export type SingleUnitCard = typeof singleUnitCard
