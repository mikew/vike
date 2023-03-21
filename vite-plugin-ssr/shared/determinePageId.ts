export { determinePageId }

import { slice, assert } from './utils'

// TODO/v1-release: remove
function determinePageId(filePath: string): string {
  const pageSuffix = '.page.'
  const pageId = slice(filePath.split(pageSuffix), 0, -1).join(pageSuffix)
  assert(!pageId.includes('\\'))
  return pageId
}