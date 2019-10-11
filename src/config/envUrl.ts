/**
 *  envConfigPageUrl
 */
function envConfigPageUrl(): string {
  let baseUrl: string = ''
  const env: any = process.env;
  if (env.NODE_ENV === 'development') {
    return baseUrl = ''
  } else if (env.NODE_ENV === 'production') {
    return baseUrl = ''
  } else if (env.NODE_ENV === 'test') {
    return baseUrl = ''
  } else {
    return baseUrl = ''
  }
}

export default envConfigPageUrl