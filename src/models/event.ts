export interface ExternalEvent {
    event: string;
    data?: any
}

export interface BluetoothAdvertiseInfo {
    addr: string,
    port: number,
    uuid: string
}