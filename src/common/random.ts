/**
 * @method randomColor 随机颜色
 */
export const randomColor = (): any => {
  let arrHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
    strHex = '0x',
    index
  for (let i = 0; i < 6; i++) {
    index = Math.round(Math.random() * 15)
    strHex += arrHex[index]
  }
  // eslint-disable-next-line no-eval
  return eval(strHex)
}