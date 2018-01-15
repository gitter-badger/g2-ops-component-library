const replacedKey = (item) => item.replace('./', '')

/*
Utility function to load images dynamically.
Takes as input a context.require object and returns the key value pairs for image paths
Usage context.require(imageFolderPath: string, searchSubdirectory : bool, regexToMatch: regex)
 */
const getImagesPath = (r) => {
  const test = r.keys().reduce((acc, curr) => {
    acc[replacedKey(curr)] = r(curr)
    return acc
  }, {})
  return test
}

export default getImagesPath
