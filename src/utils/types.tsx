export interface ItemProps {
    img: string
    text: string
}

export interface CarouselItemProps {
    img: string
    title: string
    text: string[]
}

export interface BigItemProps {
    img: string
    title: string
    subtitle: string
    text1: string
    text2: string
    text3: string
    text4: string
    text5: string
}

export interface ModalProps {
    modal:boolean;
    setModal:(e:boolean) => void;
}