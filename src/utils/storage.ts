/**
 * @author luoxiapeng
 * @lastTime 2019/11/20
 */
"use script"
class Storage {
  Key: string
  Val: any
  constructor(Key: string, Val: any) {
    this.Key = Key
    this.Val = Val
  }
  public setItem(): any {
    window.localStorage.setItem(this.Key, this.Val)
  }
  public getItem(): any {
    return window.localStorage.getItem(this.Key)
  }
  public removeItem(): any {
    return window.localStorage.removeItem(this.Key)
  }
}
export default Storage