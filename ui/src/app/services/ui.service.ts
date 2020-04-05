import { Injectable, EventEmitter } from '@angular/core'
import { DataService } from './data.service'
import { Observable, Subject } from 'rxjs'

export enum IconMode {
  both = 'both',
  dock = 'dock',
  statusBar = 'statusBar'
}
export type UIMode = 'window' | 'popover'
export type UISettings = {
  iconMode?: IconMode
}
export interface UIDimensions {
  height?: number
  width?: number
  heightDiff?: number
  widthDiff?: number
}
@Injectable({
  providedIn: 'root'
})
export class UIService extends DataService {
  route = `${this.route}/ui`
  dimensionsChanged = new Subject<UIDimensions>()

  async getWidth () {
    const { width } = await this.request({ method: 'GET', endpoint: '/width' })
    return width
  }

  setWidth (width: number) {
    return this.request({ method: 'POST', endpoint: '/width', data: { width } })
  }

  async getHeight () {
    const { height } = await this.request({ method: 'GET', endpoint: '/height' })
    return height
  }

  setHeight (height: number) {
    return this.request({ method: 'POST', endpoint: '/height', data: { height } })
  }

  hide () {
    return this.request({ method: 'GET', endpoint: '/hide' })
  }

  async getSettings (): Promise<UISettings> {
    const settings = await this.request({ method: 'GET', endpoint: '/settings' })
    return settings
  }

  setSettings (settings: UISettings) {
    return this.request({ method: 'POST', endpoint: '/settings', data: settings })
  }

  // async getMode () {
  //   const { mode } = await this.request({ method: 'GET', endpoint: '/mode' })
  //   return mode as UIMode
  // }

  // setMode (mode: UIMode) {
  //   return this.request({ method: 'POST', endpoint: '/mode', data: { mode } })
  // }
}