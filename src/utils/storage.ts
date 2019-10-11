class Storage {
  Key: string
  Val: any
  constructor(Key: string, Val: any) {
    this.Key = Key
    this.Val = Val
  }
  setItem(): any {
    window.localStorage.setItem(this.Key, this.Val)
  }
  getItem(): any {
    return window.localStorage.getItem(this.Key)
  }
  removeItem(): any {
    return window.localStorage.removeItem(this.Key)
  }
}
export default Storage