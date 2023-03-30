---
category: Browser
---

# useFileSystemAccess

创建和读写本地文件[FileSystemAccessAPI]( https://developer.mozilla.org/zh-CN/docs/Web/API/File_System_Access_API)

Create and read and write local files with [FileSystemAccessAPI]( https://developer.mozilla.org/zh-CN/docs/Web/API/File_System_Access_API)

## Usage

```ts
import { useFileSystemAccess } from '@vueuse/core'

const { isSupported, data, file, fileName, fileMIME, fileSize, fileLastModified, create, open, save, saveAs, updateData } = useFileSystemAccess()
```
