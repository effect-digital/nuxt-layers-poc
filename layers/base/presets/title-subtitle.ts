import { tv } from 'tailwind-variants'

export const titleSubtitle = tv({
    slots: {
        root: '',
        brow: 'text-sm inline-block',
        title: 'text-3xl font-semibold'
    }
})

type Slots = typeof titleSubtitle.slots

export interface TitleSubtitleProps {
    brow?: string | null
    title?: string | null
    as?: HTMLHeadingElement | string
    ui?: Partial<Slots>
}

export type TitleSubtitleSlots = (typeof titleSubtitle)['slots']

export type TitleSubtitle = typeof titleSubtitle
