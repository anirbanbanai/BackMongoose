export type TshoesInterface = {
    name: string,
    price: number,
    brand: string,
    model: string,
    style: string,
    size: string,
    color: string,
    releaseDate: string,
    role: 'sell'| 'nosell',
    quantity: number
}