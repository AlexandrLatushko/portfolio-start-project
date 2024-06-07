import { theme } from "./Theme"

type FontPropsType = {
    famili?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number

}
// тут мы создали компоненту для отзывчивого изменения шрифта (при уменьшении экрана девайса булет изменяться шрифт)
// тут мы прописываем в пропсах параметры шрифта и указываем максимальный и манимальны размер щрифта ( для больших и мал экранов)
export const font = (props:FontPropsType) => `
    font-famili: ${props.famili || "Poppins"};
    font-weight: ${props.weight || 400};
    color: ${props.color || theme.colors.font};
    line-height: ${props.lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${props.Fmax} - ${props.Fmin}) + ${props.Fmin}px);
`