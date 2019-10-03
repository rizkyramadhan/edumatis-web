export const mainColor = '#3b5998';
export const accentColor = '#3947e9';
export const disabledColor = '#CECECE';
export const titleColor = '#7b7b7b';
export const bgColor = '#ffffff';

export function getContrastFrom(hexcolor: string) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 158) ? 'black' : 'white';
}