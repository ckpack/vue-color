declare module '@ckpack/vue-color' {
    import type { DefineComponent } from 'vue';
    import type { ColorInput, HSV, HSL, RGBA } from '@ctrl/tinycolor';

    interface Payload {
        a: number
        hex: string
        hex8: string
        hsl: HSL
        hsv: HSV
        oldHue: number
        rgba: RGBA
        source: 'rgba' | 'hsl' | 'hex' | 'hsv' | 'hsva'
    }

    interface Props {
        modelValue?: ColorInput
        'onUpdate:modelValue'?: (data: Payload) => void
    }

    interface Context {
        colorChange: Function;
        isValidHex: Function
        simpleCheckForValidColor: Function
        paletteUpperCase: Function
        isTransparent: Function
    }

    const Chrome: DefineComponent<Props & {
        disableAlpha?: boolean
        disableFields?: boolean
    }, Context>;

    const Compact: DefineComponent<Props & {
        palette?: ColorInput[]
    }, Context>;

    const Grayscale: DefineComponent<Props & {
        palette?: ColorInput[]
    }, Context>;

    const Material: DefineComponent<Props & {
        value?: 'horizontal' | 'vertical'
    }, Context>;

    const Photoshop: DefineComponent<Props & {
        head?: string
        disableFields?: boolean
        hasResetButton?: boolean
        acceptLabel?: string
        cancelLabel?: string
        resetLabel?: string
        newLabel?: string
        currentLabel?: string
    }, Context>;

    const Sketch: DefineComponent<Props & {
        presetColors?: ColorInput[]
        disableAlpha?: boolean
        disableFields?: boolean
    }, Context>;

    const Slider: DefineComponent<Props & {
        swatches?: string[] | { s: number, l: number }[]
    }, Context>;

    const Swatches: DefineComponent<Props & {
        palette?: ColorInput[]
    }, Context>;

    const Twitter: DefineComponent<Props & {
        width?: string | number
        defaultColors?: ColorInput[]
        triangle?: 'hide' | 'top-left' | 'top-right'
    }, Context>;
}