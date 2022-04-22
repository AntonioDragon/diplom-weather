export interface GeocodingType {
  name: string
  local_names?: unknown
  lat: number
  lon: number
  country: string
  state: string
}

export interface GeocodingFavoriteType {
  id?: number
  name: string
  lat: number
  lon: number
  country: string
  state: string
}
