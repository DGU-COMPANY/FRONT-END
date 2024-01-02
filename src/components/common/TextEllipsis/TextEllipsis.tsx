import { cn } from '@/utils'
import { useState } from 'react'
import { TEXT_ELLIPSIS_OPTIONS } from '@/constants'

interface ITextEllipsis {
  content: string
  className?: string
  characterLength?: number
  ellipsisType?: string
}

export default function TextEllipsis({
  content,
  className,
  characterLength = 50,
  ellipsisType = TEXT_ELLIPSIS_OPTIONS.IS_SEE_MORE,
}: ITextEllipsis) {
  const [currentEllipsisType, setEllipsisType] = useState<string>(ellipsisType)
  const renderClassName = cn('overflow-hidden break-word', className)
  const truncatedContent =
    content.length > characterLength
      ? content.slice(0, characterLength) + '...  '
      : content

  const handleClickSeeMore = () => {
    setEllipsisType(TEXT_ELLIPSIS_OPTIONS.IS_HIDE_LESS)
  }

  const handleClickHideLess = () => {
    setEllipsisType(TEXT_ELLIPSIS_OPTIONS.IS_SEE_MORE)
  }

  return (
    <p className={renderClassName}>
      {currentEllipsisType === TEXT_ELLIPSIS_OPTIONS.IS_HIDE_LESS && (
        <>
          {content + ` `}
          <span
            onClick={handleClickHideLess}
            className="font-bold cursor-pointer underline"
          >
            Hide less
          </span>
        </>
      )}
      {currentEllipsisType === TEXT_ELLIPSIS_OPTIONS.IS_THREE_DOTS && (
        <>{truncatedContent}</>
      )}
      {currentEllipsisType === TEXT_ELLIPSIS_OPTIONS.IS_SEE_MORE && (
        <>
          {truncatedContent}
          {content && content.length > characterLength && (
            <span
              onClick={handleClickSeeMore}
              className="font-bold cursor-pointer underline"
            >
              see more
            </span>
          )}
        </>
      )}
    </p>
  )
}
