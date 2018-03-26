
export interface NgGunOptions {
  peers?: string[]
  s3?: GunS3Options
  file?: string
  uuid?: () => string
}

export interface GunS3Options {
  key: string
  secret: string
  bucket: string
}
